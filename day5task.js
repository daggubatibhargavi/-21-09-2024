//task1
let str1 = "   Hai";
let str2 = "All  ";
let trimStr1 = str1.trimStart();
let trimStr2 = str2.trimEnd();
let result = trimStr1.concat(" ", trimStr2).toUpperCase();
console.log(result); //output HAI ALL
//task2
let str = "bhargavidaggubati";
console.log(str.length);
let middlePortion = str.substring(6, 12);
console.log(middlePortion);
let lastIndex = middlePortion.length - 1;
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
let resultStr1 = Str1.slice(0, 3);
let resultStr2 = Str2.slice(-3);
let fResult = resultStr1.concat(" ", resultStr2);
console.log(fResult); //output goo ing
let firstChar = fResult.charAt(0);
let lastChar = fResult.charAt(fResult.length - 1);
let finalResult = firstChar.concat(" ", lastChar).toUpperCase();
console.log(finalResult); //G G
//task5
let S1 = "   good morning  ";
let resultTrim = S1.trim();
console.log(resultTrim); // Output: "good morning"
let firstCharTrim = resultTrim.charAt(0).toUpperCase();
console.log(firstCharTrim); // Output: "G"
let lastCharTrim = resultTrim.charAt(resultTrim.length - 1).toUpperCase();
console.log(lastCharTrim); // Output: "G"
let specificPart = resultTrim.slice(1, 5);
console.log("Specific Part:", specificPart);
//task6
let sentence = "hello there, how are you";
let wordToFind = "are";
let index = sentence.indexOf(wordToFind);
console.log("Index of the word 'are':", index); //output 17
