import React from "react";
import { authStore } from "../../stores/auth";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
    pages: Pages
}

const Navbar: React.FC<NavbarProps> = ({ pages }) => {
    const navigate = useNavigate();

    const onLogout = () => {
        authStore.logOut();
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
            <a className="navbar-brand mx-4" href={authStore.isLogged() ? "/home" : "/"}>NeighbourConnect</a>
            {authStore.isLogged() ? (
                <ul className="navbar-nav mx-4">
                    {Object.values(pages).map(page => {
                        if (page.navbar)
                            return (
                                <li key={page.url} className="nav-item">
                                    <a className="nav-link" href={page.url}>{page.name}</a>
                                </li>
                            )
                    })}
                    <li className="nav-item">
                        <button className="nav-link" onClick={onLogout}>Logout ({authStore.getUsername()})</button>
                    </li>
                </ul>
            ) : (
                ""
            )}
        </nav>
    )
}

export default Navbar;
