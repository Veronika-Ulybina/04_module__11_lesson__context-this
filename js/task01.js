'use strict';

{
  const rectangle = {
    width: 5,
    height: 5,
    set changeWidth(val) {
      if (typeof val === 'number') {
        this.width = val;
      }
    },
    set changeHeight(val) {
      if (typeof val === 'number') {
        this.height = val;
      }
    },
    get square() {
      return this.width * this.height + 'см';
    },
    get perimeter() {
      return (this.width + this.height) * 2 + 'см';
    },
  };

  rectangle.changeWidth = 10;
  rectangle.changeHeight = 10;

  console.log(rectangle.square);
  console.log(rectangle.perimeter);
  console.log(rectangle);
}


{
  const rectangle = {
    width: 5,
    height: 5,
  };

  Object.defineProperty(rectangle, 'changeWidth', {
    set(val) {
      if (typeof val === 'number') {
        this.width = val;
      }
    },
  });

  Object.defineProperty(rectangle, 'changeHeight', {
    set(val) {
      if (typeof val === 'number') {
        this.height = val;
      }
    },
  });

  Object.defineProperty(rectangle, 'square', {
    get() {
      return this.width * this.height + 'см';
    },
  });

  Object.defineProperty(rectangle, 'perimeter', {
    get() {
      return (this.width + this.height) * 2 + 'см';
    },
  });

  rectangle.changeWidth = 10;
  rectangle.changeHeight = 10;

  console.log(rectangle.square);
  console.log(rectangle.perimeter);
  console.log(rectangle);
}
