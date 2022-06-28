// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius;
  }
  get getDiameter(){
    return this.radius * 2
  }
  get getCircumference(){
     return 2 * Math.PI * this.radius
  }
  get getArea(){
     return Math.PI * this.radius *this.radius
  }
}