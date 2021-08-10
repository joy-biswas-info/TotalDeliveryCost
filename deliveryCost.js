/********************
 Total Delivery Cost
 *********************/

function deliveryCost(quantity) {
    const withIn100DeliveryCharge = 100;
    const withIn200DeliveryCharge = 80;
    const moreThan200DeliveryCharge = 60;
    if (quantity <= 100) {
        let totalCost = quantity * withIn100DeliveryCharge;
        // Error Handelling
        if (quantity < 1) {
          return "Please Input A Number More Than: 0";
        }
        return "Your Total Delivery Charge: "+totalCost;
    }
    else if (quantity <= 200) {
        const withIn100TotalCost = 100 * withIn100DeliveryCharge;
        const restQuantity = quantity - 100;
        const withIn200TotalCost = restQuantity * withIn200DeliveryCharge;
        const totalCost = withIn100TotalCost + withIn200TotalCost;
        return "Your Total Delivery Charge: "+totalCost;
    }
    else {
        const withIn100TotalDeliveryCharge = 100 * withIn100DeliveryCharge;
        const withIn200TotalDeliveryCharge = 100 * withIn200DeliveryCharge;
        const restQuantity = quantity - 200;
        const moreThan200TotalDeliveryCharge = restQuantity * moreThan200DeliveryCharge;
        totalCost = withIn100TotalDeliveryCharge + withIn200TotalDeliveryCharge + moreThan200TotalDeliveryCharge;
        return "Your Total Delivery Charge: "+totalCost;
    }
}
// Input Your Total Items
var totalItems = 300;
var totalCost = deliveryCost(totalItems);

console.log(totalCost);