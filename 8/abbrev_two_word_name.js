function abbrevName(name){
  const names = name.split(" ");
  const initials = names.map(name => name[0].toUpperCase());
  return initials[0] + '.' + initials[1];
}
