var foo={
    value:1
};

function bar(name,age){
    this.sex="女";
    console.log(name);
    console.log(age);
    console.log(this.value)
}
Function.prototype.bind0=function(context){
    var self=this;
    var args=Array.prototype.slice.call(arguments,1);
    var fResult= function(){
        console.log(self);
        var args1=Array.prototype.slice.call(arguments,0);
        self.apply(this instanceof self?this:context,args.concat(args1));//函数把里面的this 换为context的值
    };
    fResult.prototype=self.prototype;
    return fResult;
}   //使用bind
var bindfoo= bar.bind(foo,"lily");
var obj=new bindfoo(36);
console.log(obj.sex)
//使用自己的Bind0
var bindfoo1= bar.bind0(foo,"lily");
var obj1=new bindfoo1(36);
console.log(obj1.sex)