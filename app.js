let gold = 0;
let clickMultiplier = 1;
let autoMultiplier = 0;


let clickUpgrades = {
  pickaxes: {
    price: 10,
    quantity: 0,
    multiplier: 1
  }, mineCart: {
    price: 100,
    quantity: 0,
    multiplier: 1
  }
};
let automaticUpgrades = {
  miner: {
    price: 60,
    quantity: 0,
    multiplier: 20
  }, drill: {
    price: 600,
    quantity: 0,
    multiplier: 20
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
          </div>`
  document.getElementById("total").innerHTML = template
}
update()

function buyPickaxe() {
  if (gold >= 10) gold = gold - 10
  clickUpgrades.pickaxes.quantity++
  clickMultiplier += clickUpgrades.pickaxes.multiplier
  console.log(clickMultiplier)
  console.log('purchased')
  update()
  updateValues()
}

function updateValues() {
  let template = `<h4 class="card-title">Values</h4>
            <p class="card-text">Click Multiplier: ${clickMultiplier} </p>
            <p class="card-text">Passive: persecond </p>`
  document.getElementById("values").innerHTML = template
}
updateValues()