const test = document.getElementById("sentence");
const testString = test.innerText;
const testStringArr = [...testString];

const target = "sit";

let temp;
const searchStrlen = target.length;

let resultArr = [];
/*시작 인덱스 찾는 코드*/
for(let i  = 0 ; i < testString.length; i++){
    if(testStringArr[i].toString() == "s"){
        temp = testString.substring(i,i+searchStrlen);
        if(temp == target){
            resultArr.push(i);
        }
    }
}

console.log(resultArr);