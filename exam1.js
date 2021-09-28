console.log("my test")
console.log('filename: ', __filename);
console.log('dirname: ', __dirname);

console.time('alpha');

//Time Check Start
let output =1;
for(var i=1; i<=10; i++){
  output *= i;
}
console.log('Result:', output);

//Time Check End
console.timeEnd('alpha');

let  a = 10;

if (a > 11) {
    console.log('a가 11보다 큽니다'); 
} else if(a == 11) {
    console.log('a가 11과 같습니다');
} else {
    console.log('a가 11보다 작습니다');
}

// 0부터 9까지 출력하는 while문
let  j=0;
while(j < 10) {
    console.log("for : j의 값은="+j);
    j=j+1;
}




