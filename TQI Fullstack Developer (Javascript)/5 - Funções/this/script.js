// This é utilizada no conetxto de programação orientada a objetos
//
const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }

}

