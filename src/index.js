module.exports = 
function check(str, bracketsConfig) {
  let opened = [];
  let closed = [];
  //1.
  for (let n = 0; n < bracketsConfig.length; n++) {
    opened.push(bracketsConfig[n][0]);
    closed.push(bracketsConfig[n][1]);
  };
  let resultArray = [];
  //2.
  for (let i = 0; i < str.length; i++) {
    //3.
   if (opened.includes(str[i] && !closed.includes(str[i]))) {
      resultArray.push(str[i]); 
      continue;
    };
    //4.
    for (j = 0; j < opened.length; j++) { 
      //5.
      if (resultArray[resultArray.length - 1] === opened[j] || (resultArray[resultArray.length - 1] === opened[j] && opened[j] === closed[j])) {
        resultArray.pop();
      } 
      //6.
      continue;
    }
    //7.
    continue;
  }
  //8.
  return resultArray.length === 0;
}

/*1. Из массива bracketsConfig делаем два массива с открывающимися и закрывающимися скобками 
  2. Для каждого элемента массива str делаем проверку:
     3. если открывающий массив содержит этот элемент 
        и одновременнно закрывающий массив его не содержит, 
        тогда добавляем этот элемент в новый массив resultArray
     4. если 3 ложно, тогда этот элемент закрывающий и для каждого элемента закрывающего массива делаем новую проверку:
          5. если последний элемент resultArray равен элементу открывающегося массива с тем же
             индексом, что и анализируемый закрывающийся элемент с тем же индексом из
             закрывающегося массива, тогда из массива resultArray удаляем этот открывающий символ
          6. если 5 ложно, тогда берем следующий элемент закрывающегося массива
     7. проверив все элементы закрывающего массива берем следующий элемент открывающего массива
  8. В итоге делаем проверку, пустой ли массив resultArray
*/

