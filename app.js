var x=0;
var y="web developer"
var container=document.getElementById('web');
function animate(){
    if(x<y.length){
        container.innerHTML=container.innerHTML+y.charAt(x);
        x++;
        setTimeout(animate,100);
    }
}
animate();