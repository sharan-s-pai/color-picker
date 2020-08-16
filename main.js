class color {
  constructor(outer1, outer2, outer3, midA, midB, midC, inner) {
    (this.outer1 = outer1),
      (this.outer2 = outer2),
      (this.outer3 = outer3),
      (this.midA = midA),
      (this.midB = midB),
      (this.midC = midC),
      (this.inner = inner);
  }
  clear() {
    document.querySelector("#score-board").innerHTML = "";
    document.querySelector("#color-picker").innerText = "";
    i = 3;
    count = 0;
    document.querySelector("#score-board").className = "";
  }
  toScreen(colorSelected) {
    this.outer1.style.backgroundColor = `rgb(${colorSelected.colorRed},0,0)`;
    this.outer2.style.backgroundColor = `rgb(0,${colorSelected.colorGreen},0)`;
    this.outer3.style.backgroundColor = `rgb(0,0,${colorSelected.colorBlue})`;
    this.midA.style.backgroundColor = `rgb(${colorSelected.colorRed},${colorSelected.colorGreen},0)`;
    this.midB.style.backgroundColor = `rgb(0,${colorSelected.colorGreen},${colorSelected.colorBlue})`;
    this.midC.style.backgroundColor = `rgb(${colorSelected.colorRed},0,${colorSelected.colorBlue})`;
    this.inner.style.backgroundColor = `rgb(${colorSelected.colorRed},${colorSelected.colorGreen},${colorSelected.colorBlue})`;
    this.outer1.style.opacity = "25%";
    this.outer2.style.opacity = "25%";
    this.outer3.style.opacity = "25%";
    this.midA.style.opacity = "25%";
    this.midB.style.opacity = "25%";
    this.midC.style.opacity = "25%";
    this.inner.style.opacity = "100%";
    this.colorSelected = colorSelected;
    document.querySelector("#start").disabled = true;
    document.querySelector("#stop").disabled = false;
    document.querySelector("#submit").disabled = false;
    document.querySelector("#next").disabled = true;
    document.querySelector("#color-picker").disabled = false;
  }
  result(text, callback) {
    if (text === this.colorSelected.colorName) {
      callback("Correct", "success", 2000);
      document.querySelector("#submit").disabled = true;
      document.querySelector("#color-picker").disabled = true;
      document.querySelector("#next").disabled = false;
      count++;
      if (count !== 1) {
        let div = document.querySelector("#score-board");
        div.innerHTML = `<b>You have answered ${count} colors correctly</b>`;
        div.className = "alert-primary p-4 text-center";
      } else {
        let div = document.querySelector("#score-board");
        div.innerHTML = `<b>You have answered ${count} color correctly</b>`;
        div.className = "alert-primary p-4 text-center";
      }
    }
    if (text !== this.colorSelected.colorName) {
      if (i > 0) {
        i--;
        trial.innerHTML = `trial left: ${i}`;
        callback(`Incorrect ( ${i} trials left )`, "secondary", 2000);
      }
      if (i === 0) {
        this.Stop(this.alertMsg);
      }
    }
  }
  Stop(callback) {
    callback("GAME OVER", "danger", 2000);
    document.querySelector("#start").disabled = false;
    document.querySelector("#stop").disabled = true;
    document.querySelector("#submit").disabled = true;
    document.querySelector("#next").disabled = true;
    document.querySelector("#color-picker").disabled = true;
    this.outer1.style.opacity = "0%";
    this.outer2.style.opacity = "0%";
    this.outer3.style.opacity = "0%";
    this.midA.style.opacity = "0%";
    this.midB.style.opacity = "0%";
    this.midC.style.opacity = "0%";
    this.inner.style.opacity = "00%";
    this.colorSelected = undefined;
    if (count !== 0 && count !== 1) {
      let div = document.querySelector("#score-board");
      div.innerHTML = `<b>CONGRATULATIONS</b><br/><hr><b>You have answered ${count} colors correctly</b>`;
      div.className = "alert-primary p-4 text-center";
    } else if (count === 1) {
      let div = document.querySelector("#score-board");
      div.innerHTML = `<b>CONGRATULATIONS</b><br/><hr><b>You have answered ${count} color correctly</b>`;
      div.className = "alert-primary p-4 text-center";
    } else {
      let div = document.querySelector("#score-board");
      div.innerHTML = `<b>TRY AGAIN</b><br/><hr><b>You have answered ${count} colors correctly</b>`;
      div.className = "alert-secondary p-4 text-center";
    }
  }
  alertMsg(message, color, timeout) {
    let div = document.getElementById("message");
    div.innerHTML = `<b>${message}</b>`;
    div.className = `alert text-center alert-${color}`;
    setTimeout(() => {
      div.innerHTML = "";
      div.className = "";
      document.querySelector("#color-picker").value = "";
    }, timeout);
  }
}

