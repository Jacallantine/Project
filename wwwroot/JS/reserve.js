document.addEventListener('DOMContentLoaded', ()=>{
    hideOptionButtons()
    hideAllSandwiches()
    hideAllBreakfast()
    hideAllDrinks()
    renderCalendar(currentDate)
    
})






function makePayment(){

}





async function createReservation(){
    let email_address = 'jaredcallantine1@gmail.com';
    let price = document.getElementById('total').value;
    let date = 'aug 8';
    let time = '6 am';
   

    const response = await fetch('http://localhost:5065/api/reservation/createReservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email_address: email_address,
            price : price,
            date : date,
            time : time
            
        })
    });

    
    if (response.ok) {
        const jsonResponse = await response.json();
        alert(jsonResponse.message); 
    } else {
        const errorResponse = await response.json();
        console.error('Error details:', errorResponse);
        alert('Error creating user: ' + errorResponse.message);
    }


}



const priceBENC = 5.00 
const priceSENC = 4.50 
const priceENC = 3.75  

const priceHNC = 3.75
const priceTNC = 3.75
const priceBNC = 3.75

const priceGC = 3
const pricePCS = 4.5
const priceCS = 4

const priceApple = 1
const priceBanana = 1
const priceOrange = 1

const priceSweetTea = 4.25
const priceCoffee = 4.25
const PriceUnsweetTea = 3.25
const priceGreenTea = 2
const priceSoda = 6

function totalBeverageCost(){

    let sweetTeaQuantity = parseFloat(document.getElementById('sweetTea').value) || 0
    let unsweetTeaQuantity = parseFloat(document.getElementById('unsweetTea').value) || 0
    let blackCoffeeQuantity = parseFloat(document.getElementById('blackCoffee').value) || 0
    let cappuccinoQuantity = parseFloat(document.getElementById('cappuccino').value) || 0
    let latteQuantity = parseFloat(document.getElementById('latte').value) || 0
    let greenTeaQuantity = parseFloat(document.getElementById('greenTea').value) || 0
    let mDewQuantity = parseFloat(document.getElementById('mDew').value) || 0
    let cokeQuantity = parseFloat(document.getElementById('coke').value) || 0
    let drPepperQuantity = parseFloat(document.getElementById('drPepper').value) || 0

    let drinkCost = (mDewQuantity * priceSoda) + (drPepperQuantity * priceSoda) + 
    (cokeQuantity * priceSoda) + (greenTeaQuantity * priceGreenTea) + (sweetTeaQuantity * priceSweetTea) + 
    (blackCoffeeQuantity * priceCoffee) + (unsweetTeaQuantity *PriceUnsweetTea) + 
    (cappuccinoQuantity * priceCoffee) + (latteQuantity *priceCoffee)

    document.getElementById('beverages').value = drinkCost.toFixed(2)
    totalCost()

}

function totalDesertCost(){

}
function totalSideCost(){

    let appleQuantity = parseFloat(document.getElementById('apple').value) || 0; 
    let bananaQuantity = parseFloat(document.getElementById('orange').value) || 0; 
    let orangeQuantity =parseFloat(document.getElementById('banana').value) || 0; 
    const sideCost = (appleQuantity * priceApple) + (bananaQuantity * priceBanana) + (orangeQuantity * priceOrange)

    document.getElementById('sides').value = sideCost.toFixed(2)
    totalCost()
}

function totalEntreeCost() {
    
    let bencQuantity = parseFloat(document.getElementById('BENC').value) || 0; 
    let sencQuantity = parseFloat(document.getElementById('SENC').value) || 0;
    let encQuantity = parseFloat(document.getElementById('ENC').value) || 0;
    let hncQuantity = parseFloat(document.getElementById('HNC').value) || 0;
    let tncQuantity = parseFloat(document.getElementById('TNC').value) || 0;
    let bncQuantity = parseFloat(document.getElementById('BNC').value) || 0;
    let gcQuantity = parseFloat(document.getElementById('GC').value) || 0;
    let pcsQuantity = parseFloat(document.getElementById('PCS').value) || 0;
    let csQuantity = parseFloat(document.getElementById('CS').value) || 0;

    
    const entreeCost = (bencQuantity * priceBENC) + (sencQuantity * priceSENC) + (encQuantity * priceENC) + (hncQuantity * priceHNC) + (tncQuantity * priceTNC) + (bncQuantity * priceBNC)
    + (gcQuantity * priceGC) + (pcsQuantity * pricePCS) * (csQuantity * priceCS)
    
    document.getElementById('entrees').value = entreeCost.toFixed(2) 
    totalCost()
}


function totalCost() {
    let totalEntree = parseFloat(document.getElementById('entrees').value) || 0;
    let totalSide = parseFloat(document.getElementById('sides').value) || 0;
    let totalDeserts = parseFloat(document.getElementById('deserts').value) || 0;
    let totalBeverages = parseFloat(document.getElementById('beverages').value) || 0;
 
    let totalCost = totalEntree + totalSide + totalDeserts + totalBeverages;
    document.getElementById('total').value = totalCost.toFixed(2);
 }


document.getElementById('BENC').addEventListener('input', totalEntreeCost)
document.getElementById('SENC').addEventListener('input', totalEntreeCost)
document.getElementById('ENC').addEventListener('input', totalEntreeCost)
document.getElementById('HNC').addEventListener('input', totalEntreeCost)
document.getElementById('TNC').addEventListener('input', totalEntreeCost)
document.getElementById('BNC').addEventListener('input', totalEntreeCost)
document.getElementById('GC').addEventListener('input', totalEntreeCost)
document.getElementById('PCS').addEventListener('input', totalEntreeCost)
document.getElementById('CS').addEventListener('input', totalEntreeCost)



