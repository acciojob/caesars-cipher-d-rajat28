// Your Script here.
function rot13(str) {
    var codeArr = [], seq, final = "";
    for (var i = 0; i < str.length; i++) {
       var uCode = str.charCodeAt([i]);
        if ((uCode > 64 && uCode < 78) || (uCode > 96 && uCode < 110)) {
            uCode += 13;
            codeArr.push(uCode);
        } else if ((uCode > 77 && uCode < 91) || (uCode > 109 && uCode < 123)){
            uCode -= 13;
            codeArr.push(uCode);
        } else { codeArr.push(uCode); }
    }
    for (var j = 0; j < codeArr.length; j++) {
        final += String.fromCharCode(codeArr[j]);
    }
    return final;
}

rot13("SERR CVMMN!");