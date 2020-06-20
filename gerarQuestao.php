<?php 
include ("connect.php"); 

$posicao = gerarNumero();
$consulta = "select * from questao where id=$posicao";


$con = $conexao -> query($consulta) or die ($conexao->error);
       

function gerarNumero(){
    $posi = rand(1,5);
    return $posi;
                      }
?>

