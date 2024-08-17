// Criando erros

// new Error(message, fileName, lineNumber)

const MeuErro = new Error("Mensagem Inválida");

MeuErro.name = "InvalidMessage";

throw MeuErro;