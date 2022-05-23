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
  const renderInput = ({ input, label, meta }) => {
    const placeHolder = "placeholder text here";

    const className = `${meta.error && meta.touched ? "form error" : "form"}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  return (
    <div>
      <h3>Signin with Email</h3>
      <Form
        // initialValues={{
        //   Name: "Dave",
        //   Email: "starch@code.com",
        //   Phone: +666,
        //   Enquiry: "hi...",
        // }}
        onSubmit={() => console.log("submitted")}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="">
            <Field name="Name" component={renderInput} label="label 1" />
            <Field name="Email" component={renderInput} label="label 2" />
            <Field name="Phone" component={renderInput} label="label 3" />
            <Field name="Enquiry" component={renderInput} label="label 4" />
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
