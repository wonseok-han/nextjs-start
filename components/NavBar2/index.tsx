import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/TestPage">
        <a className={router.pathname === "/TestPage" ? "active" : ""}>
          TestPage
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
