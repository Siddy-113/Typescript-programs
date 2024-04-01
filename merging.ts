function sample(name:string):void;
function sample(age:number):void;
function sample(arg:string|number):void{
    if(typeof arg=="string"){
        console.log("Hello " + arg);
    }
    else if(typeof arg=="number"){
        console.log("age=" + arg);
    }
}

sample("sidra");
sample(20);