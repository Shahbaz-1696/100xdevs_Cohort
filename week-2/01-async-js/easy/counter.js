function counter() {
    let n = 1;
  const myInterval = setInterval(() => {
      let date = new Date().toLocaleTimeString();
      console.log(date, n);
      n++;
    }, 1000);

    if(n === 10) clearInterval(myInterval);
  }
  counter();

