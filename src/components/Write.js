/*
import React from "react";
import {Link, useParams} from "react-router-dom";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { WriteFeedback } from "./WriteFeedback";
import {Button, Header} from "semantic-ui-react";

function Write() {
    let url;
    url ="/course/"+global.lastcourse;
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

export default Write
 */

import React from 'react';
import PropTypes from 'prop-types';

class Write extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contents: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleChange(e) {
        this.setState({
            contents: e.target.value
        });
    }

    handlePost() {
        let contents = this.state.contents;

        this.props.onPost(contents).then(
            () => {
                this.setState({
                    contents: ""
                });
            }
        );
    }

    render() {
        const submitButton = (
            <button className="btn btn-primary" type="button" onClick={this.handlePost}>Submit</button>
        )

        return (
            <div className="col-6">
                <textarea
                    className="form-control"
                    rows="20"
                    id="comment"
                    value={this.state.contents}
                    onChange={this.handleChange}></textarea>
                {submitButton}
            </div>
        )
    }
}

Write.propTypes = {
    onPost: PropTypes.func
};

Write.defaultProps = {
    onPost: (contents) => {
        console.error('Post function not defined');
    }
}

export default Write;