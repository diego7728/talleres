class titleVerdeUfpso extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = '<p> Bienvenidos a la UFPSO </p>';
        this.style.color = "green";
        this.style.fontFamily = "arial";
        this.style.fontSize = "50px";
        this.style.textDecoration = "underline";
        this.style.fontWeight = "bold";
    }
}

window.customElements.define("titleverde-ufpso", titleVerdeUfpso);

class buttonUfpso extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<button>Ir al carrito</button>`;
        this.style.display = "inline-block";
        this.style.margin = "10px";
        this.style.padding = "10px 20px";
        this.style.backgroundColor = "gray";  
        this.style.color = "";
        this.style.border = "none";
        this.style.borderRadius = "5px";
        this.style.cursor = "pointer";
        this.style.fontSize = "16px";
        this.style.fontFamily = "Arial";
        this.style.textAlign = "center";
        this.style.textDecoration = "none";
    }
}

window.customElements.define("button-ufpso", buttonUfpso);