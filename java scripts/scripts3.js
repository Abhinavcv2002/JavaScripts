//-- Build in methods --//
    
    a = [1,2,3,4,5,6,7,8]

    // a.foreach((item)=>console.log(item))
    // const data = a.map((item)=>item*10)
    // console.log(data);

//-- filter Method --//

        // const data = a.filter((item)=>item%2==0)
        // console.log(data);
    
//-- filter Method (list type) --//
    
        // const data = ['abc','hello','asd']
        // const result = data.filter((item)=>item[0]=='a')
        // console.log(result);
    

// callback method --//

//-- array.forEach(callback(Element,index,array),thisValue) --//

        // function data(a,b,callback){
        //     const c = a+b
        //     callback(c)
        // }
        // function display(c){
        //     console.log(c);
            
        // }

        // data(10,2,display)
        // data(112,2,display)

//-- find method --//

        // const data = a.find((item)=>item>4)

        // console.log(data);

//-- this method --//

        // const data ={
        //         fname:"aswa",
        //         lname:"vv",
        //         fullname: function (){
        //                 console.log(this.fname,this.lname);
                        
        //         }
        // }
        // console.log(data);
        // data.fullname()
        
//-- this method  1.(call type) --// call return value

        // const nameobj ={
        //         fname:"abhi",
        //         age:21,
        // }

        // const data ={
        //         fname:"aswa",
        //         lname:"vv",
        //         fullname: function (){
        //                 console.log(this.fname);
                        
        //         }
        // }
        // console.log(data);
        // data.fullname.call(nameobj)

//--age adding Method --//

        // const nameobj ={
        //         fname:"abhi",
        //         age:21,
        // }

        // const data ={
        //         fname:"aswa",
        //         lname:"vv",
        //         fullname: function (age){
        //                 console.log(this.fname,age);
                        
        //         }
        // }
        // console.log(data);
        // data.fullname.call(nameobj,45)

//-- this method  2.(blind type) --// call return function

        // const nameobj ={
        //         fname:"abhi",
        //         age:21,
        // }

        // const data ={
        //         fname:"aswa",
        //         lname:"vv",
        //         fullname : function (age){
        //                 console.log(this.fname,age);
                        
        //         }
        // }
        // console.log(data);
        // const d1 = data.fullname.blind(nameobj,45)
        // d1()
        
//-- this method  3.(apply type) --// 
  
        // const person = {
        //         name: "john"
        // }

        // function data(job,com){
        //         console.log(job,com,this.name);
                
        // }
        // data.apply(person,["Developer","Google"])
        