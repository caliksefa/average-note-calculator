import { getUserName } from "./functions/getUserName.js";
import { getNotes } from "./functions/getNotes.js";
import { printNotes } from "./functions/printInputs.js";
import { calculateTotal } from "./functions/calculateTotal.js";
import { calculateAvg } from "./functions/calculateAvg.js";
import { evaluatePerformance } from "./functions/evaluatePerformance.js";

function main() {
  console.log("🎓 Welcome to Average Note Calculator!");

  const user = getUserName();
  console.log(`\nWelcome ${user}, nice to meet you!`);

  const notes = getNotes();
  printNotes(notes);

  console.log("\nTotal note is being calculated...");
  const total = calculateTotal(notes);
  console.log(`✅ All notes were summed. Total note: ${total}`);
  console.log("\nAverage note is being calculated...");
  const average = calculateAvg(total, notes) ;
  console.log(`✅ Average note was calculated. Average note: ${average}`);
  console.log("\nYour performance is being evaluated...");
  console.log(evaluatePerformance(average));
}


main();
