import prompt from "../Prompt/prompt.js";
import { noteValidation } from "./noteValidation.js";

export function getNotes() {
  const notes = [];
  const count = parseInt(prompt("How many notes will you enter? : "));
  
  for (let i = 0; i < count; i++) {
   let note;
      do {
        note = parseFloat(prompt(`Enter note #${i + 1}: `));
        if (!noteValidation(note)) {
        console.log("⚠️ Please enter a valid note between 0 and 100.");
       }
      } while (!noteValidation(note));
          notes.push(note);

  }

  return notes;
}