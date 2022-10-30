import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class = "navbar">
        <Link class = "navItem" to="//">Home</Link>
        <Link class = "navItem" to="/planets">Planets</Link>
        <Link class = "navItem" to="/stars">Stars</Link>
        <Link class = "navItem" to="/cosmology">Cosmology</Link>
        <Link class = "navItem" to="/flashcard">Flash Cards</Link>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;