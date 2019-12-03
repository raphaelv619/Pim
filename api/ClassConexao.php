<?php
abstract class ClassConexao{
    protected function conectaDb(){
        try{
            $Con = new PDO("mysql:host=localhost;dbname=frota","root","");
            return $Con;
        }
        catch(PDOException $Erro){
            
            return $Erro->getMessage();
        }
    }
}