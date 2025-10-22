import { Route, Routes } from "react-router";
import Homepage from "./components/pages/HomePage";

function Router() {
  return (
    <Routes>
      <Route path="/confirmation" element={<Homepage />} />
    </Routes>
  );
}

export default Router;
