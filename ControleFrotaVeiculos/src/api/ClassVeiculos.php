<?php
include("ClassConexao.php");

class ClassVeiculos extends ClassConexao{
    public function getAll($params){

      $get = "select * from veiculos order by id desc";

      if ($params["params"] != 0 ) {
        if ($params["params"] == 1){
          $like = $params["val"];
          $get = "select * from veiculos where placa like '$like%' order by id desc";
        } else if ($params["params"] == 2){
          $like = $params["val"];
          $get = "select * from veiculos where marca like '$like%' or modelo like '$like%' order by id desc";
        }
      } else {

      }
        
        $BFetch = $this->conectaDb()->prepare($get);
        $BFetch->execute();

        $J = [];
        $I = 0;

        while($Fetch = $BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id"=>$Fetch["id"],
                "placa"=>$Fetch["placa"],
                "ano_modelo"=>$Fetch["ano_modelo"],
                "ano_fabr"=>$Fetch["ano_fabr"],
                "chassi"=>$Fetch["chassi"],
                "renavam"=>$Fetch["renavam"],
                "marca"=>$Fetch["marca"],
                "modelo"=>$Fetch["modelo"],
                "cor"=>$Fetch["cor"],
                "combustivel"=>$Fetch["combustivel"],
                "motorizacao"=>$Fetch["motorizacao"],
                "km_atual"=>$Fetch["km_atual"],
                "imagem"=>$Fetch["imagem"],
                "tipo"=>$Fetch["tipo"],
                "situacao"=>$Fetch["situacao"],
            ];

            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }

    public function insert($body){

      if (array_key_exists("id", $body)) {
        try {
          $BFetch = $this->conectaDb()->prepare('DELETE FROM veiculos WHERE id = :id');
          $BFetch->bindParam(':id', $body["id"]); 
          $BFetch->execute();
          echo $BFetch->rowCount(); 
        } catch(PDOException $e) {
          echo 'Error: ' . $e->getMessage();
        }
       }
        
        try {
            $BFetch = $this->conectaDb()->prepare('INSERT INTO veiculos (placa, ano_modelo, ano_fabr, chassi, renavam, marca, modelo, cor, combustivel, motorizacao, km_atual, imagem, tipo, situacao) VALUES(:placa, :ano_modelo, :ano_fabr, :chassi, :renavam, :marca, :modelo, :cor, :combustivel, :motorizacao, :km_atual, :imagem, :tipo, :situacao)');
            $BFetch->execute(array(
              ':placa' => $body["placa"],
              ':ano_modelo' => $body["ano_modelo"],
              ':ano_fabr' => $body["ano_fabr"],
              ':chassi' => $body["chassi"],
              ':renavam' => $body["renavam"],
              ':marca' => $body["marca"],
              ':modelo' => $body["modelo"],
              ':cor' => $body["cor"],
              ':combustivel' => $body["combustivel"],
              ':motorizacao' => $body["motorizacao"],
              ':km_atual' => $body["km_atual"],
              ':imagem' => $body["imagem"],
              ':tipo' => $body["tipo"],
              ':situacao' => $body["situacao"],
            ));
             
            echo $BFetch->rowCount(); 
          } catch(PDOException $e) {
            echo 'Error: ' . $e->getMessage();
          }

}

public function delete($id){
  try {
    $BFetch = $this->conectaDb()->prepare('DELETE FROM veiculos WHERE id = :id');
    $BFetch->bindParam(':id', $id["id"]); 
    $BFetch->execute();
    echo $BFetch->rowCount(); 
  } catch(PDOException $e) {
    echo 'Error: ' . $e->getMessage();
  }
}

}


