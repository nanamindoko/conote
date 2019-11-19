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
            <h3>My Note 1</h3>
          </li>
          <li>
            <h3>My Note 2</h3>
          </li>
          <li>
            <h3>My Note 3</h3>
          </li>
          <li>
            <h3>My Note 4</h3>
          </li>
          <li>
            <h3>My Note 5</h3>
          </li>
          <li>
            <h3>My Note 6</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

ReactDOM.render(Userpage(), document.getElementById('userpage'));

export default Userpage
