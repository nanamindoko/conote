import React, { Component } from "react";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { Button, Header, Rating } from "semantic-ui-react";
import {Link} from "react-router-dom";

export class WriteFeedback extends Component {
  state = {
    noteId: this.props.id
  };

  handleRate = (e, { rating }) => this.setState({ rating });
  handleData = data => this.setState({ data });

  url= "/course/"+global.lastcourse;
  render() {
    return (
      <div className="WriteFeedback">
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
              as={Link} to={this.url}
              attached="bottom"
              content="Submit"
              onClick={() => console.log(this.state)}
          />
        </div>
      </div>
    );
  }
}

export default WriteFeedback;
