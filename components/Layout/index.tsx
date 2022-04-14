import NavBar from "../NavBar2";

const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
