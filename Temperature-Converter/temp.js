function myFunction(){
    var num = document.getElementById("temp").value;
    var unit = document.getElementById("unit").value;
    if(unit==="F" || unit==="f"){
        num = (num - 32) * 5/9
        document.getElementById("answer").innerHTML = num + "\u00B0C";
    }
    if(unit==="C" || unit==="c"){
        num = (num * (9/5)) + 32
        document.getElementById("answer").innerHTML = num + "\u00B0F";
    }
}