function InstanceOf(obj, constructor) {
  let prototype = obj.__proto__;
  while (prototype) {
    if (prototype === constructor.prototype) {
      return true;
    } else {
      prototype = prototype.__proto__;
    }
  }
  return false;
}
console.log(InstanceOf([], Array));
console.log(InstanceOf({}, Object));
console.log(InstanceOf({}, Array));
