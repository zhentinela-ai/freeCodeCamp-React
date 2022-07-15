import '../styles/Button.css'

function Button({ text, clicButton, handleClic }) {
  return (
    <button className={clicButton ? "clic-button" : "reset-button"} onClick={handleClic}>
      {text}
    </button>
  );
}

export default Button;
