let arr=[121,123,123,343,12321];
let count=0;
for(let i=0;i<arr.length;i++){
let ans="";
let j=arr[i];
while(j>0){
let m=j%10;
ans+=m;
ans=math.floor(j/10);
}
if(ans==arr[i]){
count++;
}
}
console.log(count);