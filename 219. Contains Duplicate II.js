var containsNearbyDuplicate = function(x, y,s = {}) {
    
    
    for ( i = 0; i < x.length; i++) {
        if (s[x[i]] || s[x[i]] === 0) {
            if (i - s[x[i]] <= y) return true;
        }; 
        s[x[i]] = i;
    }; 
    
    return false;
};

//one line:
containsNearbyDuplicate=(x,y,s={})=>{for(i=0;i<x.length;i++){if(s[x[i]]||s[x[i]]===0){if(i-s[x[i]]<=y)return true;}s[x[i]]=i;}return false}
