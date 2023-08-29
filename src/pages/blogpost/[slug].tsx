import { useRouter } from "next/router";
import React from "react";

import style from "../../styles/Blog.module.css";

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className={style.blogpost}>
            <h1>Title of the page {slug}</h1>
            <hr />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                accusantium hic perspiciatis numquam voluptate labore earum
                adipisci harum tenetur eius voluptatibus eos voluptatum,
                consequatur ullam dignissimos! Sunt facere ipsam aliquid.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                accusantium hic perspiciatis numquam voluptate labore earum
                adipisci harum tenetur eius voluptatibus eos voluptatum,
                consequatur ullam dignissimos! Sunt facere ipsam aliquid.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                accusantium hic perspiciatis numquam voluptate labore earum
                adipisci harum tenetur eius voluptatibus eos voluptatum,
                consequatur ullam dignissimos! Sunt facere ipsam aliquid.
            </p>
        </div>
    );
};

export default Slug;
