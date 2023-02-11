
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
  const Header = ()=>{
    return (
<nav>
    <h1>Blue Star</h1>
    <main>
        <HashLink to={"/#home"}>Home</HashLink>
        {/* <Link to={"/"} >Home</Link> */}
        <Link to={"/Contact"} >Contact</Link>
        {/* <Link to={"/#About"} >About</Link> */}
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brand"}>Brands</HashLink>
        {/* <Link to={"/#Breands"} >Breands</Link> */}
        <Link to={"/services"} >services</Link>
    </main>
</nav>

    )
};
export default Header ;