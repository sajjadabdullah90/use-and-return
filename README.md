# Use & Return — Online Rental Marketplace

A full-stack rental marketplace built to make short-term access to everyday products more convenient. Instead of buying an item for occasional use, users can explore rental products, manage a cart, and review rental-duration pricing.

> **Project status:** Academic / portfolio project. Some checkout and backend flows are currently demo-level and should not be treated as a production-ready rental service.

## Features

- **Product catalogue** with electronics and sports/outdoor categories.
- **Product search** using a query parameter to filter products by name.
- **Shopping cart** with quantity increment/decrement and item removal when quantity reaches zero.
- **Rental-duration pricing** based on selected receive and return dates.
- **Account UI** for sign-up, login, and password-recovery screens.
- **Contact page**, shared navigation, and footer.
- **Responsive UI** built with reusable React components.
- **REST API foundation** using Express and MongoDB/Mongoose for user-related routes.

## Tech Stack

### Frontend
- **React 19** — component-based UI
- **Vite 6** — development server and production build
- **React Router 7** — client-side navigation
- **Tailwind CSS 4** with the Tailwind Vite plugin — utility-first styling
- **Axios** — HTTP requests to the API
- **React Hot Toast** — toast notifications

### Backend
- **Node.js** — JavaScript runtime
- **Express 5** — HTTP server and API routes
- **MongoDB** — document database
- **Mongoose 8** — MongoDB object modelling
- **JWT (jsonwebtoken)** — token library dependency
- **bcryptjs** — password-hashing dependency
- **dotenv** — environment-variable configuration dependency
- **CORS** — cross-origin request handling

### Development Tools
- ESLint
- Nodemon
- Git and GitHub

## Project Structure

```text
.
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── products/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── backend/
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── server.js
    └── package.json
```

## Product Categories

The current catalogue includes:
- **Electronics:** camera, projector, drone, PS5, and VR headset.
- **Sports & Outdoors:** camping bag, snowboard, kayak, surfboard, and bicycle.

## Getting Started

### Requirements
- Node.js and npm
- A MongoDB database for the backend

### 1. Clone the repository

```bash
git clone https://github.com/sajjadabdullah90/use-and-return.git
cd use-and-return
```

If the repository has not yet been renamed, replace the clone URL and directory name with the current `WSAT` repository name.

### 2. Install frontend dependencies

```bash
cd frontend
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

### 3. Install backend dependencies

Open a second terminal:

```bash
cd backend
npm install
npm run dev
```

The backend currently listens on port `5000`.

> **Configuration note:** Before running the backend, configure the MongoDB connection through an environment variable (for example, `MONGODB_URI`) rather than storing database credentials in source code. The current backend file needs to be updated to read that variable.

## Important Notes

This repository's code is still a work in progress:
- The current checkout handler displays a demo confirmation; it does not complete a full order workflow.
- The order API call shown in the code is not backed by a matching order route/model in the current backend.
- Password hashing and token-based authentication are not fully implemented, despite related dependencies being present.
- Do not use real customer data or deploy this code as-is until authentication, validation, error handling, and secrets management have been reviewed.

## Future Improvements

- Move all database URLs and secrets to environment variables and rotate any credentials that were previously committed.
- Hash passwords with bcrypt and implement secure, validated authentication.
- Add product, rental, and order models with complete API endpoints.
- Connect checkout to a real order flow and persist cart/order data.
- Add automated tests and deployment configuration.

## Author

**Syed Abdullah**

- GitHub: [@sajjadabdullah90](https://github.com/sajjadabdullah90)
- Repository: [Use & Return — Online Rental Marketplace](https://github.com/sajjadabdullah90/use-and-return)
