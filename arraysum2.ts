let arr3:number[][]=[[1,2,3],[4,5,6],[7,8,9]];
let sum2:number = 0;
for (let i = 0; i < arr3.length; i++) {
    for (let j = 0; j < arr3.length; j++) {
        if (i==j) {
            sum2+=arr3[i];
        }
    }
    
}