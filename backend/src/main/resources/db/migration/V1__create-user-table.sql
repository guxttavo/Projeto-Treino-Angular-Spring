CREATE TABLE usuario (
                      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
                      nome VARCHAR(100) NOT NULL,
                      email VARCHAR(250) NOT NULL,
                      cpf   VARCHAR(250) NOT NULL,
                      telefone VARCHAR(100) NOT NULL,
                      cep VARCHAR(100) NOT NULL,
                      logradouro VARCHAR(100) NOT NULL,
                      bairro VARCHAR(100) NOT NULL,
                      cidade VARCHAR(100) NOT NULL,
                      estado VARCHAR(100) NOT NULL,
                      senha VARCHAR(100) NOT NULL,
                      confirmaSenha VARCHAR(100) NOT NULL
);