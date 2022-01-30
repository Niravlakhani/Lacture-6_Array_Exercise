console.log("Hello");

let ary1 = [1,4,7,10,8];
let ary2 = [2,3,6];
let result = [];
let output = [];

let i = 0;
let j = 0;


while(i < ary1.length && j < ary2.length){
    if(ary1[i] < ary2[j]){
        result.push(ary1[i])
        console.log(result);    
            i++;
    }
    else{
        result.push(ary2[j])
        console.log(result);    
        j++;
    }
}

while(i < ary1.length){
    result.push(ary1[i++]);
    console.log(result);
}

while(j < ary2.length){
    result.push(ary2[j++]);
    console.log(result);
}

// console.log(output.push(result));