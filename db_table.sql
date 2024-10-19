CREATE TABLE IF NOT EXISTS pessoas(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    apelido VARCHAR(32) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE NOT NULL,
    stack VARCHAR(32)[]
);