        //-- Another Method --//

//-- 2-Minute Countdown Timer --//

        const p = document.querySelector('p');
        let m = 1;
        let s = 10;
        const x =setInterval(() => {
            s--;
            p.innerHTML = `${m}:${s}`;
            if(s === 0){
                m--;
                s=59
                if(m<0){
                    clearInterval(x)
                }
            }
        },1000)