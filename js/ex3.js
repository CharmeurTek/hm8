document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let formData = new FormData();

    let countries = [
        {
          "name": "Spain",
          "year": 2014,
        },
        {
          "name": "Monaco",
          "year": 2016,
        },
        {
          "name": "England",
          "year": 2019,
        },
        {
          "name": "USA",
          "year": 2021,
        }
    ]
    formData.append('name', 'Hugo');
    formData.append('countries', countries);
    
    console.log(formData)

    fetch("https://thejsway-server.herokuapp.com/api/countries", {
      method: "POST",
      body: formData
    })
      .then(response => response.text())
      .then(result => {
        document.getElementById("result").textContent = result;
      })
      .catch(err => {
        console.error(err.message);
      });
  });