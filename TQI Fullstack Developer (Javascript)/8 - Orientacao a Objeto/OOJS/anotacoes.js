// OOJS
// todos os objetos Javascript herdam propriedades e métodos de um prototype. O objeto Object.prototype está no topo desta cadeia.
// cadeia de protótipos, quando se chama um método de um objeto esse método é procurado na classe pai desse objeto, caso não encontre é buscado na classe pai da classe pai. O objeto Object.prototype está no topo desta cadeia.
// CLASSES syntatic sugar: uma sintaxe feita para facilitar a escrita. A utilização das palavras class são syntatic sugar.
// O javascript não possui classes nativamente. Todas classes são objetos e a herança se dá por protótipos.

class Animal {
    constructor(type = "animal"){
        this.type = type;
    }

    get type(){
        return this.type;
    }

    makeSound() {
        console.log("Making animal sound");
    }

}

class Cat extends Animal {
    constructor(){
        super("cat")
    }

    makeSound() {
        super.makeSound();
        console.log("Meow");
    }
}