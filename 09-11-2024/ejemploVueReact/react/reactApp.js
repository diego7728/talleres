const { useState } = React;

function ReactApp() {
    // Ejemplo 1: Contador que incrementa
    const [contador, setContador] = useState(0);

    // Ejemplo 2: Texto en tiempo real
    const [texto, setTexto] = useState("");

    // Ejemplo 3: Cambio de color al hacer clic
    const [color, setColor] = useState("black");

    return (
        <div>
            <h1>Ejemplos de Reactividad en React</h1>

            {/* Ejemplo 1: Contador */}
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>
                Incrementar Contador
            </button>

            {/* Ejemplo 2: Texto en tiempo real */}
            <div style={{ marginTop: "20px" }}>
                <h2>Texto en tiempo real:</h2>
                <input 
                    type="text" 
                    value={texto} 
                    onChange={(e) => setTexto(e.target.value)} 
                    placeholder="Escribe algo..."
                />
                <p>{texto}</p>
            </div>

            {/* Ejemplo 3: Cambio de color */}
            <div style={{ marginTop: "20px" }}>
                <h2 style={{ color: color }}>Este texto cambia de color</h2>
                <button onClick={() => setColor(color === "black" ? "blue" : "black")}>
                    Cambiar Color
                </button>
            </div>
        </div>
    );
}

// Monta la aplicación de React en el contenedor con ID 'react-root' usando createRoot
const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<ReactApp />);

