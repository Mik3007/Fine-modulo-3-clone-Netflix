
// creo una funzione per lo scroll, usando la finestra del browser(window) come indicatore.

// window.scrollY in modo che prenda lo scroll dell'asse Y (verticale)

window.addEventListener('scroll', function() {
    const divScroll = document.getElementById('divImg');

    if (window.scrollY > 180) {

        // Rimuove la classe che sposta il div
        divScroll.classList.remove("scroll-img");
    } else {
        // Aggiunge nuovamente la classe quando si ritorna in alto nella pagina
        divScroll.classList.add("scroll-img");
    }
});




