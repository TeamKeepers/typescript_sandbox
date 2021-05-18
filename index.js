var isOpen = false;
var first_name = "Guillaume";
var age = 32;
var money = 100.5;
var list = [0, 1, 2];
var list2 = ["joe", 23, true];
var randomList = ["joe", 23, { "test": true }];
var random = "Joe";
random = 3;
var myStr = "Test";
myStr = "joe";
var Person;
(function (Person) {
    Person[Person["Student"] = 0] = "Student";
    Person[Person["Designer"] = 1] = "Designer";
    Person[Person["FullStack"] = 2] = "FullStack";
    Person[Person["DataScientist"] = 3] = "DataScientist";
})(Person || (Person = {}));
;
var student = Person.Student;
var dev = Person.FullStack;
var errorHandler = function (error) {
    throw new Error(error);
};
var sayHelloVoid = function (word) { return console.log(word); };
var sayHello = function (word) { return word.toUpperCase(); };
sayHelloVoid("Buongiorno");
var sayHelloOpt = function (word) { return console.log(word); };
var sayHelloOpt2 = function (word) {
    if (word === void 0) { word = "Hola"; }
    var otherParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherParams[_i - 1] = arguments[_i];
    }
    return console.log(word, otherParams);
};
sayHelloOpt2("Konnichiwa", "This is other string ...", "... params");
var last_name = "Joe";
console.log(last_name);
last_name = null;
console.log(last_name);
var testType = "Joe";
testType = 10;
var testTypeCascade = testType;
console.log(typeof testTypeCascade);
var sayHelloUnion = function (arg) { return "This is my " + arg + "\n"; };
console.log(sayHelloUnion("Joe"), sayHelloUnion(20));
var dog;
console.log(dog);
dog = "Joe";
console.log(dog);
dog = null;
console.log(dog);
var personInfoRender = function (pax) {
    console.log("ID: " + pax.name + " is " + pax.age + " years old.");
};
personInfoRender({
    name: "Joe",
    age: 99
});
var personInfoRenderDestruct = function (_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 10 : _b;
    console.log("ID: " + name + " is " + age + " years old.");
};
personInfoRenderDestruct({
    name: "Mike"
});
var TypeTest;
(function (TypeTest) {
    TypeTest["Video"] = "VIDEO";
    TypeTest["Blog"] = "BLOG_POST";
    TypeTest["Quizz"] = "QUIZZ";
})(TypeTest || (TypeTest = {}));
var createContent = function (contentType) { return console.log(contentType); };
createContent(TypeTest.Video);
var Team = (function () {
    function Team(name) {
        var _this = this;
        this.score = function () {
            console.log("3 point for the " + _this.name + "!");
            return "3 point for the " + _this.name + "!";
        };
        this.testReadOnly = function () {
        };
        this.getName = function () {
            console.log("GETTER", _this.name);
            return _this.name;
        };
        this.setName = function (name) {
            _this.name = name;
            console.log("SETTER", _this.name);
            return _this.name;
        };
        this.name = name;
        this.lastTitle = new Date("2014-06-15");
        this.title = 5;
        this.bestPlayer = "Tim Duncan";
    }
    return Team;
}());
var Spurs = new Team("Spurs");
Spurs.score();
Spurs.getName();
Spurs.setName("San Antonio Spurs");
Spurs.getName();
console.log(Spurs.lastTitle);
Spurs.lastTitle = new Date("2014-06-14");
console.log(Spurs.lastTitle);
console.log(Spurs.bestPlayer);
