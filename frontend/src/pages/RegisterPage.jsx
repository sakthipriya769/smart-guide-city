const RegisterPage = () => (
  <form className="auth-form">
    <h2>Tourist Registration</h2>
    <label>Full Name<input type="text" placeholder="Your name" /></label>
    <label>Email<input type="email" placeholder="you@example.com" /></label>
    <label>Password<input type="password" placeholder="Create strong password" /></label>
    <button className="btn" type="button">Create Account</button>
  </form>
);

export default RegisterPage;
