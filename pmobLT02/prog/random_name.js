// 最初
function OnButtonClick01(){
    var a = "ア".charCodeAt(0);
    var n = "ン".charCodeAt(0);
    var rand = Math.floor( Math.random() * (n - 1 - a) ) + a;
    var res = String.fromCharCode(rand);
    target = document.getElementById("output");
    target.innerHTML = res + "ン";
}

// 修正1
function OnButtonClick02(){
    var a = "ア".charCodeAt(0);
    var n = "ン".charCodeAt(0);
    var box = document.forms.id_form1.id_textBox.value;
    var text = [];
    for(var i = 0; i < box; i++){
        var rand = Math.floor( Math.random() * (n - a) ) + a;
        var res = String.fromCharCode(rand);
        text.push(res);
    }
    target = document.getElementById("output");
    target.innerHTML = text.join('');
}

// 修正2
function OnButtonClick03(){
    var a = "ア".charCodeAt(0);
    var n = "ン".charCodeAt(0);
    var box = document.forms.id_form2.id_textBox.value;
    var text = [];
    var rand = 0;
    var res = 'ン';
    var ng = ['ン', 'ッ', 'ャ', 'ュ', 'ョ', 'ァ', 'ィ', 'ゥ', 'ェ', 'ォ', 'ヮ'];
    for(var i = 0; i < box; i++){
        if(i == 0){
            while(ng.indexOf(res) != -1){
                rand = Math.floor( Math.random() * (n - 1 - a) ) + a;
                res = String.fromCharCode(rand);
            }
        }
        else{
            rand = Math.floor( Math.random() * (n - a) ) + a;
            res = String.fromCharCode(rand);
        }
        text.push(res);
    }
    target = document.getElementById("output");
    target.innerHTML = text.join('') + '(名前)';
}

function fairing(box){
    var a = "ア".charCodeAt(0);
    var n = "ン".charCodeAt(0);
    var text = [];
    var rand = 0;
    var res = 'ン';
    var ng = ['ン', 'ッ', 'ャ', 'ュ', 'ョ', 'ァ', 'ィ', 'ゥ', 'ェ', 'ォ', 'ヮ'];
    var small = ng.slice(1, ng.length);
    for(var i = 0; i < box; i++){
        if(i == 0){
            while(ng.indexOf(res) != -1){
                rand = Math.floor( Math.random() * (n - 1 - a) ) + a;
                res = String.fromCharCode(rand);
            }
        }
        else{
            if(small.indexOf(text[i - 1]) != -1){
                rand = Math.floor( Math.random() * (n - a) ) + a;
                res = String.fromCharCode(rand);
                while(small.indexOf(res) != -1){
                    rand = Math.floor( Math.random() * (n - a) ) + a;
                    res = String.fromCharCode(rand);
                }
            }
            else{
                rand = Math.floor( Math.random() * (n - a) ) + a;
                res = String.fromCharCode(rand);
            }
        }
        text.push(res);
    }
    if(text.length > 6){
        var period = Math.floor(text.length / 5);
        for(var i = 0; i < period; i++){
            rand = Math.floor(Math.random() * (text.length - 1));
            text.splice(rand + 1, 0, '・');
        }
    }
    return text;
}

// 修正3
function OnButtonClick04(){
    var box = document.forms.id_form3.id_textBox.value;
    var text = fairing(box);
    target = document.getElementById("output");
    target.innerHTML = text.join('') + '(名前)';
}
