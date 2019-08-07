var emptyObject = Object.create(null);
var parent = {
    age:35,
    hobby:"work",
    introduction: function () {
        return ("Hi girl, my age is "+this.age+"ortsCar");
    }
}

//子类继承了父类的属性和方法，那么这些属性是可枚举的吗
var child = Object.create(parent);
console.log(Object.keys(child))
for(item in child){
    console.log(item);   //parent上面的三个属性都可枚举
}
child.age = 19; // 继承的属性可以被覆写
console.log(child.introduction());
console.log(parent.introduction())

function Shape() {
    this.x = 0;
    this.y = 0;
}

Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};

var shape = new Shape();
