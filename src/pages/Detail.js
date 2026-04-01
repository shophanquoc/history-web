import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const related = [
        { id: 1, title: "Chiến công 1979" },
        { id: 2, title: "Phát triển hiện đại" }
    ];

    return ( <
        div >

        { /* GIỮ HEADER + HERO */ } <
        Header / >
        <
        Hero / >

        { /* NỘI DUNG */ } <
        div style = {
            { padding: 15 }
        } >

        <
        h2 > Bài viết { id } < /h2>

        <
        p style = {
            { color: "#777", fontSize: 13 }
        } > 📅01 / 04 / 2026 <
        /p>

        <
        img src = "https://picsum.photos/400/300"
        style = {
            {
                width: "100%",
                borderRadius: 10,
                margin: "10px 0"
            }
        }
        />

        <
        p >
        Đây là nội dung chi tiết bài viết lịch sử của Lữ đoàn Thông tin 604. Nội dung có thể rất dài, mô tả quá trình hình thành và phát triển... <
        /p>

        <
        /div>

        { /* GỢI Ý BÀI VIẾT */ } <
        div style = {
            { padding: 15 }
        } >

        <
        h3 > 📚Bài viết liên quan < /h3>

        {
            related.map((r) => ( <
                div key = { r.id }
                className = "card-modern"
                style = {
                    { padding: 10, marginBottom: 10 }
                }
                onClick = {
                    () => navigate(`/post/${r.id}`)
                } > { r.title } <
                /div>
            ))
        }

        <
        /div>

        <
        /div>
    );
}