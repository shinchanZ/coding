let value = 1;

Object.defineProperty(global,'a',{
    get:function(){
        return value++
    }
})

console.log(a === 1 && a === 2 && a === 3); // true