import React from "react";
import { useParams } from "react-router-dom";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { WriteFeedback } from "./WriteFeedback";
import { Header } from "semantic-ui-react";
import ReadFeedback from "./ReadFeedback";

export function MyNote() {
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
      <ReadFeedback id={id} />
    </div>
  );
}

export default MyNote;
