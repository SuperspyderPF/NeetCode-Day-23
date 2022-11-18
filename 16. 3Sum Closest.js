var threeSumClosest = function(n, v) {
    r=n.length,x=Infinity;
n= n.sort((a,b)=> {return a-b})
for ( i = 0; i < r-2; i++) {
          a=i+1,b=r-1;
        while(a<b){
                   z =n[i]+n[a]+n[b];  
                  if(Math.abs(z - v) < Math.abs(x - v))x=z;
                  (z<v)? a++:b--               
        } 
}
    return x; 
};

//one line:
threeSumClosest=(n,v)=>{r=n.length,x=Infinity;n=n.sort((a,b)=>{return a-b});for(i=0;i<r-2;i++){a=i+1,b=r-1;while(a<b){z=n[i]+n[a]+n[b];if(Math.abs(z-v)<Math.abs(x-v))x=z;(z<v)?a++:b--}}return x}