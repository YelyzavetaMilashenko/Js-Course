// № 2
function countCons (str) {
    let cons_list ='bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let ccount = 0;
    for (let i =0;i < str.length; i++){
        if (cons_list.indexOf(str[i]) != -1) {
            ccount += 1;
        }
    }
    return ccount   
}
console.log(`Согласных букв : ${countCons('Hello')}`)

function count(str1) {
  let vowel_list ='aeiouAEIOU';
  let vcount = 0;
  for(let i = 0; i < str1.length ; i++) {
      if (vowel_list.indexOf(str1[i]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
