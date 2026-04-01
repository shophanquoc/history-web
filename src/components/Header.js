import { useState } from "react";

export default function Header() {
    const [dark, setDark] = useState(false);

    return ( <
        div style = {
            {
                display: "flex",
                justifyContent: "space-between",
                padding: "15px 20px",
                background: "#fff",
                borderBottom: "1px solid #eee"
            }
        } >
        <
        div style = {
            { fontWeight: "bold" } } > 🛡️LỮ ĐOÀN 604 <
        /div>

        <
        div >
        <
        button onClick = {
            () => setDark(!dark) } > 🌙
        <
        /button> <
        /div> <
        /div>
    );
}