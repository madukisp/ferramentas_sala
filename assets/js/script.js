function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}

// Carregar o JSON com os emails
let emailMap = {};

fetch('assets/js/emails.json')
    .then(response => response.json())
    .then(data => {
        emailMap = data;
    })
    .catch(error => console.error('Erro ao carregar o arquivo de emails:', error));

function setupChecklist(checklistId) {
    const checklist = document.getElementById(checklistId);
    checklist.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            updateSummary();
        }
    });
}

setupChecklist('checklist1');
setupChecklist('checklist2');

function updateSummary() {
    const unchecked1 = document.querySelectorAll('#checklist1 li:not(.checked)').length;
    const unchecked2 = document.querySelectorAll('#checklist2 li:not(.checked)').length;

    document.getElementById('summary1').innerHTML = `Unidades não clicadas: ${unchecked1}`;
    document.getElementById('summary2').innerHTML = `Unidades não clicadas: ${unchecked2}`;
}

function getUncheckedItems() {
    const uncheckedItems = [];
    if (document.getElementById('include-list1').checked) {
        document.querySelectorAll('#checklist1 li:not(.checked)').forEach(item => {
            uncheckedItems.push(item.textContent);
        });
    }
    if (document.getElementById('include-list2').checked) {
        document.querySelectorAll('#checklist2 li:not(.checked)').forEach(item => {
            uncheckedItems.push(item.textContent);
        });
    }
    return uncheckedItems;
}

function generateEmails() {
    const template = document.getElementById('email-template').value;
    const uncheckedItems = getUncheckedItems();
    let emailList = '';
    let emailAddresses = [];

    let emailContent = template;
    emailContent = emailContent.replace(/\[UBS_LIST\]/g, uncheckedItems.join("\n"));
    
    uncheckedItems.forEach(ubs => {
        const email = emailMap[ubs];
        if (email) emailAddresses.push(email);
    });

    emailList += `<h3>Conteúdo do E-mail:</h3>`;
    emailList += `<pre>${emailContent}</pre>`;
    emailList += `<h3>Endereços de E-mail para Cópia:</h3>`;
    emailList += `<textarea readonly rows="5" style="width: 100%;">${emailAddresses.join(", ")}</textarea>`;

    document.getElementById('email-list').innerHTML = emailList;
}
