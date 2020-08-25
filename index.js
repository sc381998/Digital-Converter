const convert = () => {
  let bit = document.getElementById("input1").value;
  bit = parseFloat(bit);
  let result = +(bit / 8).toFixed(3);
  //console.log(result);
  let byte = document.getElementById("input2");
  byte.value = result;
};

const convertMultiple = () => {
  let input = document.getElementById("input1").value;
  input = parseFloat(input);
  let type1 = document.getElementById("type1").value;
  let type2 = document.getElementById("type2").value;
  if (isNaN(input)) {
    alert("Enter the valid number you IDIOT");
    let inp1 = document.getElementById("input1");
    inp1.value = "";
  } else {
    let result = input;
    if (type1 === "Bit") {
      if (type2 === "Byte") result = +(input * 0.125);
      else if (type2 === "KiloByte") result = +(input * 0.000125);
      else if (type2 === "MegaByte") result = +(input * 0.000000125);
      else if (type2 === "GigaByte") result = +(input * 0.000000000125);
      else if (type2 === "TeraByte") result = +(input * 0.000000000000125);
    }
    if (type1 === "Byte") {
      if (type2 === "Bit") result = +(input * 8);
      else if (type2 === "KiloByte") result = +(input * 0.001);
      else if (type2 === "MegaByte") result = +(input * 0.000001);
      else if (type2 === "GigaByte") result = +(input * 0.000000001);
      else if (type2 === "TeraByte") result = +(input * 0.000000000001);
    }
    if (type1 === "KiloByte") {
      if (type2 === "Bit") result = +(input * 8000);
      else if (type2 === "Byte") result = +(input * 1000);
      else if (type2 === "MegaByte") result = +(input * 0.001);
      else if (type2 === "GigaByte") result = +(input * 0.000001);
      else if (type2 === "TeraByte") result = +(input * 0.000000001);
    }
    if (type1 === "MegaByte") {
      if (type2 === "Bit") result = +(input * 8000000);
      else if (type2 === "Byte") result = +(input * 1000000);
      else if (type2 === "KiloByte") result = +(input * 1000);
      else if (type2 === "GigaByte") result = +(input * 0.001);
      else if (type2 === "TeraByte") result = +(input * 0.000001);
    }
    if (type1 === "GigaByte") {
      if (type2 === "Bit") result = +(input * 8000000000);
      else if (type2 === "Byte") result = +(input * 1000000000);
      else if (type2 === "KiloByte") result = +(input * 100000);
      else if (type2 === "MegaByte") result = +(input * 1000);
      else if (type2 === "TeraByte") result = +(input * 0.001);
    }
    if (type1 === "TeraByte") {
      if (type2 === "Bit") result = +(input * 8000000000000);
      else if (type2 === "Byte") result = +(input * 1000000000000);
      else if (type2 === "KiloByte") result = +(input * 1000000000);
      else if (type2 === "MegaByte") result = +(input * 1000000);
      else if (type2 === "GigaByte") result = +(input * 1000);
    }
    let input2 = document.getElementById("input2");
    input2.value = result;
  }
};

const emptyInput = () => {
  let inp1 = document.getElementById("input1");
  inp1.value = "";
  let inp2 = document.getElementById("input2");
  inp2.value = "";
};
