function age() {
  let d1 = document.getElementById("date").value;
  let m1 = document.getElementById("month").value;
  let y1 = document.getElementById("year").value;

  let date = new Date();
  let d2 = date.getDate();
  console.log(d2);
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  if (y > 30) {
    document.getElementById(
      "age"
    ).innerHTML = `Your Age is ${y} Years ${m} Months ${m} Days! <br> Жизнь боль &#128517;`;
  } else if (y < 0) {
    document.getElementById(
      "age"
    ).innerHTML = `Your Age is ${y} Years ${m} Months ${m} Days! <br>Ти впевнений?? &#128517;`;
  } else {
    document.getElementById(
      "age"
    ).innerHTML = `Your Age is ${y} Years ${m} Months ${m} Days! <br> Все ще попереду &#128516;`;
  }
}
