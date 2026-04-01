import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ open, setOpen, onLoginClick = () => {} }) {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
        setOpen(false);
    };

    return ( <
        >
        { /* OVERLAY */ } {
            open && ( <
                div className = "overlay"
                onClick = {
                    () => setOpen(false)
                }
                />
            )
        }

        { /* SIDEBAR */ } <
        div style = {
            {
                position: "fixed",
                top: 0,
                left: 0,
                width: 260,
                height: "100%",
                background: "#fff",
                zIndex: 1000,
                padding: 20,
                boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
                transform: open ? "translateX(0)" : "translateX(-100%)",
                transition: "transform 0.3s ease"
            }
        } > { /* HEADER SIDEBAR */ } <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }
        } >
        <
        b > Menu < /b>

        { /* NÚT ĐÓNG */ } <
        button onClick = {
            () => setOpen(false)
        } > ✕ < /button> < /
        div >

        <
        hr / >

        { /* MENU */ } <
        p onClick = { goHome }
        style = {
            { padding: "10px 0", cursor: "pointer" }
        } > 🏠Trang chủ <
        /p>

        <
        p style = {
            { padding: "10px 0" }
        } > 📜Lịch sử <
        /p>

        <
        p style = {
            { padding: "10px 0" }
        } > ⭐Sự kiện <
        /p>

        <
        hr / >

        <
        p onClick = {
            () => {
                setOpen(false);
                onLoginClick();
            }
        } > 🔐Đăng nhập Admin <
        /p> < /
        div > <
        />
    );
}