minimumSum = (n)=> {
    var arr = String(n).split(""),
    ar = insertionSort(arr)
    return Number(ar[0] + ar[2]) + Number(ar[1] + ar[3])
};
insertionSort=(z)=> {
    
        for ( i = 1; i < z.length; i++) {
            
            let c = z[i],j = i-1
            
            
            while ((j > -1) && (c < z[j])) {
                z[j+1] = z[j];
                j--;
            }
            z[j+1] = c;
        }
    return z;
}