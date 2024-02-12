let n = 0;
function counter(){
  n++;
  console.log(n);
  call_timeout();
}

function call_timeout(){
  setTimeout(() => {
    counter();
  }, 1000);
}

counter();