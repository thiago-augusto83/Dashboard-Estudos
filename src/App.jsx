import { MainLayout } from "./layouts/MainLayout";
import { Dashboard } from "./pages/Dashboard.jsx";
import { About } from "./pages/About.jsx";
import { Products } from "./pages/Products.jsx";
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
};

export { App };
