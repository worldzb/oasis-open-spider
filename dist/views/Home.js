import { jsx as _jsx, jsxs as _jsxs } from "hono/jsx/jsx-runtime";
import { html } from "hono/html";
import Layout from "./Layout.js";
const Home = () => {
    return (_jsxs(Layout, { title: "DailyHot API", children: [_jsxs("main", { className: "home", children: [_jsx("div", { className: "img" }), _jsxs("div", { className: "title", children: [_jsx("h1", { className: "title-text", children: "OASIS-OPEN" }), _jsx("span", { className: "title-tip", children: "\u670D\u52A1\u5DF2\u6B63\u5E38\u8FD0\u884C" })] }), _jsxs("div", { class: "control", children: [_jsxs("button", { id: "all-button", children: [_jsx("svg", { className: "btn-icon", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", children: _jsx("path", { fill: "currentColor", d: "M7.71 6.71a.996.996 0 0 0-1.41 0L1.71 11.3a.996.996 0 0 0 0 1.41L6.3 17.3a.996.996 0 1 0 1.41-1.41L3.83 12l3.88-3.88c.38-.39.38-1.03 0-1.41m8.58 0a.996.996 0 0 0 0 1.41L20.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L17.7 6.7c-.38-.38-1.02-.38-1.41.01M8 13c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4 0c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m4-2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1" }) }), _jsx("span", { className: "btn-text", children: "\u5168\u90E8\u63A5\u53E3" })] }), _jsxs("button", { id: "docs-button", children: [_jsx("svg", { className: "btn-icon", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", children: _jsx("path", { fill: "currentColor", d: "M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-4 4h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m4-8h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1" }) }), _jsx("span", { className: "btn-text", children: "\u9879\u76EE\u6587\u6863" })] })] })] }), html `
        <script>
          document.getElementById("all-button").addEventListener("click", () => {
            window.location.href = "/all";
          });
          document.getElementById("docs-button").addEventListener("click", () => {
            window.open("https://blog.imsyy.top/posts/2024/0408");
          });
        </script>
      `] }));
};
export default Home;
