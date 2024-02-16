var myFirstStepInfo = document.getElementById("StepOne")
var ThisSecondStep = document.getElementById("StepTwo")
var ThirdtStepInfo = document.getElementById("StepThree")
var forthtStepInfo = document.getElementById("StepFor")
var ThankYouStepInfo = document.getElementById("")
//-------------------------------------------
let BtnYearMonth = document.getElementById("MY")
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

function YearlyPlan(){
    let PlanPriceInfo = [
        { Pic :"icon-arcade", Plan : "Arcade", Price : "90$/yr" },
        { Pic : "icon-advanced", Plan : "Advanced", Price : "120$/yr"  },
        { Pic : "icon-pro", Plan : "Pro", Price : "150$/yr" }
    ]
    let myOptions = document.getElementById("Options")
    myOptions.innerHTML = PlanPriceInfo.map((item)=>
        `<div class="Opt">
        <input type="radio" id="${item.Plan}" name="T" value ="${item.Plan}">
        <div class="OPPT">
            <img src="/assets/images/${item.Pic}.svg" alt="">
            <label for="${item.Plan}">${item.Plan}</label>
            <span>${item.Price}</span>
        </div>
        </div>`
    ).join("")
}

function MonthlyPlan(){
    let PlanPriceInfo = [
        { Pic :"icon-arcade", Plan : "Arcade", Price : "9$/mo" },
        { Pic : "icon-advanced", Plan : "Advanced", Price : "12$/mo"  },
        { Pic : "icon-pro", Plan : "Pro", Price : "15$/mo" }
    ]
    let myOptions = document.getElementById("Options")
    myOptions.innerHTML = PlanPriceInfo.map((item)=>
        `<div class="Opt">
        <input type="radio" id="${item.Plan}" name="T" value ="${item.Plan}">
        <div class="OPPT">
            <img src="/assets/images/${item.Pic}.svg" alt="">
            <label for="${item.Plan}">${item.Plan}</label>
            <span>${item.Price}</span>
        </div>
        </div>`
    ).join("")
}

function YearlyServices(){
    let Services = document.getElementById("ServiceClass")
    let PlanServices = [
        {Name : "Online Service",Description:"Acces to multiplayer games",price : "+$10/yr", id:"sv1"},
        {Name : "Larger Storasge",Description:"Extra 1TB of cloud save",price :  "+$20/yr",id:"sv2"},
        {Name : "Customizable Profile",Description:"Custom theme on your profile",price : "+$20/yr",id:"sv3"}
    ]
    Services.innerHTML = PlanServices.map((item)=>
    `<input type="checkbox" name="SR" id="${item.id}">
    <label for="${item.id}" class="Service Online">
        <div class="ServiceInput">
            <div class="Text">
                <h4>${item.Name}</h4>
                <span>${item.Description}</span>
            </div>
        </div>
        <div>
            <span>${item.price}</span>
        </div>
    </label>`
    ).join("")
}
function MonthlyServices(){
    let Services = document.getElementById("ServiceClass")
    let PlanServices = [
        {Name : "Online Service",Description:"Acces to multiplayer games",price : "+$1/mo", id:"sv1"},
        {Name : "Larger Storasge",Description:"Extra 1TB of cloud save",price :  "+$2/mo",id:"sv2"},
        {Name : "Customizable Profile",Description:"Custom theme on your profile",price : "+$2/mo",id:"sv3"}
    ]
    Services.innerHTML = PlanServices.map((item)=>
    `<input type="checkbox" name="SR" id="${item.id}">
    <label for="${item.id}" class="Service Online">
        <div class="ServiceInput">
            <div class="Text">
                <h4>${item.Name}</h4>
                <span>${item.Description}</span>
            </div>
        </div>
        <div>
            <span>${item.price}</span>
        </div>
    </label>`
    ).join("")
}
MonthlyServices()
MonthlyPlan()
//------------------------------------------------------
const mySteps = document.querySelectorAll(".Step")
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
            console.log(radioBtns[i].value)
            isCheked = true
        }
    }
    if(isCheked){
        ThirdSTep()
    }else{
        console.log("Khessek Tkhtar we7da")
    }
};

function getServices(){
    let CheckBtns = document.getElementsByName("SR");
    let isCheked = false 
    for(i=0;i<CheckBtns.length;i++){
        if(CheckBtns[i].checked){
            console.log(CheckBtns[i].value)
            isCheked = true
        }
    }
    if(isCheked){
        confirmStepFoth()
    }else{
        console.log("Khessek Tkhtar we7da")
    }
}

function ThirdSTep(){
    ThisSecondStep.style.display = "none"
    ThirdtStepInfo.style.display = "grid"
    mySteps[1].childNodes[1].classList.remove("activeStep")
    mySteps[2].childNodes[1].classList.add("activeStep")
}

function confirmStepFoth(){
    ThirdtStepInfo.style.display = "none"
    forthtStepInfo.style.display = "grid"
    mySteps[2].childNodes[1].classList.remove("activeStep")
    mySteps[3].childNodes[1].classList.add("activeStep")
}

let bkbtn = document.querySelectorAll(".bk")
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
    ThisSecondStep.style.display = "grid"
    ThirdtStepInfo.style.display = "none"
    mySteps[1].childNodes[1].classList.remove("activeStep")
    mySteps[2].childNodes[1].classList.add("activeStep")
})

// function ShowErrorMSg(errmsg){
//     let ErrorMsg = document.createElement("div")
//     ErrorMsg.textContent = errmsg

// }