// Função para carregar o menu
function loadMenu() {
    fetch('pages/menu/menu.html')  // Caminho correto para o arquivo menu.html

        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data; // Insere o menu no div#menu
            
            // Após o menu ser inserido, precisamos adicionar o estilo e a lógica de interação
            initializeMenu(); // Função para inicializar a lógica do menu
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
}

// Função para inicializar qualquer lógica do menu, se necessário
function initializeMenu() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const selectedItem = event.target.textContent;
            console.log(`Você clicou em: ${selectedItem}`);
        });
    });
}

// Carrega o menu assim que a página for carregada
window.onload = function() {
    loadMenu();

    // Depois que o menu carregar, pode iniciar os outros scripts
    setupChecklist('checklist1');
    setupChecklist('checklist2');
};

// Funções de modal
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
