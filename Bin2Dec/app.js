function converter() {
    const input = document.querySelector("#bin");
    const bin = input.value;
    let decimal = 0

    for(let i=bin.length-1; i >= 0; i--) {
       
        decimal+= parseInt(bin[i]) * Math.pow(2,bin.length-1-i);

    }
    console.log(decimal)
}
function verifica(){
    const regex = /^(0|1)+$/;
    const input = document.querySelector("#bin").value;

    if(regex.test(input)){
        converter();
        const mensage = document.querySelector("#mensage");
        mensage.classList.add("hidden");
    }else {
        const mensage = document.querySelector("#mensage");
        mensage.classList.remove("hidden");
    }
}