// A creative experiment: random poetry generator!

const nouns = ["star", "river", "dream", "echo", "shadow"];
const verbs = ["whispers", "flows", "shines", "drifts", "calls"];
const adjectives = ["silent", "endless", "brilliant", "soft", "hidden"];

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePoem() {
  return `The ${random(adjectives)} ${random(nouns)} ${random(verbs)}.\nThrough ${random(adjectives)} nights and ${random(adjectives)} days.`;
}

console.log(generatePoem());
