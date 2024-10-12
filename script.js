function calc(){
    let p =document.getElementById("p").value;
    let r = document.getElementById("r").value;
    let ten = document.getAnimations("ten").value;
    let t = document.getElementById("t").value

    if(ten == "years"){
        t = t*12;
    }
    let interst = parseInt((p*t*r)/100);

    document.getElementById("tot").value = (parseFloat(interst)+parseFloat(p));
    document.getElementById("int").value=interst.toFixed(2);
    document.getElementById("emi").value=(document.getElementById("tot").value/12)
}