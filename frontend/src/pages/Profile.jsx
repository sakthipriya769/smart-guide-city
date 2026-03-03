import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import "./Profile.css";

function Profile() {
  // 🔥 Load profile from localStorage
  const getStoredProfile = () => {
    const saved = localStorage.getItem("profileData");
    return saved
      ? JSON.parse(saved)
      : {
          name: "John Doe",
          email: "john@example.com",
          phone: "9876543210",
          city: "Chennai",
        };
  };

  const [profile, setProfile] = useState(getStoredProfile);
  const [isEditing, setIsEditing] = useState(false);

  const [croppedImage, setCroppedImage] = useState(
    localStorage.getItem("profileImage") || null
  );

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const createImage = (url) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = (error) => reject(error);
      img.src = url;
    });

  const getCroppedImg = async () => {
    if (!croppedAreaPixels) return;

    const img = await createImage(image);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    return new Promise((resolve) => {
      canvas.toBlob((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
      }, "image/jpeg");
    });
  };

  const handleImageSave = async () => {
    const cropped = await getCroppedImg();
    if (cropped) {
      setCroppedImage(cropped);
      localStorage.setItem("profileImage", cropped);
      setImage(null);
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(profile));
    setIsEditing(false);
    alert("Profile Saved Successfully ✅");
  };

  const handleReset = () => {
    localStorage.removeItem("profileData");
    localStorage.removeItem("profileImage");
    window.location.reload();
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-left">
          <img
            src={
              croppedImage ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
            className="profile-img"
          />

          {/* 🔥 Professional Upload Button */}
          <label className="upload-btn">
            Change Photo
            <input
              type="file"
              accept="image/*"
              onChange={onFileChange}
              hidden
            />
          </label>
        </div>

        <div className="profile-right">
          {isEditing ? (
            <>
              <input name="name" value={profile.name} onChange={handleChange} />
              <input name="email" value={profile.email} onChange={handleChange} />
              <input name="phone" value={profile.phone} onChange={handleChange} />
              <input name="city" value={profile.city} onChange={handleChange} />

              <div className="btn-group">
                <button className="save-btn" onClick={handleSave}>
                  Save
                </button>
                <button className="reset-btn" onClick={handleReset}>
                  Reset All
                </button>
              </div>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <p><strong>City:</strong> {profile.city}</p>

              <button
                className="edit-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      {image && (
        <div className="crop-modal">
          <div className="crop-box">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              cropShape="round"
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />

            <div className="crop-controls">
              <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                onChange={(e) => setZoom(Number(e.target.value))}
              />

              <button className="save-btn" onClick={handleImageSave}>
                Save Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;