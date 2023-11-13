function inherit(subType, superType) {
  subType.prototype = Object.create(superType.prototype);
  subType.prototype.constructor = sub;
}
