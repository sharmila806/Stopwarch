
    document.getElementById(`00 hrs:00mins:00secs`)
    function sw(){
    let hrs=0;
    let mins=0;
    let secs=0;
    sec++;
    if(sec==60){
        min++;
        sec=0;
        if(mins=60){
            hrs++;
            mins=0;
        }
        }
        document.getElementById("table")=`${hrs}:${mins}:${secs}`

    }
