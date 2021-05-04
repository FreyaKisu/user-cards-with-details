import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "../App.scss";
import { useAppContext } from "../context/state";
import { getUserById } from "../lib/utils";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";

function Details() {
  let { slug } = useParams();
  const { state } = useAppContext();
  const [loading] = useState(false);
  const { users } = state;
  if (!users) {
    return null;
  }
  const user = getUserById(slug, users);
  if (!user) {
    return null;
  }
  return (
    <div>
      {loading ? (
        <p className="loader"> </p>
      ) : (
        <Card border="light" bg="light" className="details-card">
          <Card.Body>
            <Card.Title></Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <b>Name: </b>
                {user.name}
              </ListGroupItem>
              <ListGroupItem>
                <b>Username: </b>
                {user.username}
              </ListGroupItem>
              <ListGroupItem>
                <b>Email: </b>
                {user.email}
              </ListGroupItem>
              <ListGroupItem>
                <b>Phone: </b>
                {user.phone}
              </ListGroupItem>
              <ListGroupItem>
                <b>Company: </b>
                {user.company.name}
              </ListGroupItem>
              <ListGroupItem>
                <b>Website: </b>
                {user.website}
              </ListGroupItem>
              <Card.Text>
                <b>Address: </b>
                <ul>
                  <li>Street: {user.address.street}</li>
                  <li>Suite: {user.address.suite}</li>
                  <li>City: {user.address.city}</li>
                  <li>Zipcode: {user.address.zipcode}</li>
                </ul>
              </Card.Text>
            </ListGroup>
          </Card.Body>
          <Link to="/">
            <Button variant="secondary">Back</Button>
          </Link>
        </Card>
      )}
    </div>
  );
}

export default Details;
