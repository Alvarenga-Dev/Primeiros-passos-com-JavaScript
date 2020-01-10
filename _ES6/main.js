console.warn('Todos os códigos estão no arquivo main.js!');
console.warn('Todos os warnings são resultados!');
//Classes no JavaScript
console.warn('---Classes---');
class MyFirstClass{
    constructor(){
        console.log("Este é um construtor!")
    }

    myFirstMethod() {
        console.log("Hello, world!");
    }

}

const myFirstClass = new MyFirstClass();
myFirstClass.myFirstMethod();

//Métodos estáticos
console.warn('---Métodos estáticos---');
class mySecondClass {
    static myStaticMethod(){
        console.log("Meu método estático :D");
    }
}

mySecondClass.myStaticMethod(); // Não precisa fazer a intância da classe!

//Herança -> Capacidade de criar uma classe a partir de outra!
console.warn('---Herança---');
class Pessoa {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    personalData(){
        console.log("O nome da pessoa é " + this.name +" e que possui " + this.age + " de idade.");
    }
}

class Lucas extends Pessoa{}
class Anna extends Pessoa{}
class Bernado extends Pessoa{}

const lucas = new Lucas("Lucas", 17);
lucas.personalData();

const anna = new Anna("Anna", 18);
anna.personalData();

const bernado = new Bernado("Bernado", 18);
bernado.personalData();

//var x const x let
console.warn('---var x const x let---');

const a = 1; // A constante não pode ter o seu valor reatribuido!
//Mas com a constante podemos mutar uma variável, exemplo: 
const user = { nome: 'Miguel' };
user.nome = 'Lucas';
console.log(user);
console.log("Diferenças entre o Let e o Var está no código!");

// var -> Falando de uma forma leiga, o va pode ser usado de uma forma mais global ou pode ser usado dentro de um escopo ou fora dele.
/* Ex.: (Funciona)
for (var indexVar = 0; indexVar < 3; indexVar++) {
    console.log(indexVar);    
} 
console.log(indexVar + 1);*/

// let -> O let foi atribuído ao JavaScript com o objetivo de trazer o escopo de bloco (tão conhecido em outras linguagens) que o ECMAScript 6 destinou-se a disponibilizar essa mesma flexibilidade e uniformidade para a linguagem.
/* Ex.: (Error)
for (let indexLet = 10; indexLet < 13; indexLet++) {
    console.log(indexLet);    
}
console.log(indexLet+1); */

//Arrow Functions
console.warn("---Arrow Functions---")
const soma = (a,b) => {
    return a + b;
}

console.log( soma(1,2) );

//Operações em Array
console.warn('---Operações em Array---');

const arr = [1,2,3,4,5,6,7,8];
console.log(arr);

//Map() - Função que percorre o Array
console.warn("Função - Map()");
const newArr = arr.map((item, index) => {
    return item + index; 
});
console.log(newArr);

//Reduce() - Consome o Array até transforma-lo em uma única variável.
console.warn("Função - Reduce()");
const reduce = arr.reduce((total, nextNumber) => {
    return total + nextNumber;
}); 

console.log(reduce);

//Filter() - Realiza a 'filtragem', isto é, realiza uma seleção dentro do Array. 
console.warn("Função - Filter()");
const filterNumbers = arr.filter(item => item % 2 === 0);

console.log(filterNumbers);

//Find() - A busca de uma informação e verifica a sua existencia.
console.warn("Função - Find()");
const find = arr.find(item => item === 4);

console.log(find);

// Destruturação
const userInfo = {
    name: 'Lucas',
    age: 17,
    from: {
        nation: 'Brazil',
    },
};

const { name, age, from: { nation } } = userInfo; //Sintaxe da destruturação

console.log(name);
console.log(age);
console.log(nation);

// Operador REST <-> Sentido de Rest
console.warn("---Operador REST---")
const account = {
    username: 'Alvarenga.dev',
    email: 'llucasallvarenga@gmail.com',
    working: false,
}

const {username, ...rest} = account;

console.log(username)
console.log(rest)

function multiplication(...params){
    return params.reduce( (total, next) => total * next );
}

console.log(multiplication(1,2,3,4,5));

// Operador SPREAD <-> Sentido de propagar
console.warn("---Operador SPREAD---")
const arr1 = [1,2];
const arr2 = [3,4];
const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);

const people = {
    name: 'Lucas',
    age: 17,
    work: 'Developer',
}

const newPeople = { ...people, name: 'Matheus' };

console.log(newPeople);

//Template Literals -> use a crase (``) para utilizar o operador ${}
console.warn("---Template Literals---")
const firstName = 'Lucas';
const lastName = 'Alvarenga';

console.log(`Meu nome é ${firstName} ${lastName}`);