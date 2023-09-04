/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Hunting coder</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.imagewrapper}>
                <img
                    src="/homeimg.avif"
                    alt="homeimg"
                    className={styles.homeimg}
                />
            </div>
            <p className={styles.title}>
                <span>&lt;huntingcoder/&gt;</span>
            </p>
            <div>
                <h2 className={styles.blogtitle}>Latest blogs</h2>
                <div>
                    <h3>how to learn javascript in 2022?</h3>
                    <p>
                        Javascript is the language used to design logic for web.
                    </p>
                    <h3>how to learn javascript in 2022?</h3>
                    <p>
                        Javascript is the language used to design logic for web.
                    </p>
                    <h3>how to learn javascript in 2022?</h3>
                    <p>
                        Javascript is the language used to design logic for web.
                    </p>
                </div>
            </div>
        </>
    );
}
