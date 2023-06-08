/* eslint-disable react-refresh/only-export-components */
import { useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  setFooter,
  setHeader,
  setLoading,
  setSidebar,
  stopLoading
} from "../../redux";
import { useEffect } from "react";
import FormLogin from "./form";

type LoginProps = RouteComponentProps;

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSidebar(false));
    dispatch(setFooter(false));
    dispatch(setHeader(false));
    return () => {
      dispatch(setHeader(true));
      dispatch(setSidebar(true));
      dispatch(setFooter(true));
    };
  }, [dispatch]);

  const handleSubmit = (data: FormData) => {
    console.log(data);
    dispatch(
      setLoading({
        content: true,
        button: true
      })
    );
    setTimeout(() => {
      dispatch(stopLoading());
      props.history.push("/dashboard");
    }, 4000);
  };

  return (
    <div className="login-box container" style={{ marginTop: "10%" }}>
      <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <div className="h1">
            <b>Admin</b>LTE
          </div>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <FormLogin onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
