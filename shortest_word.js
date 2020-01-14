/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//Restate the problem in your own words.
//What are the inputs?
//What are the outputs?
//Can the outputs be determined from the inputs?  Do I already have enough information to solve the problem?  What if you don't have enough information from the user?
//How should you label the important pieces of data that are a part of the problem?

const findShort = (str) => {
    let arr = str.split(" ");
    let answer = str.length;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length < answer) {
        answer = arr[i].length;
      }
    }
  
    return answer;
  }