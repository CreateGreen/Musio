import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
function App() {
    return (_jsx("div", { className: "App", children: _jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(Home, {}) }) }) }) }));
}
export default App;
//# sourceMappingURL=App.js.map