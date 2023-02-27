// console.log(number);
// const addBtn = document.getElementById('++');
// addBtn.addEventListener('click', ()=>{
//    number++;
//    // console.log(number);
//    startNumber.innerText = number.toString();
// });

// const removeBtn = document.getElementById('--');
// removeBtn.addEventListener('click', ()=>{
//    number--;
//    startNumber.innerText = number.toString();
// });
const priceNumber = document.getElementById('total');
var number = Number(priceNumber.innerText);
const noi = document.getElementById('numberOfItems');

const addbtn1 = document.getElementById('add1');
addbtn1.addEventListener('click',()=>{
    const item1 = document.getElementById('item1-price');
    var price1 = Number(item1.innerText.split(' ')[0]);
    number = number + price1;
    priceNumber.innerText = `${number.toString()} EGP`;
    var itemnumber1 = Number(noi.innerText);
    itemnumber1++;
    console.log(itemnumber1);
    noi.innerText = itemnumber1.toString();
})
const removebtn1 = document.getElementById('remove1');
removebtn1.addEventListener('click',()=>{
   var itemnumber = Number(noi.innerText);
   itemnumber--;
   const item1 = document.getElementById('item1-price');
   var price1 = Number(item1.innerText.split(' ')[0]);
   number = number - price1;
   priceNumber.innerText = `${number.toString()} EGP`;
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber.toString();
   }
})

const addbtn2 = document.getElementById('add2');
addbtn2.addEventListener('click',()=>{
   const item2 = document.getElementById('item2-price');
   var price2 = Number(item2.innerText.split(' ')[0]);
   number = number + price2;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber2 = Number(noi.innerText);
   itemnumber2++;
   noi.innerText = itemnumber2.toString();
})
const removebtn2 = document.getElementById('remove2');
removebtn2.addEventListener('click',()=>{
   const item2 = document.getElementById('item2-price');
   var price2 = Number(item2.innerText.split(' ')[0]);
   number = number-price2;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber2 = Number(noi.innerText);
   itemnumber2--;
   noi.innerText= itemnumber2.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber2<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber2.toString();
   }
})

const addbtn3 = document.getElementById('add3');
addbtn3.addEventListener('click',()=>{
   const item3 = document.getElementById('item3-price');
   var price3 = Number(item3.innerText).split(' ')[0];
   number = number + price3;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber3 = Number(noi.innerText);
   itemnumber3++;
   noi.innerText = itemnumber3.toString();
})
const removebtn3 = document.getElementById('remove3');
removebtn3.addEventListener('click',()=>{
   const item3 = document.getElementById('item3-price');
   var price3 = Number(item3.innerText.split(' ')[0]);
   number = number - price3;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber3 = Number(noi.innerText);
   itemnumber3--;
   noi.innerText= number.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber3<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber3.toString();
   }
})

const addbtn4 = document.getElementById('add4');
addbtn4.addEventListener('click',()=>{
   const item4 = document.getElementById('item4-price');
   var price4 = Number(item4.innerText.split(' ')[0]);
   number = number + price4;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber4 = Number(noi.innerText);
   itemnumber4++;
   noi.innerText= itemnumber4.toString();
})
const removebtn4 = document.getElementById('remove4');
removebtn4.addEventListener('click',()=>{
   const item4 = document.getElementById('item4-price');
   var price4 = Number(item4.innerText.split(' ')[0]);
   number = number - price4;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber4 = Number(noi.innerText);
   itemnumber4--;
   noi.innerText= itemnumber4.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber4<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber4.toString();
   }
})

const addbtn5 = document.getElementById('add5');
addbtn5.addEventListener('click',()=>{
   const item5 = document.getElementById('item5-price');
   var price5 = Number(item5.innerText.split(' ')[0]);
   number = number + price5;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber5 = Number(noi.innerText);
   itemnumber5++;
   noi.innerText= itemnumber5.toString();
})
const removebtn5 = document.getElementById('remove5');
removebtn5.addEventListener('click',()=>{
   const item5 = document.getElementById('item5-price');
   var price5 = Number(item5.innerText.split(' ')[0]);
   number = number - price5;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber5 = Number(noi.innerText);
   itemnumber5--;
   noi.innerText= itemnumber5.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber5<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber5.toString();
   }
});

const addbtn6 = document.getElementById('add6');
addbtn6.addEventListener('click',()=>{
   const item6 = document.getElementById('item6-price');
   var price6 = Number(item6.innerText.split(' ')[0]);
   number = number + price6;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber6 = Number(noi.innerText);
   itemnumber6++;
   noi.innerText= itemnumber6.toString();
});
const removebtn6 = document.getElementById('remove6');
removebtn6.addEventListener('click',()=>{
   const item6 = document.getElementById('item6-price');
   var price6 = Number(item6.innerText.split(' ')[0]);
   number = number - price6;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber6 = Number(noi.innerText);
   itemnumber6--;
   noi.innerText= itemnumber6.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber6<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber6.toString();
   }
});

