import React, { useEffect, useState } from "react";

import style from "../../styles/Blog.module.css";

const Slug = (props: any) => {
    const [blog, setBlog] = useState<any>();

    useEffect(() => {
        props.blogs && setBlog(props.blogs);
    }, [props.blogs]);

    return (
        <div className={style.blogpost}>
            <h1>{blog && blog.title}</h1>
            <hr />
            <p>{blog && blog.content}</p>
        </div>
    );
};

export async function getServerSideProps(context: any) {
    const { slug } = context.query;
    let data = await fetch(`http://localhost:3001/api/getblogs?slug=${slug}`);

    let blogs = await data.json();

    return {
        props: { blogs },
    };
}

export default Slug;
