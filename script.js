function byclick(e){
    
    function tencall(callback){
        setTimeout(()=>{
        document.querySelector(".timer").innerText="10"
        callback();},1000)
    }
    function ninecall(callback){
        setTimeout(()=>{
        document.querySelector(".timer").innerText="9"
        callback();},1000)
    }
    function eightcall(callback){
        setTimeout(()=>{
            document.querySelector(".timer").innerText="8"
            callback();},1000)
    }
    function sevencall(callback){
        setTimeout(()=>{
            document.querySelector(".timer").innerText="7"
            callback();},1000)
    }
    function sixcall(callback){
        setTimeout(()=>{
            document.querySelector(".timer").innerText="6"
            callback();},1000)
    }
    function fivecall(callback){
        setTimeout(()=>{
            document.querySelector(".timer").innerText="5"
            callback();},1000)
    }
    function fourcall(callback){
        setTimeout(()=>{
            document.querySelector(".timer").innerText="4"
            callback();},1000)
    }
    function threecall(callback){
        setTimeout(()=>{
            document.querySelector(".timer").innerText="3"
            callback();},1000)
    }
    function twocall(callback){
        setTimeout(()=>{
            document.querySelector(".timer").innerText="2"
            callback();},1000)
    }
    function onecall(callback){
        setTimeout(()=>{
            document.querySelector(".timer").innerText="1"
            callback();},1000)
    }
    function wishcall(callback){
        setTimeout(()=>{
            document.querySelector(".timer").innerText="HAPPY INDEPENDENCE DAY"
        },1000)
    }
    tencall(()=>{
        ninecall(()=>{
            eightcall(()=>{
                sevencall(()=>{
                    sixcall(()=>{
                        fivecall(()=>{
                            fourcall(()=>{
                                threecall(()=>{
                                    twocall(()=>{
                                        onecall(()=>{
                                            wishcall();
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    
}

