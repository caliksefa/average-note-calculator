export function printNotes(notes) {
  console.log("\nEntered Notes:");
  for (let i = 0; i < notes.length; i++) {
    console.log(`  ${i + 1}. note: ${notes[i]}`);
  }
}