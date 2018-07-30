function A()
{
    let d = document.querySelector("input").value;
    let gram = document.querySelector("#gramsOutput");
    gram.innerHTML = d/0.00220462;

    let f = document.querySelector("input").value;
    let kgram = document.querySelector("#kgOutput");
    kgram.innerHTML =f/2.20462;

    let g = document.querySelector("input").value;
    let ounce = document.querySelector("#ozOutput");
    ounce.innerHTML = g*16;
    
}
