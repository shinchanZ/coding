// 实现一个简单的洋葱模型
async function wrap1(next) {
  console.info("1");
  await next();
  console.info("1 end");
  return Promise.reject("end wrap");
}
async function wrap2(next) {
  console.info("2");
  await next();
  console.info("2 end");
}
async function wrap3(next) {
  console.info("3");
  await next();
  console.info("3 end");
}
async function wrap4(next) {
  await new Promise((res) => {
    setTimeout(() => {
      console.info("inner");
      res();
    }, 1000);
  });
  await next();
}
const middlewares = [wrap1, wrap2, wrap3, wrap4];

async function handleNext(middlewares, currentIndex = 0) {
  try {
    const currentWare = middlewares[currentIndex];
    if (currentIndex === middlewares.length - 1) {
      await currentWare(() => {});
    } else {
      await currentWare(() => handleNext(middlewares, currentIndex + 1));
    }
  } catch (error) {
    console.log(error);
  }
}

handleNext(middlewares);
/**
 * console 打印
 * 1
 * 2
 * 3
 * inner
 * 3 end
 * 2 end
 * 1 end
 * end wrap
 */
