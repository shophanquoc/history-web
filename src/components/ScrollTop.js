import { useEffect, useState } from "react";

export default function ScrollTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShow(window.scrollY > 200);
        });
    }, []);

    return show && ( < button onClick = {
            () => window.scrollTo({ top: 0, behavior: "smooth" }) }
        style = {
            {
                position: "fixed",
                bottom: 20,
                right: 20,
                padding: 12,
                borderRadius: "50%",
                background: "#d50000",
                color: "#fff",
                border: "none",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }
        } >
        ↑
        <
        /button>
    );
}