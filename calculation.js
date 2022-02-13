function IphoneCostCalculation(product,chack,priceId,price){
     const IphoneCountity= document.getElementById(product);
     const IphoneCountityValue=parseFloat(IphoneCountity.value);
     const preveIphoneTotal=document.getElementById(priceId);
     const preveIphoneTotalInnerText=parseFloat(preveIphoneTotal.innerText);
     

     if(chack==true){
       let IphoneCountityValueUbdate=IphoneCountityValue+1;
          const latestcounttiy= IphoneCountity.value=IphoneCountityValueUbdate;
          const costCount=latestcounttiy*price;
          preveIphoneTotal.innerText=costCount;

     

     }
     else if(IphoneCountityValue>1){
        const IphoneCountityValueUbdate=IphoneCountityValue-1;
        const latestcounttiy= IphoneCountity.value=IphoneCountityValueUbdate;
        const costCount=latestcounttiy*price;
        preveIphoneTotal.innerText=costCount;
    
    
     }
    
 
     

}



document.getElementById("iphone-increase").addEventListener("click",function(){
    IphoneCostCalculation("ipone-countity",true,"iphone-total",1219);
    
})
document.getElementById("iphone-decrese").addEventListener("click",function(){
    IphoneCostCalculation("ipone-countity",false,"iphone-total",1219)
});
document.getElementById("normal-phone-increase").addEventListener("click",function(){
    IphoneCostCalculation("total-normal-phone",true,"total-normalPhone-cost",59);
    
})
document.getElementById("normal-phone -decrese").addEventListener("click",function(){
    IphoneCostCalculation("total-normal-phone",false,"total-normalPhone-cost",59);
    
})
