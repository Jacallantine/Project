document.addEventListener('DOMContentLoaded', ()=>{
    hideOptionButtons()
    
})



function hideOptionButtons(){
    hideBoxedLunchesOptions()
    hideBreakfastOptions()
    hideSandwichOptions()
    hideSoupOptions()
    hidesaladOptions()
}










function showBreakfastOptions(){
    document.getElementById('breakfastOptions').style.display = 'flex'
}
function hideBreakfastOptions(){
    document.getElementById('breakfastOptions').style.display = 'none'
}

function showSandwichOptions(){
    document.getElementById('sandwichOptions').style.display = 'flex'
}
function hideSandwichOptions(){
    document.getElementById('sandwichOptions').style.display = 'none'
}

function showsaladOptions(){
    document.getElementById('saladOptions').style.display = 'flex'
}

function hidesaladOptions(){
    document.getElementById('saladOptions').style.display = 'none'
}

function showBoxedLunchesOptions(){
    document.getElementById('saladOptions').style.display = 'flex'
}

function hideBoxedLunchesOptions(){
    document.getElementById('boxedLunchesOptions').style.display = 'none'
}

function showSoupOptions(){
    document.getElementById('soupOptions').style.display = 'flex'
}

function hideSoupOptions(){
    document.getElementById('soupOptions').style.display = 'none'
}