import React, { useState } from 'react';
import { useFormik } from "formik";
import { AiOutlineUser, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {

    const errors = {};

    if (!values.email) {
        errors.email = "Required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }

    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 5) {
        errors.password = "Must be 5 characters or more";
    }

    return errors;
};

const Form = () => {

    const [showHidePassword, changeShowHidePassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="flex-half bg-sunset dark:bg-midnight md:bg-[url()] dark:md:bg-[url()] bg-cover md:opacity-100 flex text-white items-center justify-center duration-1000 transition-all">
            <div className="mx-7 md:mx-20 p-5 md:p-0 w-full rounded-md md:rounded-none bg-dark-brown dark:bg-dark-blue md:bg-transparent bg-opacity-90 duration-1000 transition">
                <div className="text-center text-3xl font-semibold mb-5">
                    Sign in
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3 relative">
                        <input
                            className="bg-light-brown dark:bg-light-blue placeholder:transition placeholder:duration-1000 duration-1000 transition w-full h-14 p-3 rounded placeholder:italic placeholder:text-light-pink dark:placeholder:text-light-blue-2 text-lg focus:bg-light-brown dark:focus:bg-light-blue autofill:bg-light-brown dark:autofill:bg-light-blue focus:outline-none focus:outline-offset-0 focus:outline-light-pink dark:focus:outline-light-blue-2"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <AiOutlineUser
                            size={40}
                            className="absolute top-0 right-0 pr-3 pt-3 text-light-pink dark:text-light-blue-2 duration-1000 transition"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-sm text-red-800 dark:text-blue-error mt-1">
                                {formik.errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="mb-3 relative">
                        <input
                            className="bg-light-brown dark:bg-light-blue placeholder:transition placeholder:duration-1000 duration-1000 transition w-full h-14 p-3 rounded placeholder:italic placeholder:text-light-pink dark:placeholder:text-light-blue-2 text-lg focus:bg-light-brown dark:focus:bg-light-blue autofill:bg-light-brown dark:autofill:bg-light-blue focus:outline-none focus:outline-offset-0 focus:outline-light-pink dark:focus:outline-light-blue-2"
                            id="password"
                            name="password"
                            type={showHidePassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {showHidePassword 
                        ? 
                        <AiFillEyeInvisible
                            size={40}
                            className="absolute top-0 right-0 pr-3 pt-4 cursor-pointer"
                            onClick={() => changeShowHidePassword(!showHidePassword)}
                        />
                        :
                        <AiFillEye
                            size={40}
                            className="absolute top-0 right-0 pr-3 pt-4 cursor-pointer"
                            onClick={() => changeShowHidePassword(!showHidePassword)}
                        />
                        }
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-sm text-red-800 dark:text-blue-error mt-1 duration-1000 transition">
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </div>
                    <div className="mb-3 relative">
                        <button
                            type="submit"
                            disabled={!formik.isValid}
                            className="block bg-pink dark:bg-blue w-full h-14 text-left p-3 rounded-md disabled:bg-opacity-50 disabled:cursor-not-allowed duration-1000 transition"
                        >
                            Sign in
                        </button>
                        <RiArrowRightSLine
                            size={45}
                            className="absolute top-0 right-0 pr-3 pt-4"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
