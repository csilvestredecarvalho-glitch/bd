<?php

require_once "conexao.php";

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$metodo = $_SERVER["REQUEST_METHOD"];

try {

    
    if ($metodo === "GET") {

        $sql = "SELECT
                    id_alunos,
                    cpf,
                    nome,
                    data_de_nascimento,
                    email,
                    id_curso
                FROM alunos
                ORDER BY id_alunos DESC";

        $stmt = $pdo->query($sql);
        $alunos = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($alunos);
        exit;
    }


    
    if ($metodo === "POST") {

        $dados = json_decode(file_get_contents("php://input"), true);

        $cpf = $dados["cpf"] ?? null;
        $nome = $dados["nome"] ?? null;
        $dataNascimento = $dados["data_de_nascimento"] ?? null;
        $email = $dados["email"] ?? null;
        $idCurso = $dados["id_curso"] ?? null;

        if (!$nome || !$cpf || !$email) {

            http_response_code(400);

            echo json_encode([
                "sucesso" => false,
                "mensagem" => "Nome, CPF e e-mail são obrigatórios."
            ]);

            exit;
        }

        $sql = "INSERT INTO alunos
                (cpf, nome, data_de_nascimento, email, id_curso)
                VALUES
                (:cpf, :nome, :data_nascimento, :email, :id_curso)";

        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            ":cpf" => $cpf,
            ":nome" => $nome,
            ":data_nascimento" => $dataNascimento ?: null,
            ":email" => $email,
            ":id_curso" => $idCurso ?: null
        ]);

        echo json_encode([
            "sucesso" => true,
            "mensagem" => "Aluno cadastrado com sucesso.",
            "id" => $pdo->lastInsertId()
        ]);

        exit;
    }


    
    if ($metodo === "PUT") {

        $dados = json_decode(file_get_contents("php://input"), true);

        $id = $dados["id_alunos"] ?? null;

        if (!$id) {

            http_response_code(400);

            echo json_encode([
                "sucesso" => false,
                "mensagem" => "ID do aluno não informado."
            ]);

            exit;
        }

        $sql = "UPDATE alunos SET
                    cpf = :cpf,
                    nome = :nome,
                    data_de_nascimento = :data_nascimento,
                    email = :email,
                    id_curso = :id_curso
                WHERE id_alunos = :id";

        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            ":cpf" => $dados["cpf"] ?? null,
            ":nome" => $dados["nome"] ?? null,
            ":data_nascimento" => $dados["data_de_nascimento"] ?? null,
            ":email" => $dados["email"] ?? null,
            ":id_curso" => $dados["id_curso"] ?? null,
            ":id" => $id
        ]);

        echo json_encode([
            "sucesso" => true,
            "mensagem" => "Aluno atualizado com sucesso."
        ]);

        exit;
    }


    
    if ($metodo === "DELETE") {

        $dados = json_decode(file_get_contents("php://input"), true);

        $id = $dados["id_alunos"] ?? null;

        if (!$id) {

            http_response_code(400);

            echo json_encode([
                "sucesso" => false,
                "mensagem" => "ID do aluno não informado."
            ]);

            exit;
        }

        $sql = "DELETE FROM alunos WHERE id_alunos = :id";

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ":id" => $id
        ]);

        echo json_encode([
            "sucesso" => true,
            "mensagem" => "Aluno excluído com sucesso."
        ]);

        exit;
    }


    http_response_code(405);

    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Método não permitido."
    ]);

} catch (PDOException $e) {

    http_response_code(500);

    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Erro no banco de dados.",
        "erro" => $e->getMessage()
    ]);
}