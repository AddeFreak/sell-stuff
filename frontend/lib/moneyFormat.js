export default function moneyFormat(amount = 0){
 const options = {
     style: 'currency',
     currency: 'SEK',
     minimumFractionDigits: 0,
 }

 if (amount % 100 === 0) {
     options.minimumFractionDigits = 0
 }

 const formatter = Intl.NumberFormat('sv-Se', options)

 return formatter.format(amount/100)

}