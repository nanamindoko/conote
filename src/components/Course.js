import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";

export function Course() {
  let { id } = useParams();
  return (
    <div className="Courses">
      <h1> Course ID: {id}</h1>
      <Card.Group>
        <Card fluid color="red" header="Note 1" />
        <Card fluid color="orange" header="Note 2" />
        <Card fluid color="yellow" header="Note 3" />
      </Card.Group>
    </div>
  );
}

export default Course;
