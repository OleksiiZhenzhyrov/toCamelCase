function toCamelCase(str){
  if(str > str + 1) {
      return '';
  } else {
    var replaced = str.replace(/-|_/g, ' ').split(' ');
    //split string when there is a dash or underscore
    var solution = [replaced[0]];
    
    for(var i = 1; i < replaced.length; i++){ 
       solution.push(replaced[i].substring(0,1).toUpperCase()+replaced[i].substring(1).toLowerCase());
    }
  }

  return solution.join('');
  //join new array into new string
}

toCamelCase("the_stealth_warrior") // "theStealthWarrior"
toCamelCase("The-Stealth-Warrior") // "TheStealthWarrior"
toCamelCase("A-B-C")
