import React, { Component } from "react";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { Button, Header, Rating } from "semantic-ui-react";
import firebase from "../firebase";

export class WriteFeedback extends Component {
  state = {
    noteId: this.props.id
  };

  handleRate = (e, { rating }) => this.setState({ rating });
  handleData = data => this.setState({ data });
  render() {
    const db = firebase.firestore();
    const data = this.state.data;
    const noteId = this.state.noteId;
    return (
      <div className="Feedback">
        <Header as="h1">Write a Feedback</Header>

        <Editor
          tools={EDITOR_JS_TOOLS}
          onReady={() => console.log("Start Editor 2!")}
          onData={this.handleData}
          data={{
            time: 1569611146631,
            blocks: [
              {
                type: "paragraph",
                data: {
                  text: "Write here!"
                }
              }
            ],
            version: "2.15.0"
          }}
        />
        <Header as="h1">Rate this note!</Header>
        <Rating
          icon="star"
          size="huge"
          defaultRating={3}
          maxRating={5}
          onRate={this.handleRate}
        />
        <div>
          <Button
            attached="bottom"
            content="Submit"
            onClick={() =>
              db
                .collection("feedbacks")
                .add({
                  id: noteId,
                  data: data,
                  rating: this.state.rating
                })
                .then(function(docRef) {
                  console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                  console.error("Error adding document: ", error);
                })
            }
          />
        </div>
      </div>
    );
  }
}

export default WriteFeedback;
