import React from "react";
import { connect } from "react-redux";
import MyPage from './MyPage';
import { Button, Card, Header, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Write } from '../components';
import firebase from "../firebase";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //courses: [{id:1,name:'Data structure',date:'2019/11/20',state:'nocourse'},{id:2,name:'System programming',date:'2019/12/02',state:'nocourse'},{id:3,name:'General chemist',date:'2019/11/10',state:'nocourse'}],
      notes: []
    };
  }

  /*
  componentDidMount() {
    const courses = [];
    const db = firebase.firestore();
    db.collection("courses")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(function(doc) {
          courses.push(doc.data());
        });
        //this.setState({ courses: courses });
      });
  }*/

  render() {
      //const courses = this.state.courses;
      /*
      const courses = global.courses;

      let cardg;
        cardg = <Card.Group>
            {courses.map(course => (
                <>
                    <Card
                        key={course.id}
                        as={Link}
                        to={`/${course.state}/${course.id}`}
                        fluid
                        color="red"
                        header={`${course.name}`}
                        description={
                            <Label color="blue">
                                {course.date}
                                <Label.Detail>Notes updated</Label.Detail>
                            </Label>
                        }
                    ></Card>
                </>
            ))}
        </Card.Group>;

    return (
      <div className="courselist">
        <div className="Courses">
          <Header as="h1">My Courses</Header>
          {cardg}
        </div>
        <div className="Notes">
          <Header as="h1">My Notes</Header>
          <Card.Group>
            <Card
              key="1"
              as={Link}
              to="/mynote/1"
              fluid
              color="red"
            >
            <Card.Content
                header="Virtual Memory"
                description={
                    <Label color="orange">
                        2019/11/20
                        <Label.Detail>Feedbacks received</Label.Detail>
                    </Label>
                }>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        from 'System Programming'
                    </a>
                </Card.Content>
            </Card>
              <Card
                  key="2"
                  as={Link}
                  to="/mynote/2"
                  fluid
                  color="orange"
              >
                  <Card.Content
                      header="Memory Hierarchy"
                      description={
                          <Label color="orange">
                              2019/11/20
                              <Label.Detail>Feedbacks received</Label.Detail>
                          </Label>
                      }>
                  </Card.Content>
                  <Card.Content extra>
                      <a>
                          from 'System Programming'
                      </a>
                  </Card.Content>
              </Card>
              <Card
                  key="3"
                  as={Link}
                  to="/mynote/3"
                  fluid
                  color="yellow"
              >
                  <Card.Content
                      header="Merge Sort"
                      description={
                          <Label color="orange">
                              2019/11/20
                              <Label.Detail>Feedbacks received</Label.Detail>
                          </Label>
                      }>
                  </Card.Content>
                  <Card.Content extra>
                      <a>
                          from 'Data Structure'
                      </a>
                  </Card.Content>
              </Card>
          </Card.Group>
        </div>
      </div>
    );
  */

      let defaultPage = (
          <div className="container">
              <div className="row">
                <h2>Welcome to CoNote</h2>
              </div>
          </div>
      )

      return (
          <div>
              {this.props.isLoggedIn ? <MyPage /> : defaultPage}
          </div>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn : state.authentication.status.isLoggedIn
    }
}

export default connect(mapStateToProps)(Home);
