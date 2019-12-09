import React, { Component } from "react";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { Button, Header, Rating } from "semantic-ui-react";
import {useParams} from "react-router";

export class ReadFeedback extends Component {
  state = {
    noteId: this.props.id
  };
  handleRate = (e, { rating }) => this.setState({ rating });
  handleData = data => this.setState({ data });


  render() {
      const id= global.mynoteid;
      let editor;
      if(id==="1"){
          editor =   <Editor
              tools={EDITOR_JS_TOOLS}
              onReady={() => console.log("Start Editor 2!")}
              onData={this.handleData}
              data={{
                  time: 1569611146631,
                  blocks: [
                      {
                          type: "paragraph",
                          data: {
                              text: "What a good summary! But Second paragraph is too simple to understand.\n I think if you fix that paragraph more detailed, then it would be better!"
                          }
                      }
                  ],
                  version: "2.15.0"
              }}
          />
      }else if (id === "2"){
          editor =   <Editor
              tools={EDITOR_JS_TOOLS}
              onReady={() => console.log("Start Editor 2!")}
              onData={this.handleData}
              data={{
                  time: 1569611146631,
                  blocks: [
                      {
                          type: "paragraph",
                          data: {
                              text: "I think your note has no contents. It is not appropriate note taking for other users.\n I think you have to write all again"
                          }
                      }
                  ],
                  version: "2.15.0"
              }}
          />
      }else{
          editor = editor =   <Editor
              tools={EDITOR_JS_TOOLS}
              onReady={() => console.log("Start Editor 2!")}
              onData={this.handleData}
              data={{
                  time: 1569611146631,
                  blocks: [
                      {
                          type: "paragraph",
                          data: {
                              text: "This note is so simple that I cannot get useful lecture contents from this note. Please write more detailed concepts"
                          }
                      }
                  ],
                  version: "2.15.0"
              }}
          />
      }
    return (
      <div className="ReadFeedback">
        <Header as="h1">Feedback</Header>

          {editor}

      </div>
    );
  }
}

export default ReadFeedback;
