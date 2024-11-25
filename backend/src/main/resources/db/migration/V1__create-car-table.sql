CREATE TABLE carro (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    novo_ou_usado BOOLEAN NOT NULL,
    valor_bruto DECIMAL(10, 2) NOT NULL,
    valor_liquido DECIMAL(10, 2) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    ano INT NOT NULL,
    quilometragem INT,
    categoria VARCHAR(50 NOT NULL,
    fabricante VARCHAR(100) NOT NULL,
    cor_id INT NOT NULL,
    placa VARCHAR(10) NOT NULL,
    estado VARCHAR(2),
    cidade VARCHAR(100)
    tipo_de_combustivel VARCHAR(50),  -- Tipo de combustível (Gasolina, Álcool, Elétrico, Flex)
    numero_de_donos INT,  -- Quantos donos o carro teve (para carros usados)
    data_de_cadastro TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,  -- Data de cadastro do carro no sistema
);
