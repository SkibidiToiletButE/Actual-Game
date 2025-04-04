let Money = 0
let MoneyPerClick = 1

let UpgradeLevel = 0
let UpgradeCost = 10
let UpgradeMulti = 1

let Rebirths = 0
let RebirthCost = 10000

let loop = true

//Game loading
window.onload = function Load() {
    if (localStorage) {
        Money = getItem(Money)
        MoneyPerClick = getItem(MoneyPerClick)
        
        UpgradeLevel = getItem(UpgradeLevel)
        UpgradeCost = getItem(UpgradeCost)
        
        UpgradeMulti = getItem(UpgradeMulti)
        Rebirths = getItem(Rebirths)
        RebirthCost = getItem(RebirthCost)
    }
}

//Game saving
while (loop === true) {
    if (localStorage) {
        localStorage.Money = setItem(Money, Money)
        localStorage.MoneyPerClick = setItem(MoneyPerClick, MoneyPerClick)
        
        localStorage.UpgradeLevel = setItem(UpgradeLevel, UpgradeLevel)
        localStorage.UpgradeCost = setItem(UpgradeCost, UpgradeCost)
        
        localStorage.UpgradeMulti = setItem(UpgradeMulti, UpgradeMulti)
        localStorage.Rebirths = setItem(Rebirths, Rebirths)
        localStorage.RebirthCost = setItem(RebirthCost, RebirthCost)
    }
}
           
//Click function
function Click() {
    Money += MoneyPerClick
    document.getElementById("MoneyDisplay").innerHTML = Money
    document.getElementById("MoneyPerClickDisplay").innerHTML = MoneyPerClick
}

//Upgrade function
function Upgrade() {
    if (Money >= UpgradeCost) {
        Money -= UpgradeCost
        UpgradeLevel += UpgradeMulti
        UpgradeCost *= 2 
        MoneyPerClick += UpgradeLevel

        document.getElementById("MoneyDisplay").innerHTML = Money
        document.getElementById("MoneyPerClickDisplay").innerHTML = MoneyPerClick
        document.getElementById("Level").innerHTML = UpgradeLevel
        document.getElementById("UpgradeCost").innerHTML = UpgradeCost
    }
}

//Rebirth function
function Rebirth() {
    if (Money >= RebirthCost) {
        UpgradeLevel = 0
        Money = 0
        UpgradeCost = 10
        MoneyPerClick = 1
        
        UpgradeMulti *= 2
        MoneyPerClick *= 2 ** (Rebirths + 1)
        Rebirths += 1
        RebirthCost *= 2

        document.getElementById("MoneyDisplay").innerHTML = Money
        document.getElementById("Level").innerHTML = UpgradeLevel
        document.getElementById("UpgradeCost").innerHTML = UpgradeCost
        document.getElementById("MoneyPerClickDisplay").innerHTML = MoneyPerClick

        document.getElementById("RebirthCost").innerHTML = RebirthCost
        document.getElementById("RebirthCount").innerHTML =  Rebirths
    }
}
