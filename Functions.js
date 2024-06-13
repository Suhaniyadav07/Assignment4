
function first(arr,n){
    if(arr==[]){
        return arr[0];

    }
    if(n<0){
        return [];
    }
    return arr.slice(0, n); 
  

}
console.log(first([7, 9, 0, -2]));
