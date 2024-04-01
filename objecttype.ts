let pt:{
    x:number,
    y:number
};


function showpoint(pt:{x:number;y:number}) //anonymous object
{
    console.log(" x is " + pt.x + " \n y is " + pt.y);
}

showpoint({x:12,y:24});