import "../stylesheets/Button.css";

function Button({ children }) {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={
        `container-button ${isOperator(children) ? "operator" : ""}`.trimEnd
      }
    >
      {children}
    </div>
  );
}

export default Button;
