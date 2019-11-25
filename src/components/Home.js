import React from "react";
import { Button, Card, Header, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const courses = this.props.courses;
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
              header="Note A"
              description={
                <Label color="orange">
                  2019/11/20
                  <Label.Detail>Feedbacks received</Label.Detail>
                </Label>
              }
            />
            <Card as={Link} to="/note/2" fluid color="orange" header="Note B" />
            <Card as={Link} to="/note/3" fluid color="yellow" header="Note C" />
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default Home;
