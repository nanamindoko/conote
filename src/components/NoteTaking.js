import React from 'react'
import './NoteTaking.css'
import Editor from '@stfy/react-editor.js'
import { EDITOR_JS_TOOLS } from '../editor-tools'

function NoteTaking() {
  return (
    <div className='NoteTaking'>
      <h1>Write what you learned</h1>
      <div className='Outline'>
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
                  text: 'Lecture Outline',
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
                  text:
                    'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort.[2] Bubble sort can be practical if the input is in mostly sorted order with some out-of-order elements nearly in position.',
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
                  text:
                    'Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages.',
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
                  text:
                    'In computer science, the time complexity is the computational complexity that describes the amount of time it takes to run an algorithm. Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Thus, the amount of time taken and the number of elementary operations performed by the algorithm are taken to differ by at most a constant factor.',
                },
              },
            ],
            version: '2.15.0',
          }}
        />
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

export default NoteTaking
