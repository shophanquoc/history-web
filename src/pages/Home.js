import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const querySnapshot = await getDocs(collection(db, "articles"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setArticles(data);
        };
        fetchData();
    }, []);

    return ( <
        div >
        <
        h2 > Bài viết < /h2> {
            articles.map(a => ( <
                div key = { a.id } >
                <
                h3 > { a.title } < /h3> <
                p > { a.content } < /p> <
                /div>
            ))
        } <
        /div>
    );
}