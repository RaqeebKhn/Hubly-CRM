# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






Setup Instructions

1. Clone the Repository
    >git clone <your-repo-url>
    >cd Hubly

2. Backend Setup
    >cd Backend
    >npm install
    >Create a .env file in the Backend directory with your MongoDB URI and JWT secret:
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
    >Start the backend server:
    > npm start 

3. Frontend Setup
    >cd ../Frontend/vite-project
    >npm install
    >npm run dev
    >The frontend will be available at http://localhost:5173 (or as shown in your terminal).



Features Implemented.
> User Authentication: Signup and login with JWT-based authentication.
> Dashboard: Modern dashboard with sidebar navigation and ticket overview.
> Contact Centre: Manage and view support tickets.
> Analytics: Visualize key metrics (placeholder for analytics features).
> Chatbot: Integrated chatbot widget for user support.
> Team Management: View, add, and manage team members with a modal form.
> Settings: Edit user profile, including name, email, and password, with tooltips and validation.
> Responsive Design: Clean, modern UI with responsive layouts.
> Protected Routes: Only authenticated users can access dashboard features.






