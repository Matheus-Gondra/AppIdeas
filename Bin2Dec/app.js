const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    const input = document.querySelector("#bin");
    const bin = input.value;
    let decimal = 0

    for(let i=bin.length-1; i >= 0; i--) {
       
        decimal+= parseInt(bin[i]) * Math.pow(2,bin.length-1-i);

    }


});