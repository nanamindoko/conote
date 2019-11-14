import React from 'react'
import './Userpage.css'
import Editor from '@stfy/react-editor.js'
import { EDITOR_JS_TOOLS } from './editor-tools'
import ReactDOM from "react-dom";

function Userpage() {
  return (
    <div className='Userpage'>
      <header className='Userpage-header'>
        <p>
          Edit <code>src/Userpage.js</code> and save to reload.
        </p>
      </header>
      <div className='MyNotes'>
        <ul>
          <li>
            <h3>My Note</h3>
          </li>
          <li>
            <h3>My Note</h3>
          </li>
          <li>
            <h3>My Note</h3>
          </li>
          <li>
            <h3>My Note</h3>
          </li>
          <li>
            <h3>My Note</h3>
          </li>
          <li>
            <h3>My Note</h3>
          </li>
        </ul>
      </div>
      <div className='MyFeedback'>
        <ul>
          <li>
            <h3>My Feedback</h3>
          </li>
          <li>
            <h3>My Feedback</h3>
          </li>
          <li>
            <h3>My Feedback</h3>
          </li>
          <li>
            <h3>My Feedback</h3>
          </li>
          <li>
            <h3>My Feedback</h3>
          </li>
          <li>
            <h3>My Feedback</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

ReactDOM.render(Userpage(), document.getElementById('userpage'));

export default Userpage

