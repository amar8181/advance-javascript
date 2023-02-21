
// // default export class

                                            // 1.........

// class nokia{
//     volumnUp(){
//         console.log("high Volume"); 
//     }
// }
// export default nokia;


                                            // or
// default export function

                                            // 2........

// export default function show(){
//     console.log("hello usd guys");
// }

                                            // or
// default export variable

                                            // 3......

// const a=10;
// export default a;







                                            
// named export class

                                            // 11......

// class Nokia{
//     volumnup(){
//         console.log("high Volume"); 
//     }
// }
// export {Nokia};


                                            // or
// default named function

                                            // 12.....

// export function show(){
//     console.log("hello usd guys");
// }

                                            // or
//  named export variable

                                            // 13.....

// const a=10;
// export  {a};



// multiple named export

                                            // 21......
class nokia{
        volumnUp(){
            console.log("high Volume"); 
        }
    }

    function show(){
            console.log("hello usd guys");
    }

    const a=10;

    export {nokia, show, a};