function clock(){
    
    setInterval(() => {
        let date1 = new Date().toLocaleTimeString("en-US");
        let date2 = new Date().toLocaleString("it-IT");
        console.log(date1, date2);
    }, 1000)
}

clock();