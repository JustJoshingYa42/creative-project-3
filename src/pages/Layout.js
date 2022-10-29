import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class = "navbar">
        <Link class = "navItem" to="/">Home</Link>
        <Link class = "navItem" to="/flashcard">Flash Cards</Link>
        <Link class = "navItem" to="/stars">Stars</Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;