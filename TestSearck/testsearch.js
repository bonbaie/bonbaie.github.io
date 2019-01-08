fetch("https://sheets.googleapis.com/v4/spreadsheets/1CZcHYZkAj7rP87FHUlv5WwpZeVYjv6muFsMwrxuNMcA/values/data?key=AIzaSyCwjJMd7rj0hzO1vxvGNGW__kenhJ2TqOw").then(

    response => {
      return response.json();
    }
).then(
    json => {
      let html = "<ul>";
      console.log(json);

      json.values.forEach(row => {
            html += `<li>${row[0]}</li>`;
          }
      );

      html += "</ul>";
      document.querySelector("#result").innerHTML = html;
    }
);