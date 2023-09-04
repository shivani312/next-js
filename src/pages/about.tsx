import React from "react";

import Styles from "../styles/About.module.css";

const About = () => {
    return (
        <div className={Styles.about}>
            <h1 className={Styles.title}>About Hunting Coder</h1>
            <h3>Introduction</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur similique deserunt porro tempora voluptatem, maiores
                incidunt dolorem quam libero illum atque sapiente nostrum a,
                provident vitae ipsum praesentium. Possimus enim maxime aperiam
                nesciunt ab exercitationem quae dolor libero, est necessitatibus
                eaque animi deserunt ad vel!Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aspernatur similique deserunt
                porro tempora voluptatem, maiores incidunt dolorem quam libero
                illum atque sapiente nostrum a, provident vitae ipsum
                praesentium.
            </p>
            <h3>Services offered</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae facilis velit dolore autem, voluptas aliquam nisi
                veritatis excepturi omnis commodi cumque consectetur
                voluptatibus officia magnam mollitia cupiditate.
            </p>
            <p className={Styles.textitems}>We offer the following services</p>
            <ul className={Styles.list}>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
            </ul>
            <h3>Contact us</h3>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                repudiandae distinctio vero, vel voluptate aliquid incidunt nemo
                non enim cumque veniam ex eaque commodi provident sint
                exercitationem nostrum nisi itaque sed odio neque fuga.
            </p>
        </div>
    );
};
export default About;
