CREATE TABLE user (
                      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
                      name VARCHAR(100) NOT NULL,
                      email VARCHAR(250) NOT NULL,
                      phone VARCHAR(100) NOT NULL,
                      cep VARCHAR(100) NOT NULL,
                      password VARCHAR(100) NOT NULL,
                      confirmPassword VARCHAR(100) NOT NULL
);