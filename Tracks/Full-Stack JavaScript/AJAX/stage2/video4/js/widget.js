var AJAX = new XHttpRequest();
AJAX.onreadystatechange = function () {
        if(AJAX.readyState === 4) {
                var employees = JSON.parse(AJAX.responseText);
                var statusHTML = '<ul class="bulleted">';

                for(var i = 0; i < employees.length; i ++) {
                    if (employees[i].inoffice === true) {
                        statusHTML += '<li class="in">';
                    } else {
                        statusHTML += '<li class="out">';
                    }
                    statusHTML += employees[i].name;
                    statusHTML += '</li>';
                }
                statusHTML += '</ul>';
                console.log(statusHTML);
                document.getElementById('employeeList').innerHTML = statusHTML;
            }
};
AJAX.open('GET', 'data/employees.json');
AJAX.send();
