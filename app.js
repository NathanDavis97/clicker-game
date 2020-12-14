let gold = 0;
let clickMultiplier = 1;
let autoMultiplier = 0;
let autoValue = 0
var collectionInterval;

let clickUpgrades = {
  pickaxes: {
    price: 10,
    quantity: 0,
    multiplier: 1,
    increase: 3
  }, mineCart: {
    price: 100,
    quantity: 0,
    multiplier: 5,
    increase: 25
  }
};
let automaticUpgrades = {
  miner: {
    price: 60,
    quantity: 0,
    multiplier: 3,
    increase: 10
  }, drill: {
    price: 600,
    quantity: 0,
    multiplier: 20,
    increase: 75
  }
};

function mine() {
  gold += (1 * clickMultiplier)
  console.log(gold)
  update()
}



function update() {
  let template = ` <div class="card">
      <div class="card-body">
        <h4 class="card-title">Gold</h4>
        <p class="card-text">Total:
          ${gold}</p>
        <h4>Upgrades: </h4>
        <i class=" fas fa-cut ">${clickUpgrades.pickaxes.quantity}</i>
        <i class="fa fa-cart-plus" aria-hidden="true">${clickUpgrades.mineCart.quantity}</i>
        <i class="fa fa-address-book" aria-hidden="true">${automaticUpgrades.miner.quantity}</i>
        <i class="fa fa-phone" aria-hidden="true">${automaticUpgrades.drill.quantity}</i>
      </div>`
  document.getElementById("total").innerHTML = template
  console.log('testingUpdatefix');

}
update()


function buyPickaxe() {
  if (gold >= clickUpgrades.pickaxes.price) {
    gold = gold - clickUpgrades.pickaxes.price
    clickUpgrades.pickaxes.quantity++
    clickMultiplier += clickUpgrades.pickaxes.multiplier
    clickUpgrades.pickaxes.price += clickUpgrades.pickaxes.increase
    console.log(clickMultiplier)
    console.log(clickUpgrades.pickaxes.price)

  }

  update()
  updateValues()
}

function buyMinecart() {
  if (gold >= clickUpgrades.mineCart.price) {
    gold = gold - clickUpgrades.mineCart.price
    clickUpgrades.mineCart.quantity++
    clickMultiplier += clickUpgrades.mineCart.multiplier
    clickUpgrades.mineCart.price += clickUpgrades.mineCart.increase

    console.log(clickMultiplier)

  }
  update()
  updateValues()
}

function buyMiner() {
  if (gold >= automaticUpgrades.miner.price) {
    gold = gold - automaticUpgrades.miner.price
    automaticUpgrades.miner.quantity++
    autoMultiplier += automaticUpgrades.miner.multiplier
    automaticUpgrades.miner.price += automaticUpgrades.miner.increase

    console.log(autoMultiplier)


  }
  update()
  updateValues()
}

function buyDrill() {
  if (gold >= automaticUpgrades.drill.price) {
    gold = gold - automaticUpgrades.drill.price
    automaticUpgrades.drill.quantity++
    autoMultiplier += automaticUpgrades.drill.multiplier
    automaticUpgrades.drill.price += automaticUpgrades.drill.increase

    console.log(autoMultiplier)

  }
  update()
  updateValues()
}


function updateValues() {
  let template = `<h4 class="card-title">Values</h4>
            <p class="card-text">Click Multiplier: ${clickMultiplier} </p>
            <p class="card-text">Passive: ${autoMultiplier} Gold per 5 seconds </p>`
  document.getElementById("values").innerHTML = template
}
updateValues()



function collectAutoUpgrades() {
  let totalMultiplier = autoMultiplier
  let totalQuantity = automaticUpgrades.drill.quantity + automaticUpgrades.miner.quantity
  autoValue = totalMultiplier * totalQuantity
  gold += autoValue
  console.log('autoUpgradeRunning')

  updateValues()
} collectAutoUpgrades()



function startInterval() {
  setInterval(collectAutoUpgrades, 5000);
  console.log('yes');
} startInterval()

function sendInterval() {
  setInterval(update, 5000);
} sendInterval()


function AutoCOllection() {
  for (let index = 0; index < automaticUpgrades.length; index++) {
    const element = automaticUpgrades[index];
    console.log(element);
  }
}