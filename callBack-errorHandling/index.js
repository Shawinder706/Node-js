
var rect = require('./rectangle');

function solveRect(l,b){
    console.log(`solving for rectangle with l=${l} and b=${b} `);

    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log(err.message);
        }
        else{

            console.log(`The area of the rectangle of dimension l=${l} and b=${b} is ${rectangle.area()}`);
            console.log(`The perimeter of the rectangle of dimension l=${l} and b=${b} is ${rectangle.perimeter()}`);
        }
    })
    console.log('This statement after call to rect()');
}

//solveRect(5,3);
solveRect(-9,-8);