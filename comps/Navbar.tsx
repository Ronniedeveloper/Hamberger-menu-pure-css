import Link from "next/link";
import style from "../src/styles/nav.module.css";
import {FaMotorcycle, FaBars} from "react-icons/fa"

const Navbar = () => {
    return (
        <header>
            <nav className={style.nav}>
                <div className={style.navlogo}>
                    <FaMotorcycle fontSize={58} color={"#54a2ad"}/>
                    <h2 className={style.h2}>Doondo</h2>
                </div>
                <div  id={style.ul_container}  className="nav-links">
                    <ul className={style.ul}>
                        <li className={style.li}>
                            <Link className={style.a} href={''}>Home</Link>
                        </li>
                        <li className={style.li}>
                            <Link className={style.a} href={''}>Service</Link>
                        </li>
                        <li className={style.li}>
                            <Link className={style.a} href={''}>Developer</Link>
                        </li>
                        <li className={style.li}>
                            <Link className={style.a} href={''}>About Us</Link>
                        </li>
                        <li className={style.li}>
                            <Link className={style.a} href={''}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.btns}>
                    <button className={style.signup}>Sign up</button>
                    <FaBars name="menu" className={style.bars} fontSize={25}/>
                </div>
            </nav>
        </header>
    );
}
 
export default Navbar;