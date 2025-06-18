export function calculateTotal(notes) {
  let total = 0;
  notes.forEach(note => {
    total += note;
  });
  return total;
}