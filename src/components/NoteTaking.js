import React from "react";
import {Link, useParams} from "react-router-dom";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { WriteFeedback } from "./WriteFeedback";
import {Button, Header} from "semantic-ui-react";

function NoteTaking() {
    let url;
    if(global.feedbacked){
        url ="/course/"+global.lastcourse;
    }else{
        url = "/nocourse/"+global.lastcourse;
    }
  return (
    <div className='NoteTaking'>
      <h1>Write what you learned</h1>

      <div className='Editor'>
        <Editor
          tools={EDITOR_JS_TOOLS}
          onReady={() => console.log('Start Editor 1!')}
          onData={e => console.log('data', e)}
          data={{
            time: 1569611146631,
            blocks: [
              {
                type: 'header',
                data: {
                  text: 'Lecture Topic',
                  level: 1,
                },
              },

              {
                type: 'paragraph',
                data: {
                  text: 'Write here!',
                },
              },
,
            ],
            version: '2.15.0',
          }}
        />
        <Button
            as={Link} to={url}
            attached="bottom"
            content="Submit"
        />
      </div>

      <div>

      </div>
    </div>

  )
}

export default NoteTaking
