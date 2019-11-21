import React from "react";
import { Button, Card } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  // useRouteMatch,
  // useParams
} from "react-router-dom";
export function Home() {
  return (
    <div className="courselist">
      <div className="Courses">
        <Card.Group>
          <Card as={Link} to="/course/1" fluid color="red" header="Course A" />
          <Card
            as={Link}
            to="/course/2"
            fluid
            color="orange"
            header="Course B"
          />
          <Card as={Link} to="/course/3" fluid color="blue" header="Course C" />
        </Card.Group>
        <Button>Add course</Button>
      </div>
      <div className="Courses">
        <Card.Group>
          <Card as={Link} to="/note/1" fluid color="red" header="Note A" />
          <Card as={Link} to="/note/2" fluid color="orange" header="Note B" />
          <Card as={Link} to="/note/3" fluid color="yellow" header="Note C" />
        </Card.Group>
        <Button>Add note</Button>
      </div>
    </div>
  );
}

export default Home;
