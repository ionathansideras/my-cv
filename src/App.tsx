// Import necessary components and hooks from react-router-dom
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Import your components
import LandingPage from "./components/landingPage/LandingPage";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Creation from "./components/creation/Creation";
import NotFound from "./components/NotFound";

// Import the languages array
import { languages } from "./i18n.ts";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Map over the languages array to create routes for each
                    language */}
                    {languages.map((lang) => (
                        // The path is defined dynamically based on the language
                        <Route key={lang} path={`/${lang}`}>
                            {/* The index route renders the LandingPage component */}
                            <Route index element={<LandingPage />} />
                            {/* Define the routes for signIn, signUp, dashboard,
                            and creation */}
                            <Route path="signIn" element={<SignIn />} />
                            <Route path="signUp" element={<SignUp />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="creation" element={<Creation />} />
                        </Route>
                    ))}
                    {/* If the path is "/", redirect to "/en" */}
                    <Route path="/" element={<Navigate replace to="/en" />} />
                    {/* The "*" path is a catch-all route that renders the
                    NotFound component */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

// Export the App component as the default export
export default App;
