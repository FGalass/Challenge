function encriptar() {
    let msj = document.querySelector("#input-texto").value;
    let msjCifrado = msj.replace(/e/ig, "enter").replace(/i/ig, "imes").replace(/a/ig, "ai").replace(/o/ig, "ober").replace(/u/ig, "ufat");
    document.querySelector("#msg").value = msjCifrado;
}


function desencriptar() {
    let texto = document.querySelector("#input-texto").value;
    let msjDecifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#msg").value = msjDecifrado;
}


function copyToClipBoard() {
    var copyText = document.querySelector("#msg");
    console.log(copyText.value)
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text: " + copyText.value);
} 
