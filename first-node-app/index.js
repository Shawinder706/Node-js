/* 
                My first node application
                **************************

  First Sure that system has the node installed  

  1. Create new deirectory and open in the command prompt window.

  2. Type the 'npm init' command and press enter. It will create the package.json file
     which comprises of some fields information about the node application like version,author description etc.

  3. Create the index.js file and write the following program.

  4. Run index.js file by typing 'node index.js' in the cmd window.                 


*/


var rect={
    perimeter:(x,y)=>(2*(x+y)),
    area:(x,y)=>(x*y)
};
function solveRect(l,b){
    console.log(`solving for rectangle with l=${l} and b=${b} `);
    if(l<=0 || b<=0){
        console.log(`Rectangle dimension should be greater thanm zero: l=${l} and b=${b}`);
    }
    else{
        console.log(`The area of the rectangle is ${rect.area(l,b)}`);
        console.log(`The perimeter of the rectangle is ${rect.perimeter(l,b)}`);
    }

}

solveRect(5,3);
solveRect(-9,-8);