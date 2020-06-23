(function () {
    // Smooth scrolling
    $('.anchor').on('click', function (event) {
        event.preventDefault();
        let Item = $(this).attr('href');

        $('body, html').stop(true, true).animate({
            scrollTop: $(Item).offset().top - 59
        }, 1000);
    });

    // Menú de navegación
    // $('#mburger').click(function (e) {
    //     e.stopPropagation();
    //     $('.menu').toggleClass('menu-abierto');
    //     $('.menu-contenido').toggleClass('opacity-1');
    //     $('#mburger-container').toggleClass('opacity-0');
    // });

    // $('.menu').click(function (e) {
    //     e.stopPropagation();
    // });

    // $('body,html').click(function (e) {
    //     $('.menu').removeClass('menu-abierto');
    //     $('.menu-contenido').removeClass('opacity-1');
    //     $('#mburger-container').removeClass('opacity-0');
    // });

    // document.getElementById("cerrar-menu").addEventListener("click", cerrarMenu, false);
    // document.getElementById("btn-nav-1").addEventListener("click", cerrarMenu, false);
    // document.getElementById("btn-nav-2").addEventListener("click", cerrarMenu, false);
    // document.getElementById("btn-nav-3").addEventListener("click", cerrarMenu, false);
    // document.getElementById("btn-nav-4").addEventListener("click", cerrarMenu, false);
    // document.getElementById("btn-nav-5").addEventListener("click", cerrarMenu, false);
    // document.getElementById("btn-nav-6").addEventListener("click", cerrarMenu, false); Botón Blog
    // document.getElementById("btn-nav-7").addEventListener("click", cerrarMenu, false);
    // document.getElementById("btn-nav-8").addEventListener("click", cerrarMenu, false);
    // document.getElementById("btn-solicitar-cotizacion").addEventListener("click", cerrarMenu, false);

    // function cerrarMenu() {
    //     $('.menu').removeClass('menu-abierto');
    //     $('.menu-contenido').removeClass('opacity-1');
    //     $('#mburger-container').removeClass('opacity-0');
    // }

    // Validación formulario
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (form.checkValidity() === true) {
                    // Ajax submition
                    // Get the messages div.
                    var formMessages = $('#form-messages');

                    // Stop the browser from submitting the form.
                    event.preventDefault();

                    $('#hold-on-a-sec').addClass('is-loading');

                    // Data
                    var nombre = $('#nombre').val();
                    var correo = $('#correo').val();
                    var telefono = $('#telefono').val();
                    var sector = $('#sector').val();
                    var mensaje = $('#mensaje').val();

                    // Submit the form using AJAX.
                    $.ajax({
                        type: 'POST',
                        url: $(form).attr('action'),
                        data: {
                            nombre: nombre,
                            correo: correo,
                            telefono: telefono,
                            sector: sector,
                            mensaje: mensaje,
                        }
                    })
                        .done(function (response) {
                            // Make sure that the formMessages div has the 'success' class.
                            $(form).removeClass('was-validated');
                            $('#hold-on-a-sec').removeClass('is-loading');
                            $(formMessages).removeClass('error');
                            $(formMessages).addClass('success');
                            setTimeout(function () {
                                $(formMessages).remove();
                            }, 5000);

                            // Set the message text.
                            $(formMessages).text(response);

                            // Clear the form.
                            $('#nombre').val('');
                            $('#telefono').val('');
                            $('#correo').val('');
                            $('#sector').val('');
                            $('#mensaje').val('');
                            $('#g-recaptcha-response').val('');
                        })
                        .fail(function (data) {
                            // Make sure that the formMessages div has the 'error' class.
                            $('#hold-on-sec').removeClass('is-loading');
                            $(formMessages).removeClass('success');
                            $(formMessages).addClass('error');
                            setTimeout(function () {
                                $(formMessages).remove();
                            }, 5000);

                            // Set the message text.
                            if (data.responseText !== '') {
                                $(formMessages).text(data.responseText);
                            } else {
                                $(formMessages).text('¡Lo sentimos! Ocurrió un error y el mensaje no pudo ser enviado.');
                            }
                        });
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    // Hamburguesa sticky
    window.onscroll = function () { myFunction() };
    var header = document.getElementById("mburger-container");
    var logo = document.getElementById("logo");
    var mburger = document.getElementById("mburger");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("bg-white");
            logo.classList.remove("logo");
            logo.classList.add("logo-invertido");
            mburger.classList.add("mburger-sticky");
        } else {
            header.classList.remove("bg-white");
            logo.classList.add("logo");
            logo.classList.remove("logo-invertido");
            mburger.classList.remove("mburger-sticky");
        }
    }
})();