# SMART GUIDE CITY – Web Platform for Tourists

Professional full-stack project scaffold with:
- **Frontend**: React.js + Vite (responsive UI for guest, tourist, and admin modules)
- **Backend**: Node.js + Express.js API with role-based access control
- **Database**: MySQL schema for users, places, facilities, travel plans, and reviews

## Features Implemented
- Separate **Admin Login** and **Tourist Login** pages
- Role-based route protection for admin and tourist dashboards
- Core modules/pages:
  - Home
  - Authentication (login + registration UI)
  - Tourist Places Management
  - City Facilities & Utilities
  - Travel Planning
  - Reviews & Ratings
  - Reports
  - Admin Management dashboard

## Project Structure
- `backend/` Express API + MySQL schema
- `frontend/` React application with responsive UI

## Run Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Run Frontend
```bash
cd frontend
npm install
npm run dev
```

## Database Setup
Run `backend/schema.sql` in MySQL to create required tables.

## API Endpoints (sample)
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/places`
- `POST /api/places` (admin only)
- `GET /api/facilities`
- `GET /api/plans/my` (tourist only)
- `POST /api/plans` (tourist only)
- `GET /api/reviews`
- `POST /api/reviews` (tourist only)
- `GET /api/admin/report` (admin only)
