
var username = "";
document.getElementById("submit").addEventListener("click", function() {
  username = document.getElementById("text").value;
  getUserGithub(username);
});

function getUserGithub(username) {
  fetch(
    "https://api.github.com/users/" + username
  )
    .then((response) => response.json())
    .then((user) => {
      console.log(user)
      const elements = document.getElementById("information");

      var image = document.createElement('img');
      image.src = user.avatar_url;
      elements.appendChild(image);

      var table = document.createElement('table');
      var firstrow = document.createElement('tr');
      var nameheader = document.createElement('td');
      nameheader.appendChild(document.createTextNode("Name"));
      firstrow.appendChild(nameheader);
      var name = document.createElement('td');
      name.appendChild(document.createTextNode(user.name));
      firstrow.appendChild(name);
      table.appendChild(firstrow);
      elements.appendChild(table);

      var secondrow = document.createElement('tr');
      var blogheader = document.createElement('td');
      blogheader.appendChild(document.createTextNode("Blog"));
      secondrow.appendChild(blogheader);
      var blog = document.createElement('td');
      blog.appendChild(document.createTextNode(user.blog));
      secondrow.appendChild(blog);
      table.appendChild(secondrow);
      elements.appendChild(table);

      var thirdrow = document.createElement('tr');
      var createheader = document.createElement('td');
      createheader.appendChild(document.createTextNode("Created"));
      thirdrow.appendChild(createheader);
      var created = document.createElement('td');
      created.appendChild(document.createTextNode(user.created_at));
      thirdrow.appendChild(created);
      table.appendChild(thirdrow);
      elements.appendChild(table);

    })
    .catch((err) => {
      console.error("Error message is: ", err.message);
    });
}
