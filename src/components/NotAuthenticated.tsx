import { FC } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

interface NotAuthenticatedProps {}

const NotAuthenticated: FC<NotAuthenticatedProps> = () => {
  return (
    <div className="not-authenticated">
      <div>
        <ErrorIcon fontSize="large" />
        <h1>
          Sorry ! but you not athenticated to access this route , Kindly return
          to the login page and enter your credentials first.
        </h1>
      </div>

      <Link to={'/'}>
        <Button className="btn-authenticated" variant="contained">
          <span className="span">
            <LogoutIcon />
          </span>
          <span>Go To Login Page</span>
        </Button>
      </Link>
    </div>
  );
};

export default NotAuthenticated;
