import styles from "@/styles/navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <a href="/">
          <Image className={styles.logo} src="/GameHubTextLogo.png" alt="Game Hub" width={90} height={50} />
        </a>
      </div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search games..." id="searchInput" />
      </div>
      <div className={styles.profile}>
        <button className={styles.profileButton}>
          <i className="bx bx-user-circle"></i>
        </button>
      </div>
    </nav>
  );
}
