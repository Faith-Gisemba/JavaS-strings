let p = "extravaganza";
console.log(p[8],p[9],p[10],p[11]);


// Insert the following string at the fourth index of the below variable:
// "eat"
// const food = "The quick fox jumped over the lazy dog"
const x = "eat";
const food = `The ${x}quick fox jumped over the lazy dog`;
console.log(food);



// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."brown"
// const story= "The quick brown fox jumps over the lazy dog";
const story = "The quick brown fox jumped on the lazy dog"
const s = (story.match(/the/g)|| []).length;
const w =(story.match(/brown/g)|| []).length;
console.log(s);
console.log(w);




// Using JavaScript, find the following words from the following strings:
// 1. "are"
// const string1 = "The pupils are reading in the library";
// 2. "sitting"
// const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the library"
const f = string1.search("are");
console.log(f)

const string2 = "The child was sitting on the table before it fell";
const n = string2.search("sitting");
console.log(n);


// Convert the following strings into the specified format:
// 1. UpperCase: "wonderful"
// 2. LowerCase: "amazing", "UndERneath"
// 3. Title case "A wonderful world"
const k = "wonderful"
const kt = k.toUpperCase();
console.log(kt)

const g = "amazing";
const gt = g.toLowerCase();
console.log(gt);

const y = "undERneath";
const yq = y.toLowerCase();
console.log(yq);

const j = "A wonderful world";
const jp = j.toLocaleLowerCase();
console.log(jp);

