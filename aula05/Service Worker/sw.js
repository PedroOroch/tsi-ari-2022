window.addEventListener('load', function() {
    if ('servicworker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => {
                console.log('foi instalado com sucesso');
            })
            .catch((err) => {
                console.log('não foi possivel instalar o service worker'), err;
            })
    }
})