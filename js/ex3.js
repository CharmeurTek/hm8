let countries = [
  {
    name: "Spain",
    year: 2014,
  },
  {
    name: "Monaco",
    year: 2016,
  },
  {
    name: "England",
    year: 2019,
  },
  {
    name: "USA",
    year: 2021,
  },
];

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Hugo", countries: countries }),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err.message);
  });
