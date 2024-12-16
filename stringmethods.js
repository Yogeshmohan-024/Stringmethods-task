// string manipulation

function String_manipulation(){
    let Details = "   Vetri technology solutions  "
    let Lower_Result=Details.toLowerCase();
    console.log(Lower_Result);
    
    let Upper_Result=Details.toUpperCase();
    console.log(Upper_Result);
    
    let Trim_Result=Details.trim();
    console.log(Trim_Result);
    
    let Sub_Result=Trim_Result.includes("Vetri technology")
    return(Sub_Result)
    
}
console.log(String_manipulation());


// substring Extraction

let extraction = ()=>{
let Details = "Vetri technology solutions";
let Sub_string=Details.substring(16,0);
console.log(Sub_string);
let slice=Details.slice(16,26);
console.log(slice);
}
extraction();

// string splitting and joining

(()=>{
    let Str = "5 6 7 8 9";
    let str_result = Str.split(' ')
    console.log(str_result);
    let str1="five six seven eight nine"
    let str1_result = str1.split(" ")
    console.log(str1_result);
    let total=str_result.concat(str1_result);
    console.log(total);
})();

// replace and repeat
 
(()=>{
let replace="he has a bike"
let replace_result = replace.replace("he","she").concat(" ").repeat(2);
console.log(replace_result);
})();


// Template literals

let Template = function lit(){
    let name = "jonh";
    let city = "chennai";
    let state = "tamil nadu";
    let pincode = 89067;
    console.log(`${name} ${city} ${state} ${pincode}`);
    
}
Template();