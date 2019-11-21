import React from "react";
import { useParams } from "react-router-dom";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { Container } from "semantic-ui-react";

export function Note() {
  let { id } = useParams();
  return (
    <Container>
      <Editor
        tools={EDITOR_JS_TOOLS}
        onReady={() => console.log("Start Editor 1!")}
        onData={e => console.log("data", e)}
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
              type: "header",
              data: {
                text: "Sorting Algorithms",
                level: 2
              }
            },
            {
              type: "header",
              data: {
                text: "Bubble sort",
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
    </Container>
  );
}

export default Note;