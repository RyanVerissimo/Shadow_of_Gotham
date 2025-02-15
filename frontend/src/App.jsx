import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { Login } from "./pages/login";
import { ManageItem } from "./pages/manageItems";
import ManageUsers from "./pages/manageUsers";
import { CamerasCity } from "./pages/camerasCity";
import { Unauthorized } from "./pages/unauthorized";

const PrivateRoute = ({ element, allowedRoles }) => {
    const userRole = localStorage.getItem("role") || "";
    const token = localStorage.getItem("token") || null;

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/unauthorized" />;
    }

    return element;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/manageItem" element={<PrivateRoute element={<ManageItem />} allowedRoles={["admin", "manager"]} />} />
                <Route path="/manageUsers" element={<PrivateRoute element={<ManageUsers />} allowedRoles={["admin"]} />} />
                <Route path="/camerasCity" element={<PrivateRoute element={<CamerasCity />} allowedRoles={["admin", "manager", "employee"]} />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
