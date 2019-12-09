import React, { Component } from "react";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { Button, Header, Rating } from "semantic-ui-react";

export class ReadFeedback extends Component {
  state = {
    noteId: this.props.id
  };

  handleRate = (e, { rating }) => this.setState({ rating });
  handleData = data => this.setState({ data });
  render() {
    return (
      <div className="ReadFeedback">
        <Header as="h1">Feedback1</Header>

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
                  text: "What a good summary!"
                }
              }
            ],
            version: "2.15.0"
          }}
        />

      </div>
    );
  }
}

export default ReadFeedback;
