const test = document.getElementById("sentence");
const testString = test.innerText;
const testStringArr = [...testString];

const target = "sit";

let temp;
const searchStrlen = target.length;

let startIndex = [];
/*시작 인덱스 찾는 코드*/
for(let i  = 0 ; i < testString.length; i++){
    if(testStringArr[i].toString() == "s"){
        temp = testString.substring(i,i+searchStrlen);
        if(temp == target){
            startIndex.push(i);
        }
    }
}

console.log(resultArr);

/*target만 붙이고 나머지는 다 떨어진 문자열 배열 만들기 */
for(let i = 0 ; i < startIndex.length ; i++){
    testStringArr.splice(startIndex[i],searchStrlen)
}