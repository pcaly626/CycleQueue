let Queue = require("./cycle-queue");

let test1 = new Queue(["Test", 1,2,3] )

test1.map((item) => {console.log(item)})

console.log(test1)


let test2 = new Queue({test: [1,2,3,4]})

test2.map((item) => {console.log(item)})

console.log(test2)