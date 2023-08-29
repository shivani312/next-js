import Link from "next/link";
import React from "react";

import styles from "../src/styles/Home.module.css";

const Navbar = (props: any) => {
    return (
        <div className={styles.container}>
            <nav className={styles.mainnav}>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/blog">
                        <li>Blog</li>
                    </Link>
                    <Link href="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>

            <div className={styles.main}>{props.children}</div>
        </div>
    );
};

export default Navbar;
