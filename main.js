var myFirstStepInfo = document.getElementById("StepOne")
var ThisSecondStep = document.getElementById("StepTwo")
var ThirdtStepInfo = document.getElementById("StepThree")
var forthtStepInfo = document.getElementById("StepFor")
var ThankYouStepInfo = document.getElementById("Finish")
let BtnYearMonth = document.getElementById("MY")
const mySteps = document.querySelectorAll(".Step")
let bkbtn = document.querySelectorAll(".bk")
var Chosen = [] 

// BTN TO CHECK IF IT IN YEAR OR MONTHS
BtnYearMonth.addEventListener("click",() =>{
    let dataValue = BtnYearMonth.getAttribute("data-value")
    let cirlcePlace = document.getElementById("circel")
    if(dataValue == "Yearly"){
        BtnYearMonth.setAttribute("data-value","Monthly")
        cirlcePlace.style.removeProperty("right")
        cirlcePlace.style.left = "0"
        MonthlyPlan()
        MonthlyServices()
    }else if(dataValue == "Monthly"){
        BtnYearMonth.setAttribute("data-value","Yearly")
        cirlcePlace.style.removeProperty("left")
        cirlcePlace.style.right = "0"
        YearlyPlan()
        YearlyServices()
    }
})

function getifMontorYear(){
    let dataValue = BtnYearMonth.getAttribute("data-value")
    if(dataValue == "Yearly"){
        return dataValue
    }else if(dataValue == "Monthly"){   
        return dataValue
    }
}
////////////////////////////////////////////////////////

function YearlyPlan(){
    let PlanPriceInfo = [
        { Pic :"icon-arcade", Plan : "Arcade", Price : "90" },
        { Pic : "icon-advanced", Plan : "Advanced", Price : "120"  },
        { Pic : "icon-pro", Plan : "Pro", Price : "150" }
    ]
    let myOptions = document.getElementById("Options")
    myOptions.innerHTML = PlanPriceInfo.map((item)=>
        `<div class="Opt">
        <input type="radio" id="${item.Plan}" name="T" value ="${item.Plan}" data-price = "${item.Price}">
        <div class="OPPT">
            <img src="/assets/images/${item.Pic}.svg" alt="">
            <label for="${item.Plan}">${item.Plan}</label>
            <span>+$${item.Price}/yr</span>
        </div>
        </div>`
    ).join("")
}

function MonthlyPlan(){
    let PlanPriceInfo = [
        { Pic :"icon-arcade", Plan : "Arcade", Price : "9" },
        { Pic : "icon-advanced", Plan : "Advanced", Price : "12"  },
        { Pic : "icon-pro", Plan : "Pro", Price : "15" }
    ]
    let myOptions = document.getElementById("Options")
    myOptions.innerHTML = PlanPriceInfo.map((item)=>
        `<div class="Opt">
        <input type="radio" id="${item.Plan}" name="T" value ="${item.Plan}" data-price = "${item.Price}">
        <div class="OPPT">
            <img src="/assets/images/${item.Pic}.svg" alt="">
            <label for="${item.Plan}">${item.Plan}</label>
            <span>+$${item.Price}/mo</span>
        </div>
        </div>`
    ).join("")
}

function YearlyServices(){
    let Services = document.getElementById("ServiceClass")
    let PlanServices = [
        {Name : "Online Service",Description:"Acces to multiplayer games",price : "10", id:"sv1"},
        {Name : "Larger Storasge",Description:"Extra 1TB of cloud save",price :  "20",id:"sv2"},
        {Name : "Customizable Profile",Description:"Custom theme on your profile",price : "20",id:"sv3"}
    ]
    Services.innerHTML = PlanServices.map((item)=>
    `<input type="checkbox" name="SR" id="${item.id}" value ="${item.Name}" data-price = "${item.price}">
    <label for="${item.id}" class="Service Online">
        <div class="ServiceInput">
            <div class="Text">
                <h4>${item.Name}</h4>
                <span>${item.Description}</span>
            </div>
        </div>
        <div>
            <span>+$${item.price}/yr</span>
        </div>
    </label>`
    ).join("")
}
function MonthlyServices(){
    let Services = document.getElementById("ServiceClass")
    let PlanServices = [
        {Name : "Online Service",Description:"Acces to multiplayer games",price : "1", id:"sv1"},
        {Name : "Larger Storasge",Description:"Extra 1TB of cloud save",price :  "2",id:"sv2"},
        {Name : "Customizable Profile",Description:"Custom theme on your profile",price : "2",id:"sv3"}
    ]
    Services.innerHTML = PlanServices.map((item)=>
    `<input type="checkbox" name="SR" id="${item.id}" value = "${item.Name}" data-price = "${item.price}">
    <label for="${item.id}" class="Service Online">
        <div class="ServiceInput">
            <div class="Text">
                <h4>${item.Name}</h4>
                <span>${item.Description}</span>
            </div>
        </div>
        <div>
            <span>+$${item.price}/mo</span>
        </div>
    </label>`
    ).join("")
}
MonthlyServices()
MonthlyPlan()
//-------------------------------------------------------------------------------------------------------------------

