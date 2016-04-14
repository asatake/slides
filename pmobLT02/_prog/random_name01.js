function OnButtonClick01(){
    var a = "ア".charCodeAt(0);
    var n = "ン".charCodeAt(0);
    var rand = Math.floor( Math.random() * (n - 1 - a) ) + a;
    var res = String.fromCharCode(rand);
    target = document.getElementByID("output");
    target.innerHTML = res + "ン";
}
