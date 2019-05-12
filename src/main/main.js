function openTab(evt) {
    // Declare all variables
    var i, tablinks;
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    evt.currentTarget.className = "tablinks active";
}

var cont = 1;

function createTab(evt) {
    cont++;
    let index = cont;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var button = document.createElement('button');
    button.className = 'tablinks active';
    button.id = 't' + index;
    button.onclick = () => {
        openTab(event);
        activateCanvas(index);
    }
    button.innerHTML = 'FSM ' + cont;
    var aux2 = document.getElementById('tabmenu');
    aux2.appendChild(button);
    activateCanvas(index);
}

function closeTab(event) {
    var aba = document.querySelector(".tablinks.active");
    
    if(aba){
    aba.remove()
    var id = aba.id.split("t")[1];
    localStorage.removeItem("fsm"+id);
    }

    var nova_aba = document.querySelector(".tablinks");
    if(nova_aba != null){
        nova_aba.click();
    }else{
        localStorage.clear();
    }
}