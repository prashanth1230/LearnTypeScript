/**
 * Created by a487037 on 01/28/2016.
 */
/**
 * This defines a number data type. The type name can start with upper or lower case
 * @type {number}
 */
var n:Number = 1;

/**
 * Example String data type
 * @type {string}
 */
var s:String = 'abc';

/**
 * 'Any' data type. This allows any data type could be used
 * @type {number}
 */
var a:any = 1;
a = 'abc';

/**
 * Arrays can be specified types as well. All of the array elements here are of the same type
 * @type {string[]}
 */
var names:string[] = ['John', 'Arya', 'Prashanth'];

var array:any[] = ['John', 1, 1.0];

/**
 * Enumerator. This can be used as a type as well
 */
enum Starks {Jon, Brad, Eddn, Cathlyn}

/**
 * Enum being used to specify the type
 * @type {Starks}
 */
var cat:Starks = Starks.Eddn;

/**
 * Function's return type being specified
 * @returns {string}
 */
function getName():String {
    return 'John';
}