class PersonC {
    constructor(nm, id){
        this.name = nm;
        this.id = id;
    }
    getDetails(){
        return `Name: ${this.name} / Id: ${this.id}`
    }
}


let bob = new PersonC("Bob", 123);
let pete = new PersonC("Pete", 999);
console.log(bob.getDetails(), bob.name);
console.log(pete.getDetails(), pete.name, pete.id);
