// Test case 1: Changing to "enfoque" context
cambiarContexto("enfoque");
console.log(html.getAttribute("data-contexto")); // Expected output: "enfoque"
console.log(banner.getAttribute("src")); // Expected output: "./imagenes/enfoque.png"
console.log(titulo.innerHTML); // Expected output: "Optimiza tu productividad,<br><strong class="app__title-strong">sumérgete en lo que importa.</strong>"

// Test case 2: Changing to "descanso-corto" context
cambiarContexto("descanso-corto");
console.log(html.getAttribute("data-contexto")); // Expected output: "descanso-corto"
console.log(banner.getAttribute("src")); // Expected output: "./imagenes/descanso-corto.png"
console.log(titulo.innerHTML); // Expected output: "¿Que tal tomar un respiro?<strong class="app__title-strong">¡Haz una pausa corta!</strong>"

// Test case 3: Changing to "descanso-largo" context
cambiarContexto("descanso-largo");
console.log(html.getAttribute("data-contexto")); // Expected output: "descanso-largo"
console.log(banner.getAttribute("src")); // Expected output: "./imagenes/descanso-largo.png"
console.log(titulo.innerHTML); // Expected output: "Hora de volver a la superficie<strong class="app__title-strong">¡Haz una pausa larga!</strong>"// Test case 1: Test reiniciar function when idIntervalo is not null
idIntervalo = setInterval(() => {}, 1000);
reiniciar();
console.log(idIntervalo); // Expected output: null
console.log(textoIniciarPausar.textContent); // Expected output: "Iniciar"
console.log(iconoIniciarPausar.getAttribute("src")); // Expected output: "./imagenes/play_arrow.png"

// Test case 2: Test reiniciar function when idIntervalo is null
reiniciar();
console.log(idIntervalo); // Expected output: null
console.log(textoIniciarPausar.textContent); // Expected output: "Iniciar"
console.log(iconoIniciarPausar.getAttribute("src")); // Expected output: "./imagenes/play_arrow.png"