'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const T = readline();
    var n = readline();
    var k = readline();
    var arr = [];
    var res = 0;
    while (T !== 0) {
        for(var i=0; i<n; i++) {
        	arr[i] = prompt((i+1));
        	if (arr[i] == k) {
                if (arr[i+1] == (k-1)) {
                    if (arr[i+2] == (k-2)) {
                        res++
                    }
                }
            }
            console.log(res);
        }
    }
}
