/**
 * Created by a487037 on 01/28/2016.
 */
class Stark {
    static castle:string = 'Winterfell';

    constructor() {
        this.saying = Stark.castle;
    };

    hello(person:string) {
        console.log('Hello ' + person);
    }

    name:string = 'Brandon';
    saying:string;
}

var ned = new Stark();
ned.saying = 'Me';
console.log(ned);

var ted = new Stark();
console.log(ted);
ted.hello('Ted');