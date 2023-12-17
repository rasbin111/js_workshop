const dummy_obj = {
    x: 42,
    getX: function (){
        return this.x;
    }
}


const unboundGetX = dummy_obj.getX;
console.log(unboundGetX()); // Output: undefined


const boundGetX = unboundGetX.bind(dummy_obj);
console.log(boundGetX()); // Output: 42

function simpleLog(...args){
    console.log(this, ...args);
    console.log(this);
}

const boundLog = simpleLog.bind("this value", 1, 2);
boundLog();
