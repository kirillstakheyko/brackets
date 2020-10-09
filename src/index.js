module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  let isDeleted =true;
while(str.length > 0 && isDeleted){
    isDeleted = false;  
  
    for (let i = 0; i < bracketsConfig.length; i++){
      for(let strItem = 0; strItem < str.length; strItem++){
          if((str[strItem] === bracketsConfig[i][0]) && 
          (str[strItem + 1] === bracketsConfig[i][1])){
            str.splice(strItem, 2);
            isDeleted = true;
          }
      }
  }
}
return str.length > 0 ? false : true;
}