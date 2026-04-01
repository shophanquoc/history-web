import "../styles.css";
export default function Sidebar({ open, setOpen, onLoginClick }) {
    return ( <
        >
        {
            open && ( <
                div className = "overlay"
                onClick = {
                    () => setOpen(false)
                }
                />
            )
        }

        <
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
        } >
        <
        h3 > 📂Menu < /h3>

        <
        p style = {
            { padding: "10px 0" }
        } > 🏠Trang chủ < /p> <
        p style = {
            { padding: "10px 0" }
        } > 📜Lịch sử < /p> <
        p style = {
            { padding: "10px 0" }
        } > ⭐Sự kiện < /p>

        <
        hr / >


        <
        p style = {
            { padding: "10px 0", cursor: "pointer" }
        }
        onClick = { onLoginClick } > 🔐Admin Login < /p>    < /
        div > < / >
    );
}