import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import NotFoundRoute from "./routes/NotFoundRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />}></Route>
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
