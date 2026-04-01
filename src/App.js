import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login"; // nếu chưa có thì có thể xóa dòng này

function App() {
    return ( <
        BrowserRouter >
        <
        Routes >

        { /* TRANG CHỦ */ } <
        Route path = "/"
        element = { < Home / > }
        />

        { /* TRANG ĐỌC BÀI */ } <
        Route path = "/post/:id"
        element = { < Detail / > }
        />

        { /* ADMIN */ } <
        Route path = "/admin"
        element = { < AdminDashboard / > }
        />

        { /* LOGIN (optional nếu dùng modal thì không cần) */ } <
        Route path = "/login"
        element = { < Login / > }
        />

        { /* 404 fallback */ } <
        Route path = "*"
        element = { < Home / > }
        />

        <
        /Routes> <
        /BrowserRouter>
    );
}

export default App;