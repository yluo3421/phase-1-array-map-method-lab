const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  function upperEachWord(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === " ") {
        newStr += " ";
        newStr += str.charAt(i + 1).toUpperCase();
        i = i + 1;
      }
      else if (i === 0) {
        newStr += str.charAt(i).toUpperCase();
      }
      else {
        newStr += str.charAt(i)
      }
    }
    return newStr;
  }
  



  //for (let i = 0; i < tutorials.length; i++) {
  //  tutorials[i] = upperEachWord(tutorials[i]);
  //}

  let newTutorials = tutorials.map((str) => upperEachWord(str));
  
  return newTutorials;
}
