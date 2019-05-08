

function openTab(evt, tabName) {
    // Declare all variables
    var i, tablinks;
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    console.log(evt.currentTarget.className);
    evt.currentTarget.className += " active";
}

var cont = 1;

function createTab(evt) {
    cont++;
    let index = cont;
    var div = document.createElement('div');
    div.id = "Tab-" + index;
    div.className = "tabcontent"
    var aux = document.getElementById('tabs');
    aux.appendChild(div);
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var button = document.createElement('button');
    button.className = 'tablinks active';
    button.id = 't' + cont;
    console.log('Tab-' +index);
    button.onclick = () => openTab(event, 'Tab-' +index);
    button.onclick = () => activateCanvas(index);
    button.innerHTML = 'Tab ' + cont;
    var aux2 = document.getElementById('tabmenu');
    aux2.appendChild(button);
    activateCanvas(index);
}

function closeTab(event, esse) {
    esse.parentElement.style.display = "none";
    var aux = esse.parentElement.id;
    aux = aux.split('-');
    var index = 't' + aux[1];
    document.querySelector('#' + index).style.display = "none";
}