class circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return 3.14 * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * 3.14 * this.radius;
  }
}

let area = new circle(4.44);
console.log(area.getPerimeter());