function Submit(){
    event.preventDefault()
    let NameInput = document.getElementById("Name")
    let EmailInput = document.getElementById("Mail")
    let PhoneNumber = document.getElementById("Phone")
    if(NameInput.value != "" && EmailInput.value!="" && PhoneNumber.value!=""){
        console.log("all good")
        SecondStep();
    }else{
        console.log("Must complete all")
    }
}

function SecondStep(){
    myFirstStepInfo.style.display = "none"
    ThisSecondStep.style.display = "grid"
    mySteps[0].childNodes[1].classList.remove("activeStep")
    mySteps[1].childNodes[1].classList.add("activeStep")
}




function getPlan(){
    let radioBtns = document.getElementsByName("T");
    let isCheked = false 
    for(i=0;i<radioBtns.length;i++){
        if(radioBtns[i].checked){
            var chosenPlan= radioBtns[i].value
            var chosenPlanPrice = radioBtns[i].getAttribute("data-price")
            isCheked = true
        }
    }
    if(isCheked){
        ThirdSTep()
        mySteps[2].childNodes[1].classList.add("activeStep")

    }else{
        console.log("Khessek Tkhtar we7da")
    }
    return {var1: chosenPlan, var2: chosenPlanPrice}
};

function getServices(){
    mySteps.forEach((step)=>{
        step.childNodes[1].classList.remove("activeStep")
    })
    let CheckBtns = document.getElementsByName("SR");
    let isCheked = false
    for(i=0;i<CheckBtns.length;i++){
        if(CheckBtns[i].checked){
            var chosenService = 
            {Service :CheckBtns[i].value, price :CheckBtns[i].getAttribute("data-price") }
            Chosen.push(chosenService)
            isCheked = true
        }
    }
    if(isCheked){
        ForthStep()
        CalculateTotalPerMonthYear()
        ThirdtStepInfo.style.display = "none"

    }else{
        console.log("Khessek Tkhtar we7da")
    }
}

function ThirdSTep(){
    ThisSecondStep.style.display = "none"
    ThirdtStepInfo.style.display = "grid"
    mySteps[1].childNodes[1].classList.remove("activeStep")
}


function ChangePlan(){
    ThisSecondStep.style.display = "grid"
    forthtStepInfo.style.display = "none"
    mySteps[3].childNodes[1].classList.remove("activeStep")
    mySteps[1].childNodes[1].classList.add("activeStep")
    Chosen = []
}
function ForthStep(){
    ThirdtStepInfo.style.display = "none"
    forthtStepInfo.style.display = "grid"
    mySteps.forEach((step)=>{
        step.childNodes[1].classList.remove("activeStep")
    })
    mySteps[3].childNodes[1].classList.add("activeStep")
    let result = getPlan();
    let MY = getifMontorYear()
    var servicess =  Chosen
    let ConfirmPlace = document.getElementById("PlanInfo")
    let ServicePlace = document.getElementById("GetService")
    ConfirmPlace.innerHTML = `<div class="PlanInfo" id="PlanInfoo">
    <div class="">
        <h4>${result.var1} (${MY === "Monthly"?"Monthly":"Yearly"})</h4>
        <span class="change" onclick = "ChangePlan()">Change</span>
    </div>
    <div class="">
        <span class="price">+$${result.var2}${MY === "Monthly"?"/mo":"/yr"}</span>
    </div>
    </div>`
    ServicePlace.innerHTML = servicess.map((item)=>
    `<div class="Serv">
    <h5>${item.Service}</h5>
    <span>+$${item.price}${MY === "Monthly"?"/mo":"/yr"}</span>
    </div>`
    ).join("")
}

bkbtn[0].addEventListener("click",()=>{
    myFirstStepInfo.style.display = "grid"
    ThisSecondStep.style.display = "none"
    mySteps[1].childNodes[1].classList.remove("activeStep")
    mySteps[0].childNodes[1].classList.add("activeStep")
})
bkbtn[1].addEventListener("click",()=>{
    ThisSecondStep.style.display = "grid"
    ThirdtStepInfo.style.display = "none"
    mySteps[2].childNodes[1].classList.remove("activeStep")
    mySteps[1].childNodes[1].classList.add("activeStep")
})
bkbtn[2].addEventListener("click",()=>{
    ThirdtStepInfo.style.display = "grid"
    forthtStepInfo.style.display = "none"
    mySteps[3].childNodes[1].classList.remove("activeStep")
    mySteps[2].childNodes[1].classList.add("activeStep")
    Chosen = []
})

function CalculateServicePrice(){
    var TotalService = 0
    Chosen.forEach((item)=>{
        TotalService += parseInt(item.price)
    })
    return TotalService
}
function CalculateTotalPerMonthYear(){
    let MY = getifMontorYear()
    var myresult = parseInt(getPlan().var2) + CalculateServicePrice()
    let TotalInfo = document.getElementById("Total")
    TotalInfo.innerHTML =`<h5>Total (${MY === "Monthly"?"Monthly":"Yearly"})</h5>
    <span class="TotalPrice">+$${myresult} ${MY === "Monthly"?"/mo":"/yr"}</span>`
}


function Finish(){
    mySteps.forEach((step)=>{
        step.childNodes[1].classList.remove("activeStep")
    })
    ThankYouStepInfo.style.display = "flex"
    forthtStepInfo.style.display = "none"
}
// function ShowErrorMSg(errmsg){

// }