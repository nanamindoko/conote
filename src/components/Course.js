import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Button, Label } from "semantic-ui-react";
import firebase from "../firebase";

export function Course(props) {
  // const [courses, setCourses] = useState(0);
  const { id } = useParams();
  const { courses, notes } = props;
  const course = courses.filter(crs => {
    return crs.id == id;
  });
  const courseNotes = notes.filter(note => {
    return note.courseId === id;
  });
  return (
    <div className="Courses">
      <h1>{course[0].name}</h1>
      <Card.Group>
        {courseNotes.map(note => (
          <Card
            as={Link}
            to={`/note/${note.id}`}
            fluid
            color="red"
            header={`${note.name}`}
            description={
              <Label color="blue">
                2019/11/25
                <Label.Detail>Student 1</Label.Detail>
              </Label>
            }
          />
        ))}
      </Card.Group>
      <Card fluid />
      <Button as={Link} to={`/write/${id}`} attached="bottom">
        Write a note
      </Button>
    </div>
  );
}

export default Course;
