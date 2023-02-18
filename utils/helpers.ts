// normalize template literals to regular string for class name readability
export const tup = (
  tempLiteral: TemplateStringsArray,
  ...stringElems: any[]
) => {
  return tempLiteral
    .reduce((acc, curr, index) => {
      const stringElem = stringElems[index];
      if (typeof stringElem === 'string') {
        return `${acc}${curr}${stringElem}`;
      }
      return `${acc}${curr}`;
    }, '')
    .trim()
    .replace(/\s{2,}/g, ' ');
};
