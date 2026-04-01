export default function AdminDashboard() {
    const posts = [{
        title: "Bài viết 1",
        date: "01/04/2026"
    }];

    return ( <
        div style = {
            { padding: 20 }
        } >
        <
        h2 > Quản lý bài viết < /h2>

        <
        button > +Đăng bài < /button>

        {
            posts.map((p, i) => ( <
                div key = { i }
                className = "card-modern" >
                <
                b > { p.title } < /b> <
                p > { p.date } < /p>

                <
                button > Sửa < /button> <
                button > Xóa < /button> < /
                div >
            ))
        } <
        /div>
    );
}