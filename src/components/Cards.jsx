import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../App.scss";
import { useAppContext } from "../context/state";
import DetailsButton from "./Button";

function Cards() {
  const { state, setState } = useAppContext();
  const [loading] = useState(false);
  const { users } = state;
  return (
    <div>
      {loading ? (
        <p className="loader"> </p>
      ) : (
        <div>
          <ul className="card-grid">
            {users.map((user) => {
              const userId = user.id;
              return (
                <li key={user.id} className="card">
                  <Card className="cards" bg="light">
                    <Card.Body>
                      <Card.Title>{user.name}</Card.Title>
                      <Card.Text>@{user.username}</Card.Text>
                      <Card.Text>
                        <a href={user.website}>{user.website}</a>
                      </Card.Text>
                      <DetailsButton
                        user={user.id}
                        variant="primary"
                      ></DetailsButton>
                    </Card.Body>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cards;
