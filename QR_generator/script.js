const qrText = document.querySelector("#qrText");
const btnAction = document.querySelector("#btn-action");
const qrCode = document.querySelector("#qr-code");

btnAction.addEventListener("click", async () => {

    if (qrText.value === "") {
        alert("Enter text or website or name to generate QR Code !!");
        return;
    }

    const qrURL =`https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(qrText.value)}`;

    qrCode.src = qrURL;
});