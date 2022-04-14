document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;
  const payment = document.querySelector('input[name="payment"]:checked').value;
  const promotions = document.getElementById("promotion").value;
  const location = document.getElementById("location").value;
  console.log(name);
  console.log(mail);
  console.log(payment);
  console.log(promotions);
  console.log(location);
  const elements = document.getElementById("result");
  var title = document.createElement('h3');
  title.appendChild(document.createTextNode("Form Data Entered"));
  elements.appendChild(title);

  var table = document.createElement('table');

  var row1 = document.createElement('tr');
  var th1 = document.createElement('th');
  var th2 = document.createElement('th');
  th1.appendChild(document.createTextNode("Key"));
  th2.appendChild(document.createTextNode("Value"));
  row1.appendChild(th1);
  row1.appendChild(th2);

  var row2 = document.createElement('tr');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  td3.appendChild(document.createTextNode("name"));
  td4.appendChild(document.createTextNode(name));
  row2.appendChild(td3);
  row2.appendChild(td4);

  var row3 = document.createElement('tr');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  td5.appendChild(document.createTextNode("email"));
  td6.appendChild(document.createTextNode(mail));
  row3.appendChild(td5);
  row3.appendChild(td6);

  var row4 = document.createElement('tr');
  var td7 = document.createElement('td');
  var td8 = document.createElement('td');
  td7.appendChild(document.createTextNode("payment"));
  td8.appendChild(document.createTextNode(payment));
  row4.appendChild(td7);
  row4.appendChild(td8);

  var row5 = document.createElement('tr');
  var td9 = document.createElement('td');
  var td10 = document.createElement('td');
  td9.appendChild(document.createTextNode("promotion"));
  td10.appendChild(document.createTextNode(promotions));
  row5.appendChild(td9);
  row5.appendChild(td10);

  var row6 = document.createElement('tr');
  var td11 = document.createElement('td');
  var td12 = document.createElement('td');
  td11.appendChild(document.createTextNode("location"));
  td12.appendChild(document.createTextNode(location));
  row6.appendChild(td11);
  row6.appendChild(td12);

  table.appendChild(row1);
  table.appendChild(row2);
  table.appendChild(row3);
  table.appendChild(row4);
  table.appendChild(row5);
  table.appendChild(row6);
  
  elements.appendChild(table);
});