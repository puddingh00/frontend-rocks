import { BrowserRouter, Route, Routes } from "react-router";
import { RootRoute } from "../../Routes/Route/index.tsx";
import { DetailRoute } from "../../Routes/detail/index.tsx";

export const AppRouter = () => {
    return <BrowserRouter>
    <Routes>
        <Route path="/frontend-rocks" element={<RootRoute />} />
        <Route path="/frontend-rocks/dettaglio/:id" element={<DetailRoute />} />
    </Routes>
    </BrowserRouter>
} 