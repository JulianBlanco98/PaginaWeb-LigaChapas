document.addEventListener('DOMContentLoaded', function () {
    const botonesMeGusta = document.querySelectorAll('.articulo #botonMeGusta');

    botonesMeGusta.forEach(boton => {
        const articleId = boton.closest('.articulo').id;
        pintarButton(articleId);

        boton.addEventListener('click', function () {
            handleLikeButtonClick(articleId);
        });
    });

    function setLikeCookie(articleId, value) {
        document.cookie = `liked_${articleId}=${value}; expires=30; path=/`;
    }

    function getLikeCookie(articleId) {
        const cookieName = `liked_${articleId}=`;
        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length) === 'true';
            }
        }

        return false;
    }

    function pintarButton(articleId) {
        const articulo = document.getElementById(articleId);
        const botonMeGusta = articulo.querySelector('#botonMeGusta');
        const liked = getLikeCookie(articleId);

        if (liked) {
            botonMeGusta.classList.add('liked');
        } else {
            botonMeGusta.classList.remove('liked');
        }
    }

    function handleLikeButtonClick(articleId) {
        const liked = getLikeCookie(articleId);
        const toastLiveExample = document.getElementById('liveToast');
        const message = document.getElementById('message');

        if (liked) {
            showToast('bg-danger text-light', "Quitando 'Me gusta' a este artículo.");
            setLikeCookie(articleId, false);
            //Borrar la cookie una vez pulsado el botón
            document.cookie = `liked_${articleId}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        } else {
            showToast('bg-success text-light', "¡Le diste 'Me gusta' a este artículo!");
            setLikeCookie(articleId, true);
        }



        pintarButton(articleId);
    }

    function showToast(params, msg) {
        const toastLiveExample = document.getElementById('liveToast');
        const message = document.getElementById('message');

        toastLiveExample.className = '';
        toastLiveExample.classList.add('toast');

        const classes = params.split(' ');
        classes.forEach(className => {
            toastLiveExample.classList.add(className);
        });

        message.innerHTML = msg;

        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
    }
});
