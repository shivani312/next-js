import React, { useEffect, useState } from "react";

import style from "../../styles/Blog.module.css";
import { useRouter } from "next/router";

const Slug = (props: any) => {
    const router = useRouter();
    const { slug } = router.query;
    const [blog, setBlog] = useState<any>();

    useEffect(() => {
        slug &&
            fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
                .then((data: any) => {
                    return data.json();
                })
                .then((parsed) => {
                    setBlog(parsed);
                });
    }, [slug]);

    return (
        <div className={style.blogpost}>
            <h1>{blog && blog.title}</h1>
            <hr />
            <p>{blog && blog.content}</p>
        </div>
    );
};

// export async function getServerSideProps(context: any) {
//     const { slug } = context.query;
//     let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);

//     let blogs = await data.json();

//     return {
//         props: { blogs },
//     };
// }

export default Slug;
