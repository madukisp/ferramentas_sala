document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const content = document.querySelector('.content');

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const color = item.getAttribute('data-color');
            const text = item.textContent;
            
            content.style.color = `var(--${color})`;
            content.innerHTML = `Você selecionou: <strong>${text}</strong>`;
            content.style.opacity = '1';
            
            menuItems.forEach(mi => mi.classList.remove('active'));
            item.classList.add('active');

            // Adiciona efeito de ondulação (ripple)
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            item.appendChild(ripple);

            const rect = item.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;

            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
