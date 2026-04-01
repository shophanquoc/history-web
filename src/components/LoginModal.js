export default function LoginModal({ open, setOpen, onLogin }) {
    if (!open) return null;

    return ( <
        div className = "overlay" >
        <
        div style = {
            {
                background: "#fff",
                padding: 20,
                margin: "100px auto",
                width: 300,
                borderRadius: 10
            }
        } >
        <
        h3 > Đăng nhập Admin < /h3>

        <
        input placeholder = "Email"
        style = {
            { width: "100%", marginBottom: 10 } }
        /> <
        input placeholder = "Password"
        type = "password"
        style = {
            { width: "100%" } }
        />

        <
        button onClick = { onLogin } > Login < /button> <
        button onClick = {
            () => setOpen(false) } > Đóng < /button> <
        /div> <
        /div>
    );
}