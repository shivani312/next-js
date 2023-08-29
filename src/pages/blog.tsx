import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";

import styles from "../styles/Blog.module.css";

const Blog = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/blogs")
            .then((data: any) => {
                return data.json();
            })
            .then((parsed) => {
                setBlogData(parsed);
            });
    }, []);

    return (
        <div className={styles.blogs}>
            {blogData.length > 0 &&
                blogData.map((item: any, index: number) => (
                    <Fragment key={index}>
                        <div className={styles.blogitems}>
                            <Link href={`/blogpost/${item.slug}`}>
                                <h3>{item.title}</h3>
                            </Link>
                            <p>{item.content.substr(0, 140)}...</p>
                        </div>
                    </Fragment>
                ))}
        </div>
    );
};

export default Blog;
