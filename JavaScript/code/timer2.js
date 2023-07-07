function foo() {
  console.log('aaaa');
  setTimeout(function() {
    console.log('bbbb');
  }, 0);
  console.log('cccc');
}
foo();
