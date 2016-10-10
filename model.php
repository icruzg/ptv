<?php
	
 session_start();
if ( !isSet($_SESSION['data']) ) $_SESSION['data']=array();
 
$data = json_decode(file_get_contents('php://input'), true);
 
if ( isSet( $data["op"] ) ) {
    if ( $data["op"]=="append" ) {
        $pos=count($_SESSION['data']);
        $_SESSION['data'][ $pos ]=array( 'nombre'=>$data["nombre"], 'passsword'=>$data["password"] );
        }
 
    if ( $data["op"]=="delete" ) {
        for($i=0; $i<count($_SESSION['data']); $i++)
            if ( $_SESSION['data'][$i]["nombre"]==$data["nombre"] ) {
                unset($_SESSION['data'][$i]);
                $_SESSION['data']=array_values( $_SESSION['data'] );
                }
        }
    }
 
    echo "names: ".json_encode( $_SESSION['data'] );
?>
