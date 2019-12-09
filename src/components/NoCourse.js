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
            <Card.Content header="Quick sort by John"/>
            <Card.Content extra>
                <a>
          <Rating
              icon="star"
              size="huge"
              defaultRating={3}
              maxRating={5}
              disabled
          />
                    rated by 8 people
                </a>
            </Card.Content>
        </Card>
          <Card fluid color="orange"as={Link} to="/note/NeedFeedback">
              <Card.Content header="Bubble sort by John"/>
              <Card.Content extra>
                  <a>
                  <Rating
                      icon="star"
                      size="huge"
                      defaultRating={2}
                      maxRating={5}
                      disabled
                  />
                   rated by 10 people
                  </a>
              </Card.Content>
          </Card>
        <Card fluid color="yellow"as={Link} to="/note/NeedFeedback">
            <Card.Content header="Master sort by John"/>
            <Card.Content extra>
                <a>
                <Rating
                    icon="star"
                    size="huge"
                    defaultRating={3.5}
                    maxRating={5}
                    disabled
                />
                    rated by 2 people
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
