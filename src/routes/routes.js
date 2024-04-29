import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Top100 from '../pages/TopShortCodes';

const PagesRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top100" element={<Top100 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
