// 1 . What is a Temporal Dead Zone ?

/*  The let and const variables are not accessable before they initialization
    with some values , and the phase between the starting of the execuion of block
    in which the let or const variables is initialized is called 
    Temporal Dead Zone for the variable*/

// 2 . What is the for-in loop in JavaScript? Give its syntax ?

/*  The for-in loop mainly used in the Array in JavaScript and it return the index
    The for-in loop point the index it pointout the every values
    which is present in the Array of Elements or strings */
     
    
    const sports = ['cricket','football','kabaddi']
    sports.forEach(() =>{
        console.log(sports);
    })
    sports();

// 3 . Explain Local Scope, Block Scope, Functional 
//     Scope and Scope Chain in javascript

/*  Local Scope :-
    local scope will occurs when you create a variable inside a function.
    when you trying to access thet variables its only allowed in that 
    perticular function only. they re the Local variables. 
    let Y = "Java Script World"
    is a Global variables

    Global Scope :-
    Global Scope is variable declared out of the function that means the global 
    variable can accesable to the every function that can accesable.
    let X = "JavaScript";
    is a Global variables

    Examples : */
    let X = "JavaScript";
    function Java (script) {
        let Y = "Java Script World";
        console.log(X+Y);
    }
    Java ()

/*  Block Scope :-
    which are the variables can present inside block and that variables can
    access by the in side the block only or inside the {}.
    it is not accesable from the outside of the Block 
    
    Example :- */

    if (true) {   
    var x = 2;
    let y = 2;
    }

/*  Scope Chain :-
    Scope chain is nothing but function inside an funcion and can accessable 
    the variables by the another function.

//  4 . What is difference between null and undefined and where to use what?    

    UNDEFINED ::
    In javaScript if declared a variable and not given any value 
    then it will be undefined

    Example :-*/ 

    let x = ();
    console.log(x); 

/*  NULL ::
    In javaScript The NULL is a value if the output want to show Null
    just assin the the value as a Null 

    Example :- */

    let Y = null;
    console.log(Y); 

/* 5 . what is Symbol?

   It was introduced in ECMAScript 2015 it must be a unique 
   Once you create a symbol, its value is kept private and for internal use. 

   Examples :- */

    const value1=Symbol("vijay")
    const value2=Symbol("kumar")
    console.log(value1===value2)

/* 6 . Write code to explain map and filter in arrays

    Map function is an array functon and its return any array.
    when using map function it return the a new array.
    when the elements length is same then we can use map method.
    the length of the output is equal to an array.


    Example :- */

    const list = ['Apple', 'Orange', 'Egg']
    list.map(item => item[0]);
    console.log(item);

/*  filter function is an array function and its return an array.
    the filter used to filter the elements inside an array and 
    then return the modified data which inside the an array.
    the length of the output is equal to or less than an array.
 
    Example :- */

    const list = ['Apple', 'Orange', 'Egg']
    list.filter(item => item === 'A') 

/* 7 .  Explain passed by value and passed by reference ?
    
    passed by value is passing the variables in side the function. */

    let A = 5;
    let B = 5;
    console.log(A+1);
    console.log(B+2);


/*  passed by reference is passing the declared variable to that perticular value. */

    let x = 5;
    let Y = 5;
    let Z = 5;
    console.log(X+Z);
    console.log(Y*Z);
 
/* 8 . Please explain Self Invoking Function and its code ?    

    A self-invoking (also called self-executing) 
    function is a nameless function that is 
    invoked immediately after its definition 

    Example :- */

    (function(){
         
          alert("Enter Your Name");
      })();