class ayudasSpan extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            span {
                display: inline-block;
                border-radius: 8px;
                box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
                color: rgb(48, 95, 184);
                font-weight: bold;
                font-family: Arial, Helvetica, sans-serif;
                padding: 5px 10px;
                font-size: 1.0em;
                margin: 0 0 20px;
            }
        </style>
        <span><slot></slot></span>
        `;
    }
}

customElements.define("ayudas-span", ayudasSpan);

class NotificacionesButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            button {
                display: flex;
                align-items: center;
                background-color: rgb(48, 95, 184);
                color: white; 
                border: none; 
                border-radius: 5px; 
                padding: 10px 15px; 
                font-size: 16px; 
                cursor: pointer; 
                transition: background-color 0.3s; 
            }
            button:hover {
                background-color: black; 
            }
            .icon {
                margin-right: 8px; 
            }
        </style>
        <button>
            <span class="icon">🔔</span>
            Notificaciones
        </button>
        `;
    }
}

customElements.define("notificaciones-button", NotificacionesButton);

class CajaClave extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            .container {
                display: flex;
                flex-direction: column;
                margin: 10px;
            }
            input {
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 16px;
            }
            button {
                margin-top: 10px;
                padding: 10px;
                background-color: rgb(48, 95, 184);;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            button:hover {
                background-color: black;
            }
        </style>
        <div class="container">
            <input type="password" placeholder="Introduce tu clave" id="password" />
            <button id="sendButton">Enviar</button>
        </div>
        `;

        this.shadowRoot.querySelector('#sendButton').addEventListener('click', () => {
            this.encryptAndSend();
        });
    }

    encryptAndSend() {
        const passwordInput = this.shadowRoot.querySelector('#password').value;
        const encryptedPassword = btoa(passwordInput);
        console.log('Contraseña Encriptada:', encryptedPassword);
    }
}

customElements.define('caja-clave', CajaClave);

class CuponDescuento extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            .container {
                display: flex;
                align-items: center;
                margin: 10px 0;
            }
            input {
                padding: 10px;
                font-size: 1em;
                border: 1px solid #ccc;
                border-radius: 5px;
                margin-right: 10px;
            }
            button {
                padding: 10px 15px;
                background-color: rgb(48, 95, 184);;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            button:hover {
                background-color: black;
            }
        </style>
        <div class="container">
            <input type="text" placeholder="Introduce tu cupón de descuento" />
            <button class="submit">Aplicar</button>
        </div>
        `;

        // Obtener elementos del shadow DOM
        const input = shadowRoot.querySelector('input');
        const button = shadowRoot.querySelector('.submit');

        button.addEventListener('click', () => {
            const cupon = input.value;
            if (cupon) {
                console.log('Cupón aplicado:', cupon);
            } else {
                console.warn('Por favor, introduce un cupón de descuento.');
            }
        });
    }
}

customElements.define('cupon-descuento', CuponDescuento);

