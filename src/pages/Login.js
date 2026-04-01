import { useState } from "react";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async() => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Đăng nhập thành công");
            window.location.href = "/admin";
        } catch (err) {
            alert("Sai tài khoản");
        }
    };

    return ( <
        div >
        <
        h2 > Admin Login < /h2> <
        input placeholder = "Email"
        onChange = { e => setEmail(e.target.value) }
        /> <
        input placeholder = "Password"
        type = "password"
        onChange = { e => setPassword(e.target.value) }
        /> <
        button onClick = { handleLogin } > Login < /button> <
        /div>
    );
}