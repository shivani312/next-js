import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Styles from "../styles/Contact.module.css";

const Contact = () => {
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        desc: "",
    };

    const onSubmit = async (values: any, { resetForm }: any) => {
        try {
            const response = await fetch(
                "http://localhost:3000/api/postcontact",
                {
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            const result = await response.json();
            resetForm();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className={Styles.contact}>
            <h1 className={Styles.title}>Contact us</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className={Styles.formfield}>
                        <div className={Styles.fieldinput}>
                            <label className={Styles.formlabel} htmlFor="name">
                                Name
                            </label>
                            <Field
                                type="text"
                                placeholder="Enter name"
                                className={Styles.formcontrol}
                                id="exampleInputName"
                                name="name"
                            />
                        </div>
                        <ErrorMessage
                            name="name"
                            component="div"
                            className={Styles.errormessage}
                        />
                    </div>
                    <div className={Styles.formfield}>
                        <div className={Styles.fieldinput}>
                            <label className={Styles.formlabel} htmlFor="email">
                                Email
                            </label>
                            <Field
                                type="email"
                                placeholder="Enter email"
                                className={Styles.formcontrol}
                                id="exampleInputEmail1"
                                name="email"
                            />
                        </div>
                        <ErrorMessage
                            name="email"
                            component="div"
                            className={Styles.errormessage}
                        />
                    </div>
                    <div className={Styles.formfield}>
                        <div className={Styles.fieldinput}>
                            <label className={Styles.formlabel} htmlFor="phone">
                                Phone no
                            </label>
                            <Field
                                type="text"
                                placeholder="Enter phone"
                                className={Styles.formcontrol}
                                id="exampleInputPhone"
                                name="phone"
                            />
                        </div>
                        <ErrorMessage
                            name="phone"
                            component="div"
                            className={Styles.errormessage}
                        />
                    </div>
                    <div className={Styles.formfield}>
                        <div className={Styles.fieldinput}>
                            <label className={Styles.formlabel} htmlFor="desc">
                                Description
                            </label>
                            <Field
                                as="textarea"
                                placeholder="Enter description here..."
                                id="desc"
                                className={`${Styles.formcontrol} ${Styles.textarea}`}
                                name="desc"
                            />
                        </div>
                        <ErrorMessage
                            name="desc"
                            component="div"
                            className={Styles.errormessage}
                        />
                    </div>

                    <button type="submit" className={Styles.btn}>
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    desc: Yup.string().required("Description is required"),
});

export default Contact;
