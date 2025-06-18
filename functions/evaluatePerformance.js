// evaluatePerformance.js
export function evaluatePerformance(average) {
    if (average >= 85) {
        return "🌟 You must be a god. 🌟";
    } else if (average >= 70 && average < 85) {
        return "👍 Excellent Performance. Congratulations!";
    } else if (average >= 50 && average < 70) {
        return "You succeeded. But, you should study more...";
    } else {
        return "You could not pass this class. Try again next year.";
    }
}
