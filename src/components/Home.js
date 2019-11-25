import React from "react";
import { Button, Card, Header, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      notes: []
    };
  }
  componentDidMount() {
    const courses = [];
    const db = firebase.firestore();
    db.collection("courses")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function(doc) {
          courses.push(doc.data());
        });
        this.setState({ courses: courses });
      });
  }
  render() {
    const courses = this.state.courses;
    return (
      <div className="courselist">
        <div className="Courses">
          <Header as="h1">My Courses</Header>
          <Card.Group>
            {courses.map(course => (
              <>
                <Card
                  key={course.id}
                  as={Link}
                  to={`/course/${course.id}`}
                  fluid
                  color="red"
                  header={`${course.name}`}
                  description={
                    <Label color="blue">
                      2019/11/20
                      <Label.Detail>Notes updated</Label.Detail>
                    </Label>
                  }
                ></Card>
              </>
            ))}
          </Card.Group>
        </div>
        <div className="Notes">
          <Header as="h1">My Notes</Header>
          <Card.Group>
            <Card
              as={Link}
              to="/note/1"
              fluid
              color="red"
              header="Data Structures - Merge sort"
              description={
                <Label color="orange">
                  2019/11/20
                  <Label.Detail>Feedbacks received</Label.Detail>
                </Label>
              }
            />
            <Card as={Link} to="/note/2" fluid color="orange" header="Data Structure - Red-Black Tree" />
            <Card as={Link} to="/note/3" fluid color="yellow" header="Algorithms - Bit O notation of Asymptotic growth" />
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default Home;
