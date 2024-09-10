<?php
$servername = "localhost";  // Nome do servidor
$username = "root";         // Nome de usuário do banco de dados
$password = "";             // Senha do banco de dados
$dbname = "meu_banco";      // Nome do banco de dados

try {
    // Criando a conexão PDO
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    // Configurando o modo de erro do PDO para exceção
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Conexão bem-sucedida";
} catch(PDOException $e) {
    echo "Falha na conexão: " . $e->getMessage();
}
?>
