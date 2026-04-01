import { useState } from "react";
import Sidebar from "./Sidebar";
import LoginModal from "./LoginModal";

export default function Header({ setKeyword }) {
    const [open, setOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return ( <
        >
        <
        Sidebar open = { open }
        setOpen = { setOpen }
        onLoginClick = {
            () => setShowLogin(true) }
        />

        <
        div style = {
            {
                padding: 15,
                background: "#fff",
                position: "sticky",
                top: 0,
                zIndex: 100
            }
        } >

        <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between"
            }
        } >
        <
        button onClick = {
            () => setOpen(true) } > ☰ < /button>

        <
        b > Lữ đoàn 604 < /b>

        <
        button onClick = {
            () => setShowSearch(!showSearch) } > 🔍
        <
        /button> <
        /div>

        {
            showSearch && ( <
                input placeholder = "Tìm kiếm..."
                onChange = {
                    (e) => setKeyword(e.target.value) }
                style = {
                    { width: "100%", marginTop: 10 } }
                />
            )
        } <
        /div>

        <
        LoginModal open = { showLogin }
        setOpen = { setShowLogin }
        onLogin = {
            () => window.location.href = "/admin" }
        /> <
        />
    );
}