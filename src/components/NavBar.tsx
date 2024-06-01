// used for navigating to the other pages
import { Link } from "react-router-dom";
// for Tailwind CSS
import "../styles.css";

function NavBar() {
  return (
    <nav className="flex justify-around bg-indigo-300 min-h-20 items-center text-xl ">
      <div>
        <Link to={"/"}>Cool Logo</Link>
      </div>
      <div>
        <ul className="flex gap-10">
          <li>
            <Link to={"/"}>HomePage</Link>
          </li>
          <li>
            <Link to={"/postdetails"}>PostDetails</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
