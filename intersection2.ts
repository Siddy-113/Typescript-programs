type employee={
    eid:number;
    ename:string;
}

type department={
    did:number;
    dname:string;
}

type empdepart= employee & department

let em: empdepart={
    eid:1,
    ename:"Sidra",
    did:101,
    dname:"cyber",
}

console.log("Employee id: " + em.eid + "\n Employee name: " + em.ename + "\n Department id:" + em.did + "\n Department name: " + em.dname);