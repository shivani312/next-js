import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <style jsx>
                {`
                    h2 {
                        font-size: 38px;
                    }
                    h3 {
                        font-size: 28px;
                    }
                `}
            </style>
            <Head>
                <title>Hunting coder</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className={styles.title}>Hunting coder</h1>

            <p className={styles.description}>
                A blog for hunting coders by a coder
            </p>
            <div className={styles.imagewrapper}>
                <Image
                    src="/homeimg.avif"
                    alt="home-img"
                    width={230}
                    height={157}
                    className={styles.homeimg}
                />
            </div>
            <div className="blogs">
                <h2>Latest blogs</h2>
                <div className="blog-item">
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
