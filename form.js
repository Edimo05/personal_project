// const form = document.getElementById("form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent default form submission

//   let formData = new FormData(form);

//   console.log("Form Data:");
//   for (const [key, value] of formData.entries()) {
//     console.log(`${key}: ${value}`);
//   }
// });

function disableQuestion(a){
  if (a == "expenses") {
    const method = document.getElementById("pay_method");
    const sub_method = document.getElementById("pay_sub_method");
    const bank = document.getElementById("bank");

    method.addEventListener('change', () => {
      const selectedOption = method.value;

      if (selectedOption == "tarjeta"){
        sub_method.disabled = false;
        sub_method.required = true;
        bank.disabled = false;
      } else if (selectedOption == "efectivo") {
        sub_method.disabled = true;
        sub_method.required = false;
        bank.disabled = true;
      } else {
        sub_method.disabled = true;
        sub_method.required = false;
        bank.disabled = false;
      }
    });
  } else if (a == "income") {
    const method2 = document.getElementById("pay_method2");
    const bank2 = document.getElementById("bank2");
    //console.log(bank2);

    method2.addEventListener('change', () => {
      const selectedOption2 = method2.value;
      //console.log(selectedOption2);
      if (selectedOption2 == "transferencia" || selectedOption2 == "deposito"){
        bank2.disabled = false;
        bank2.required = true;
      } else {
        bank2.disabled = true;
        bank2.required = false;
      }
    });
  }
}

function revertStyle(id){
  id.style.color = "";
  id.style.backgroundColor = "";
}

function selectedTab(tab){
  tab.style.color = "black";
  tab.style.backgroundColor = "rgb(185, 191, 168)";
}

