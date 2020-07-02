(function () {
    // Smooth scrolling
    $('.anchor').on('click', function (event) {
        event.preventDefault();
        let Item = $(this).attr('href');

        $('body, html').stop(true, true).animate({
            scrollTop: $(Item).offset().top - 57
        }, 1000);
    });

    // Navegación sticky
    window.onscroll = function () { myFunction() };
    var header = document.getElementById("navbar");
    var logo = document.getElementById("logo-navbar");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            $('#logo-navbar').attr('src', './assets/images/logo-2.png');

        } else {
            header.classList.remove("sticky");
            $('#logo-navbar').attr('src', './assets/images/logo.png');
        }
    }

    // Menú de navegación
    $('#mburger').click(function (e) {
        e.stopPropagation();
        $('.menu').toggleClass('menu-abierto');
        $('#navbar').toggleClass('opacity-0');
        $('#menu-overlay').toggleClass('menu-overlay-opacity-1');
    });

    $('.menu').click(function (e) {
        e.stopPropagation();
    });

    $('body,html').click(function (e) {
        $('.menu').removeClass('menu-abierto');
        $('#navbar').removeClass('opacity-0');
        $('#menu-overlay').removeClass('menu-overlay-opacity-1');
    });

    document.getElementById("cerrar-menu").addEventListener("click", cerrarMenu, false);
    document.getElementById("btn-logo").addEventListener("click", cerrarMenu, false);
    document.getElementById("btn-nav-1").addEventListener("click", cerrarMenu, false);
    document.getElementById("btn-nav-2").addEventListener("click", cerrarMenu, false);
    document.getElementById("btn-nav-3").addEventListener("click", cerrarMenu, false);
    document.getElementById("btn-nav-4").addEventListener("click", cerrarMenu, false);
    document.getElementById("btn-nav-5").addEventListener("click", cerrarMenu, false);

    function cerrarMenu() {
        $('.menu').removeClass('menu-abierto');
        $('#navbar').removeClass('opacity-0');
        $('#menu-overlay').removeClass('menu-overlay-opacity-1');
    }

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

    // Waypoints
    var top = new Waypoint({
        element: document.getElementById('top'),
        handler: function (direction) {
            $("#top").addClass("animate__animated animate__fadeIn");
        }
    });

    var nuestrosClientes = new Waypoint({
        element: document.getElementById('nuestros-clientes'),
        handler: function (direction) {
            $("#titulo").addClass("animate__animated animate__fadeInUp");
            $("#cliente-1").addClass("animate__animated animate__fadeIn");
            setTimeout(function () {
                $("#cliente-2").addClass("animate__animated animate__fadeIn");
            }, 250);
            setTimeout(function () {
                $("#cliente-3").addClass("animate__animated animate__fadeIn");
            }, 500);
            setTimeout(function () {
                $("#cliente-4").addClass("animate__animated animate__fadeIn");
            }, 750);
            setTimeout(function () {
                $("#cliente-5").addClass("animate__animated animate__fadeIn");
            }, 1000);
            setTimeout(function () {
                $("#cliente-6").addClass("animate__animated animate__fadeIn");
            }, 1250);
            setTimeout(function () {
                $("#cliente-7").addClass("animate__animated animate__fadeIn");
            }, 1500);
            setTimeout(function () {
                $("#cliente-8").addClass("animate__animated animate__fadeIn");
            }, 1750);
        },
        offset: '50%'
    });

    var conoceEOS = new Waypoint({
        element: document.getElementById('conoce-eos'),
        handler: function (direction) {
            $("#titulo-2").addClass("animate__animated animate__fadeInUp");
            $("#feature-1").addClass("animate__animated animate__fadeIn");
            setTimeout(function () {
                $("#feature-2").addClass("animate__animated animate__fadeIn");
            }, 250);
            setTimeout(function () {
                $("#feature-3").addClass("animate__animated animate__fadeIn");
            }, 500);
            setTimeout(function () {
                $("#feature-4").addClass("animate__animated animate__fadeIn");
            }, 750);
            setTimeout(function () {
                $("#feature-5").addClass("animate__animated animate__fadeIn");
            }, 1000);
            setTimeout(function () {
                $(".blockquote").addClass("animate__animated animate__fadeInUp");
            }, 1500);
        },
        offset: '50%'
    });

    var computadoras = new Waypoint({
        element: document.getElementById('computadoras'),
        handler: function (direction) {
            $("#computadora-1").addClass("animate__animated animate__fadeInLeft");
            $("#computadora-2").addClass("animate__animated animate__fadeInRight");
        },
        offset: '50%'
    });

    var todoEnUnSoloLugar = new Waypoint({
        element: document.getElementById('todo-en-un-solo-lugar'),
        handler: function (direction) {
            $("#todo-en-un-solo-lugar").addClass("animate__animated animate__fadeIn");
        },
        offset: '50%'
    });

    var somosUnaPlataforma = new Waypoint({
        element: document.getElementById('somos-una-plataforma'),
        handler: function (direction) {
            $("#headline").addClass("animate__animated animate__fadeInUp");
            setTimeout(function () {
                $("#plataforma-1").addClass("animate__animated animate__fadeIn");
            }, 250);
            setTimeout(function () {
                $("#plataforma-2").addClass("animate__animated animate__fadeIn");
            }, 500);
            setTimeout(function () {
                $("#plataforma-3").addClass("animate__animated animate__fadeIn");
            }, 750);
            setTimeout(function () {
                $("#plataforma-4").addClass("animate__animated animate__fadeIn");
            }, 1000);
            setTimeout(function () {
                $("#plataforma-5").addClass("animate__animated animate__fadeIn");
            }, 1250);
            setTimeout(function () {
                $("#plataforma-6").addClass("animate__animated animate__fadeIn");
            }, 1500);
        },
        offset: '50%'
    });

    var descanso = new Waypoint({
        element: document.getElementById('descanso'),
        handler: function (direction) {
            $("#descanso").addClass("animate__animated animate__fadeIn");
        },
        offset: '50%'
    });

    var footer = new Waypoint({
        element: document.getElementById('footer'),
        handler: function (direction) {
            $("#footer").addClass("animate__animated animate__fadeIn");
        },
        offset: '50%'
    });
})();