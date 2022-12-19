<?php
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: *");
        $rest_json = file_get_contents("php://input");
        $_POST = json_decode($rest_json, true);

        if (empty($_POST['username']) && empty($_POST['password'])) die();

        if ($_POST) {
            // Tilkoblingsinformasjon
            $tjener = "localhost";
            $brukernavn = "root";
            $passord = "root";
            $database = "Login"; //Endre på denne til din database

            // Opprette en kobling
            $kobling = new mysqli($tjener, $brukernavn, $passord, $database);

            // Sjekk om koblingen virker
            if($kobling->connect_error) {
                die("Noe gikk galt: " . $kobling->connect_error);
            } else {
                // echo "Koblingen virker.<br>";
            }

            // Angi UTF-8 som tegnsett
            $kobling->set_charset("utf8");
            
            http_response_code(200);
            $usernameInput = $_POST["username"];
            $passordInput = $_POST["password"];

            // Med linjeskift for 1 tabell    
            $sql = "SELECT * FROM Users"; //Skriv din sql kode her
            $resultat = $kobling->query($sql);

            while($rad = $resultat->fetch_assoc()) {
                $usernameServer = $rad["username"]; //Skriv ditt kolonnenavn her
                $passwordServer = $rad["password"];

                if($usernameInput != $usernameServer) {
                    echo json_decode(["message" => "brukeren finnes ikke"]);
                    exit;
                }

                if ($passordInput == $passwordServer) {
                    // header("Location: http://localhost:3000/Home");
                    // echo "riktig passord";
                    echo json_encode([
                    "sent" => true,
                ]);
                    exit;
                }

                echo json_decode(["feil passord"]);
            }
        }
        else {
            // tell the user about error
            echo json_encode([
                "sent" => false,
                "message" => "Something went wrong"
            ]);
        }
?>
