const word = '00000111110101001111100001001';

let currentChain = 0;
let longestChain = 0;

for (let i = 0; i < word.length; i++) 
{ //if letter conatains 1 then increament curren chain & compare with longest chain
  if (word[i] === '1') {
    currentChain++;
    if (currentChain > longestChain) {
      longestChain = currentChain;
    }
  } else {
    // else set current chain as 0, As chain is broken
    currentChain = 0;
  }
}

console.log('Longest chain of letters:', longestChain);
