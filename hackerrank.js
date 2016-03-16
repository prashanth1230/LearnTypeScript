/**
 * Created by a487037 on 02/26/2016.
 */
function main() {
    var a = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
    var firstDiagon = 0, secondDiagon = 0, i = 0;
    for (; i < a.length; i++) {
        firstDiagon += parseInt(a[i][i]);
    }
    for (i = a.length-1; i>=0; i--) {
        secondDiagon += parseInt(a[i][a.length-1-i]);
    }
    console.log(Math.abs(firstDiagon - secondDiagon));
}
main();