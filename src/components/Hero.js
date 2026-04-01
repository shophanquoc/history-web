import "../styles.css";

export default function Hero() {
    return ( <
        div className = "hero-bg"
        style = {
            {
                padding: "60px 20px",
                textAlign: "center"
            }
        } >

        { /* BADGE */ } <
        div style = {
            {
                display: "inline-block",
                padding: "5px 12px",
                borderRadius: "20px",
                background: "#ffe5e5",
                color: "#d50000",
                marginBottom: 20
            }
        } > 🎖️Thành lập năm 1975 <
        /div>

        { /* TITLE */ } <
        div className = "title-main" >
        Lịch sử Hình thành < br / >
        <
        span className = "title-highlight" > & Phát triển < /span> <
        /div>

        { /* DESC */ } <
        p style = {
            {
                maxWidth: 500,
                margin: "20px auto",
                color: "#555"
            }
        } >
        Trang thông tin lưu trữ các sự kiện lịch sử, quá trình hình thành,
        phát triển và những chiến công của Lữ đoàn Thông tin 604. <
        /p>

        { /* BUTTON */ } <
        button className = "btn-primary" >
        Khám phá Tư liệu→ <
        /button>

        <
        /div>
    );
}