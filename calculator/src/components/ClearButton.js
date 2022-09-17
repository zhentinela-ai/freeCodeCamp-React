import "../stylesheets/ClearButton.css";

export default function ClearButton(props) {
  return (
    <div className="clear-button" onClick={() => props.handleClear()}>
      Clear
    </div>
  );
}
