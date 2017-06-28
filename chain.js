function func1() {
  console.log("func1");
}

function func2() {
  console.log("func2");
}

// setTimeout(func1, 500);
// setTimeout(func2, 750);

chain([
  {
    run: func1,
    after: 500
  },
  {
    run: func2,
    after: 750
  }
]);

function chain(arr) {
  let wait = 0;
  arr.forEach(item => {
    const { run, after } = item;
    setTimeout(run, after + wait);
    wait += after;
  });
}

// show an example of nesting chains. Show an example of recursion.
