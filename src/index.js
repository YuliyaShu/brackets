module.exports = 
function check(str, bracketsConfig) {
  let opened = [];
  let closed = [];

  for (let n = 0; n < bracketsConfig.length; n++) {
    opened.push(bracketsConfig[n][0]);
    closed.push(bracketsConfig[n][1]);
  };
  
 
  let resultArray = [];
  for (let i = 0; i < str.length; i++) {
    if (opened.includes(str[i])) {
      resultArray.push(str[i]); 
      continue;
    };
    for (j = 0; j < opened.length; j++) { 
      if (resultArray[resultArray.length - 1] === opened[j]) {
          resultArray.pop();      
      } 
      continue;
      }
      continue;
}
return resultArray.length === 0;
  
}

