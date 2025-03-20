       // OOPs 
// class is a collection of Object

        // class Synnefo{
        //     constructor(){
        //         this.a=10
        //         console.log("register");
                
        //     }
        //     python(){
        //         console.log("python");
                
        //     }
        //     mern(){
        //         console.log("mern");
                
        //     }
        // }

        // aswu = new Synnefo();
        // aswu.python();
        // aswu.mern();
        // console.log(aswu);


    //-- Two type of inheritance --//

//-- 1. classical inheritance //-- 2. prototype inheritance --//

//--  classical inheritance was 5-types --//

        // class Synnefo{
        //     constructor(){
        //         this.a=10
        //         console.log("Synnefo register");
                
        //     }
        //     python(){
        //         console.log("python");
                
        //     }
        //     mern(){
        //         console.log("mern");
                
        //     }
        // }

        // class Novavi extends Synnefo {
        //     constructor() {
        //         console.log("Novavi register");
        //         super();                          
        //     }
        //     dev(){
        //         console.log("dev");
                
        //     }
        // }

        // aswu = new Synnefo();
        // aswu.python();
        // aswu.mern();
        // console.log(aswu);

        // staff = new Novavi()
        // staff.dev()

//-- 2. prototype inheritance --//

        //    const data = {
        //     great : function(){
        //         console.log("Welcome to all");
                
        //     }
        //    }

        //    a1 = Object.create(data)
        //    a1.great()
        //    console.log(a1);
       
//-- Next --//

//-- exception handling --//

        // try {
        //         console.log(a);
        // }
        // catch (error){
        //         console.log('error'.error.message);
        // }
        // finally{
        //         console.log('prgm ends');
        // }


        // try {
        //      const a = parseInt('abc')
        //      // console.log(a);
        //      if (isNaN(a)) {
        //         throw new error('a is not a number');
        //      }
        // }
        // catch (error){
        //      console.log('error'.error.message);
        // }
        // finally{        
        //      console.log('prgm ends');
        // }

//-- call back and call back hell --//
//-- maltiple task called call back hell --//

        // function Todo(task,callback){
        //         console.log('starting',task);
        //         setTimeout(()=>{
        //                 console.log('ending',task);
        //                 callback();
                        
        //         },1000)
                
        // }

        // function step1(callback){
        //         setTimeout(()=>{
        //                 console.log('step1 completed');
        //                 callback();
                        
        //         },1000)
        // }       

        // function step2(callback){
        //         setTimeout(()=>{
        //                 console.log('step2 completed');
        //                 callback();
                        
        //         },1000)
        // }

        // function step3(callback){
        //         setTimeout(()=>{
        //                 console.log('step3 completed');
        //                 callback();
                        
        //         },1000)
        // }

        // step1(()=>{
        //         step2(()=>{
        //                 step3(()=>{
        //                         console.log('all steps completed');
                                
        //                 })
        //         })
        // })


//-- promise 3-type --//
        // pending 
        // fullfiled
        // rejected
        // resolve

//-- callback isue resoled code using reject & resolve --//

        // function step1(callback){
        //         return new Promise ((resolve)=>{
        //                 setTimeout(()=>{
        //                         console.log('step1 completed');
        //                         resolve(); 
        //                 },1000)
        //         })
        // }       

        // function step2(callback){
        //         return new Promise ((resolve)=>{
        //                 setTimeout(()=>{
        //                         console.log('step2 completed');
        //                         resolve(); 
        //                 },1000)
        //         })
        // }    

        // function step3(callback){
        //         return new Promise ((resolve)=>{
        //                 setTimeout(()=>{
        //                         console.log('step3 completed');
        //                         resolve(); 
        //                 },1000)
        //         })
        // }    

        // step1()
        //      .then(step2)
        //      .then(step2)
        //      .then(()=>{
        //         console.log('All steps completed');
        //      })