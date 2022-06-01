import { render, screen } from "@testing-library/react";
import Signin from "../Signin";

  //TODO: getByLabelText

describe("Signin with Email Form", () => {
  it("renders a form", () => {
    render(<Signin />);
    const form = screen.getByRole("form");
    // const form = screen.getByRole("form");
    // const form = screen.getByLabelText("signinwithemail") // FORM FIELD
    expect(form.name).toBe("signinwithemail");
  });

  it("renders an email label associated with an input", () => { 
    render(<Signin />);
    // const email = screen.getByRole("label", { name: "Email" });
    const email = screen.getByLabelText("Email")

    expect(email).toBeInTheDocument();
  })

  it("renders an Password label", () => {
    render(<Signin />);
    const password = screen.getByLabelText("Password");    
    console.log(password);
    
    expect(password).toBeInTheDocument();
    expect(password).toHaveAttribute('type', 'password');

  })
});
