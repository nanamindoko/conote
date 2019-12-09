import React from "react";
import { useParams } from "react-router-dom";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { WriteFeedback } from "./WriteFeedback";
import { Header } from "semantic-ui-react";
import ReadFeedback from "./ReadFeedback";

export function MyNote() {
  let { id } = useParams();
  return (
    <div>
      <div className="MyNote">
        <Header as="h1">Student Note</Header>
        <Editor
          tools={EDITOR_JS_TOOLS}
          //   onReady={() => console.log("Start Editor 1!")}
          //   onData={e => console.log("data", e)}
          data={{
            time: 1569611146631,
            blocks: [
              {
                type: "header",
                data: {
                  text: `Lecture ${id}`,
                  level: 1
                }
              },
              {
                type: "paragraph",
                data: {
                  text: "Write here!"
                }
              },
              {
                type: "header",
                data: {
                  text: "Insertion sort",
                  level: 3
                }
              },
              {
                type: "paragraph",
                data: {
                  text: "Write here!"
                }
              },
              {
                type: "header",
                data: {
                  text: "Time Complexity",
                  level: 3
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
      </div>
      <ReadFeedback id={id} />
    </div>
  );
}

export default MyNote;
