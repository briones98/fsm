// Function called when the user opens a tab, that is, when makes a tab active
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

// Function called when the user creates a tab, that is, click at the '+' on menu
function createTab(evt) {
    cont++;
    let index = cont;
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    var button = document.createElement('button');
    // Show the new tab, and add an "active" class to the button which represents the tab
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

// Function called when the user closes a tab, that is, click at the 'x' at the top of canvas
function closeTab(event) {
    // Get all elements with class="tablinks"
    var abas = document.getElementsByClassName("tablinks");
    
    //If there isn't only one tab open, the specified tab is removed (together its element at the localStorage),
    //and another tab (by default, the tab which cames immediately before) is setted as active 
    if(abas.length > 1){
        for(i = 0; i < abas.length; i++){
            if(abas[i].className == "tablinks active"){
                aba = abas[i];
                aba.remove();
                var id = aba.id.split("t")[1];
                localStorage.removeItem("fsm"+id);
                if(i >= 1){
                    nova_aba = abas[i - 1];
                    nova_aba.click(); 
                }else{
                    nova_aba = abas[i];
                    nova_aba.click();
                }
            }
        }
    }else{
        alert("At least one flap must be open!")
    }
}