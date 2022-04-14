import Link from "next/link";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/TestPage">
        <a
          className={`${styles.link} ${
            router.pathname === "/TestPage" ? styles.active : ""
          }`}
        >
          TestPage
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
