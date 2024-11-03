import Link from "next/link";
import Image from "next/image";

import MainHeadeBackground from "./main-header-background";
import NavLink from "./nav-link";
import logoImage from "@/assets/logo.png"
import classes from "./main-header.module.css"

export default function MainHeader() {
    return (
        <>
            <MainHeadeBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image priority src={logoImage} alt="A plate with food on it" />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}