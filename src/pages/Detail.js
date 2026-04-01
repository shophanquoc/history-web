import { useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();

    return ( <
        div style = {
            { padding: 20 } } >
        <
        h2 > Bài viết { id } < /h2> <
        p > 📅01 / 04 / 2026 < /p>

        <
        img src = "https://picsum.photos/400/300"
        style = {
            { width: "100%" } }
        />

        <
        p >
        Nội dung chi tiết bài viết lịch sử lữ đoàn... <
        /p> <
        /div>
    );
}