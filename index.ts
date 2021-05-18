
/**
 * UNDERSTAND THE TYPES
 */

const isOpen: boolean = false;
// Do not use `name` variable because defined by default by TS
const first_name: string = "Guillaume";
// Only numbers, no float for instance
const age: number = 32;
const money: number = 100.5;

// Arrays
const list: number[] = [0,1,2];
const list2: [string, number, boolean] = ["joe", 23, true];
// Works but doesn't make sense, we are using TS because of hard type
const randomList: any[] = ["joe", 23, {"test": true}];

// any is not so interesting because we are back to what JS allows !
let random: any = "Joe";
random = 3;
// straight to the point with implicit types
let myStr = "Test";
myStr = "joe";
// TYPE PROTECTION BY DEFAULT, defining an integer here is impossible
// myStr = 1;

// Enum is a way to define set of named constant
enum Person { Student, Designer, FullStack, DataScientist };
// project cannot be something else than what is gathered in Mission.
const student: Person = Person.Student;
const dev: Person = Person.FullStack;

// Type never cannot have any value ... weird !
// const weirdType: never = 3;
// Or function that should never be reached
const errorHandler = (error: string): never => {
    throw new Error(error)
}


/**
 * TYPES IN FUNCTIONS
 */

// Parameter should be string + If we do not return anything, VOID will be required (no string expected to be returned etc)
const sayHelloVoid = (word: string): void => console.log(word);
// We expect a string as parameter and string returned at the end
const sayHello = (word: string): string => word.toUpperCase();

sayHelloVoid("Buongiorno");

// Optional parameters
// Possible with Optional chaining operator
const sayHelloOpt = (word?: string): void => console.log(word);
// Default value (implicit types) ... + extra strings if needed in and array
const sayHelloOpt2 = (word = "Hola", ...otherParams: string[]): void => console.log(word, otherParams);

sayHelloOpt2("Konnichiwa", "This is other string ...", "... params");

/**
 *  UNION TYPES with the pipe
 */

// We can request null but string by default accept null or undefined
let last_name: string | null = "Joe";
console.log(last_name);
last_name = null;
console.log(last_name);

let testType: string | number = "Joe";
testType = 10;

let testTypeCascade = testType;
console.log(typeof testTypeCascade)
// Types taken from the value and not from the type declaration, so string is not working here
// testTypeCascade = "Joe";

const sayHelloUnion = (arg: string | number): string => `This is my ${arg}\n`;
console.log(sayHelloUnion("Joe"), sayHelloUnion(20));

// By default, the type string accept null or undefined
let dog: string;
console.log(dog)
dog = "Joe";
console.log(dog)
dog = null;
console.log(dog)

/**
 * INTERFACE
 * Accept a specific "shape" for an object
 * Best practice is to import the interfaces from another file like a module (export / import)
 */

interface PersonInfo {
    name: string,
    age?: number // Optional param
}

const personInfoRender = (pax: PersonInfo): void => {
    console.log(`ID: ${pax.name} is ${pax.age} years old.`);
};

personInfoRender({
    name: "Joe",
    age: 99
});


const personInfoRenderDestruct = ({name, age = 10}: PersonInfo): void => {
    console.log(`ID: ${name} is ${age} years old.`);
};

personInfoRenderDestruct({
    name: "Mike"
});


/**
 * ENUMS
 */

enum TypeTest {
    Video = "VIDEO", // IF NO VALUE (=), IT WILL RETURN THE INDEX, HERE NUMBER 0
    Blog = "BLOG_POST", // OR 1 IF NO VALUE
    Quizz = "QUIZZ" // OR 2 IF NOY VALUE
}

const createContent = (contentType: TypeTest): void => console.log(contentType);

createContent(TypeTest.Video);

/**
 * CLASSES
 */

class Team {

    // scope of properties
    private name: string;
    public lastTitle: Date;
    protected title: number;
    readonly bestPlayer: string;

    constructor(name: string) {
        this.name = name;
        this.lastTitle = new Date("2014-06-15");
        this.title = 5;
        this.bestPlayer = "Tim Duncan";
    }

    score = (): string => {
        console.log(`3 point for the ${this.name}!`);
        return `3 point for the ${this.name}!`;
    }

    testReadOnly = () => {
        // Error, read-only permission
        // this.bestPlayer = "Tony Parker"
    }

    getName = (): string => {
        console.log("GETTER", this.name);
        return this.name;
    }

    setName = (name: string): string => {
        this.name = name;
        console.log("SETTER", this.name);
        return this.name;
    }

}

const Spurs = new Team("Spurs");
Spurs.score();

// ERROR because Team name is private: no access
// console.log(Spurs.name);
// GETTERS AND SETTERS
Spurs.getName();
Spurs.setName("San Antonio Spurs");
Spurs.getName();

// PUBLIC: read-write access
console.log(Spurs.lastTitle)
Spurs.lastTitle = new Date("2014-06-14");
console.log(Spurs.lastTitle)

// Error because PROTECTED, so accessible in the class and in subclasses / child classes
// console.log(Spurs.title);

// ReadOnly
console.log(Spurs.bestPlayer);
// Error because not write permission
// Spurs.bestPlayer = "Tony Parker";

/**
 * GENERICS
 * 
 */

const testGen = <T>(arg: T): T => arg;

console.log(testGen("test generics"));

/**
 * DUCK TYPING
 * 
 */

class Developer implements PersonInfo {
    
    public name: string;
    public age?: number;

}

let AaronSwartz: PersonInfo = new Developer();

const fake = {
    name: "Aaron Swartz",
    skill: "Halo"
}

AaronSwartz = fake;
// Complain because skill is not declared into PersonInfo
// console.log(AaronSwartz.skill);
console.log(AaronSwartz.name);