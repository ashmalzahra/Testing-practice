function stringLength (string){
  if (string.length > 1 && string.length <= 10){
    return string.length
  }
  else{
    return ("String not Valid.")
  }
   
}

module.exports = stringLength;