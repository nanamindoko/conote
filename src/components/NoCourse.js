import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";
import firebase from "../firebase";
import {Message, Button, Header, Rating } from "semantic-ui-react";

export function NoCourse() {
  const [courses, setCourses] = useState(0);
  const { id } = useParams();
    const allowed = true;
    global.lastcourse = id;
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

    <div className="NoCourses">
      <h1>{id}</h1>
      <Card.Group>
        <Card fluid color="red"as={Link} to="/note/NeedFeedback">
            <Card.Content header="This note needs your FEEDBACK!"/>
            <Card.Content extra>
                <a>
                    by Lee
                </a>
            </Card.Content>
        </Card>
      </Card.Group>
      <div>
          <Button
              as={Link} to="/write"
            attached="bottom"
            content="Add Note"
          />
        </div>
        <Message>
            <Message.Header>Mandatory Feedback!!</Message.Header>
            <p>
                You need <b>1</b> more mandatory feedback to access other student's note.
            </p>
        </Message>
    </div>
  );
}

export default NoCourse;
