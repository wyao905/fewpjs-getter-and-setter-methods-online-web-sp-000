// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  get diameter() {
    return radius * 2
  }
  
  get circumference() {
    return radius * 2 * Math.PI
  }
  
  get area() {
    return radius * radius * Math.PI
  }
  
  set diameter(d) {
    this.radius = d / 2
  }
  
  set circumference(c) {
    this.radius = c / (2 * Math.PI)
  }
  
  set area(a) {
    this.radius = Math.sqrt(a/Math.PI)
  }
}