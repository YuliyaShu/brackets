

  
module.exports = 
function check(str, bracketsConfig) {
  let str = '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))';
  let bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
  let opened = [];
  let closed = [];

  for (let n = 0; n < bracketsConfig.length; n++) {
    opened.push(bracketsConfig[n][0]);
    closed.push(bracketsConfig[n][1]);
  };
  
 
  let resultArray = [];
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (opened.includes(str[i])) {
      resultArray.push(str[i]); 
      console.log(resultArray);
      continue;
    };
    for (j = 0; j < opened.length; j++) { 
      console.log(str[i]);
      console.log(closed[j]);
      console.log(opened[j])
      if (resultArray[resultArray.length - 1] === opened[j]) {
        console.log(resultArray[resultArray.length - 1] === opened[j])
          resultArray.pop();
          console.log(resultArray);
                 
      } 
      console.log(resultArray[resultArray.length - 1] === opened[j])
       continue;
      }
      console.log(resultArray); 
      continue;
      
    
    
}
   
    console.log(resultArray.length === 0);   
  
  return resultArray.length === 0;
  
}