const addbtn7 = document.getElementById('add7');
addbtn7.addEventListener('click',()=>{
   const item7 = document.getElementById('item7-price');
   var price7 = Number(item7.innerText.split(' ')[0]);
   number = number + price7;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber7 = Number(noi.innerText);
   itemnumber7++;
   noi.innerText= itemnumber7.toString();
});
const removebtn7 = document.getElementById('remove7');
removebtn7.addEventListener('click',()=>{
   const item7 = document.getElementById('item7-price');
   var price7 = Number(item7.innerText.split(' ')[0]);
   number = number - price7;
   priceNumber.innerText = `${number.toString()} EGP`;
   var itemnumber7 = Number(noi.innerText);
   itemnumber7--;
   noi.innerText= itemnumber7.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber7<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber7.toString();
   }
});

const addbtn8 = document.getElementById('add8');
addbtn8.addEventListener('click',()=>{
   const item8 = document.getElementById('item8-price');
   var price8 = Number(item8.innerText.split(' ')[0]);
   number = number + price8;
   priceNumber.innerText= `${number.toString()} EGP`;
   var itemnumber8 = Number(noi.innerText);
   itemnumber8++;
   noi.innerText= itemnumber8.toString();
})
const removebtn8 = document.getElementById('remove8');
removebtn8.addEventListener('click',()=>{
   const item8 = document.getElementById('item8-price');
   var price8 = Number(item8.innerText.split(' ')[0]);
   number = number - price8;
   priceNumber.innerText= `${number.toString()} EGP`;
   var itemnumber8 = Number(noi.innerText);
   itemnumber8--;
   noi.innerText= itemnumber8.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber8<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber8.toString();
   }
})

const addbtn9 = document.getElementById('add9');
addbtn9.addEventListener('click',()=>{
   const item9 = document.getElementById('item9-price');
   var price9 = Number(item9.innerText.split(' ')[0]);
   number = number + price9;
   priceNumber.innerText= `${number.toString()} EGP`;
   var itemnumber9 = Number(noi.innerText);
   itemnumber9++;
   noi.innerText= itemnumber9.toString();
})
const removebtn9 = document.getElementById('remove9');
removebtn9.addEventListener('click',()=>{
   const item9 = document.getElementById('item9-price');
   var price9 = Number(item9.innerText.split(' ')[0]);
   number = number - price9;
   priceNumber.innerText= `${number.toString()} EGP`;
   var itemnumber9 = Number(noi.innerText);
   itemnumber9--;
   noi.innerText= itemnumber9.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber9<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber9.toString();
   }
})

const addbtn10 = document.getElementById('add10');
addbtn10.addEventListener('click',()=>{
   const item10 = document.getElementById('item10-price');
   var price10 = Number(item10.innerText.split(' ')[0]);
   number = number + price10;
   priceNumber.innerText= `${number.toString()} EGP`;
   var itemnumber10 = Number(noi.innerText);
   itemnumber10++;
   noi.innerText= itemnumber10.toString();
})
const removebtn10 = document.getElementById('remove10');
removebtn10.addEventListener('click',()=>{
   const item10 = document.getElementById('item10-price');
   var price10 = Number(item10.innerText.split(' ')[0]);
   number = number - price10;
   priceNumber.innerText= `${number.toString()} EGP`;
   var itemnumber10 = Number(noi.innerText);
   itemnumber10--;
   noi.innerText= itemnumber10.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber10<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber10.toString();
   }
})

const addbtn11 = document.getElementById('add11');
addbtn11.addEventListener('click',()=>{
   const item11 = document.getElementById('item11-price');
   var price11 = Number(item11.innerText.split(' ')[0]);
   number = number + price11;
   priceNumber.innerText= `${number.toString()} EGP`;
   var itemnumber11 = Number(noi.innerText);
   itemnumber11++;
   noi.innerText= itemnumber11.toString();
})
const removebtn11 = document.getElementById('remove11');
removebtn11.addEventListener('click',()=>{
   const item11= document.getElementById('item11-price');
   var price11 = Number(item11.innerText.split(' ')[0]);
   number = number - price11;
   priceNumber.innerText= `${number.toString()} EGP`;
   var itemnumber11 = Number(noi.innerText);
   itemnumber11--;
   noi.innerText= itemnumber11.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber11<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber11.toString();
   }
})

const addbtn12 = document.getElementById('add12');
addbtn12.addEventListener('click',()=>{
   const item12 = document.getElementById('item12-price');
   var price12 = Number(item12.innerText.split(' ')[0]);
   number = number + price12;
   priceNumber.innerText= `${number.toString()} EGP`;
   var itemnumber12 = Number(noi.innerText);
   itemnumber12++;
   noi.innerText= itemnumber12.toString();
})
const removebtn12 = document.getElementById('remove12');
removebtn12.addEventListener('click',()=>{
   const item12 = document.getElementById('item12-price');
   var price12 = Number(item12.innerText.split(' ')[0]);
   number = number - price12;
   priceNumber.innerText= `${number.toString()} EGP`;
   var itemnumber12 = Number(noi.innerText);
   itemnumber12--;
   noi.innerText= itemnumber12.toString();
   if(number<=0){
      priceNumber.innerText ='0';
   }
   if(itemnumber12<=0){
      noi.innerText = '0';
   }
   else{
      noi.innerText = itemnumber12.toString();
   }
})
