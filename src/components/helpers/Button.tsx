import { useSelector } from "react-redux";
import { selector } from "../../redux";

interface props {
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  color: string;
  block?: boolean;
  textLoading?: string;
  onClick?: () => void;
  title?: string;
  icon?: string;
  disabled?: boolean;
}
const Button: React.FC<props> = (props) => {
  const { title, icon, onClick, textLoading, disabled, type, color, block } =
    props;
  const loading = useSelector(selector.utility);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading.setLoading.button}
      className={`btn btn-${color} ${block === undefined ? "" : "btn-block"}`}
    >
      {loading.setLoading.button ? (
        loading ? (
          <>
            <i className="fas fa-spinner fa-spin" /> &nbsp; {textLoading}
          </>
        ) : (
          title || <i className={`fas ${icon}`} />
        )
      ) : (
        title || <i className={`fas ${icon}`} />
      )}
    </button>
  );
};

export default Button;
