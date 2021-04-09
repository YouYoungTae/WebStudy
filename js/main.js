
window.onload= function(){

    console.log("n1");

    
    var fncLoc =function (e ) {
        
        for  (var num=0 ;;){
            if (document.querySelectorAll("#viewPageSelector .toggleView")[num] ===e){
                return num;
            }
            if (num >50) {break;}
            num ++;
        }

    }
    document.querySelectorAll("#viewPage .toggleView")[0].classList.toggle("active");
    
    document.querySelectorAll("#viewPageSelector .toggleView")
    .forEach( (e) => {
        e.addEventListener("click", (ei ) =>{
            console.log(fncLoc(ei.currentTarget));
            for (var num=0 ;;){
                document.querySelectorAll("#viewPage .toggleView")[fncLoc(ei.currentTarget)].classList.remove("active")
                if (num >50) {break;}
                num ++;
            }

            document.querySelectorAll("#viewPage .toggleView")[fncLoc(ei.currentTarget)].classList.toggle("active");
        });
    });

    console.log("n2");

};

