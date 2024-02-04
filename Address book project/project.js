let data = localStorage.getItem('addressBookData');
if (data) data = JSON.parse(data);
else data = [];


function renderData() {
    const searchedValue = document.getElementById('search').value;
    document.querySelector('#table tbody').innerHTML = data.map(function (e, i) {
        return `<tr id="contact${i}"">
    <td>${e.name}</td>
    <td>${e.address}</td>
    <td>${e.phone}</td>
    <td>${e.email}</td>
    <td>
        <div style="margin-right: 125px"; id="action${i}">
            <button onclick="deleteConfirm(${i})">
                <i class="material-symbols-outlined">delete</i>
            </button>
        <div>
    </td>
    </tr>`}).filter((e, i) => { 
        return searchedValue.length == 0 || data[i].name.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1 
    }).join('');
}

function deleteData(index) {
    data.splice(index, 1);
    localStorage.setItem('addressBookData', JSON.stringify(data));
    renderData();
}

function deleteConfirm(index) {
    var result = confirm("Are you sure to delete this contact?");
    if (result) {
        deleteData(index);
    }
    location.reload();
}

function sortTable() {
    var table = document.getElementById("table");
    var tableHeader = table.rows[0];
    var tableBodyRows = Array.from(table.rows).slice(1);
  
    tableBodyRows.sort(function(a, b) {
      var nameA = a.cells[0].textContent.toLowerCase();
      var nameB = b.cells[0].textContent.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }
  
    table.appendChild(tableHeader);
    for (var i = 0; i < tableBodyRows.length; i++) {
      table.appendChild(tableBodyRows[i]);
    }
}
  

function addData() {
    const newData = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
    }

    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';

    location.reload();
    data.push(newData);
    localStorage.setItem('addressBookData', JSON.stringify(data));
    renderData();
}

renderData();