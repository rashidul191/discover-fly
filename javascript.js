function ticketInputHandle(ticket, increse) {
  // const firstClassInput = document.getElementById(ticket + '-current-input');
  const firstClassInput = document.querySelector("#" + ticket + "-current-input");

  const firstClassInputNumber = parseInt(firstClassInput.value);
  let number = firstClassInputNumber;
  if (increse == true) {
    number = firstClassInputNumber + 1;
  }
  if (increse == false && firstClassInputNumber > 0) {
    number = firstClassInputNumber - 1;
  }

  firstClassInput.value = number;
  let inputTicket = 0;
  if (ticket == "first-class") {
    inputTicket = number * 150;
  }

  if (ticket == "economy-ticket") {
    inputTicket = number * 100;
  }
  calculat();
}

function calculat() {
  const firstClassInput = document.getElementById("first-class-current-input");
  const firstClassInputNumber = parseInt(firstClassInput.value);

  const economyInput = document.getElementById("economy-ticket-current-input");
  const economyInputNumber = parseInt(economyInput.value);

  const subTotal = firstClassInputNumber * 150 + economyInputNumber * 100;
  document.getElementById("subTotal").innerText = subTotal;

  chargeVAT();
}

function chargeVAT() {
  const chargeVAT = document.getElementById("subTotal");
  const chargeVATNumber = parseInt(chargeVAT.innerText);
  const totalChargeVAT = (chargeVATNumber * 10) / 100;
  document.getElementById("chargeVAT").innerText = totalChargeVAT;

  total();
}

function total(){
  const subTotal = document.getElementById("subTotal");
  const subTotalNumber = parseInt(subTotal.innerText);

  const chargeVAT = document.getElementById("chargeVAT");
  const chargeVATNumber = parseInt(chargeVAT.innerText);

  const total = subTotalNumber + chargeVATNumber;
  document.getElementById("total").innerText = total;

}

function bookNow(){
  document.querySelector("#body-section").style.display = "none";
  document.querySelector("#booking-section").style.display = "block";

  var firstClassCurrentInput =document.querySelector("#first-class-current-input");

  var firstClassCurrentInputNumber = parseInt(firstClassCurrentInput.value);
  document.querySelector("#first-class-ticket-count").innerText = firstClassCurrentInputNumber;
  var firstClassTicketPrict = firstClassCurrentInputNumber * 150;
  document.querySelector("#first-class-ticket-price"). innerText =  firstClassTicketPrict;

  var economyCurrentInput = document.querySelector("#economy-ticket-current-input");

  var economyCurrentInputNumber = parseInt(economyCurrentInput.value)
  document.querySelector("#economy-ticket-count").innerText = economyCurrentInputNumber;
  var economyTicketTotlaPrice = economyCurrentInputNumber * 100;

  document.querySelector("#economy-ticket-price").innerText = economyTicketTotlaPrice;
 
  var subTotal = document.querySelector("#subTotal")
  var subTotalNumber = parseFloat(subTotal.innerText)

  document.querySelector("#subTotalDetails").innerText = subTotalNumber;

  var chargeVAT = document.querySelector("#chargeVAT")
  var chargeVATNumber = parseFloat(chargeVAT.innerText)
  document.querySelector("#chargeVATDetails").innerText =chargeVATNumber

  var total = document.querySelector("#total")
  var totalNumber = parseFloat(total.innerText)

  document.querySelector("#totalDetails").innerText =totalNumber
 
}



