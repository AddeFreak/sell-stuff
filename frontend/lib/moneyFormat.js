export default function moneyFormat(amount = 0){
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'SEK',
  minimumFractionDigits: 0,
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
/* if(amount % 100 === 0) {
 minimumFractionDigits = 0; 

} */
return formatter.format(amount)
}