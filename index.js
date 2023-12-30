const url = "https://s3.amazonaws.com/open-to-cors/assignment.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    var array = Object.values(products);
    var prod = Object.values(array[1]);
    var sortedProd = prod.sort(function (x, y) {
      return y.popularity - x.popularity;
    });

    // for (var i = 0; i < prod.length; i++) console.log(prod[i]);
    createTable(sortedProd);
  })

  .catch(function (err) {
    console.log(err);
  });

function createTable(data) {
  for (var i = 0; i < data.length; i++) {
    var row = `
        <tr>
            <td>${data[i].subcategory}</td>
            <td>${data[i].title}</td>
            <td>${data[i].price}</td>
            <td>${data[i].popularity}</td>
        </tr>
        `;
    document.getElementById("table-content").innerHTML += row;
  }
}
