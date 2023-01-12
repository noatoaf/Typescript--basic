
const getAverage= ((arr : number[]): number =>{
        let average= arr.reduce(function(a, b)
        { 
            return a + b; 
        });
        return average/arr.length;
    
 });
console.log(getAverage([0,8,9,3]));
const getAmountOfPositive= ((arr : number[]): number=> {
    let count =0 ;
    arr.forEach(Element =>{
        if(Element>0)
          count++;
    });
    return count;
});
console.log(getAmountOfPositive([0,8,9,3,-2,-9]));
const sortList=((arr : number[]): number[] =>{
    let a : number[]= arr.sort();
    return a;
});
