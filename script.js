let Money = 0
let MoneyPerClick = 1
let UpgradeLevel = 0
let UpgradeCost = 10
let LevelMulti = 1

let Rebirths = 0
let RebirthCost = 10000

if (localStorage) {

}
            
function Click() {
    Money += MoneyPerClick
    document.getElementById("MoneyDisplay").innerHTML = Money
    document.getElementById("MoneyPerClickDisplay").innerHTML = MoneyPerClick
}

function Upgrade() {
    if (Money >= UpgradeCost) {
        Money -= UpgradeCost
        UpgradeLevel += 1
        UpgradeCost *= 2 
        MoneyPerClick += UpgradeLevel

        document.getElementById("MoneyDisplay").innerHTML = Money
        document.getElementById("MoneyPerClickDisplay").innerHTML = MoneyPerClick
        document.getElementById("Level").innerHTML = UpgradeLevel
        document.getElementById("UpgradeCost").innerHTML = UpgradeCost
    }
}

function Rebirth() {
    if (Money >= RebirthCost) {
        UpgradeLevel = 0
        Money = 0
        UpgradeCost = 10
        
        MoneyPerClick *= 2
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
