function trim(str) {
  return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
console.log(trim(" 123 "));
