function getShippingCost(country, priece) {
      let price;

  switch (country) {
    case 'China':
      price = 100;
      break;
    case 'Chile':
      price = 250;
      break;
    case 'Australia':
      price = 170;
      break;
    case 'Jamaica':
      price = 120;
      break;
    default:
      return 'Sorry, there is no delivery to your country';
  }
    
return `Shipping to ${country} will cost ${priece} credits`
}


console.log(getShippingCost("Australia", 170)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China", 100)); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile", 250)); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica", 120)); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
