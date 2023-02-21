// default import class

                                                    // 1.........

// import Nokia from "./mobile.js";
// const n = new Nokia();
// n.volumnUp();


                                                    // or
// default import function

                                                    // 2.........
// import show from "./mobile.js";
// show();

                                                    // or
// default import variable

                                                    // 3......
// import a from "./mobile.js";
// console.log(a);






// named import class

                                                    // 11........

// import {Nokia} from "./mobile.js";
// const n = new Nokia();
// n.volumnup();

                                                    // or
// named import function

                                                    // 12.........

// import {show} from "./mobile.js";
// show();

                                                    // or
                                                    
// named import variable

                                                    // 13......

// import {a} from "./mobile.js";
// console.log(a);






// multiple named import

                                                    // 21..........
// import {nokia, show, a} from "./mobile.js";
// const n= new nokia();
// n.volumnUp();
// show();
// console.log(a);
                                                    // or
import * as device from "./mobile.js";
const n= new device.nokia();
n.volumnUp();
device.show();
console.log(device.a);

