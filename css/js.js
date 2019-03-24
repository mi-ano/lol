function triangleTracker(){
    var S = parseInt(document.getElementById('s').value);
    var Q = parseInt(document.getElementById('q').value);
    var R = parseInt(document.getElementById('r').value);
 
    if (S===R && Q===R && S===Q) {
        window.alert("equilateral");    
    }else if(S===R || Q===R || Q===S){
        window.alert("isosceles");
    }else if (S!==R && Q!==R && S!==Q){
        window.alert("scalene");
    }else{
        window.alert('enter dimensions');
    }
}