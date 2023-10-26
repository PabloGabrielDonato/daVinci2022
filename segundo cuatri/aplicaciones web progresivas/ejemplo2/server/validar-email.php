<?php

    $email_validar = $_GET['email'];


    if($email_validar==='ajax@gmail.com'){
        echo"El mail ".$email_validar." ya existe en la db. :(";
    }else{
        echo"El mail ".$email_validar." esta disponible :)";
    }

?>