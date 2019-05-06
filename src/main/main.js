function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    activateCanvas(0);
}
var cont = 1;

function createTab(evt) {
    cont++;
    let index = cont;
    var div = document.createElement('div');
    div.id = "Tab-" + cont;
    div.className = "tabcontent"
    var aux = document.getElementById('tabs');
    aux.appendChild(div);
    var span = document.createElement('span');
    span.className = 'topright pointer';
    span.onclick = () => closeTab(event, span);
    span.innerHTML = '&times';
    var canvas = document.createElement('canvas');
    canvas.id = 'c'+index;
    canvas.width = 800;
    canvas.height = 600;
    var span2 = document.createElement('span');
    span2.className = 'error';
    span2.innerHTML = 'erro';
    var tablinks, i;
    canvas.appendChild(span2);
    div.appendChild(span);
    div.appendChild(canvas);
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    div.style = 'display:block';
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var button = document.createElement('button');
    button.className = 'tablinks active';
    button.id = 't' + cont;
    button.onclick = () => openTab(event, 'Tab-' + index);
    button.innerHTML = 'Tab ' + cont;
    var aux2 = document.getElementById('tabmenu');
    aux2.appendChild(button);
    activateCanvas();
}

function closeTab(event, esse) {
    esse.parentElement.style.display = "none";
    var aux = esse.parentElement.id;
    aux = aux.split('-');
    var index = 't' + aux[1];
    document.querySelector('#' + index).style.display = "none";
}