import NavBar2 from "../NavBar2";

const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar2 />
      <div>{children}</div>
    </>
  );
};

export default Layout;
