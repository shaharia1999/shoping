
// this function for claculate element price

function IphoneCostCalculation(product,chack,priceId,price){
     const IphoneCountity= document.getElementById(product);
     const IphoneCountityValue=parseFloat(IphoneCountity.value);
     const preveIphoneTotal=document.getElementById(priceId);
     const preveIphoneTotalInnerText=parseFloat(preveIphoneTotal.innerText);
     
    
     if(chack==true){
       let IphoneCountityValueUbdate=IphoneCountityValue+1;
          const latestcounttiy= IphoneCountity.value=IphoneCountityValueUbdate;
          const costCount=latestcounttiy*price;
          const completeTotal= preveIphoneTotal.innerText=costCount;
          return completeTotal;

     }
     else if(IphoneCountityValue>1){
        const IphoneCountityValueUbdate=IphoneCountityValue-1;
        const latestcounttiy= IphoneCountity.value=IphoneCountityValueUbdate;
        const costCount=latestcounttiy*price;
        const completeTotal=preveIphoneTotal.innerText=costCount;
        return completeTotal;
    
    
     }  
                              
}


 function Subtotal() {
     /// sub total
     const firstItem=document.getElementById("iphone-total").innerText;
    let subtotalInput=document.getElementById("Subtotal");
    let subtotalInputValue=parseFloat(subtotalInput.innerText);
    /// first value
    let firstValue=parseFloat( document.getElementById("iphone-total").innerText);
    let secondValue=parseFloat( document.getElementById("total-normalPhone-cost").innerText);
 ////// coomplete result
        subtotalInputValue=firstValue+secondValue;
       let totalsub= subtotalInput.innerText=subtotalInputValue;
 
      //// text 
        let prevtext = document.getElementById("text");
        let textInner= prevtext.value;
          let ubdateText=prevtext.innerText=totalsub*5/100;

    /////   after text
      let finishTotal=document.getElementById("finishTotal");
      let FinishTotalVale=parseFloat(finishTotal.innerText);
      console.log(FinishTotalVale)
     const ubdateFinishTotal=totalsub-ubdateText;
     finishTotal.innerText=ubdateFinishTotal;




    
     
}  

document.getElementById("iphone-increase").addEventListener("click",function(){
    IphoneCostCalculation("ipone-countity",true,"iphone-total",1219);
    Subtotal();    
    
    //  subtotalInputValue+completeTotal;
    
})
document.getElementById("iphone-decrese").addEventListener("click",function(){
    IphoneCostCalculation("ipone-countity",false,"iphone-total",1219)
    Subtotal();    
});
document.getElementById("normal-phone-increase").addEventListener("click",function(){
    IphoneCostCalculation("total-normal-phone",true,"total-normalPhone-cost",59);
    Subtotal();    
    
})
document.getElementById("normal-phone -decrese").addEventListener("click",function(){
    IphoneCostCalculation("total-normal-phone",false,"total-normalPhone-cost",59);
    Subtotal();    
    
});


///////
  const math= Math.floor(Math.random()*90000) +10000; ;
  console.log(math);
