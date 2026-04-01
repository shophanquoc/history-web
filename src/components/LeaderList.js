export default function LeaderList() {
    const leaders = [{
            role: "Chính ủy",
            name: "Nguyễn Văn A",
            time: "1975 - 1980",
            img: "https://picsum.photos/100"
        },
        {
            role: "Lữ đoàn trưởng",
            name: "Trần Văn B",
            time: "1980 - 1990",
            img: "https://picsum.photos/101"
        }
    ];

    return ( <
        div >

        <
        /div>
        // <
        // div style = {
        //     { padding: 15 } } >
        // <
        // h3 > Thủ trưởng qua các thời kỳ < /h3>

        // {
        //     leaders.map((l, i) => ( <
        //         div key = { i }
        //         className = "card-modern"
        //         style = {
        //             { display: "flex", gap: 10 } } >
        //         <
        //         img src = { l.img }
        //         style = {
        //             { width: 60, height: 60, borderRadius: "50%" } }
        //         />

        //         <
        //         div >
        //         <
        //         b > { l.name } < /b> <
        //         p > { l.role } < /p> <
        //         p > { l.time } < /p> <
        //         /div> <
        //         /div>
        //     ))
        // } <
        // /div>
    );
}