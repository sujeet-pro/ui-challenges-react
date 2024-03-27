import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

export function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>UI Challenges</h1>
        <nav className={styles.headerNav}>
          <a href="https://sujeet.pro">Profile</a>
          <a href="https://sujeet.pro/blog/">Blogs</a>
        </nav>
      </header>
      <aside className={styles.sidenav}>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/file-explorer">File Explorer</Link>
        </nav>
      </aside>
      <main className={styles.app}>
        <Outlet />
      </main>
    </div>
  );
}
