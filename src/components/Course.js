import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
import firebase from "../firebase";

export function Course(props) {
  // const [courses, setCourses] = useState(0);
  const { id } = useParams();
  const { courses, notes } = props;
  const course = notes.filter(crs => {
    return crs.id == 1;
  });
  console.log(course);
  return (
    <div className="Courses">
      <h1>{course[0].name}</h1>
      <Card.Group>
        <Card as={Link} to="/note/1" fluid color="red" header="Note 1" />
        <Card as={Link} to="/note/2" fluid color="orange" header="Note 2" />
        <Card as={Link} to="/note/3" fluid color="yellow" header="Note 3" />
      </Card.Group>
      <Button as={Link} to={`/write/${id}`} attached="bottom">
        Write a note
      </Button>
    </div>
  );
}

export default Course;
