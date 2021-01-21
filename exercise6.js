

class Circle{
    constructor(_xPos,_yPos,_radius){
        console.log('the circle is created');
        this._xPos = _xPos;
        this._yPos= _yPos;
        this._radius=_radius;
    
    }
    move(xOffset, yOffset) {
        
    }
    
    getSurface(){
        
        let area = Math.PI * this._radius * this._radius;
        let perimeter =  2 * Math.PI * this._radius;
          return 'Area is '+  area + 'and  perimeter is '+  perimeter;
    }


}
let myCircle = new Circle(5,5,20);
console.log(myCircle.getSurface());



class Rectangle{
    constructor(topLeftXPos,topLeftYPos,width,length){
        console.log('the circle is created');
        this._xPos = _xPos;
        this._yPos= _yPos;
        this._radius=_radius;
    
    }
    move(xOffset, yOffset) {
        
    }
    
    getSurface(){
        
        let area = Math.PI * this._radius * this._radius;
        let perimeter =  2 * Math.PI * this._radius;
          return 'Area is '+  area + 'and  perimeter is '+  perimeter;
    }


}
let myCircle = new Circle(5,5,5,5);
console.log(myCircle.getSurface());