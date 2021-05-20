
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
// or same thing
const list2: Array<number> = [0,1,2];
// or Tuples
const list3: [string, number, boolean] = ["joe", 23, true];
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
enum TechGuy { Student, Designer, FullStack, DataScientist };
// project cannot be something else than what is gathered in Mission.
const student: TechGuy = TechGuy.Student;
const dev: TechGuy = TechGuy.FullStack;

// Type never cannot have any value ... weird !
// const weirdType: never = 3;
// Or function that should never be reached
const errorHandler = (error: string): never => {
    throw new Error(error)
}

// Objects
const YoMama = (info: {name: string, punchline: string}): string => `${info.name}'s mom is so fat that ${info.punchline}`;
console.log(YoMama({name: "Stifler", punchline: "when she skips a meal, the stock market drops"}))

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
 * INTERFACE VERSUS TYPE
 * Accept a specific "shape" for an object
 * Best practice is to import the interfaces from another file like a module (export / import)
 */

// INTERFACE

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

// TYPE
// Exact same thing but, where you can redifine Interface, you cannot with Type.

type TestType = {
    name: string
};

type TestType2 = string | number | null;

let myTestType: TestType2 = "Joe";
myTestType = 23;

/**
 *  UNION TYPES with the pipe
 * or
 * INTERSECTION 
 */

// UNION
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

// INTERSECTION
// Allow to merge 2 types 

type Identity = {
    name: string,
    age?: number
}

type Hobbies = {
    music: string,
    sport: string
}

// Need to fill both mandatory infos
const whoIAm: Identity & Hobbies = {
    name: "Joe Mama",
    music: "Blues",
    sport: "Basketball"
}

// We can merge 2 type into a single one
type Person = Identity & Hobbies;


/**
 * ENUMS
 */

enum Sports {
    Basketball = "BASKETBALL", // IF NO VALUE (=), IT WILL RETURN THE INDEX, HERE NUMBER 0
    Boxing = "MUAY-THAI", // OR 1 IF NO VALUE
    Rugby = "RUGBY" // OR 2 IF NOY VALUE
}

const createContent = (contentType: Sports): void => console.log(contentType);

createContent(Sports.Boxing);

/**
 * CLASSES
 */

class Team {

    // scope of properties
    private name: string;
    public lastTitle: Date;
    protected title: number;
    readonly bestPlayer: string;

    // Static to share a common variable for all the instances (Class level)
    static sport: string = "Basketball";

    constructor(name: string) {
        this.name = name;
        this.lastTitle = new Date("2014-06-15");
        this.title = 5;
        this.bestPlayer = "Tim Duncan";
    }

    score = (): string => {
        console.log(`3 point for the ${this.name}! What a ${Team.sport} team ...`);
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

    // No need for the public keyword, by default it will be defined as public
    public getSport = (): string => Team.sport;

}


const Spurs = new Team("Spurs");
Spurs.score();

console.log("STATIC VAR", Team.sport);
console.log("STATIC FROM GETTER", Spurs.getSport());

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

// HOW TO EXTEND A TYPE FOR CLASSES
interface PlayerInfo {
    positions: string[],
};

class Players implements PlayerInfo {

    public positions: string[] = ["Point guard", "Power Forward", "Small Forward"];

    // Arrow function will no work here
    public getPositions = () => {
        let result: string = "";
        for (let dept of this.positions) {
            result += `${dept} is great to get some W !\n`;
        }
        return result;
    }

}

const players = new Players();
console.log(players.getPositions());

interface PlayerDetail extends Players {
    name: string
}

class PowerForward implements PlayerDetail {
    
    public name: string;
    public positions: string[] = ["Power Forward"]

    constructor(name: string) {
        this.name = name;
    }

    public getPositions = () => `My name is ${this.name} and I am a fuckin' good ${this.positions[0]} !`;

}

const Babac = new PowerForward("Boris Diaw");
console.log(Babac.getPositions());

// CLASS, INTERFACE AND GETTER/SETTER EXAMPLE IF PROPERTY IS PRIVATE OR PROTECTED >> AVOID
// PUBLIC IS WAY MUCH EASIER 
interface Staffing {
    Departments: string,
};

class Staff implements Staffing {

    protected _departments: string[] = ["General Manager", "Coach", "Player", "Marketing"];

    // Arrow function will no work here
    public get Departments() {
        let result: string = "";
        for (let dept of this._departments) {
            result += `${dept} is essential to get some W !\n`;
        }
        return result;
    }

}

const staff = new Staff();
console.log(staff.Departments);

/**
 * DUCK TYPING
 * It's a way to check if we share the same properties/variables types across objects/classes
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

/**
 * GENERICS
 * 
 */

// Expect to get the same argument and return the exact same type ... does not make sense but possible
const testGen = <T>(arg: T): T => arg;
// or
function testGen2<WhateverName>(value: WhateverName): WhateverName {
    let serialized = JSON.stringify(value);
    console.log("STRINGIFIED", serialized)
    return JSON.parse(serialized);
}

console.log(testGen("test generics"));
console.log(testGen2({beginning: "Object into JSON", end: "Then back to Object"}));


// With classes ... let's be honest, it could be a pain you know where

class FullStack<T, U> {
    public name: T;
    public age?: U;
    public job: string = "Full-Stack";

    constructor(name: T, age: U) {
        this.name = name;
        this.age = age;
    }

    public getName = (): string => {
        return `${this.name}`;
    }

    public getAge = (): number => {
        return Number(this.age);
    }

    public getAllInfo= () => {
        return this.job;
    }

}

const fullStackPerson = new FullStack<string, number>("Aaron Swartz", 26);
console.log(`${fullStackPerson.getName()} is ${fullStackPerson.getAge()} and lives in our hearts.`);