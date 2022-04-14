function getPaints() {
  fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
  )
    .then((response) => response.json())
    .then((paints) => {
      const table = document.getElementById("paintings");
      for(const paint of paints) {
        var row = document.createElement('tr');
        var name = document.createElement('td');
        var year = document.createElement('td');
        var artist = document.createElement('td');
        name.appendChild(document.createTextNode(paint.name));
        year.appendChild(document.createTextNode(paint.year));
        artist.appendChild(document.createTextNode(paint.artist));
        row.appendChild(name);
        row.appendChild(year);
        row.appendChild(artist);
        table.appendChild(row);
      }
    })
    .catch((err) => {
      console.error("Error message is: ", err.message);
    });
}

getPaints();
