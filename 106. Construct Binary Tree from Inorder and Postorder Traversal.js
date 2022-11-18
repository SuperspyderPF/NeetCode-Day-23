var buildTree = function(u, p) {
    if (u.length === 0) return null;

    let r = p[p.length - 1];
    let x = u.indexOf(r);

    return {
        val: r,
        left: buildTree(u.slice(0, x), p.slice(0, x)),
        right: buildTree(u.slice(x + 1), p.slice(x, -1))
    };
}
//one line :
buildTree=(u,p)=>{if(u.length===0)return null;var r=p[p.length-1],x=u.indexOf(r);return{val:r,left:buildTree(u.slice(0,x),p.slice(0,x)),right:buildTree(u.slice(x+1),p.slice(x,-1))}}