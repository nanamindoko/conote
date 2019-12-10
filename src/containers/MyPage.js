import React from 'react';
import { List, NewCourse } from '../components';
import { noteListRequest, notePostRequest} from "../actions/note";
import { courseListRequest, coursePostRequest} from "../actions/course";
import { connect } from "react-redux"

class MyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
        this.handlePost = this.handlePost.bind(this)
    }

    openModal = () => {
        this.setState({ isModalOpen: true});
    }

    closeModal = () => {
        this.setState( {isModalOpen: false});
    }

    handlePost(contents) {
        return this.props.coursePostRequest(contents).then(
            () => {
                if(this.props.postStatus.status === "SUCCESS") {
                    //toast
                    console.log("SUCCESS")
                    this.closeModal();
                } else {
                    //toast
                    console.log("FAILED POSTING")
                }
            }
        )
    }

    render() {
        // MockData : to be replaced by AJAX request
        var mockData = [
            {
                "_id": "578b958ec1da760909c263f4",
                "writer": "velopert",
                "contents": "Testing",
                "__v": 0,
                "is_edited": false,
                "date": {
                    "edited": "2016-07-17T14:26:22.428Z",
                    "created": "2016-07-17T14:26:22.428Z"
                },
                "starred": []
            },
            {
                "_id": "578b957ec1da760909c263f3",
                "writer": "velopert",
                "contents": "Data",
                "__v": 0,
                "is_edited": false,
                "date": {
                    "edited": "2016-07-17T14:26:06.999Z",
                    "created": "2016-07-17T14:26:06.999Z"
                },
                "starred": []
            },
            {
                "_id": "578b957cc1da760909c263f2",
                "writer": "velopert",
                "contents": "Mock",
                "__v": 0,
                "is_edited": false,
                "date": {
                    "edited": "2016-07-17T14:26:04.195Z",
                    "created": "2016-07-17T14:26:04.195Z"
                },
                "starred": []
            },
            {
                "_id": "578b9579c1da760909c263f1",
                "writer": "velopert",
                "contents": "Some",
                "__v": 0,
                "is_edited": false,
                "date": {
                    "edited": "2016-07-17T14:26:01.062Z",
                    "created": "2016-07-17T14:26:01.062Z"
                },
                "starred": []
            },
            {
                "_id": "578b9576c1da760909c263f0",
                "writer": "velopert",
                "contents": "Create",
                "__v": 0,
                "is_edited": false,
                "date": {
                    "edited": "2016-07-17T14:25:58.619Z",
                    "created": "2016-07-17T14:25:58.619Z"
                },
                "starred": []
            },
            {
                "_id": "578b8c82c1da760909c263ef",
                "writer": "velopert",
                "contents": "blablablal",
                "__v": 0,
                "is_edited": false,
                "date": {
                    "edited": "2016-07-17T13:47:46.611Z",
                    "created": "2016-07-17T13:47:46.611Z"
                },
                "starred": []
            }
        ];


        const courseList = (<List mode={"course"} data={this.props.courseData} currentUser={this.props.currentUser}/>);
        const noteList = (<List mode={"note"} data={this.props.noteData} currentUser={this.props.currentUser}/>);


        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <h2>My Courses</h2>
                        </div>
                        <div className="row">
                            <button type="button" className="btn btn-primary" onClick={this.openModal}>New Course</button>
                        </div>
                        <NewCourse isOpen={this.state.isModalOpen} close={this.closeModal} onPost={this.handlePost}  />
                        <div className="row">
                            {courseList}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <h2>My Notes</h2>
                        </div>
                        <div className="row">
                            {noteList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn : state.authentication.status.isLoggedIn,
        currentUser : state.authentication.status.currentUser,
        noteData : state.note.list.data,
        courseData : state.course.list.data,
        postStatus : state.course.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        noteListRequest: (isInitial, listType, id, username) => {
            return dispatch(noteListRequest(isInitial, listType, id, username));
        },
        courseListRequest: (isInitial, listType, id, username) => {
            return dispatch(courseListRequest(isInitial, listType, id, username));
        },
        coursePostRequest : (contents) => {
            return dispatch(coursePostRequest(contents));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);