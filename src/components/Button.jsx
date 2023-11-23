const Button = ({ symbol, handleClick }) => {
  return <button onClick={handleClick}> {symbol}</button>;
};
export default Button;