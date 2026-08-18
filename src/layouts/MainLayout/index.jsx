import Styles from "./MainLayout.module.css";
import { Sidebar } from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className={Styles.container}>
      <Sidebar />
      <section className={Styles.content}>
        <Outlet />
      </section>
    </main>
  );
};

export { MainLayout };
