function normalizeTextAnswer(text) {
  return text
    .toLowerCase()
    .replace(/^(a |an |the |my |your )/, "")     // remove common prefixes
    .replace(/^the letter /, "")                 // special case: 'the letter x'
    .replace(/[^a-z0-9]/g, "")                   // remove punctuation
    .trim();
}

function extractNumber(text) {
  const converted = wordsToNumbers(text.toLowerCase()); // 'twenty-two' → 22
  const str = String(converted ?? text);
  const match = str.match(/\d+/);
  return match ? parseInt(match[0]) : null;
}

/**
 * @param {string} userInput - User's answer from input
 * @param {string|number} correctAnswer - Answer from API (can be number or text)
 */
export function isSmartAnswerCorrect(userInput, correctAnswer) {
  if (!userInput || !correctAnswer) return false;

  const ApiAnswer = normalizeTextAnswer(String(correctAnswer));
  const UserInputAnswer = normalizeTextAnswer(userInput);

  // text
  if (
    UserInputAnswer === ApiAnswer ||
    UserInputAnswer.includes(ApiAnswer)
  ) {
    return true;
  }

  // Match numbers if answer is numeric (e.g., "22 times" → 22)
  const correctNum = extractNumber(correctAnswer);
  const userNum = extractNumber(userInput);

  if (correctNum !== null && userNum === correctNum) {
    return true;
  }

  return false;
}