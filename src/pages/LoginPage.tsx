import { FC } from "react";
import FormComponent from "../components/FormComponent";


interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <div className="login">
      <FormComponent />
    </div>
  );
};

export default LoginPage;
