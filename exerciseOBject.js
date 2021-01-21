

function askTvSerie(){
        let name = prompt("please enter name of your favorite Tv series \n");
        let productionYear= prompt('enter the year of  production');
        let castMember = [];
        let tempCastMember = prompt('enter the Cast Member');
        let i = 0;
        // alert(tempCastMember);
        while(tempCastMember != 's'){
            // alert("ok");
            castMember[i] = tempCastMember;
            i++;
            tempCastMember = prompt('enter the Cast Member or enter S to finish');
        
        }
        var tvSeries = 
        {
            name: name,
            productionYear: productionYear,
            castMember: castMember
        } 

        return castMember;
    
       
};

function random_item(){
    
    var result =   askTvSerie();
    var finalResult= [];
    for(var i=0; i< result.length;i++){
        alert("okkk  "+ result[i]);
        finalResult[i] = result[i];
    }

    alert("the Results is: "+ finalResult[Math.floor(Math.random()*finalResult.length)]);

}


          
        

 
