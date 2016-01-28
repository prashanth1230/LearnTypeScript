/**
 * Created by a487037 on 01/28/2016.
 */
interface Stark {
    name:string;
    //Optional Age parameter
    age?:number;
}

function printName(stark:Stark) {
    console.log(stark.name);
}

printName({name:'Hob'});
printName({name:'Rob', age: 23});