function convertToRoman(num) {
  if (num === 0) return '';
    
    // Roman numeral values in descending order (including subtractive notation)
    const romanNumerals = [
        ['M',  1000],
        ['CM', 900],
        ['D',  500],
        ['CD', 400],
        ['C',  100],
        ['XC', 90],
        ['L',  50],
        ['XL', 40],
        ['X',  10],
        ['IX', 9],
        ['V',  5],
        ['IV', 4],
        ['I',  1]
    ];
    
    let result = '';
    let n = num;
    
    // Go through each roman numeral value
    for (let i = 0; i < romanNumerals.length; i++) {
        const symbol = romanNumerals[i][0];
        const value = romanNumerals[i][1];
        
        // Add as many of this symbol as possible
        while (n >= value) {
            result += symbol;
            n -= value;
        }
    }
    
    return result;

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
