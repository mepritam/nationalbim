import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./routes/pages/home";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
