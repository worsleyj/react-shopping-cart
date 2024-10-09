import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Wrong turn! It no exist!</h1>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

export default ErrorPage;
