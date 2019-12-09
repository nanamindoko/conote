import React from "react";
import { useParams } from "react-router-dom";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { WriteFeedback } from "./WriteFeedback";
import { Header } from "semantic-ui-react";

export function Note() {
  let { id } = useParams();
  var note_content = "";
  var second_cont = "";
  var third_cont = "";
  if (id==1){
    note_content = "Why virtual memory?\ - Uses main memory efficiently\ - Simplifies memory management\ - Isolates address spaces";
    second_cont = "Enabling data structure: page table\ - page table is an array of page table entries(PTEs) that maps virtual pages to physical pages.";
    third_cont = " * page hit: reference to VM word that is in physical memory (DRAM cache hit)\ * page fault: reference to VM word that is not in physical memory (DRAM cache miss)\ - Handling Page Fault\   page miss causes page fault (an exception) and page fault hander selects a victim to be evicted. After then, offending instruction is restarted: PAGE HIT!";
  }
  else if (id==2){
    note_content = "Memory Hierarchy / Cache Memories\nRAM: Random Access Memory\n";
    second_cont = "Key features: RAM is traditionally packaged as a chip.\nBasic Storage unit is normally a cell.\n Multiple RAM chips form a memory";
    third_cont = "DRAM and SRAM are volatile memories, and there is also Nonvolatile memories\n - ROM: Read-only memory\n - PROM: Programmable ROM\n - EPROM: Eraseable PROM\n and so on..";
  }
  else if (id == 3){
    note_content = "Merge Sort\n - merge sort is an efficient, general-purpose, comparison based sorting algorithm. It is a divide and conquer algorithm that was invented by John von Neumann in 1945";
    second_cont = "Conceptually, it works as follows\n  1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted) \n  2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.";
    third_cont = "Its time complexity is O(nlogn)";
  }  
  else if (id == 4){
    note_content = "Red Black Tree\n - It is a kind of self-balancing binary search tree in computer science.\n Each node of the binary tree has an extra bit, and that bit is often interpreted as the color (red or block) of the node. These color bits are used to ensure the tree remains approximately balanced during insertions and deletions.";
    second_cont = "<Properties>\n 1. Each node is either red or black.\n - The root is black. This rule is sometimes omitted. Since the root can always be changed from red to black, but not necessarily vice versa, this rule has little effect on analysis.\n 3. All leaves (NIL) are black\n 4. If a node is red, then both its children are black.\n 5. Every path from a given node to any of its descendant NIL nodes contains the same number of black nodes. ";
    third_cont = "Although insert and delete operation are complicated, their times remain O(log n)";
  }
  else if (id == 5){
    note_content = "";
    second_cont = "";
    third_cont = "";
  }
  else if (id == 6){
    note_content = "";
    second_cont = "";
    third_cont = "";
  }
  else{
    note_content = "";
    second_cont = "";
    third_cont = "";
  }
  return (
    <div>
      <div className="Note">
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
                  text: `${note_content}`
                }
              },
              {
                type: "header",
                data: {
                  text: "2",
                  level: 3
                }
              },
              {
                type: "paragraph",
                data: {
                  text: `${second_cont}`
                }
              },
              {
                type: "header",
                data: {
                  text: "3",
                  level: 3
                }
              },
              {
                type: "paragraph",
                data: {
                  text: `${third_cont}`
                }
              }
            ],
            version: "2.15.0"
          }}
        />
      </div>
      <WriteFeedback id={id} />
    </div>
  );
}

export default Note;
