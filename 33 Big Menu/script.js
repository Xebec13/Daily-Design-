document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.arrow-toggle');

    listItems.forEach(function(listItem) {
        listItem.addEventListener('click', function() {
            const arrow = listItem.querySelector('.material-symbols-outlined');

            // Zmieniaj tekst ikony
            if (arrow.textContent === 'keyboard_arrow_down') {
                arrow.textContent = 'keyboard_arrow_up';
            } else {
                arrow.textContent = 'keyboard_arrow_down';
            }

            // Usuwaj klasę 'active' z innych elementów
            listItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Dodawaj klasę 'active' do klikniętego elementu
            listItem.classList.toggle('active');
        });
    });
});
