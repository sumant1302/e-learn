import { useNavigate } from "react-router-dom";
export const logout = ({ isLoggedIn, authUser, setIsLoggedIn, setAuthUser }) => {
    if (isLoggedIn) {
        setIsLoggedIn(false);
        setAuthUser(null);
    }
} 