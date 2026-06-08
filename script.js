document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FUNCIONALIDADE DO MODO ESCURO / CLARO
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verifica se o usuário já tinha uma preferência salva antes
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        // Alterna a classe dark-mode no elemento <body>
        document.body.classList.toggle('dark-mode');
        
        // Salva a escolha do usuário no navegador
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // 2. INTERAÇÃO NOS LINKS (Mensagem informativa interna)
    const linksOficiais = document.querySelectorAll('.text-link');

    linksOficiais.forEach(link => {
        link.addEventListener('click', (evento) => {
            const destino = link.getAttribute('href');
            console.log(`%c[AgroForte] Redirecionando com segurança para a fonte oficial: ${destino}`, 'color: #15803d; font-weight: bold;');
        });
    });
});
