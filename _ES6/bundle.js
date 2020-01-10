"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.warn('Todos os códigos estão no arquivo main.js!');
console.warn('Todos os warnings são resultados!'); //Classes no JavaScript

console.warn('---Classes---');

var MyFirstClass =
/*#__PURE__*/
function () {
  function MyFirstClass() {
    _classCallCheck(this, MyFirstClass);

    console.log("Este é um construtor!");
  }

  _createClass(MyFirstClass, [{
    key: "myFirstMethod",
    value: function myFirstMethod() {
      console.log("Hello, world!");
    }
  }]);

  return MyFirstClass;
}();

var myFirstClass = new MyFirstClass();
myFirstClass.myFirstMethod(); //Métodos estáticos

console.warn('---Métodos estáticos---');

var mySecondClass =
/*#__PURE__*/
function () {
  function mySecondClass() {
    _classCallCheck(this, mySecondClass);
  }

  _createClass(mySecondClass, null, [{
    key: "myStaticMethod",
    value: function myStaticMethod() {
      console.log("Meu método estático :D");
    }
  }]);

  return mySecondClass;
}();

mySecondClass.myStaticMethod(); // Não precisa fazer a intância da classe!
//Herança -> Capacidade de criar uma classe a partir de outra!

console.warn('---Herança---');

var Pessoa =
/*#__PURE__*/
function () {
  function Pessoa(name, age) {
    _classCallCheck(this, Pessoa);

    this.name = name;
    this.age = age;
  }

  _createClass(Pessoa, [{
    key: "personalData",
    value: function personalData() {
      console.log("O nome da pessoa é " + this.name + " e que possui " + this.age + " de idade.");
    }
  }]);

  return Pessoa;
}();

var Lucas =
/*#__PURE__*/
function (_Pessoa) {
  _inherits(Lucas, _Pessoa);

  function Lucas() {
    _classCallCheck(this, Lucas);

    return _possibleConstructorReturn(this, _getPrototypeOf(Lucas).apply(this, arguments));
  }

  return Lucas;
}(Pessoa);

var Anna =
/*#__PURE__*/
function (_Pessoa2) {
  _inherits(Anna, _Pessoa2);

  function Anna() {
    _classCallCheck(this, Anna);

    return _possibleConstructorReturn(this, _getPrototypeOf(Anna).apply(this, arguments));
  }

  return Anna;
}(Pessoa);

var Bernado =
/*#__PURE__*/
function (_Pessoa3) {
  _inherits(Bernado, _Pessoa3);

  function Bernado() {
    _classCallCheck(this, Bernado);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bernado).apply(this, arguments));
  }

  return Bernado;
}(Pessoa);

var lucas = new Lucas("Lucas", 17);
lucas.personalData();
var anna = new Anna("Anna", 18);
anna.personalData();
var bernado = new Bernado("Bernado", 18);
bernado.personalData(); //var x const x let

console.warn('---var x const x let---');
var a = 1; // A constante não pode ter o seu valor reatribuido!
//Mas com a constante podemos mutar uma variável, exemplo: 

var user = {
  nome: 'Miguel'
};
user.nome = 'Lucas';
console.log(user);
console.log("Diferenças entre o Let e o Var está no código!"); // var -> Falando de uma forma leiga, o va pode ser usado de uma forma mais global ou pode ser usado dentro de um escopo ou fora dele.

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

console.warn("---Arrow Functions---");

var soma = function soma(a, b) {
  return a + b;
};

console.log(soma(1, 2)); //Operações em Array

console.warn('---Operações em Array---');
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr); //Map() - Função que percorre o Array

console.warn("Função - Map()");
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //Reduce() - Consome o Array até transforma-lo em uma única variável.

console.warn("Função - Reduce()");
var reduce = arr.reduce(function (total, nextNumber) {
  return total + nextNumber;
});
console.log(reduce); //Filter() - Realiza a 'filtragem', isto é, realiza uma seleção dentro do Array. 

console.warn("Função - Filter()");
var filterNumbers = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filterNumbers); //Find() - A busca de uma informação e verifica a sua existencia.

console.warn("Função - Find()");
var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); // Destruturação

var userInfo = {
  name: 'Lucas',
  age: 17,
  from: {
    nation: 'Brazil'
  }
};
var name = userInfo.name,
    age = userInfo.age,
    nation = userInfo.from.nation; //Sintaxe da destruturação

console.log(name);
console.log(age);
console.log(nation); // Operador REST <-> Sentido de Rest

console.warn("---Operador REST---");
var account = {
  username: 'Alvarenga.dev',
  email: 'llucasallvarenga@gmail.com',
  working: false
};

var username = account.username,
    rest = _objectWithoutProperties(account, ["username"]);

console.log(username);
console.log(rest);

function multiplication() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total * next;
  });
}

console.log(multiplication(1, 2, 3, 4, 5)); // Operador SPREAD <-> Sentido de propagar

console.warn("---Operador SPREAD---");
var arr1 = [1, 2];
var arr2 = [3, 4];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);
var people = {
  name: 'Lucas',
  age: 17,
  work: 'Developer'
};

var newPeople = _objectSpread({}, people, {
  name: 'Matheus'
});

console.log(newPeople); //Template Literals -> use a crase (``) para utilizar o operador ${}

console.warn("---Template Literals---");
var firstName = 'Lucas';
var lastName = 'Alvarenga';
console.log("Meu nome \xE9 ".concat(firstName, " ").concat(lastName));
