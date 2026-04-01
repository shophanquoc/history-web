import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SlideCard from "../components/SlideCard";
import ArticleList from "../components/ArticleList";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import LeaderList from "../components/LeaderList";

export default function Home() {
    const [keyword, setKeyword] = useState("");

    return ( <
        div >
        <
        Header setKeyword = { setKeyword }
        />

        <
        Hero / >
        <
        Stats / >

        <
        LeaderList / >
        <
        SlideCard / >
        <
        ArticleList keyword = { keyword }
        />

        <
        Footer / >
        <
        ScrollTop / >
        <
        /div>
    );
}