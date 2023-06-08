import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { Button, Col, ReanderField, Row } from "../../../components";

interface FormData {
  username: string;
  password: string;
}

interface FormLoginProps {
  onSubmit: (data: FormData) => void;
}

const FormLogin: React.FC<
  InjectedFormProps<FormData, FormLoginProps> & FormLoginProps
> = (props) => {
  const { handleSubmit, onSubmit } = props;

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <form method="post" onSubmit={handleSubmit(handleFormSubmit)}>
      <Field
        name="username"
        component={ReanderField}
        iconFormGroup="fas fa-envelope"
        formGroup
        placeholder="Silahkan Masukan Username"
      />
      <Field
        name="password"
        type="password"
        component={ReanderField}
        placeholder="Silahkan Masukan Password"
        iconFormGroup="fas fa-lock"
        formGroup
      />
      <Row>
        <Col size="12">
          <Button
            loading
            textLoading="Waiting"
            type="submit"
            color="primary"
            block
            title="Sign In"
          />
        </Col>
      </Row>
    </form>
  );
};

const ReduxFormLogin = reduxForm<FormData, FormLoginProps>({
  form: "FormLogin",
  enableReinitialize: true,
})(FormLogin);

export default ReduxFormLogin;
