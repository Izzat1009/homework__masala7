{
    let a = 1
    let b = 10
 let arr =[]
function evenToBig() {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            arr.push(i)
        }
    }

}

    evenToBig()
    console.log(arr);
 }


{
    let a = 100
    let arr = []

    let i = 0
    function recursive() {
        i+=10
        if (i <= a) {
            if (i % 10 === 0 && i !== 0) {
                arr.push(i)
            }
            recursive()
        }
    }
    recursive()
    console.log(arr);
}

{

 let a = 5
 let arr = []


 let i = 0
 function recursive() {
     i++
     if (i <= a) {
         arr.push(i ** 2)
         recursive()
     }
 }
 recursive()

 console.log(arr);
 

}


{
    function foo(n){
        return +n.split('').sort().join('')
    
    }
    console.log(foo("2541"));
    console.log(foo("312"));
}


{
   function removeQmark(str){
       return str.split("").filter(qmark => qmark !== "?").join("")
   }

   console.log(removeQmark("abc?"));
   


}


{
    let a = 5
    let arr = []


    let i = 0
    function recursive() {
        i++
        if (i <= a) {
            arr.push(a)
            recursive()
        }
    }
    recursive()
     console.log(arr);
     

}



{
    function booleanCheck(str){
        return Boolean(str)
    }

    console.log(booleanCheck(""));
    
}


