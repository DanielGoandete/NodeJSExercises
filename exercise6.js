

// class Circle{
//     constructor(_xPos,_yPos,_radius){
//         console.log('the circle is created');
//         this._xPos = _xPos;
//         this._yPos= _yPos;
//         this._radius=_radius;
    
//     }
//     move(xOffset, yOffset) {
        
//     }
    
//     getSurface(){
        
//         let area = Math.PI * this._radius * this._radius;
//         let perimeter =  2 * Math.PI * this._radius;
//           return 'Area is '+  area + 'and  perimeter is '+  perimeter;
//     }


// }
// let myCircle = new Circle(5,5,20);
// console.log(myCircle.getSurface());



class Rectangle{
    constructor(topLeftXPos,topLeftYPos,width,length){
        console.log('the rectangle is created');
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos= topLeftYPos;
        this.width=width;
        this.length=length;
    
    }


}

let myRectangle = new Rectangle(50,50,50,50);
let newRectangle = new Rectangle(50,50,50,50);
x1 = myRectangle.topLeftXPos;
y1 = myRectangle.topLeftYPos;
w1 = myRectangle.width;
l1 = myRectangle.length;
x2 = newRectangle.topLeftXPos;
y2 = newRectangle.topLeftYPos;
w2 = newRectangle.width;
l2 = newRectangle.length;

function checkColinde(x1,y1,w1,l1,x2,y2,w2,l2 ){

    xPositive = Math.abs(x1-x2);
    yPositive = Math.abs(y1-y2);
    let lenght, width;
    if(x1<x2){
        lenght = l1; 
    }else{
       lenght = l2; 
    }
    if(y1<y2){
        width = w1;
    }else{
        lenght = w2;
    }
    if(xPositive >= lenght || yPositive >= width ){

        return false;
    }
    return true;
    
 }

    console.log(checkColinde(x1,y1,w1,l1,x2,y2,w2,l2 ));