document.getElementById('apple').addEventListener('input', totalSideCost)
document.getElementById('orange').addEventListener('input', totalSideCost)
document.getElementById('banana').addEventListener('input', totalSideCost)

document.getElementById('sweetTea').addEventListener('input', totalBeverageCost)
document.getElementById('greenTea').addEventListener('input', totalBeverageCost)
document.getElementById('coffee').addEventListener('input', totalBeverageCost)
document.getElementById('unsweetTea').addEventListener('input', totalBeverageCost)
document.getElementById('blackCoffee').addEventListener('input', totalBeverageCost)
document.getElementById('latte').addEventListener('input', totalBeverageCost)
document.getElementById('cappuccino').addEventListener('input', totalBeverageCost)



























function hideOptionButtons(){
    hideBreakfastOptions()
    hideSandwichOptions()
    hideSaladOptions()
    hideDrinkOptions()
}


function hideAllBreakfast(){
    document.getElementById('breakFast-entree').style.display = 'none'
    document.getElementById('breakFast-bakery').style.display = 'none'
    document.getElementById('breakFast-fruit').style.display = 'none'    
}



function hideAllSandwiches(){
    document.getElementById('sandwiches-cold').style.display = 'none'
    document.getElementById('sandwiches-hot').style.display = 'none'
}

function hideAllSalads(){
}

function hideAllDrinks(){
    document.getElementById('drinks-tea').style.display = 'none'
    document.getElementById('drinks-soda').style.display = 'none'
    document.getElementById('drinks-coffee').style.display = 'none'
}

function showBiscuits(){
    document.getElementById('breakFast-entree').style.display = 'flex'
    document.getElementById('breakFast-bakery').style.display = 'none'
    document.getElementById('breakFast-fruit').style.display = 'none'
    hideAllSandwiches()
    hideAllSalads()
    hideAllDrinks()
    
}

function showBakery(){
    document.getElementById('breakFast-bakery').style.display = 'flex'
    document.getElementById('breakFast-entree').style.display = 'none'
    document.getElementById('breakFast-fruit').style.display = 'none'
    hideAllSandwiches()
    hideAllSalads()
    hideAllDrinks()
}

function showFruit(){
    document.getElementById('breakFast-fruit').style.display = 'flex'
    document.getElementById('breakFast-entree').style.display = 'none'
    document.getElementById('breakFast-bakery').style.display = 'none'
    hideAllSandwiches()
    hideAllSalads()
    hideAllDrinks()
}

function showColdSandwiches(){
    document.getElementById('sandwiches-cold').style.display = 'flex'
    document.getElementById('sandwiches-hot').style.display = 'none'
    hideAllBreakfast()
    hideAllSalads()
    hideAllDrinks()

}

function showHotSandwiches(){
    document.getElementById('sandwiches-hot').style.display = 'flex'
    document.getElementById('sandwiches-cold').style.display = 'none'
    hideAllBreakfast()
    hideAllSalads()
    hideAllDrinks()

}

function showTea(){
    document.getElementById('drinks-tea').style.display = 'flex'
    document.getElementById('drinks-coffee').style.display = 'none'
    document.getElementById('drinks-soda').style.display = 'none'
    hideAllBreakfast()
    hideAllSalads()
    hideAllSandwiches()
    
}

function showCoffee(){
    document.getElementById('drinks-coffee').style.display = 'flex'
    document.getElementById('drinks-tea').style.display = 'none'
    document.getElementById('drinks-soda').style.display = 'none'
    hideAllBreakfast()
    hideAllSalads()
    hideAllSandwiches()
}

function showSoda(){
    document.getElementById('drinks-soda').style.display = 'flex'
    document.getElementById('drinks-coffee').style.display = 'none'
    document.getElementById('drinks-tea').style.display = 'none'
    hideAllBreakfast()
    hideAllSalads()
    hideAllSandwiches()
}









function showBreakfastOptions(){
    document.getElementById('breakfastOptions').style.display = 'flex'
    hideSandwichOptions()
    hideSaladOptions()
    hideDrinkOptions()
}

function showSandwichOptions(){
    document.getElementById('sandwichOptions').style.display = 'flex'
    hideBreakfastOptions()
    hideSaladOptions()
    hideDrinkOptions()
}


function showSaladOptions(){
    document.getElementById('saladOptions').style.display = 'flex'
    hideBreakfastOptions()
    hideSandwichOptions()
    hideDrinkOptions()
}

function showDrinkOptions(){
    document.getElementById('drinkOption').style.display = 'flex'
    hideBreakfastOptions()
    hideSandwichOptions()
    hideSaladOptions()
}

function showSaladOptions(){
    document.getElementById('saladOptions').style.display = 'flex'
    hideBreakfastOptions()
    hideSandwichOptions()
    hideDrinkOptions()
}



function hideBreakfastOptions(){
    document.getElementById('breakfastOptions').style.display = 'none'
}




function hideDrinkOptions(){
    document.getElementById('drinkOption').style.display = 'none'
}
function hideSandwichOptions(){
    document.getElementById('sandwichOptions').style.display = 'none'
}

function hideSaladOptions(){
    document.getElementById('saladOptions').style.display = 'none'
}


