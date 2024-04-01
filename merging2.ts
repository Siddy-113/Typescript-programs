function add(x:number,y:number):number;
function add(x:string,y:string):string;
function add(x:any,y:any):any{
    console.log(x+y);
}

add("xyz","abc");
add(24,90);