let outer1 = document.getElementById("outer-1");
let outer2 = document.getElementById("outer-2");
let outer3 = document.getElementById("outer-3");
let midA = document.getElementById("mid-a");
let midB = document.getElementById("mid-b");
let midC = document.getElementById("mid-c");
let inner = document.querySelector(".inner");
let trial = document.getElementById("trial-count");

let colors = [
  {
    colorName: "coral",
    colorRed: "255",
    colorGreen: "127",
    colorBlue: "80",
  },
  {
    colorName: "orange",
    colorRed: "255",
    colorGreen: "165",
    colorBlue: "00",
  },
  {
    colorName: "salmon",
    colorRed: "250",
    colorGreen: "138",
    colorBlue: "114",
  },
  {
    colorName: "light blue",
    colorRed: "173",
    colorGreen: "216",
    colorBlue: "230",
  },
  {
    colorName: "light green",
    colorRed: "33",
    colorGreen: "221",
    colorBlue: "33",
  },
  {
    colorName: "pink",
    colorRed: "255",
    colorGreen: "192",
    colorBlue: "203",
  },
  {
    colorName: "gold",
    colorRed: "255",
    colorGreen: "215",
    colorBlue: "0",
  },
  {
    colorName: "peach",
    colorRed: "255",
    colorGreen: "218",
    colorBlue: "185",
  },
  {
    colorName: "lavender",
    colorRed: "230",
    colorGreen: "230",
    colorBlue: "250",
  },
  {
    colorName: "violet",
    colorRed: "148",
    colorGreen: "0",
    colorBlue: "211",
  },
  {
    colorName: "green",
    colorRed: "0",
    colorGreen: "255",
    colorBlue: "0",
  },
  {
    colorName: "red",
    colorRed: "255",
    colorGreen: "0",
    colorBlue: "0",
  },
  {
    colorName: "blue",
    colorRed: "0",
    colorGreen: "0",
    colorBlue: "255",
  },
  {
    colorName: "navy",
    colorRed: "0",
    colorGreen: "0",
    colorBlue: "128",
  },
  {
    colorName: "silver",
    colorRed: "192",
    colorGreen: "192",
    colorBlue: "192",
  },
  {
    colorName: "gray",
    colorRed: "128",
    colorGreen: "128",
    colorBlue: "128",
  },
  {
    colorName: "black",
    colorRed: "0",
    colorGreen: "0",
    colorBlue: "0",
  },
  {
    colorName: "white",
    colorRed: "255",
    colorGreen: "255",
    colorBlue: "255",
  },
  {
    colorName: "brown",
    colorRed: "88",
    colorGreen: "35",
    colorBlue: "13",
  },
];
let msg = document.getElementById("message");
let colorPicker = new color(outer1, outer2, outer3, midA, midB, midC, inner);
let i = 3;
let count = 0;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#stop").disabled = true;
  document.querySelector("#next").disabled = true;
  document.querySelector("#submit").disabled = true;
  document.querySelector("#color-picker").disabled = true;
});

let randomSelection = () => {
  let index = Math.floor(Math.random() * colors.length);
  //console.log(colors[index]);
  return colors[index];
};
document.querySelector("#start").addEventListener("click", (e) => {
  e.preventDefault();
  colorPicker.clear();
  trial.innerHTML = `trial left: ${i}`;
  colorPicker.toScreen(randomSelection());
});
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let text = document.getElementById("color-picker").value;
  if (text !== "" && colorPicker.colorSelected !== undefined) {
    //console.log(text);
    colorPicker.result(text.toLowerCase(), colorPicker.alertMsg);
  }
});

document.querySelector("#next").addEventListener("click", (e) => {
  e.preventDefault();

  colorPicker.toScreen(randomSelection());
});

document.querySelector("#stop").addEventListener("click", (e) => {
  e.preventDefault();
  colorPicker.Stop(colorPicker.alertMsg);
});
