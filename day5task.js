//task1
let str1 = "   Hai";
let str2 = "All  ";
let trimStr1 = str1.trimStart();
let trimStr2 = str2.trimEnd();
let result = trimStr1.concat(" ", trimStr2).toUpperCase();
console.log(result); //output HAI ALL
//task2
let str = "bhargavidaggubati";
let middlePortion = str.slice(6, 12);
console.log(middlePortion); //vidagg
let lastIndex = middlePortion.indexOf("g");
console.log(lastIndex);
let LowerCase = middlePortion.toLowerCase();
console.log(LowerCase);
//task3
let s1 = "b";
let s2 = "hai";
let result1 = s1.concat(" ", s2).toUpperCase();
console.log(result1); // B HAI
let result2 = result1[result1.length - 2];
console.log(result2); // output A
//task4
let Str1 = "good";
let Str2 = "morning";
let resultStr1 = Str1.slice(0, 3); // "goo"
let resultStr2 = Str2.slice(-3); // "ing"
let combinedResult = resultStr1.concat(" ", resultStr2); // "gooing"
let finalResult =
  combinedResult.charAt(0).toUpperCase() +
  combinedResult.slice(1, -1) +
  combinedResult.charAt(combinedResult.length - 1).toUpperCase();
console.log(finalResult); // Output: "GooInG"
//task5
let S1 = "   good morning  ";
let resultTrim = S1.trim();
console.log(resultTrim); // Output: "good morning"
let firstCharTrim = resultTrim.charAt(0).toUpperCase();
let lastCharTrim = resultTrim.charAt(resultTrim.length - 1).toUpperCase();
let specificPart = resultTrim.slice(1, 11);
let Result = firstCharTrim + specificPart + lastCharTrim;
console.log(Result);
//task6
let sentence = "hello there, how are you";
let wordToFind = sentence.split(" ");
let index = wordToFind.indexOf("are");
console.log(index); //output 17
