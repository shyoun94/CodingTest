function isBracketMatching(bracket) {
  const stack = [];

  const openingBrackets = ['{', '(', '['];
  const closingBrackets = ['}', ')', ']'];

  for (let i = 0; i < bracket.length; i++) {
    const char = bracket[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
      if (stack.length === 0 || stack[stack.length - 1] !== matchingOpeningBracket) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

const bracket = '{([[[{{{{{}}]}}]]])}';
const isMatching = isBracketMatching(bracket);

console.log(isMatching);