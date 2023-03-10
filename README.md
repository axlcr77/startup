# startup
Startup project

Change from my development environment! 

Change from GitHub!

Yes!
Yes!

Notes: 
in order to get to the correct directory type cd on its own first.
git commit and then git push to update the github repository.

Elevator pitch:
A good study strategy is repetition and self-testing. Creating a website/app that allows a user to store the topics they learn in school so that they can be reviewed a certain amount of time later for maximum retention. Website would also include random testing as this has also shown that it increases understanding.

Key Features:
User would be able to write the topics they learn. Specify which parts are important, relevant for the test, relevant for the homework, etc. They can specify which questions to be asked for the random testing.

Start up Notes:
- Using the properties of bootstrap to change color, font, etc.
    
    if there are spaces then use “.” in between
    

If something is not working then just create a class of their own and edit that in CSS

To see bootstrap’s classes just use the developer tools on the website and the templated pages


JavaScript notes:

Make sure that the html file is reading the js file correctly. (File should be underlined.)

This is a loop for creating elements according to each entry in the Summaries array. 
```jsx
for( const [i, Summary] of Summaries.entries()){
      
      const SubjectdEl = document.createElement('p');
      const OnelinedEl = document.createElement('p');
      const SummdEl = document.createElement('p');

      SubjectdEl.className = 'h4';
      OnelinedEl.className = 'h5';
      

      SubjectdEl.textContent = Summary.Subject;
      OnelinedEl.textContent = Summary.One_liner;
      SummdEl.textContent = Summary.Summ;

      const EntrydEl = document.createElement('div');
      EntrydEl.appendChild(SubjectdEl);
      EntrydEl.appendChild(OnelinedEl);
      EntrydEl.appendChild(SummdEl);

      divBodyEl.appendChild(EntrydEl);

    }
  } else{
    divBodyEl.innerHTML = '<p>No entries yet!</p>';
  }
```

If you want it to load as the page starts then add the script element to the bottom of the html file. Before the body element.
Use JSON.stringify function as the second argument when you set an item into local storage with the desired array or other data type as the argument.



