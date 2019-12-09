import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "semantic-ui-react";
import firebase from "../firebase";
import {Message, Button, Header, Rating } from "semantic-ui-react";

export function Course() {
  const [courses, setCourses] = useState(0);
  const { id } = useParams();
  global.feedbacked= true;
  let cardg;
  if(id==="1"){
      cardg = <Card.Group>
          <Card fluid color="red"as={Link} to="/note/1">
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
          <Card fluid color="orange"as={Link} to="/note/2">
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
          <Card fluid color="yellow"as={Link} to="/note/3">
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
      </Card.Group>;
  }else if (id==="2"){
      cardg = <Card.Group>
          <Card fluid color="red"as={Link} to="/note/4">
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
          <Card fluid color="orange"as={Link} to="/note/5">
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
          <Card fluid color="yellow"as={Link} to="/note/6">
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
      </Card.Group>;
  }else{
      cardg = <Card.Group>
          <Card fluid color="red"as={Link} to="/note/7">
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
          <Card fluid color="orange"as={Link} to="/note/8">
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
          <Card fluid color="yellow"as={Link} to="/note/9">
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
      </Card.Group>;
  }
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
        {cardg}
      <div>
          <Button
              as={Link} to="/write"
            attached="bottom"
            content="Add Note"
          />
        </div>

    </div>
  );
}

export default Course;
