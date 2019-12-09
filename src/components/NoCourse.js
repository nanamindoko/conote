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
  var name = "";
  var feedbacklink = "";
  if (id == 1){
    name = "Data Structure";
      feedbacklink = "/note/NeedFeedback1"
  }else if (id == 2){
    name = "System Programming";
      feedbacklink = "/note/NeedFeedback2"
  }else if (id == 3){
    name = "General Chemistry";
      feedbacklink = "/note/NeedFeedback3"
  }

  return (

    <div className="NoCourses">
      <h1>{name}</h1>
      <Card.Group>
        <Card fluid color="red"as={Link} to={feedbacklink}>
            <Card.Content header="This note needs your FEEDBACK! #1"/>
        </Card>
          <Card fluid color="red"as={Link} to={feedbacklink}>
              <Card.Content header="This note needs your FEEDBACK! #2"/>
          </Card>
          <Card fluid color="red"as={Link} to={feedbacklink}>
              <Card.Content header="This note needs your FEEDBACK! #3"/>
          </Card>

      </Card.Group>

        <Message>
            <Message.Header>Mandatory Feedback!!</Message.Header>
            <p>
                You need <b>at least 1</b> more mandatory feedback to access other student's note. Unless you give a feedback to them, you are <b>not allowed</b> to read or write lecture notes.
            </p>
        </Message>
    </div>
  );
}

export default NoCourse;
