import "../stylesheets/Button.css";

function Button({ children, handleClick }) {
  const isOperator = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  return (
    <div
      className={
        `container-button ${isOperator(children) ? "operator" : ""}`.trimEnd()
      }
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
}

export default Button;
