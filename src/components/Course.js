import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";
import firebase from "../firebase";
import { Button, Header, Rating } from "semantic-ui-react";

export function Course() {
  const [courses, setCourses] = useState(0);
  const { id } = useParams();
  // const db = firebase.firestore();
  // // db.collection("courses")
  // //   .get()
  // //   .then(querySnapshot => {
  // //     querySnapshot.forEach(function(doc) {
  // //       courses.push(doc.data());
  // //     });
  // //     this.setCourses({ courses: courses });
  // //   });
  // // console.log(courses);
  return (
    <div className="Courses">
      <h1>{id}</h1>
      <Card.Group>
        <Card as={Link} to="/note/1" fluid color="red" header="Note 1 by John" />
        <Card as={Link} to="/note/2" fluid color="orange" header="Note 2 by John" />
        <Card as={Link} to="/note/3" fluid color="yellow" header="Note 3 by Paul" />
      </Card.Group>
      <div>
          <Button
            attached="bottom"
            content="Add Note"
          />
        </div>
    </div>
  );
}

export default Course;
