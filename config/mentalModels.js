export const mentalModels = [
  {
    title: "How to think about strings?",
    description: `
    <div>
    <p>When we refer to the type of a value, it is a shortcut to refer to different methods & properties that value has.</p>
    <br/>
    <p>For ex: "red" has different methods & properties like charAt, concat, indexOf, e.t.c.</p>
    <br/>
    <p>But instead of saying out all methods and properties we can just say "red" is a string.</p>
    </div>
    `,
    gif: "/images/mentalModels/string2.gif",
  },
  {
    title: "Difference b/w var, let, & const.",
    description: `<p>The above illustration clearly shows Hoisting, Re-Initialization, Scope, and Re-Assignment of var, let, and const.</p>`,
    gif: "/images/mentalModels/letvarconst.gif",
  },
  {
    title: "Reduce, reduces an array to any data type.",
    description: `
    <p>Think of reduce as a method to convert an Array into any desired data-type.</p>
    <br/>
    <p>For example an Array of numbers can be converted into sum of all numbers which is a number. Array to Number.</p>
    <br/>
    <p>All other Array methods like map and filter modifies the element of array but at last returns an Array itself, no other data-type.</p>
    `,
    gif: "/images/mentalModels/reduce.gif",
  },
  {
    title: "Copy by value V/S Copy by reference.",
    description: `
    <p>string2 copies the value of string1,
    <br/>
    and when value of string1 changes it does not affect the copied value
    <br/>
    of string2 because both string1 and string2 refer to different points in memory.</p>
    <br/>
    <p>
    person2 copies the reference of person1,
    <br/>
    so when person1 changes it also affects person2 because both person1 and person2
    <br/>
    refer to the same point in memory.
    </p>
    `,
    gif: "/images/mentalModels/copybyvaluevsreference.gif",
  },
  {
    title: "== V/S ===. What's the difference?",
    description: `
    <p>● Loose equality (==) checks for value only.</p>
    <p>● Strict equality (===) checks for value as well as DataType.</p>
    <br/>
    <p>In general, strict equality should be preferred due to it being easier to predict.
    <br/><br/>
    However, loose equality can be useful for checking against null and undefined at once with
    <br/>
    "value == null".</p>
    `,
    gif: "/images/mentalModels/equalitycheck.gif",
  },
  {
    title: "The only 6 falsy values in Js.",
    description: `
    <p>Any value that evaluates to false in Boolean Context is falsy value.</p>
    <br/>
    <p>There are only 6 falsy values.
    <br/>
    Everything else (other than these 6 values) evaluates to
be true in a boolean context.</p>
    `,
    gif: "/images/mentalModels/6falsyvalues.gif",
  },
  {
    title: "Rest and Spread operators.",
    description: `
    <p>Rest operator converts the arguments into array.</p>
    <br/>
    <p>Spread operator spreads the array back into comma separated arguments.</p>
    `,
    gif: "/images/mentalModels/restspread.gif",
  },
  {
    title: "The prototypal chain.",
    description: `
    <p>When a property is not found in an object, it looks for it down in the prototypal chain.</p>
    <br/>
    <p>This is the prototypal nature of an object.</p>
    `,
    gif: "/images/mentalModels/prototypalchain.gif",
  },
];
