import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Admin() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleAdd = async() => {
        await addDoc(collection(db, "articles"), {
            title,
            content,
            createdAt: new Date()
        });
        alert("Đã thêm bài");
    };

    return ( <
        div >
        <
        h2 > Admin < /h2>

        <
        input placeholder = "Tiêu đề"
        onChange = { e => setTitle(e.target.value) }
        /> <
        textarea placeholder = "Nội dung"
        onChange = { e => setContent(e.target.value) }
        />

        <
        button onClick = { handleAdd } > Thêm bài < /button> < /
        div >
    );
}