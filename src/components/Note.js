import React from "react";
import { useParams } from "react-router-dom";
import Editor from "@stfy/react-editor.js";
import { EDITOR_JS_TOOLS } from "../editor-tools";
import { WriteFeedback } from "./WriteFeedback";
import { Header } from "semantic-ui-react";

export function Note() {
  let { id } = useParams();
  var title = "";
  var note_content = "";
  var second_cont = "";
  var third_cont = "";
  global.noteid = id;
  if (id==1){
    title = "Virtual Memory by me";
    note_content = "Why virtual memory?\ - Uses main memory efficiently\ - Simplifies memory management\ - Isolates address spaces";
    second_cont = "Enabling data structure: page table\ - page table is an array of page table entries(PTEs) that maps virtual pages to physical pages.";
    third_cont = " * page hit: reference to VM word that is in physical memory (DRAM cache hit)\ * page fault: reference to VM word that is not in physical memory (DRAM cache miss)\ - Handling Page Fault\   page miss causes page fault (an exception) and page fault hander selects a victim to be evicted. After then, offending instruction is restarted: PAGE HIT!";
  }
  else if (id==2){
    title = "Memory Hierarchy by me";
    note_content = "Memory Hierarchy / Cache Memories\nRAM: Random Access Memory\n";
    second_cont = "Key features: RAM is traditionally packaged as a chip.\nBasic Storage unit is normally a cell.\n Multiple RAM chips form a memory";
    third_cont = "DRAM and SRAM are volatile memories, and there is also Nonvolatile memories\n - ROM: Read-only memory\n - PROM: Programmable ROM\n - EPROM: Eraseable PROM\n and so on..";
  }
  else if (id==3){
    title = "Dynamic Memory Allocation by Hyosin";
    note_content = "Dynamic Memory Allocation - Basic Concepts\n - VM areas initialized by associating them with disk objets. It is called memory mapping. \n Area can be backed by :\n - Regular file on disk: initial page bytes come frome a section of a file\n - Anonymous file: First fault will allocate a physical page full of 0's\n - Once the page is written to (dirtied), it is like any other page";
    second_cont = "* Dirty pages are copied back and forth between memory and a special <SWAP FILE>\n";
    third_cont = "<Summary>\n - VM requires hardware support\n  Exception handling mechanism\n  TLB\n  Various control registers\n\n - VM requires OS support\n  Managing page tables\n  Implementing page replacement policies\n  Managing file system\n\n - VM enables many capabilities\n  Loading programs from memory\n  Forking processes\n  Providing memory protection";
  }
  else if (id == 4){
    title = "Merge Sort by me";
    note_content = "Merge Sort\n - merge sort is an efficient, general-purpose, comparison based sorting algorithm. It is a divide and conquer algorithm that was invented by John von Neumann in 1945";
    second_cont = "Conceptually, it works as follows\n  1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted) \n  2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.";
    third_cont = "Its time complexity is O(nlogn) \n Q1. I missed the space complexity part. Can any one tell me what is the space complexcity of merge sort?";
  }  
  else if (id == 5){
    title = "Red Black Tree by David";
    note_content = "Red Black Tree\n - It is a kind of self-balancing binary search tree in computer science.\n Each node of the binary tree has an extra bit, and that bit is often interpreted as the color (red or block) of the node. These color bits are used to ensure the tree remains approximately balanced during insertions and deletions.";
    second_cont = "<Properties>\n 1. Each node is either red or black.\n - The root is black. This rule is sometimes omitted. Since the root can always be changed from red to black, but not necessarily vice versa, this rule has little effect on analysis.\n 3. All leaves (NIL) are black\n 4. If a node is red, then both its children are black.\n 5. Every path from a given node to any of its descendant NIL nodes contains the same number of black nodes. ";
    third_cont = "Although insert and delete operation are complicated, their times remain O(log n)";
  }
  else if (id==6){
    title = "Dijkstra's algorithm by John";
    note_content = "Dijkstra's algorithm\n It is an algorithm for finding the shortest paths between nodes in a graph, wich may represnet, for exmaple, road networks. I was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later";
    second_cont = "<Algorithm>\n 1. Mark all nodes unvisited. Create a set of all the unvisited nodes called the unvisited set.\n 2. Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes. Set the initial node as current.\n 3. For the current node, consider all of its unvisited neighbours and calculate their tentative distances through the current node. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one.\n 4. When we are done considering all of the unvisited neighbours of the current node, mark the current node as visited and remove it from the unvisited set. A visited node will never be checked again.\n 5. the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the unvisited set is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop.\n 6. Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new \"current node\", and go back to step 3.";
    third_cont = "";
  }
  else if (id==7){
    title = "Molecular Orbital by Sunghee";
    note_content = "Lecture 6 : Quantum Mechanics and Molecular Structure";
    second_cont = "Born-Oppenheimer Approximation -> used to observe the wave function of orbital\nAssume that the nuclei is fixed at a specific set of positions. \nSolve Schrodinger's\nequation for the electrons and obain the energy levels and wave functions. \nMove the position of nuclei and repeat the calculation. ";
    third_cont = "Continued on the next note";
  }
  else if (id == 8){
    title = "Molecular Orbital(2) by Sunghee";
    note_content = "Lecture 6(2) : Quantum Mechanics and Molecular Structure";
    second_cont = "Molecular Orbital -> each of the MO is the wave function of one-electron\n Four labels summarize the energy and the shape of each wave function \ninteger : indexing the wave functions that are same symmetry type\ngreek letter : expressing the amplitude of the wave function\n\nex. sigma : having cylindrical symmetry , pi : having a nodal plane that contains the internuclear axis\ng or w : showing how the wave function changes as we invert our point through the center\nex. g : symmetric, u : antisymmetric\n* : observing the change of sign when the point of ovservation is reflected";
    third_cont = "LCAO method -> the method that generate the best approximation to each type of\nmolecular orbital\nIn this method, selecting wave functions of random atomic\norbitals and using linear combinations";
  }
  else if (id == 9){
    title = "Equilibrium by Hyungbin";
    note_content = "Lecture 14 : Chemical Equilibrium";
    second_cont = "Equilibrium State -> the rate of forward reaction and backward reaction is equal\nWhen the reaction became equilibrium, there is no macroscopic evidence of change\nAlso, the equilibrium state is reached by spontaneous processes\nThis process is regardless of direction of approach";
    third_cont = "Principle of Le Chatelier \n-> A system in equilibrium that is subject to a stress will react in a way that tends to counteract the stress\nIt is used to predict the behavior of a system due to changes in pressure, temperature, or concentration. \nChanging the Concentration of a reactant : increasing the concentration of reactants will drive the reaction to the right. \nChanging the Concentration of a product : increasing the concentration of products will drive the reaction to the left. \nChanging the volume of pressure : when the volume decreases or the pressure increases, the equilibrium will shift to favor the side the reaction that involes fewer moles of gas.";
  }  else if (id =="NeedFeedback1"){
    title = "Dijkstra's algorithm by John";
    note_content = "Dijkstra's algorithm\n It is an algorithm for finding the shortest paths between nodes in a graph, wich may represnet, for exmaple, road networks. I was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later";
    second_cont = "<Algorithm>\n 1. Mark all nodes unvisited. Create a set of all the unvisited nodes called the unvisited set.\n 2. Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes. Set the initial node as current.\n 3. For the current node, consider all of its unvisited neighbours and calculate their tentative distances through the current node. Compare the newly calculated tentative distance to the current assigned value and assign the smaller one.\n 4. When we are done considering all of the unvisited neighbours of the current node, mark the current node as visited and remove it from the unvisited set. A visited node will never be checked again.\n 5. the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the unvisited set is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop.\n 6. Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new \"current node\", and go back to step 3.";
    third_cont = "";
  }else if (id =="NeedFeedback2"){
    title = "Dynamic Memory Allocation by Hyosin";
    note_content = "Dynamic Memory Allocation - Basic Concepts\n - VM areas initialized by associating them with disk objets. It is called memory mapping. \n Area can be backed by :\n - Regular file on disk: initial page bytes come frome a section of a file\n - Anonymous file: First fault will allocate a physical page full of 0's\n - Once the page is written to (dirtied), it is like any other page";
    second_cont = "* Dirty pages are copied back and forth between memory and a special <SWAP FILE>\n";
    third_cont = "<Summary>\n - VM requires hardware support\n  Exception handling mechanism\n  TLB\n  Various control registers\n\n - VM requires OS support\n  Managing page tables\n  Implementing page replacement policies\n  Managing file system\n\n - VM enables many capabilities\n  Loading programs from memory\n  Forking processes\n  Providing memory protection";
  }else if (id =="NeedFeedback3"){
    title = "Equilibrium";
    note_content = "Lecture 14 : Chemical Equilibrium";
    second_cont = "Equilibrium State -> the rate of forward reaction and backward reaction is equal\nWhen the reaction became equilibrium, there is no macroscopic evidence of change\nAlso, the equilibrium state is reached by spontaneous processes\nThis process is regardless of direction of approach";
    third_cont = "Principle of Le Chatelier \n-> A system in equilibrium that is subject to a stress will react in a way that tends to counteract the stress\nIt is used to predict the behavior of a system due to changes in pressure, temperature, or concentration. \nChanging the Concentration of a reactant : increasing the concentration of reactants will drive the reaction to the right. \nChanging the Concentration of a product : increasing the concentration of products will drive the reaction to the left. \nChanging the volume of pressure : when the volume decreases or the pressure increases, the equilibrium will shift to favor the side the reaction that involes fewer moles of gas.";
  }
  else{
    title = "";
    note_content = "";
    second_cont = "";
    third_cont = "";
  }
  return (
    <div>
      <div className="Note">
        <Header as="h1">{title}</Header>
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
                  text: ``,
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
                  text: "",
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
                  text: "",
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
