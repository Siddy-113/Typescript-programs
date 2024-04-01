class interest{
    principle:number;
    rate:number;
    time:number;

    constructor(p:number,r:number,t:number){
        this.principle=p;
        this.rate=r;
        this.time=t;

        let SI:number=p*(1+(r*t));
        console.log(" Simple interest= " + SI);
    }
}

const i=new interest(1000,10,2);


