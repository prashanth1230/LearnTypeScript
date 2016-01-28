/**
 * Created by a487037 on 01/28/2016.
 */
class Person {
    name:string;

    constructor(name:string) {
        this.name = name;
    }

    dance() {
        console.log(this.name + ' is dancing');
    }
}

var bran = new Person('Bran');
bran.dance();

class AwesomePerson extends Person {
    dance() {
        super.dance();
        console.log('SO AWESOME!');
    }
}

var ron = new AwesomePerson('Ron');
ron.dance();