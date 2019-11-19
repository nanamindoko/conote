import React from 'react'
import './myfeedback.css'
import ReactDOM from "react-dom";

function MyFeedback() {
  return (
    <div className='MyFeedback'>
      <header className='MyFeedback-header'>

      </header>
      <div className='NoteContent'>
        <ul>
          <li>
            <h3>Note Content.</h3>
          </li>
          <li>
            <h3>This lecture is...</h3>
          </li>
        </ul>
      </div>
      <div className='Feedback'>
        <ul>
          <li>
            <h3>Feedback1 2019.11.19.</h3>
            <p></p>
            <h3>Feedback2 2019.11.20</h3>
          </li>
        </ul>
      </div>

    </div>
  )
}

//ReactDOM.render(MyFeedback(), document.getElementById('myfeedback'));

export default MyFeedback

