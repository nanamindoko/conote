import React, { Component } from "react";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { Button, Header, Icon, Rating } from "semantic-ui-react";

export class Feedback extends Component {
  state = {};

  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating });

  render() {
    return (
      <div className="Feedback">
        <Header as="h1">Rate this note!</Header>
        <Rating
          icon="star"
          size="huge"
          defaultRating={3}
          maxRating={5}
          onRate={this.handleRate}
        />
        <Editor
          tools={EDITOR_JS_TOOLS}
          onReady={() => console.log("Start Editor 2!")}
          onData={e => console.log("data", e)}
          data={{
            time: 1569611146631,
            blocks: [
              {
                type: "header",
                data: {
                  text: `Write a feedback!`,
                  level: 1
                }
              },
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
        <Button center>Submit</Button>
      </div>
    );
  }
}

export default Feedback;
