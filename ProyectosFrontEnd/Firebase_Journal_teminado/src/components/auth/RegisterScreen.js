import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import { useForm } from "../../hooks/useForm";
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import { useFormik } from "formik";
import * as Yup from 'yup'


export const RegisterScreen = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object({
        name: Yup.string()
          .max(15, 'Must be 2 characters or less')
          .min(1, 'Como min 1 letra')
          .required('Required'),
       
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required')
        .max(15, 'Must be 2 characters or less')
        .min(8, 'Como min 1 letra'),
        password2: Yup.string().required('Required').oneOf([Yup.ref('password'),'No coinciden las contraseñas'])
      }),
    onSubmit: (values) => {
        dispatch(startRegisterWithEmailPasswordName(values.email, values.password, values.name));
      alert(JSON.stringify(values, null, 2));
    },
  });

  const dispatch = useDispatch();
  

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form
        onSubmit={formik.handleRegister}
        className="animate__animated animate__fadeIn animate__faster"
      >

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          onChange={formik.handleInputChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          onChange={formik.handleInputChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          onChange={formik.handleInputChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          onChange={formik.handleInputChange}
          value={formik.values.password2}
        />
        {formik.errors.password2 ? <div>{formik.errors.password2}</div> : null}
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
