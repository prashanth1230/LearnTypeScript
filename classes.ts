/**
 * Created by a487037 on 01/28/2016.
 */
class Stark {
    constructor() {
        this.saying = 'Winterfell!';
    };

    name:string = 'Brandon';
    saying:string;
}

var ned = new Stark();
ned.saying = 'Me';
console.log(ned);

var ted = new Stark();
console.log(ted);