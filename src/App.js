import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import UpdatePage from "./pages/UpdatePage";
import UserPage from "./pages/UserPage";

function App() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // default value comes from localStorage

    return (
        <main>
            <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/users/:id" element={<UserPage isAuth={isAuth} />} />
                <Route path="/update/:id" element={<UpdatePage />} />
                <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
}

export default App;
