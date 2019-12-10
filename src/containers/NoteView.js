import React from 'react';
import { connect } from 'react-redux';
import { Write } from '../components';
import { notePostRequest} from "../actions/note";


/*
View for your
Note | Feedback
 */
class NoteView extends React.Component {
    constructor(props) {
        super(props);
        this.handlePost = this.handlePost.bind(this);
    }

    handlePost(contents) {
        return this.props.notePostRequest(contents).then(
            () => {
                if(this.props.postStatus.status == "SUCCESS") {
                    //toast
                    console.log("SUCCESS")
                } else {
                    //toast
                    console.log("FAILED POSTING")
                }
            }
        )
    }

    render () {
        const writeNote = (
            <Write onPost={this.handlePost}/>
        );

        return (
            <div className="container">
                <div className="row">
                    { this.props.isLoggedIn ? writeNote : undefined }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn : state.authentication.status.isLoggedIn,
        postStatus : state.note.post
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        notePostRequest : (contents) => {
            return dispatch(notePostRequest(contents));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteView);