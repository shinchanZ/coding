class EventEmitter {
    constructor() {
      this.bus = new Map();
    }
    on(key, callback) {
      if (this.bus.has(key)) {
        const busEvents = this.bus.get(key);
        busEvents.push(callback);
        this.bus.set(key, busEvents);
      } else {
        this.bus.set(key, [callback]);
      }
    }
    off(key, callback) {
      if (this.bus.has(key)) {
        let busEvents = this.bus.get(key);
        busEvents = busEvents.filter((i) => i !== callback);
        if (busEvents.length) {
          this.bus.set(key, busEvents);
        } else {
          this.bus.delete(key);
        }
      }
    }
    emit(key, ...args) {
      if (this.bus.has(key)) {
        for (let e of this.bus.get(key)) {
          e.apply(this, args);
        }
      }
    }
    once(key, callback) {
      function func() {
        callback();
        this.off(key, func);
      }
  
      this.on(key, func);
    }
  }
  
  const demo = new EventEmitter()
   
  function test2() {
    console.log("a--> case2");
  }
  
  demo.on("a", () => {
    console.log("a--> case1");
  });
  demo.on("a", test2);
  // 此时a订阅下，执行case1, case2回调
  demo.emit("a");
  demo.off("a", test2);
  // 此时a订阅下，只执行case1, case2已被解除
  demo.emit("a");
   
  demo.once('a', ()=>{
      console.log('a--> once')
  })
  // 此时a订阅下，执行case1, once 两次回调
  demo.emit('a');
   
  setTimeout(()=>{
      // 此时a订阅下，只执行case1, once 只执行一次
      demo.emit('a');
  },1000)