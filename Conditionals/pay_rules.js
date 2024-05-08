let payrate=12.50;
hoursWorked=42;
payperhour=1.5;
if((hoursWorked<40)&&(hoursWorked>0)){
    pay=(payrate*hoursWorked).toFixed(2);
   console.log("Gross pay :"+pay);
}
else{
    overTime = hoursWorked-40;
    overTimePay=overTime*payperhour*payrate;
    actualpay=payrate*40;
    totalpayment=overTimePay+actualpay;
    console.log("gross pay"+totalpayment);


}