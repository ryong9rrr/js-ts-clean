// 에러를 발생시키는 함수
function doException() {
  throw new Error("에러발생!");
}

// 에러를 발생시키지 않는 함수
function noException() {
  return true;
}

function callException(type) {
  if (type === "error") {
    doException();
    /*
    doException()이 예외를 발생시킬 수 있는 코드임에도
    try ~ catch로 감싸줄 필요가 없다.
    */
  } else {
    noException();
  }
}

/*
왜냐하면 최상단에서 try ~ catch로 
이미 에러를 잡아내고 있는 로직이기 때문에.

catch가 에러를 잡고나면 바깥쪽으로 에러가 전파되지 않음.
(에러가 catch에 안걸리면 계속해서 
    바깥쪽으로 에러가 전파되어 결국 앱이 강제종료가 되버리는..(스택 구조))
*/
function main() {
  try {
    callException("error");
  } catch (e) {
    console.log(e);
  } finally {
    console.log("done");
  }
}

main();
