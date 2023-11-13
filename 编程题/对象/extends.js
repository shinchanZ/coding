const InheritedSubType = Extends(SuperType, SubType);
let instance = new InheritedSubType();
// 等价于
// class SubType extends SuperType {}
// let instance = new SubType();

function Extends(SuperType, SubType) {
  function ExtendedType(...args) {
    SuperType.apply(this, args);
    SubType.apply(this, args);

    Object.setPrototypeOf(this, SubType.prototype);
  }

  Object.setPrototypeOf(SubType.prototype, SuperType.prototype);
  Object.setPrototypeOf(ExtendedType.prototype, SubType.prototype);
  Object.setPrototypeOf(ExtendedType, SuperType);

  return ExtendedType;
}
