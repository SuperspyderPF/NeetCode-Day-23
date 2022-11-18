var longestPalindrome = function(s) {
     c = new Set(),l = 0;
     
    for(let z of s){
        if(c.has(z)) {
            l += 2;
            c.delete(z);
            
        }else c.add(z, 1);
    }
    return l + (c.size > 0 ? 1 : 0);
};

//one line:
longestPalindrome=(s,c=new Set(),l=0)=>{for(let z of s){if(c.has(z)){l+=2;c.delete(z);}else c.add(z,1);}return l+(c.size>0?1:0);}