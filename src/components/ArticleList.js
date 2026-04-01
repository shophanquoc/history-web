import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function ArticleList({ keyword }) {

    const articles = [{
            title: "Lữ đoàn 604 thành lập năm 1975",
            img: "https://picsum.photos/400/300?3"
        },
        {
            title: "Giai đoạn phát triển mạnh mẽ",
            img: "https://picsum.photos/400/300?4"
        }
    ];
    const navigate = useNavigate();
    return ( <
        div className = "container" >

        {
            articles
            .filter(a => a.title.toLowerCase().includes(keyword.toLowerCase()))
            .map((a, i) => ( <
                div key = { i }
                className = "card-modern"
                onClick = {
                    () => navigate(`/post/${i}`)
                } >

                <
                img src = { a.img }
                className = "img-cover"
                alt = { a.title }
                /> <
                div style = {
                    { fontSize: 12, color: "#777" }
                } > 📅01 / 04 / 2026 <
                /div> <
                div style = {
                    { padding: 10 }
                } >
                <
                div style = {
                    { fontWeight: 600 }
                } > { a.title } <
                /div>

                <
                div style = {
                    {
                        fontSize: 13,
                        color: "#777",
                        marginTop: 5
                    }
                } >
                Xem chi tiết→ <
                /div> < /
                div >

                <
                /div>
            ))
        }

        <
        /div>
    );
}