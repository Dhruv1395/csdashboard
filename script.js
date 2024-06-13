let day = document.getElementById("day");
        let hrs = document.getElementById("hrs");
        let min = document.getElementById("min");
        let sec = document.getElementById("sec");
        hrs = hrs>12? hrs % 12 : hrs;
        
       
        setInterval(()=>{
            let ctime = new Date()
            hrs.innerHTML =  ctime.getHours();
            min.innerHTML = (ctime.getMinutes()<10?"0":"") +  ctime.getMinutes();
            sec.innerHTML =ctime.getSeconds();
            day.innerHTML=ctime.getDate();
        },1000)