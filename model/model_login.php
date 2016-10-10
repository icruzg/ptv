<?php
    $arreglo="";
    $data = json_decode(file_get_contents('php://input'), true);     
    if ( isSet( $data["op"] ) ) {
        if ( $data["op"]=="append" ) {    

            $arreglo["_request"]=array('respuestaBD' => 0 );
        }
    }         
    print_r( json_encode($arreglo) );

?>
