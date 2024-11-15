document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            if (targetContent.style.display === 'block') {
                targetContent.style.display = 'none'; // Oculta o conteúdo se já estiver visível
            } else {
                document.querySelectorAll('.content').forEach(content => {
                    content.style.display = 'none';
                });
                targetContent.style.display = 'block';
            }
        });
    });
});
