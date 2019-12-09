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
            <Card.Content header="This note needs your FEEDBACK! #1"/>
            <Card.Content extra>
                <a>
                    by Lee
                </a>
            </Card.Content>
        </Card>
          <Card fluid color="red"as={Link} to="/note/NeedFeedback">
              <Card.Content header="This note needs your FEEDBACK! #2"/>
              <Card.Content extra>
                  <a>
                      by Lee
                  </a>
              </Card.Content>
          </Card>
          <Card fluid color="red"as={Link} to="/note/NeedFeedback">
              <Card.Content header="This note needs your FEEDBACK! #3"/>
              <Card.Content extra>
                  <a>
                      by Lee
                  </a>
              </Card.Content>
          </Card>

      </Card.Group>

        <Message>
            <Message.Header>Mandatory Feedback!!</Message.Header>
            <p>
                You need <b>1</b> more mandatory feedback to access other student's note. Unless you give a feedback to them, you are note allowed to read or write lecture notes.
            </p>
        </Message>
    </div>
  );
}

export default NoCourse;