function displayQuestions(id_section){
  const questions = id_section.id + "_questions";
  //console.log(questions);
  const form = document.getElementById("form");
  let questionsReturn = ``;
  //console.log(questionsReturn);
  if (questions == "expenses_questions") {
    questionsReturn =  `<div class="questions" id="expenses_questions">
              <div class="questions-column">
                  <div class="question">
                      <label for="description">Description</label>
                      <input type="text" name="description" placeholder="Pago luz 5/24" required>
                  </div>
                  <div class="question">
                      <label for="select">Metodo</label>
                      <select name="pay_method" id="pay_method" required>
                          <option value="" selected>Select your option</option>
                          <option value="tarjeta">Tarjeta</option>
                          <option value="transferencia">Transferencia</option>
                          <option value="retiro">Retiro</option>
                          <option value="efectivo">Efectivo</option>
                      </select>
                  </div>
                  <div class="question">
                      <label for="select">Banco</label>
                      <select name="bank" id="bank">
                          <option value="" selected>Select your option</option>
                          <option value="bbva">BBVA</option>
                          <option value="scotia">Scotia</option>
                          <option value="ibk">IBK</option>
                          <option value="bcp">BCP</option>
                          <option value="pichincha">Pichincha</option>
                      </select>
                  </div>
              </div>
              <div class="questions-column">
                  <div class="question">
                      <label for="date">Date</label>
                      <input type="date" name="date" required>
                  </div>
                  <div class="question">
                      <label for="select">Tipo metodo</label>
                      <select name="pay_sub_method" id="pay_sub_method">
                          <option value="" selected>Select your option</option>
                          <option value="debito">Debito</option>
                          <option value="credito">Credito</option>
                      </select>
                  </div>
                  <div class="question">
                      <label for="amount">Amount</label>
                      <input type="number" required step=".01" name="amount" id="amount" placeholder="1,245.56">
                  </div>
              </div>
          </div>
          <button type="submit" id="saveBtn">SAVE</button>`;
  } else if (questions == "income_questions") {
    questionsReturn =  `<div class="questions" id="income_questions">
              <div class="questions-column">
                  <div class="question">
                      <label for="description">Description</label>
                      <input type="text" name="description" placeholder="Pago luz 5/24" required>
                  </div>
                  <div class="question">
                      <label for="select">Fuente</label>
                      <select name="source" id="source" required>
                          <option value="" selected>Select your option</option>
                          <option value="sueldo">Sueldo</option>
                          <option value="devolucion">Devolucion x gasto</option>
                          <option value="otros">Otros</option>
                      </select>
                  </div>
                  <div class="question">
                      <label for="select">Banco</label>
                      <select name="bank2" id="bank2">
                          <option value="" selected>Select your option</option>
                          <option value="bbva">BBVA</option>
                          <option value="scotia">Scotia</option>
                          <option value="ibk">IBK</option>
                          <option value="bcp">BCP</option>
                          <option value="pichincha">Pichincha</option>
                      </select>
                  </div>
              </div>
              <div class="questions-column">
                  <div class="question">
                      <label for="date">Date</label>
                      <input type="date" name="date" required>
                  </div>
                  <div class="question">
                      <label for="select">Metodo</label>
                      <select name="pay_method2" id="pay_method2" required>
                          <option value="" selected>Select your option</option>
                          <option value="plin">Plin</option>
                          <option value="transferencia">Transferencia</option>
                          <option value="deposito">Deposito</option>
                          <option value="efectivo">Efectivo</option>
                      </select>
                  </div>
                  <div class="question">
                      <label for="amount">Amount</label>
                      <input type="number" required step=".01" name="amount" id="amount" placeholder="1,245.56">
                  </div>
              </div>
          </div>
          <button type="submit" id="saveBtn">SAVE</button>`;
  } else {
    questionsReturn =  `<div class="questions" id="funds_movement_questions">
              <div class="questions-column">
                  <div class="question">
                      <label for="description">Description</label>
                      <input type="text" name="description" placeholder="Pago luz 5/24" required>
                  </div>
                  <div class="question">
                      <label for="select">Origen</label>
                      <select name="source" id="source" required>
                          <option value="" selected>Select your option</option>
                          <option value="bbva">BBVA</option>
                          <option value="scotia">Scotia</option>
                          <option value="ibk">IBK</option>
                          <option value="bcp">BCP</option>
                          <option value="pichincha">Pichincha</option>
                      </select>
                  </div>
                  <div class="question">
                      <label for="select">Moneda</label>
                      <select name="moneda" id="moneda" required>
                          <option value="" selected>Select your option</option>
                          <option value="soles">Soles</option>
                          <option value="dolare">Dolares</option>
                      </select>
                  </div>
              </div>
              <div class="questions-column">
                  <div class="question">
                      <label for="date">Date</label>
                      <input type="date" name="date" required>
                  </div>
                  <div class="question">
                      <label for="select">Destino</label>
                      <select name="destino" id="destino" required>
                          <option value="" selected>Select your option</option>
                          <option value="bbva">BBVA</option>
                          <option value="scotia">Scotia</option>
                          <option value="ibk">IBK</option>
                          <option value="bcp">BCP</option>
                          <option value="pichincha">Pichincha</option>
                      </select>
                  </div>
                  <div class="question">
                      <label for="amount">Amount</label>
                      <input type="number" required step=".01" name="amount" id="amount" placeholder="1,245.56">
                  </div>
              </div>
          </div>
          <button type="submit" id="saveBtn">SAVE</button>`;
  }
  //console.log(questionsReturn);
  return form.innerHTML = questionsReturn;
}

const headers = document.querySelectorAll(".header");
selectedTab(document.getElementById("expenses"));
displayQuestions(document.getElementById("expenses"));

for (let i = 0; i < headers.length; i++) {
  const tab2 = document.getElementById(headers[i].id);
  //disableQuestion(tab2.id);
  headers[i].addEventListener("click", () => {
    console.log(tab2);
    selectedTab(tab2);
    displayQuestions(tab2);
    for (let j = 0; j < headers.length; j++) {
      if (headers[j].id !== headers[i].id) {
        const tab3 = document.getElementById(headers[j].id);
        revertStyle(tab3);
      }
    }
  });
}