Midterm Notes!
[HTML_Commands](https://user-images.githubusercontent.com/122303433/223302846-bed449bc-62ce-43ee-9ee5-06c33e27c760.png)
![HTML_Commands2](https://user-images.githubusercontent.com/122303433/223302880-78b3a953-ea96-4fc1-a798-ddee6ac88be9.png)
![HTML_Input](https://user-images.githubusercontent.com/122303433/223302898-b164b688-e37d-4592-ac8e-5a9e244b3e14.png)
HTML tags



No types declared when writing in Java

- You can use CSS declarations inside of the console.log in order to specify style
    
    ```jsx
    console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
    // OUTPUT: JavaScript Demo //in large green text
    ```
    
- Timers
    
    You can have timers that help you see how long a program has been running for.
    
    ```jsx
    console.time('demo time');
    // ... some code that takes a long time.
    console.timeEnd('demo time');
    // OUTPUT: demo time: 9762.74 ms
    ```
    
- Count
    
    Count how many times a block of code is called.
    
    ```jsx
    console.count('a');
    // OUTPUT: a: 1
    console.count('a');
    // OUTPUT: a: 2
    console.count('b');
    // OUTPUT: b: 1
    ```
    
- Declaring Variables
    
    Using “let” makes it possible to change the value of that variable later on.
    
    “Const” fixes the value and you cannot change it.
    
    ```jsx
    let x = 1;
    
    const y = 2;
    ```
    
- Types
    ![JS_Types](https://user-images.githubusercontent.com/122303433/223304398-c1c97510-72af-4dd8-9fa8-673819947cdf.png)
    
- Objects
    
    Name value pairs referred as properties. The property name must be a string or symbol but the value can be of any type. They are created with the “new” operator
    
    ```jsx
    const obj = new Object();
    
    obj.c = [1, 2, 3];
    obj.hello = function () {
      console.log('hello');
    };
    
    console.log(obj);
    //Output {c: array(3), hello= func}
    //You can add stuff to it using the object literal syntax
    
    const obj = {
      a: 3,
      b: 'fish',
    }
    ```
    
    Keys and entries are different. They can be accessed on their own as well.
    
    ```jsx
    const obj = {
      a: 3,
      b: 'fish',
    };
    
    console.log(Object.entries(obj));
    // OUTPUT: [['a', 3], ['b', 'fish']]
    console.log(Object.keys(obj));
    // OUTPUT: ['a', 'b']
    console.log(Object.values(obj));
    // OUTPUT: [3, 'fish']
    ```
    
    ![JSON](https://user-images.githubusercontent.com/122303433/223304311-19933ab6-0ab4-4633-8dcd-73ade5a62eaa.png)

- Constructor
    
    A function that returns an object
    
    ```jsx
    function Person(name) {
      return {
        name: name,
      };
    }
    
    const p = new Person('Eich');
    console.log(p);
    // OUTPUT: {name: 'Eich'}
    
    //You can create methods inside as well.
    
    function Person(name) {
      return {
        name: name,
        log: function () {
          console.log('My name is ' + this.name);
        },
      };
    }
    
    const p = new Person('Eich');
    p.log();
    // OUTPUT: My name is Eich
    ```
    
- Classes
    
    Work as normal but the syntax is a bit different
    
    ```jsx
    class Person {
      constructor(name) {
        this.name = name;
      }
    
      log() {
        console.log('My name is ' + this.name);
      }
    }
    
    const p = new Person('Eich');
    p.log();
    // OUTPUT: My name is Eich
    
    //To declare private variables use the # character
    
    class Person {
      #name;
    
      constructor(name) {
        this.#name = name;
      }
    }
    
    const p = new Person('Eich');
    p.#name = 'Lie';
    // OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
    ```
    
- Inheritance
    
    Inheritance works as usual with new syntax
    
    ```jsx
    class Person {
      constructor(name) {
        this.name = name;
      }
    
      print() {
        return 'My name is ' + this.name;
      }
    }
    
    class Employee extends Person {
      constructor(name, position) {
        super(name);
        this.position = position;
      }
    
      print() {
        return super.print() + '. I am a ' + this.position;
      }
    }
    
    const e = new Employee('Eich', 'programmer');
    console.log(e.print());
    // OUTPUT: My name is Eich. I am a programmer
    ```
    
- Strict Equality “===”
    
    A more intuitive way to do evaluations. It is expected to always use strict evaluation in the code you write.
    
- Loops
    - for
        
        ```jsx
        for(let i = 0; i<3;i++){
        console.log[i];
        }
        //Output : 0 1
        ```
        
    - do while
        
        ```jsx
        let i = 0;
        do {
          console.log(i);
          i++;
        } while (i < 2);
        // OUTPUT: 0 1
        ```
        
    - while
        
        ```jsx
        let i = 0;
        while (i < 2) {
          console.log(i);
          i++;
        }
        // OUTPUT: 0 1
        ```
        
    - for in
        
        Iterates over an object’s property names
        
        ```jsx
        const obj = { a: 1, b: 'fish' };
        for (const name in obj) {
          console.log(name);
        }
        // OUTPUT: a
        // OUTPUT: b
        ```
        
    - for of
        
        This iterates over an iterable’s (Maps, Arrays, Set…) property values
        
        ```jsx
        const arr = ['a', 'b'];
        for (const val of arr) {
          console.log(val);
        }
        // OUTPUT: 'a'
        // OUTPUT: 'b'
        ```
        
    - break and continue
        
        Allow for breaks and continues
        
        ```jsx
        let i = 0;
        while (true) {
          console.log(i);
          if (i === 0) {
            i++;
            continue;
          } else {
            break;
          }
        }
        // OUTPUT: 0 1
        ```
        
- Strings
    - Functions
        
        ![JS_str](https://user-images.githubusercontent.com/122303433/223304147-da1a4913-ebc3-4cce-b056-71857082fc17.png)

        ```jsx
        const s = 'Example:조선글';
        
        console.log(s.length);
        // OUTPUT: 11
        console.log(s.indexOf('조선글'));
        // OUTPUT: 8
        console.log(s.split(':'));
        // OUTPUT: ['Example', '조선글']
        console.log(s.startsWith('Ex'));
        // OUTPUT: true
        console.log(s.endsWith('조선글'));
        // OUTPUT: false
        console.log(s.toLowerCase());
        // OUTPUT: example:조선글
        ```
        
    
    In Java the quotes and single quotes are equivalent but you can also use backticks (` `). These define a string literal that may contain JavaScript that has to be evaluated. The way you do this:
    
    ```jsx
    'quoted text'; // " also works
    
    const l = 'literal';
    console.log(`string ${l + (1 + 1)} text`);
    // OUTPUT: string literal2 text
    ```
    
- Functions
    
    ```jsx
    function hello(who) {
      return 'hello ' + who;
    }
    
    console.log(hello('world'));
    // OUTPUT: hello world
    ```
    
    Not using a return value is usually done so that there can be a side effect. 
    
    In this code the side effect is to output to the debugger console.
    
    ```jsx
    function hello(who) {
      who.count++;
      console.log('hello ' + who.name);
    }
    
    hello({ name: 'world', count: 0 });
    // OUTPUT: hello world
    ```
    
- Function Parameters
    
    A parameter has to have a value assigned to it somewhere. If not the value of the parameter will be undefined.
    
    ```jsx
    function labeler(value, title = 'title') {
      console.log(`${title}=${value}`);
    }
    
    labeler();
    // OUTPUT: title=undefined
    
    labeler('fish');
    // OUTPUT: title=fish
    
    labeler('fish', 'animal');
    // OUTPUT: animal=fish
    ```
    
- Anonymous Function
    
    This can be used to pass in objects as parameters
    
    ```jsx
    // Function that takes a function as a parameter
    function doMath(operation, a, b) {
      return operation(a, b);
    }
    
    // Anonymous function assigned to a variable
    const add = function (a, b) {
      return a + b;
    };
    
    console.log(doMath(add, 5, 3));
    // OUTPUT: 8
    
    // Anonymous function assigned to a parameter
    console.log(
      doMath(
        function (a, b) {
          return a - b;
        },
        5,
        3
      )
    );
    // OUTPUT: 2
    ```
    
- Passing, Creating, and Returning Functions
    
    ```jsx
    // Anonymous declaration of the function that is later assigned to a variable
    const add = function (a, b) {
      return a + b;
    };
    
    // Function that logs as a side effect of its execution
    function labeler(label, value) {
      console.log(label + '=' + value);
    }
    
    // Function that takes a function as a parameter and then executes the function as a side effect
    function addAndLabel(labeler, label, adder, a, b) {
      labeler(label, adder(a, b));
    }
    
    // Passing a function to a function
    addAndLabel(labeler, 'a+b', add, 1, 3);
    // OUTPUT: a+b=4
    
    // Function that returns a function
    function labelMaker(label) {
      return function (value) {
        console.log(label + '=' + value);
      };
    }
    
    // Assign a function from the return value of the function
    const nameLabeler = labelMaker('name');
    
    // Calling the returned function
    nameLabeler('value');
    // OUTPUT: name=value
    ```
    
- Inner Functions
    
    This is useful if you want to keep the details private.
    
    ```jsx
    function labeler(value) {
      function stringLabeler(value) {
        console.log('string=' + value);
      }
      function numberLabeler(value) {
        console.log('number=' + value);
      }
    
      if (typeof value == 'string') {
        stringLabeler(value);
      } else if (typeof value == 'number') {
        numberLabeler(value);
      }
    }
    
    labeler(5);
    // OUTPUT: number=5
    
    labeler('fish');
    // OUTPUT: string=fish
    ```
    
- Arrow Functions
    
    They are used to save space. These are also useful when wanting to conserve the values of varibles contained in the scope where they are created.
    
    ```jsx
    ()=>3;
    
    //These next ones are suppossed to be similar
    
    const a = [1, 2, 3, 4];
    
    // standard function syntax
    a.sort(function (a, b) {
      return a - b;
    });
    
    // arrow function syntax
    a.sort((a, b) => a - b);
    
    //Scope
    function makeClosure(a) {
      a = 'a2';
      const b = 'b2';
      return () => [a, b];
    }
    
    //Assigning the variables to something else.
    const a = 'a';
    const b = 'b';
    
    const closure = makeClosure(a);
    
    //Calling the function and seeing that the values of the variables are
    //the same as where they were created.
    
    console.log(closure());
    // OUTPUT: ['a2', 'b2']
    
    console.log(a, b);
    // OUTPUT: 'a' 'b'
    ```
    
    You can use regular curly braces but then you have to write “return” with the desired return value.
    
- Arrays
    - Functions
        
        ![JS_Arrays](https://user-images.githubusercontent.com/122303433/223304008-4dd42d03-8cb8-4b95-a09d-ed8949dab74f.png)

        
        ```jsx
        const a = [1, 2, 3];
        
        console.log(a.map((i) => i + i));
        // OUTPUT: [2,4,6]
        console.log(a.reduce((a, c) => a + c));
        // OUTPUT: 6
        console.log(a.sort((a, b) => b - a));
        // OUTPUT: [3,2,1]
        
        a.push(4);
        console.log(a.length);
        // OUTPUT: 4
        ```
        
    
    They work exactly as you would think but these you can actually add on to them
    
    ```jsx
    const a = [1, 2, 3];
    console.log(a[1]);
    // OUTPUT: 2
    
    console.log(a.length);
    // OUTPUT: 3
    ```
    
- Regular expressions
    
    You use them to find text in a string
    
    - Creating
        
        ```jsx
        const objRegex = new RegExp('ab*', 'i');
        const literalRegex = /ab*/i;
        ```
        
    - Functions and usage
        
        ```jsx
        const petRegex = /(dog)|(cat)|(bird)/gim;
        const text = 'Both cats and dogs are pets, but not rocks.';
        
        text.match(petRegex);
        // RETURNS: ['cat', 'dog']
        
        text.replace(petRegex, 'animal');
        // RETURNS: Both animals and animals are pets, but not rocks.
        // Looks at what is matched in the regular expression and replaces it with the second parameter.
        
        petRegex.test(text);
        // RETURNS: true
        ```
        
    - 
- Rest and Spread
    - Rest
        
        Rest is a syntax that can be used when you need a function that needs to take in an unknown number of parameters. It does this by creating an array of the last parameter. For this reason the syntax must be used on the last parameter.
        
        ```jsx
        function hasNumber(test, ...numbers) {
          return numbers.some((i) => i === test);
        }
        
        hasNumber(2, 1, 2, 3);
        // RETURNS: true
        ```
        
    - Spread
        
        Spread is the opposite where it expands an iter-able into a function’s parameters. 
        
        ```jsx
        function person(firstName, lastName) {
          return { first: firstName, last: lastName };
        }
        
        const p = person(...['Ryan', 'Dahl']);
        console.log(p);
        // OUTPUT: {first: 'Ryan', last: 'Dahl'}
        ```
        
- Destructuring
    
    This is for when you only care about a few items in an array or an object.
    
    ```jsx
    const a = [1, 2, 4, 5];
    
    // destructure the first two items from a, into the new variables b and c
    const [b, c] = a;
    
    console.log(b, c);
    // OUTPUT: 1, 2
    ```
    
    Things can be combined using the rest syntax
    
    ```jsx
    const [b, c, ...others] = a;
    
    console.log(b, c, others);
    // OUTPUT: 1, 2, [4,5]
    ```
    
    Objects are a bit different since you have to specify what exactly you want when destructuring the object.
    
    ```jsx
    const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };
    
    const { a, c } = o;
    
    console.log(a, c);
    // OUTPUT 1, ['fish', 'cats']
    ```
    
    You can also change the names assigned to the variables.
    
    ```jsx
    const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };
    
    const { a: count, b: type } = o;
    
    console.log(count, type);
    // OUTPUT 1, animals
    ```
    
    Values may be provided for missing ones.
    
    ```jsx
    const { a, b = 22 } = {};
    const [c = 44] = [];
    
    console.log(a, b, c);
    // OUTPUT: undefined, 22, 44
    ```
    
- Exceptions
    
    Syntax and example.
    
    ```jsx
    try {
      // normal execution code
    } catch (err) {
      // exception handling code
    } finally {
      // always called code
    }
    
    //
    
    function connectDatabase() {
      throw new Error('connection error');
    }
    
    try {
      connectDatabase();
      console.log('never executed');
    } catch (err) {
      console.log(err);
    } finally {
      console.log('always executed');
    }
    
    // OUTPUT: Error: connection error
    //         always executed
    ```
    
- Use in HTML
    
    To use the functions that you create in JS you reference them in the html like this.
    
    ```html
    <button onclick="table()">Seven Summits</button>
    
    <script src="table.js"></script>
    ```
    
    Where the function table() is a defined function in JS. And the script is the name of the file where the functions are defined.
    
- Promises
    
    This is so that code can work in tandem with other code. The first for loop works but the other one also executes before the first for loop is done.
    
    ```jsx
    const delay = (msg, wait) => {
      setTimeout(() => {
        console.log(msg, wait);
      }, 1000 * wait);
    };
    
    new Promise((resolve, reject) => {
      // Code executing in the promise
      for (let i = 0; i < 3; i++) {
        delay('In promise', i);
      }
    });
    
    // Code executing after the promise
    for (let i = 0; i < 3; i++) {
      delay('After promise', i);
    }
    
    // OUTPUT:
    //   In promise 0
    //   After promise 0
    //   In promise 1
    //   After promise 1
    //   In promise 2
    //   After promise 2
    ```
    
    The following code waits 10 seconds before having a 50% chance of rejecting or fulfilling
    
    ```jsx
    const coinToss = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('success');
        } else {
          reject('error');
        }
      }, 10000);
    });
    ```
    
    Then, catch, finally are functions that work on whether the promise is rejected or fulfilled. If it is fulfilled the “then” function can be called. If it is rejected the “catch” function can be called. The finally function will always be called at the end regardless of the promise being fulfilled or rejected.
