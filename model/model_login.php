<?php	
//error_reporting(E_ERROR | E_PARSE);
 $arreglo="";
$data = json_decode(file_get_contents('php://input'), true);
 
if ( isSet( $data["op"] ) ) {
    if ( $data["op"]=="append" ) {                  
        $arreglo["_request"]=array('respuestaBD' => 1 );
        }
}         
    print_r( json_encode($arreglo) );
?>
