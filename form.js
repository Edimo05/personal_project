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

function displayQuestions(id_section, a){
  const questions = id_section.id + "_questions";
  //console.log(questions);
  if (a == true) {
    document.getElementById(questions).style.display = "block";
    document.getElementById(questions).style.display = "flex";
  } else {
    document.getElementById(questions).style.display = "none";
  }
}

const headers = document.querySelectorAll(".header");
selectedTab(document.getElementById("expenses"));

for (let i = 0; i < headers.length; i++) {
  const tab2 = document.getElementById(headers[i].id);
  disableQuestion(tab2.id);
  headers[i].addEventListener("click", () => {
    //console.log(tab2);
    selectedTab(tab2);
    displayQuestions(tab2, true);
    for (let j = 0; j < headers.length; j++) {
      if (headers[j].id !== headers[i].id) {
        const tab3 = document.getElementById(headers[j].id);
        revertStyle(tab3);
        displayQuestions(tab3, false);
      }

      const form = document.getElementById("form");

      form.addEventListener("submit", (event) => {
        //console.log(tab3.id);
        event.preventDefault(); // Prevent default form submission

        let formData = new FormData(form);

        console.log("Form Data:");
        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      });
    }
  });
}