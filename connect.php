<?php
$hostname = "mysql380.umbler.com:41890";
$user = "cacetech";
$password = "teste123";
$database = "questoes";
$conexao = mysqli_connect($hostname,$user,$password,$database);

if(!$conexao)
{
    echo "Falha na conexão com o banco de dados";
}
?>