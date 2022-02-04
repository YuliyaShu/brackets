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
   if (opened.includes(str[i]) && !closed.includes(str[i]) ) {
    resultArray.push(str[i]); 
      continue;
    } else {
      //4.
      if (opened.includes(str[i]) && closed.includes(str[i])) {
        //5.
        if (resultArray.length === 0 || resultArray[resultArray.length - 1] !== str[i]) {
          resultArray.push(str[i]);
          }
          //6.
        else {
          resultArray.pop();
          }
      } 
    };
    //7.
   for (j = 0; j < opened.length; j++) { 
      let f = opened.indexOf(resultArray[resultArray.length - 1]);
      //8.
      if (f === closed.indexOf(str[i]) || (f === closed.indexOf(str[i]) && opened[f] === closed[f])) {
        resultArray.pop();
        break;
      } else {
        return false;
      }
      //9.
    }
    //10.
    continue;
  }
  //11.
 return resultArray.length === 0;

}

/*1. Из массива bracketsConfig делаем два массива с открывающимися и закрывающимися скобками 
  2. Для каждого элемента массива str делаем проверку:
     3. если открывающий массив содержит этот элемент 
        и одновременнно закрывающий массив его не содержит, 
        тогда добавляем этот элемент в новый массив resultArray
      4. если и открывающий, и закрывающий массивы содержать элемент, тогда делаем проверку:
          5. если длина resultArray или последний элемент resultArray не равны этому элементу, то
            добавляем его в resultArray;
          6. в ином случае (когла последний элемент resultArray равен элементу), то удаляем
             последний элемент resultArray.
     7. если 3 и 4 ложно, тогда этот элемент закрывающий и для каждого элемента закрывающего массива 
        делаем новую проверку, находим индект последнего элемента resultArray (это открывающий элемент):
      8. если индекс последнего элемент resultArray равен индексу текущего элемента str[i] закрываеющего массива 
         (или дополнительно эти элементы идентичны), 
         тогда из массива resultArray удаляем этот открывающий символ
          9. если 8 ложно, тогда берем следующий элемент закрывающегося массива
     10. проверив все элементы закрывающего массива берем следующий элемент открывающего массива
  11. В итоге делаем проверку, пустой ли массив resultArray
*/

