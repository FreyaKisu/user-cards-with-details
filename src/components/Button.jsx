import React from "react";
import Button from "react-bootstrap/Button";
import "../App.scss";
import { Link } from "react-router-dom";

function DetailsButton(props) {
  return (
    <Link
      variant="primary"
      className="details-button"
      to={`/users/${props.user}`}
    >
      <Button variant="primary" className="details-button">More Details</Button>
    </Link>
  );
}

export default DetailsButton;
