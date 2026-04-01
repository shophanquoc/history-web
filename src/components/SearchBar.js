export default function SearchBar({ setKeyword }) {
    return ( <
        div style = {
            { padding: 15 } } >
        <
        input placeholder = "Tìm bài viết..."
        onChange = {
            (e) => setKeyword(e.target.value) }
        style = {
            {
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border: "1px solid #ddd"
            }
        }
        /> <
        /div>
    );
}