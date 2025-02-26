function printpdf() {
    var content = document.getElementById("resume");

    const allButtons = document.querySelectorAll("#print button");
    allButtons.forEach((button) => {
      button.classList.add("none");
    });
    let allInputCheckboxes = document.querySelectorAll(".input-checkbox");
    allInputCheckboxes.forEach((input) => {
      input.classList.add("none");
    });

    allButtons.forEach((button) => {
      button.classList.remove("none");
    });
    allInputCheckboxes.forEach((input) => {
      input.classList.remove("none");
    });

    const pdfOptions = {
      margin: [10, 10, 10, 10],  
      filename: "converted_document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1.5, logging: true, dpi: 500 },  
      jsPDF: { 
        unit: "mm", 
        format: "a4", 
        orientation: "portrait",
        pageHeight: 297, 
        pageWidth: 210,
        autoPaging: false 
      },
    };

    html2pdf(
      content,
      {
        html2canvas: { scale: 1.5, logging: true, dpi: 500 }, 
      },
      pdfOptions
    );
}

function addedu() {
  const head = document.createElement("div");
  document.getElementById("education").appendChild(head);
  head.innerHTML =
    '<div class="edublock"><span><input type="checkbox" class="input-checkbox"></span><span class="education-head" contenteditable="true">YOUR DEGREE</span><div ><span contenteditable="true">Institute name</span> - <span contenteditable="true">Passing Year</span></div></div>';
  saveresume();
}
function remedu(event) {
  let val = 0;
  let empty = true;
  const allInputCheckboxes =
    event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
    alert("No fields are present to be deleted!");
  } else {
    console.log(array);
    array.forEach((element) => {
      if (element.checked === true) {
        val = 1;
        element.parentElement.parentElement.remove();
      }
    });
    if (val === 0)
      alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

function addskill() {
  const head = document.createElement("div");
  document.getElementById("skills").appendChild(head);
  head.innerHTML =
    '<div class="skill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>&nbsp&nbsp&nbsp<span contenteditable="true">write your skill here</span></div>';
  saveresume();
}

function remskill(event) {
  let val = 0;
  const allInputCheckboxes =
    event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
    alert("No fields are present to be deleted!");
  } else {
    console.log(array);
    array.forEach((element) => {
      if (element.checked === true) {
        val = 1;
        element.parentElement.parentElement.remove();
      }
    });
    if (val === 0)
      alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

function addLang() {
  const head = document.createElement("div");
  document.getElementById("languages").appendChild(head);
  head.innerHTML =
    '<div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">LANGNAME</span>&nbsp-&nbsp<span contenteditable="true">level u know</span></div>';
  saveresume();
}
function remLang(event) {
  let val = 0;
  const allInputCheckboxes =
    event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
    alert("No fields are present to be deleted!");
  } else {
    console.log(array);
    array.forEach((element) => {
      if (element.checked === true) {
        val = 1;
        element.parentElement.parentElement.remove();
      }
    });
    if (val === 0)
      alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

function addAch() {
  const head = document.createElement("div");
  document.getElementById("achievement").appendChild(head);
  head.innerHTML =
    '<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write your achievement</span></div>';
  saveresume();
}
function remAch(event) {
  let val = 0;
  const allInputCheckboxes =
    event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
    alert("No fields are present to be deleted!");
  } else {
    console.log(array);
    array.forEach((element) => {
      if (element.checked === true) {
        val = 1;
        element.parentElement.parentElement.remove();
      }
    });
    if (val === 0)
      alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

function addInt() {
  const head = document.createElement("div");
  document.getElementById("interest").appendChild(head);
  head.innerHTML =
    '<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Write interest</span></div>';
  saveresume();
}
function remInt(event) {
  let val = 0;
  const allInputCheckboxes =
    event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
    alert("No fields are present to be deleted!");
  } else {
    array.forEach((element) => {
      if (element.checked === true) {
        val = 1;
        element.parentElement.parentElement.remove();
      }
    });
    if (val === 0)
      alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

let maxNewSection = 1;
function addsec() {
  if (maxNewSection < 2) {
    const head = document.createElement("div");
    document.getElementById("newsec").appendChild(head);
    if (maxNewSection === 0) {
      head.innerHTML =
        '<div><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>';
    } else {
      head.innerHTML =
        '<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NEW SECTION</span><br><br><div contenteditable="true">This is the description part of your new section. Try to stay within limit and write something which has less than 400 characters. The spaces and symbols you use will also be included so use them for an indentation effect.</div></div>';
    }

    maxNewSection = maxNewSection + 1;
  } else {
    alert("Atmost 2 NEW SECTION can be added!");
  }
  saveresume();
}
function remsec(event) {
  let val = 0;
  const allInputCheckboxes =
    event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
    alert("No fields are present to be deleted!");
  } else {
    console.log(array);
    array.forEach((element) => {
      if (element.checked === true) {
        val = 1;
        maxNewSection = maxNewSection - 1;
        element.parentElement.parentElement.remove();
      }
    });
    if (val === 0)
      alert("Please select the checkboxes to delete the required field!");
  }
  saveresume();
}

function saveresume() {
  var sec = document.getElementById("print");
  value1 = sec.innerHTML;
  var info = document.getElementById("custinfo");
  info.value = value1;
}

console.log(
  "%c🔥 Welcome to the project! Created by: Abdul Hadi Shah 🔥",
  "font-size: 24px; color: #FF9800; font-weight: bold; background-color: #333; padding: 15px 30px; border-radius: 10px; text-transform: uppercase; font-family: 'Courier New', Courier, monospace; box-shadow: 0 0 20px rgba(255, 152, 0, 0.8); animation: glow 1.5s infinite alternate;"
);
console.log(
  "%c🚀 This is a resume builder, built with love and passion. Enjoy!",
  "font-size: 20px; color: #2196F3; background-color: #222; padding: 12px 24px; border-radius: 8px; font-family: 'Comic Sans MS', cursive, sans-serif; animation: slide 2s ease-in-out infinite;"
);
console.log(
  "%c💡 Big shoutout to the ones who make the web a better place. You know who you are! 💡",
  "font-size: 18px; color: #76FF03; font-weight: lighter; background-color: #222; padding: 10px 20px; border-radius: 8px; font-family: 'Roboto', sans-serif; animation: pulse 2s infinite ease-in-out;"
);
console.log(
  "%c✨ Visit with curiosity, or prepare to be amazed! ✨",
  "font-size: 16px; color: #FF4081; font-style: italic; background-color: #111; padding: 8px 16px; border-radius: 8px; font-family: 'Arial', sans-serif; animation: shake 0.5s infinite;"
);
