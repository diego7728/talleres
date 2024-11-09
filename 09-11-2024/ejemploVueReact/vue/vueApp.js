const { createApp, ref } = Vue;

const vueApp = {
    setup() {
    
        const contador = ref(0);
        const incrementarContador = () => {
            contador.value += 1;
        };

        const texto = ref("");

        const color = ref("black");
        const cambiarColor = () => {
            color.value = color.value === "black" ? "blue" : "black";
        };

        return {
            contador,
            incrementarContador,
            texto,
            color,
            cambiarColor,
        };
    },
    template: `
        <div>
            <!-- Ejemplo 1 -->
            <h2>Contador: {{ contador }}</h2>
            <button @click="incrementarContador">Incrementar Contador</button>

            <!-- Ejemplo 2-->
            <div style="margin-top: 20px;">
                <h2>Texto en tiempo real:</h2>
                <input v-model="texto" placeholder="Escribe algo..." />
                <p>{{ texto }}</p>
            </div>

            <!-- Ejemplo 3-->
            <div style="margin-top: 20px;">
                <h2 :style="{ color: color }">Este texto cambia de color</h2>
                <button @click="cambiarColor">Cambiar Color</button>
            </div>
        </div>
    `
};

createApp(vueApp).mount('#app');