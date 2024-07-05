import { FC, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const HelperText = styled("p")(() => ({
  color: "red", // Change this to your desired color
}));

interface FormComponentProps {}

const FormComponent: FC<FormComponentProps> = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameError, setNameError] = useState<boolean>(false);
  const [numberError, setNumberError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const navigate = useNavigate();

  //submitHandler to handle data after submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //variable to set true if any of the fields trigger an errora
    let hasError = false;

    if (name === "") {
      setNameError(true);
      hasError = true;
    } else {
      setNameError(false);
    }

    if (number === "") {
      setNumberError(true);
      hasError = true;
    } else {
      setNumberError(false);
    }

    if (email === "") {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    //if haserror's not true coz of any error above , then only the data will be submitted
    if (!hasError) {
      const userArray: string[] = [name, number, email];
      localStorage.setItem('user', JSON.stringify(userArray));
      navigate('/landing-page');
      setName("");
      setNumber("");
      setEmail("");
    }
  };

  return (
    <form className="form">
      <h1>
        <span className="input-icon">
          <LoginIcon />
        </span>
        Enter Your Data
      </h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
        }}
        noValidate
        className="box"
        autoComplete="off"
      >
        <TextField
          required
          label="Enter your Name"
          id="standard-basic"
          value={name}
          variant="standard"
          helperText={
            nameError ? <HelperText>Please enter your name</HelperText> : ""
          }
          onChange={(e) => {
            if (e.target.value === "") {
              setNameError(true);
            }
            setName(e.target.value);
          }}
        />
        <TextField
          required
          id="standard-basic"
          label="Enter your Phone Number"
          value={number}
          helperText={
            numberError ? <HelperText>Please enter your number</HelperText> : ""
          }
          variant="standard"
          onChange={(e) => {
            if (e.target.value === "") {
              setNumberError(true);
            }
            setNumber(e.target.value);
          }}
        />
        <TextField
          required
          id="standard-basic"
          label="Enter your Email"
          value={email}
          helperText={
            emailError ? <HelperText>Please enter your email</HelperText> : ""
          }
          variant="standard"
          onChange={(e) => {
            if (e.target.value === "") {
              setEmailError(true);
            }
            setEmail(e.target.value);
          }}
        />
        <div>
          <Button onClick={handleSubmit} className="btn" variant="contained">
            submit
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default FormComponent;
