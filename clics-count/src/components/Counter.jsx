import '../styles/Counter.css';

function Counter({ clicsNumber }) {
  return (
    <div className="counter">
      {clicsNumber}
    </div>
  )
}

export default Counter;