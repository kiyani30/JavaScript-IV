// CODE here for your Lambda Classes
#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props


class Person {
    constructor(name) { 
        this.name = name;
        this.age= age;
        this.location = location;
     }

    speak () { 
        return "Hello my name is" + this.name, "I am from" + this.location;
     }
    console.log (return);
  }