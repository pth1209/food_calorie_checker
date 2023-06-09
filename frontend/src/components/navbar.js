import React from "react"
import { Link, useNavigate } from "react-router-dom";
import {useCookies} from "react-cookie";

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"])
    const navigate = useNavigate()

    const logout = () => {
        setCookies("access_token", "")
        window.localStorage.clear()
        navigate("/auth")
    }
    return (
        <div className = "Navbar">
            <Link to = "/">Home</Link>
            <Link to = "/create-recipe">Create Recipe</Link>
            <Link to = "/saved-recipe">Saved Recipe</Link>
            <Link to = "/enter-calorie">Log Calories</Link>
            <Link to = "/calorie-list">Calories</Link>
            {!cookies.access_token ? (
                <Link to = "/auth">Login/Register</Link>
            ) : (
                <button onClick = {logout}>Logout</button>
            )}
            
        </div>
    )
}