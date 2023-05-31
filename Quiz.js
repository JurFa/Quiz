function clicktext() {                                   // <--- "Text" buttons.
  let t = document.getElementById("text");
  if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";
  }
}

function clicktext1() {
  let e = document.getElementById("text1");
  if (e.style.display === "none") {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
}

function clicktext2() {
  let x = document.getElementById("text2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const form = document.getElementById("quiz");        

form.addEventListener("submit", (event) => {                               // <--- "Answer" button. With different text.
  event.preventDefault(); 
  let selOpt = document.querySelector('input[name="answer"]:checked').value;
  let output = document.querySelector(".result");
  let output1 = document.querySelector(".result1");
  let output2 = document.querySelector(".result2");

  if (selOpt == "script") {
    output.textContent = "Yes, that's right :)";
  }
  if (selOpt == "scripting") {
    output.textContent = "Almost, but no.";
  }
  if (selOpt == "js") {
    output.textContent = "Nope :I";
  }
  if (selOpt == "javascript") {
    output.textContent = "Incorrect.";
  }

  if (selOpt == "style") {
    output1.textContent = "Correct!";
  }
  if (selOpt == "styles") {
    output1.textContent = "Wrong.";
  }
  if (selOpt == "class") {
    output1.textContent = "False.";
  }
  if (selOpt == "font") {
    output1.textContent = "No, try again.";
  }

  if (selOpt == "title") {
    output2.textContent = "Right answer!";
  }
  if (selOpt == "head") {
    output2.textContent = "No :/";
  }
  if (selOpt == "meta") {
    output2.textContent = "Fail.";
  }
});
