const knownPass = '1234567890';
const startTime = Date.now();
console.log(`Started brute force at ${startTime}`);

for (let i = parseInt('aaaa', 36); i <= parseInt('zzzzzz', 36); i++) {
  if (i.toString(36) === knownPass) {
    const elapsedTime = Date.now() - startTime;

     return console.log(
      `got pass!! it is "${i.toString(36)}" took ${Math.floor(elapsedTime / 1000)} seconds`
    );
  }
   console.log('not yet');
}
