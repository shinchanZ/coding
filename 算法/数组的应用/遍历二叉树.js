const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

function iterate(root) {
  if (!root) return;
  //   console.log(root.val);先序
  iterate(root.left);
  //   console.log(root.val); 中序

  iterate(root.right);
  console.log(root.val); //后序
}

iterate(root);
