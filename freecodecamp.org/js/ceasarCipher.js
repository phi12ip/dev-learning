  function rot(mode,str,rot) { // LBH QVQ VG!
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let message = '';
    let arr = str.split(' ')
    for (let i=0;i<arr.length;i++) {
        if (i==0) {} else message += ' ';
        for (let j=0;j<arr[i].length;j++) {
            let val = arr[i][j];
            if (val=='!'||val=='?'||val=='.') {
                message += val;
                continue;
            } 
            let index = alpha.indexOf(arr[i][j].toLowerCase());
            if (mode[0] == 'd'){
                message += alpha[(index+rot)%26].toUpperCase();
            } else if (mode[0] == 'e') {
                message += alpha[(index+26-rot)%26].toUpperCase();
            }
        }
    }
    return message
}

// Change the inputs below to test
let x = rot('decrypt',"UGTT RDST RPBE",11);
let y = rot('encrypt',"FREE CODE CAMP",11);
let str = `${x}`
let str2 = `${y}`
console.log(str)
console.log(str2)
