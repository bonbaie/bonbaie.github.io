fetch("https://sheets.googleapis.com/v4/spreadsheets/1vvNBYDw8iaPidm7Z4-UtGLY8-Y2Yf5hzu2v5v7m1vHA/values/sheet1!A1:C6?key=AIzaSyDGu3-jXAEgxc9ywdeeFWXw9e8QGE3uk2c").then(
    response => {
      return response.json();
    }
).then(
    json => {
      let html = "<ul>";
      console.log(json);

      json.values.forEach( row => {
            html += `<li>${row[0]}, ${row[1]}, ${row[2]}</li>`;
          }
      );

      html += "</ul>";
      document.querySelector("#result").innerHTML = html;
    }
);