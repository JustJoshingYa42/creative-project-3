import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class = "navbar">
        <Link class = "navItem" to="/">Home</Link>
        <Link class = "navItem" to="/flashcard">FlashCards</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;