document.body.classList.add('dark-mode');

// Exemplo de carregamento do JSON de emails (emails.json)
let emailMap = {};

fetch('../assets/json/emails.json')
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
    let emailContent = template.replace(/\[UBS_LIST\]/g, uncheckedItems.join("\n"));
    
    // Exibir o conteúdo do e-mail no bloco de código
    document.getElementById('email-content').textContent = emailContent;
}

function copyEmail() {
    const emailContent = document.getElementById('email-content').textContent; // Sempre copiar texto puro

    // Criar um elemento de área de transferência temporário
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = emailContent; // Preenche com o conteúdo do e-mail
    document.body.appendChild(tempTextArea);

    // Selecionar e copiar o texto
    tempTextArea.select();
    document.execCommand('copy');

    // Remover o elemento temporário
    document.body.removeChild(tempTextArea);

    // Exibe um alerta de sucesso
    alert('Conteúdo do e-mail copiado!');
}




function generateWhatsApp() {
    const template = document.getElementById('whatsapp-template').value;
    const uncheckedItems = getUncheckedItems();
    let whatsappList = '';
    let whatsappNumbers = [];

    let whatsappContent = template;
    whatsappContent = whatsappContent.replace(/\[UBS_LIST\]/g, uncheckedItems.join("\n"));
    
    uncheckedItems.forEach(ubs => {
        const number = whatsappMap[ubs];
        if (number) whatsappNumbers.push(number);
    });

    whatsappList += `<h3>Conteúdo da Mensagem WhatsApp:</h3>`;
    whatsappList += `<pre>${whatsappContent}</pre>`;
    whatsappList += `<h3>Números de WhatsApp:</h3>`;
    whatsappList += `<textarea readonly rows="5" style="width: 100%;">${whatsappNumbers.join(", ")}</textarea>`;

    let whatsappButtons = '<h3>Botões de WhatsApp:</h3>';
    whatsappNumbers.forEach((number, index) => {
        whatsappButtons += `<a href="https://wa.me/55${number}" target="_blank" class="whatsapp-button">WhatsApp ${index + 1}</a>`;
    });

    document.getElementById('whatsapp-list').innerHTML = whatsappList;
    document.getElementById('whatsapp-buttons').innerHTML = whatsappButtons;
}

// Pré-preencher o template de e-mail
document.getElementById('email-template').value = 
`Prezados, bom dia.

Gostaríamos de chamar sua atenção para pendências em nosso sistema referentes às seguintes UBS:

[UBS_LIST]

Solicitamos gentilmente que verifiquem e atualizem as informações pendentes o mais breve possível.

Atenciosamente,
Sala de Situação`;

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
