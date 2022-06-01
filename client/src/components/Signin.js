import { useEffect } from "react";
import { Form, Field } from "react-final-form";

function Signin() {
  useEffect(() => {
    console.log("Signin mounted");
  }, []);

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="error">
          <div className="">{error}</div>
        </div>
      );
    }
  };
  const renderInput = ({ input, label, forid, meta }) => {
    // const placeHolder = "placeholder text here";

    const className = `${meta.error && meta.touched ? "form error" : "form"}`;
    return (
      <div className={className}>
        <label htmlFor={forid} role="label">{label}</label>
        {label==="Password" ? <input {...input} id={forid} type="password" autoComplete="off" /> : <input {...input} id={forid} autoComplete="off" />}
        {renderError(meta)}
      </div>
    );
  };

  return (
    <div>
      <Form
        // initialValues={{
        //   Name: "Dave",
        //   Email: "starch@code.com",
        //   Phone: +666,
        //   Enquiry: "hi...",
        // }}
        onSubmit={() => console.log("submitted")}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className=""
            role="form"
            name="signinwithemail"
          >
            <h3>Signin with Email</h3>
            <Field name="Email" component={renderInput} label="Email" forid="signinwithemail-email"/>
            <Field name="Password" component={renderInput} label="Password" forid="signinwithemail-password"/>
            <button className="">Submit</button>
            <p className="success">Success</p>
            <p className="error">error</p>
          </form>
        )}
      />
    </div>
  );
}

export default Signin;
