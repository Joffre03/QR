//var qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(textoConcatenado);

function generacionQR(){
    let input1=document.getElementById('input1').value.trim();//trim elimina los espacios de izquierda y derecha del string
    let input2=document.getElementById('input2').value.trim();
    let input3=document.getElementById('input3').value.trim();
    let input4=document.getElementById('input4').value.trim();

    //concatenar todos los inputs 
    let textoConcatenado=input1+","+input2+","+input3+","+input4;

    if(textoConcatenado==",,,"){
        alert("Los datos estan vacios");
    }
    var qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(textoConcatenado);

    let qrImg=document.createElement('img'); //creamos una variable que almacene un elemento de tipo imagen
    qrImg.src=qrCodeURL; //codigo qr generado por el API lo guarde en qrImg
    qrImg.alt="CodigoQR" //alt muestra un mensaje cuando no craga la imagen

    //tipo herencia
    qrImg.classList.add('qr-code'); //papa lo agregamos al html en la parte de qr-code

    document.getElementById('qr-code').appendChild(qrImg); //hijo
    console.log(textoConcatenado);
    console.log(input1);

}