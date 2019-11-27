// var rect={ area:() =>{ 
//     console.log("i am print")},
//     parameter:()=>{console.log("I am parameter") } 
// }
//rect.area();
//rect.parameter();


var rect=require('./solve');
function showReact(l,b){
    if(l <= 0 && b<=0){
        console.log("value must be greater > 0");
    }
    else{
            rect.area(3,2);        
            rect.parameter(4,5);        
    }

}

showReact(0,0);
showReact(1,2);;
showReact(1,3);
showReact(4,5);






