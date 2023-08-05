/*
Linear Search
Problem:Given an array of 'n' elements and a target
element 't', find the index of 't' in the array.Re-
turn -1 if the target element is not found.
arr=[5,2,10,4,6], t=10-> should return 2
arr=[5,2,10,4,6], t=20-> should return -1

Linear Search pseudocode
Start at the first element in tha array and move 
towards the last.
At each elemnt though,check if the elemnt is equal 
to the target element.
if element found,return the index of the element.
if element not found,return -1
*/

function linearSearch(arr,el){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===el){
           return i;
        }
      
    }
    return -1;
}
console.log(linearSearch([5,3,2,1,0],2));
console.log(linearSearch([5,3,2,1,0],12));

// Big-o=o(n)