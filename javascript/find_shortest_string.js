function findShortestString(arr) {
  // let minWord = arr[0];
  // for (let i = 1; i < arr.length - 1; i++) {
  //   if (arr[i].length < minWord.length) {
  //     minWord = arr[i];
  //   }
  // }
  // return minWord;
  return arr.reduce(
    (shortest, string) => (string.length < shortest.length ? string : shortest),
    arr[0]
  );
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(
    "=>",
    findShortestString(["flower", "juniper", "lily", "dadelion"])
  );

  console.log("expecting dog");
  console.log(findShortestString(["bone", "tabby", "dog", "cat", "food"]));

  // BENCHMARK HERE
  const longInput = [
    "the",
    "of",
    "and",
    "a",
    "to",
    "in",
    "is",
    "you",
    "that",
    "it",
    "he",
    "was",
    "for",
    "on",
    "are",
    "as",
    "with",
    "his",
    "they",
    "I",
    "at",
    "be",
    "this",
    "have",
    "from",
    "or",
    "one",
    "had",
    "by",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "we",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "an",
    "each",
    "which",
    "she",
    "do",
    "how",
    "their",
    "if",
    "will",
    "up",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "so",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "go",
    "see",
    "number",
    "no",
    "way",
    "could",
    "people",
    "my",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part",
  ];
  const start = Date.now();
  for (let i = 0; i < 1000; i++) {
    findShortestString(["hi", "hello", "wassup"]);
    findShortestString(longInput);
  }

  console.log((Date.now() - start) / 2000);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
Problem: find the shortest string in an array of strings. return the first one if multiple have the same shortest length.
let min word equal array[0]
loop through array starting at index 1
  if current element length is less than minimum, set new min word
return min word
*/
