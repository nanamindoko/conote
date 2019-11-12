import React from 'react'
import './App.css'
import Editor from '@stfy/react-editor.js'
import { EDITOR_JS_TOOLS } from './editor-tools'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div className='Notes'>
        <ul>
          <li>
            <h3>Student Note</h3>
          </li>
          <li>
            <h3>Student Note</h3>
          </li>
          <li>
            <h3>Student Note</h3>
          </li>
          <li>
            <h3>Student Note</h3>
          </li>
          <li>
            <h3>Student Note</h3>
          </li>
          <li>
            <h3>Student Note</h3>
          </li>
        </ul>
      </div>
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
                type: 'header',
                data: {
                  text: 'Sorting Algorithms',
                  level: 2,
                },
              },
              {
                type: 'header',
                data: {
                  text: 'Bubble sort',
                  level: 3,
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'Write here!',
                },
              },
              {
                type: 'header',
                data: {
                  text: 'Insertion sort',
                  level: 3,
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'Write here!',
                },
              },
              {
                type: 'header',
                data: {
                  text: 'Time Complexity',
                  level: 3,
                },
              },
              {
                type: 'paragraph',
                data: {
                  text: 'Write here!',
                },
              },
            ],
            version: '2.15.0',
          }}
        />
      </div>
    </div>
  )
}

export default App
