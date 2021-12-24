// 비동기적 상황을 연출하기 위한 함수
function delay(ms: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10) % 2 === 0) {
        resolve("success");
      } else {
        reject("failure");
      }
    }, ms);
  });
}

// async ~ await 구문을 쓰지 않는다면
delay(3000)
  .then((result: string) => {
    console.log("done promise" + result);
  })
  .catch((error: string) => {
    console.error("fail promise!" + error);
  });

// async ~ await 구문, 비동기를 잘 이해하고 사용하자.
async function main() {
  // await는 try ~ catch로 감싸서 에러처리를 할 수 있도록 한다.
  try {
    console.log("start job");
    const result = await delay(3000);
    console.error("done async!" + result);
  } catch (e) {
    console.error("fail async" + e);
  }
}

main();
