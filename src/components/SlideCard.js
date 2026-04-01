import { useEffect, useState, useRef } from "react";
import "../styles.css";

export default function SlideCard() {
    const data = [{
            title: "Thành lập năm 1975",
            img: "https://picsum.photos/400/300?1"
        },
        {
            title: "Chiến công nổi bật",
            img: "https://picsum.photos/400/300?2"
        },
        {
            title: "Hiện đại hóa",
            img: "https://picsum.photos/400/300?3"
        }
    ];

    const [index, setIndex] = useState(0);

    // SWIPE
    const startX = useRef(0);
    const endX = useRef(0);

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        endX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = startX.current - endX.current;

        if (diff > 50) {
            // swipe left
            setIndex((prev) => (prev + 1) % data.length);
        }

        if (diff < -50) {
            // swipe right
            setIndex((prev) =>
                prev === 0 ? data.length - 1 : prev - 1
            );
        }
    };

    useEffect(() => {
        if (!data || data.length === 0) return;

        const interval = setInterval(() => {
            setIndex((prev) => {
                const next = prev + 1;
                return next >= data.length ? 0 : next;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [data]);

    return ( <
        div style = {
            { overflow: "hidden", margin: 15 }
        }
        onTouchStart = { handleTouchStart }
        onTouchMove = { handleTouchMove }
        onTouchEnd = { handleTouchEnd } >
        <
        div style = {
            {
                display: "flex",
                transform: `translateX(-${index * 100}%)`,
                transition: "0.4s ease"
            }
        } > {
            data.map((item, i) => ( <
                div key = { i }
                style = {
                    { minWidth: "100%" }
                } >
                <
                div className = "card-modern" >
                <
                img src = { item.img }
                className = "img-cover" / >
                <
                div className = "title" > { item.title } < /div> < /
                div > <
                /div>
            ))
        } <
        /div> < /
        div >
    );
}