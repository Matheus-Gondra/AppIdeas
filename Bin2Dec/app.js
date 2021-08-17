function converter() {
    const input = document.querySelector("#bin");
    const bin = input.value;
    let decimal = 0

    for(let i=bin.length-1; i >= 0; i--) {
       
        decimal+= parseInt(bin[i]) * Math.pow(2,bin.length-1-i);

    }
    return decimal;
}


function verifica(){
    const regex = /^(0|1)+$/;
    const input = document.querySelector("#bin").value;

    if(regex.test(input)){
        converter();
        const mensage = document.querySelector("#mensage");
        mensage.classList.add("hidden");
	    const resultado = document.querySelector("#output");
	    resultado.classList.remove("hidden");
	    resultado.classList.add("output-area");
    }else {
        const resultado = document.querySelector("#output");
        resultado.classList.add("hidden");
        resultado.classList.remove("output-area");
        const mensage = document.querySelector("#mensage");
        mensage.classList.remove("hidden");
    }
}

function bin2dec() {
	verifica();
	const output = document.querySelector("#dec");
	const dec = converter();
	output.innerHTML = dec;
	
}
