window.addEventListener('load', function() {
   
    const loader = document.getElementById('loader');
    const loaderLogo = document.getElementById('loaderLogo');
    const content = document.getElementById('content');
  
   
    setTimeout(function() {
      loader.style.display = 'none'; 
      loaderLogo.style.display = 'none';
      content.style.display = 'block'; 
    }, 1500);
  });
  