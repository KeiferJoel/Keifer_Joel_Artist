window.addEventListener('load', function() {
    // Ocultar el loader y mostrar el contenido
    const loader = document.getElementById('loader');
    const loaderLogo = document.getElementById('loaderLogo');
    const content = document.getElementById('content');
  
    // Ocultamos el loader después de 1 segundo (para darle un pequeño retraso)
    setTimeout(function() {
      loader.style.display = 'none'; 
      loaderLogo.style.display = 'none';// Ocultar la pantalla de carga
      content.style.display = 'block'; // Mostrar el contenido de la página
    }, 3000); // Puedes ajustar el tiempo del retraso si es necesario
  });
  