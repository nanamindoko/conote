import React, { Component } from "react";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { Button, Header, Rating } from "semantic-ui-react";
import firebase from "../firebase";

export class WriteNote extends Component {
  state = {
    noteId: this.props.id
  };

  handleRate = (e, { rating }) => this.setState({ rating });
  handleData = data => this.setState({ data });
  render() {
    const db = firebase.firestore();
    const data = this.state.data;
    const id = this.state.noteId;
    return (
      <div className="">
        <Header as="h1">Write a Note</Header>

        <Editor
          tools={EDITOR_JS_TOOLS}
          onReady={() => console.log("Start Editor 1!")}
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

        <div>
          <Button
            attached="bottom"
            content="Submit"
            onClick={() =>
              db
                .collection("notes")
                .add({
                  id: 1,
                  name: `Lecture ${1}`,
                  data: data
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

export default WriteNote;
