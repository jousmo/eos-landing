<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["nombre"]));
                $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["correo"]), FILTER_SANITIZE_EMAIL);
        $phone = trim($_POST["telefono"]);
        $sector = trim($_POST["sector"]);
        $message = trim($_POST["mensaje"]);

        if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Hubo un error con los datos, inténtelo de nuevo.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "cyndi.delatorre@tec.mx";

        // Set the email subject.
        $subject = "Nuevo mensaje de $name";

        // Build the email content.
        $email_content = "Nombre: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Teléfono: $phone\n";
        $email_content .= "Sector: $sector\n";
        $email_content .= "Mensaje:\n$message\n\n";
        $email_content .= "Mensaje enviado desde el formulario de contacto de EOS";

        // Build the email headers.
        $email_headers = "De: $name <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Gracias, tu mensaje se envió con éxito.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Hubo un error al enviar tu mensaje.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Hubo un error, por favor intenta de nuevo.";
    }

?>