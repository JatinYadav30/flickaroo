const container = document.querySelector(".qrgenerator")
qrinput = container.querySelector(".qrform input");
generator=  container.querySelector(".qrform button");
qrimage = container.querySelector(".qrimg")

generator.addEventListener("click", () => {

    let qrValue = qrinput.value;
    if(!qrValue) return;

    generator.innerText = " Generating Your QR";


    qrimage.src='https://api.qrserver.com/v1/create-qr-code/?size=170x170&data='+qrValue;

    generator.innerText = " Generate";

    


   

});


