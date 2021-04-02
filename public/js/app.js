var count=2;
setInterval(() => {
    document.getElementById('radio'+count).checked = true;
    count++;
    if(count>3){
        count=1;
    }
}, 5000);