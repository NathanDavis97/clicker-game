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
  let template = `<div class="card">
    <div class="card-body">
      <h4 class="card-title">Gold</h4>
      <p class="card-text">Total:
          ${gold}</p>
      <h4>Upgrades: </h4>
      Pickaxes : ${clickUpgrades.pickaxes.quantity} <p> +${clickUpgrades.pickaxes.quantity * clickUpgrades.pickaxes.multiplier} clicks</p>
      Minecart : ${clickUpgrades.mineCart.quantity} <p> +${clickUpgrades.mineCart.quantity * clickUpgrades.mineCart.multiplier} clicks</p>
      Miner : ${automaticUpgrades.miner.quantity} <p> +${automaticUpgrades.miner.quantity * automaticUpgrades.miner.multiplier} gold/5s</p>
     Drill : ${automaticUpgrades.drill.quantity}<p> +${automaticUpgrades.drill.quantity * automaticUpgrades.drill.multiplier} gold/5s</p>
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
  updateUpgrades()
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
  updateUpgrades()

}

function buyMiner() {
  if (gold >= automaticUpgrades["miner"].price) {
    gold = gold - automaticUpgrades.miner.price
    automaticUpgrades.miner.quantity++
    autoMultiplier += automaticUpgrades.miner.multiplier
    automaticUpgrades.miner.price += automaticUpgrades.miner.increase

    console.log(autoMultiplier)


  }
  update()
  updateValues()
  updateUpgrades()

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
  updateUpgrades()

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
  autoValue = automaticUpgrades.drill.quantity * automaticUpgrades.drill.multiplier + automaticUpgrades.miner.multiplier * automaticUpgrades.miner.quantity
  gold += autoValue
  console.log(autoValue)

  updateValues()
} collectAutoUpgrades()



function startInterval() {
  setInterval(collectAutoUpgrades, 5000);
  console.log('yes');
} startInterval()

function sendInterval() {
  setInterval(update, 5000);
} sendInterval()


function updateUpgrades() {
  let template = `<div class="card ">
  <div class="card-body">
    <h4 class="card-title">UPGRADES</h4>
    <div class="row justify-content-around">
      <div onclick="buyPickaxe()">
        <i class="fa fa-toolbox    "> Pickaxe<span> <p>${clickUpgrades.pickaxes.price}</p></span>
          <p> +1 click</p>
        </i>
      </div>
      <div onclick="buyMinecart()">
        <i class="fa fa-cart-plus" aria-hidden="true">Minecart <span><p>${clickUpgrades.mineCart.price}</p></span>
          <p>+5 click</p>
        </i>
      </div>
      <div onclick="buyMiner()">
        <i class="fa fa-address-book" aria-hidden="true"> Miner <span><p>${automaticUpgrades.miner.price}</p></span>
          <p>+3 gold/5s</p>
        </i>
      </div>
      <div onclick="buyDrill()">
        <i class="fas fa-screwdriver    "> Drill <span><p>${automaticUpgrades.drill.price}</p></span>
          <p>+20 gold/5s</p>
        </i>
      </div>
    </div>
  </div>
</div>`
  document.getElementById("upgrades").innerHTML = template
} updateUpgrades()
