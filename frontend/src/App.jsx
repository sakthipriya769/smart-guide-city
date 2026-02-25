import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import TouristDashboard from './pages/TouristDashboard';
import PlacesPage from './pages/PlacesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import PlansPage from './pages/PlansPage';
import ReviewsPage from './pages/ReviewsPage';
import ReportsPage from './pages/ReportsPage';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ role, children }) => {
  const { user } = useAuth();
  if (!user || user.role !== role) return <Navigate to={role === 'admin' ? '/admin-login' : '/tourist-login'} replace />;
  return children;
};

const AppRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin-login" element={<LoginPage role="admin" />} />
      <Route path="/tourist-login" element={<LoginPage role="tourist" />} />
      <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
      <Route path="/tourist" element={<ProtectedRoute role="tourist"><TouristDashboard /></ProtectedRoute>} />
      <Route path="/places" element={<PlacesPage />} />
      <Route path="/facilities" element={<FacilitiesPage />} />
      <Route path="/plans" element={<PlansPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/reports" element={<ReportsPage />} />
    </Routes>
  </MainLayout>
);

const App = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);

export default App;
