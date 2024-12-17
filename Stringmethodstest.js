// Tasks 

// 1.concatenate two strings.

function concatenate(){
    let string_one="Hello";
    let string_two=" World ";
    let result=string_one.concat(string_two)
    return(result);
}
console.log(concatenate());

// 2.Length of a string

(()=>{
    let string="Javascript";
    let result=string.length;
    console.log(result);
    
})();

// Extract a substring

let Substring = ()=>{
    let value = "Hello world!";
    let result = value.substring(6,11);
    return(result);
}
console.log(Substring());

// Uppercase

let upper =function uppercase(){
         let value = "javascript";
         let result=value.toUpperCase();
         return(result);
}
console.log(upper());

// checks if a string contains a sub string

let checks =function (){
    let value ="i love coding";
    let value_res=value.includes("love");
    return(value_res);
}
console.log(checks());

// replace 

(()=>{
    let replce_string = "Hello, World!";
    let replace_res=replce_string.replace("World","Javascript");
    console.log(replace_res);
})();

// trim 

let triming_value ="  Hello, World!  ";
let trim_results =triming_value.trim();
console.log(trim_results);


// Split a string 

function splits(){
    let friuts ="apple,banana,cherry";
    let split_results=friuts.split(",");
    return(split_results);
}
console.log(splits());

// repeat a string 
(()=>{
    let repeat_value="Ha!"
    let repeat_res=repeat_value.repeat(3);
    console.log(repeat_res);  
})();

//checks Frist Character Of string

(()=>{
    let checks_value = "Javascript";
    let res=checks_value.startsWith("J");
    console.log(res);
    
})();