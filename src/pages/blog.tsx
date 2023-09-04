import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";

import styles from "../styles/Blog.module.css";

const Blog = () => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/blogs")
            .then((data: any) => {
                return data.json();
            })
            .then((parsed) => {
                setBlogData(parsed);
            });
    }, []);

    // const fetchMoreData = async () => {
    //     let data = await fetch("http://localhost:3000/api/blogs?count=1");
    //     let allBlogs = await data.json();
    //     setBlogData(allBlogs);
    // };

    return (
        <div className={styles.blogs}>
            {/* <InfiniteScroll
                dataLength={blogData.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            > */}
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
            {/* </InfiniteScroll> */}
        </div>
    );
};

// export async function getServerSideProps() {
//     let data = await fetch("http://localhost:3000/api/blogs?count=1");

//     let allBlogs = await data.json();

//     return {
//         props: { allBlogs },
//     };
// }

export default Blog;
