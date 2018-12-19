<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Envoi d'un email par formulaire</title>
</head>

<body>
    <?php
    $retour = mail('oreliauk@gmail.com', 'Envoi depuis mon site', $_POST['message'], 'From : oreliauk@gmail.com');
    if ($retour) {
        echo '<p>Votre message a bien été envoyé !</p>';
    }
    ?>
</body>

</html>