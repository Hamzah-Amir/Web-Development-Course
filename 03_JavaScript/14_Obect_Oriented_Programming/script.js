// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps : true
// }
// console.log(rabbit);

// rabbit.__proto__ = animal

class Animal {
    constructor(name, type) {
        console.log('Object is created.....');
        this.name = name
        this.type = type
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    jump(){
        console.log(`${this.name} is jumping`);
    }
}

class lion extends Animal{
    constructor(name, type) {
        super(name,type)
        console.log('Object is created and is a Lion......');
    }
    roar(){
        console.log(`${this.name} is roaring`);
        
    }
    eat(){
        console.log(`${this.name} is eating Roaaar`);
    }
}

let a = new Animal('Tommy',"Dog");
console.log(a);
a.eat()
a.jump()

let l = new lion("Shera", "Lion")
console.log(l);
l.roar()
l.jump()
l.eat()
