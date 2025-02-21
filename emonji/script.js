document.getElementById('emojiButton').addEventListener('click', function() {
    const picker = document.getElementById('emojiPicker');
    picker.style.display = picker.style.display === 'none' || picker.style.display === '' ? 'block' : 'none';
});

const emojis = document.querySelectorAll('.emoji');
const inputField = document.getElementById('emojiInput');

emojis.forEach(emoji => {
    emoji.addEventListener('click', function() {
        inputField.value += emoji.textContent; // Adiciona o emoji ao campo de texto
        document.getElementById('emojiPicker').style.display = 'none'; // Fecha o seletor de emojis
    });
});

// Fechar o emoji picker ao clicar fora
document.addEventListener('click', function(e) {
    const emojiButton = document.getElementById('emojiButton');
    const emojiPicker = document.getElementById('emojiPicker');
    if (!emojiButton.contains(e.target) && !emojiPicker.contains(e.target)) {
        emojiPicker.style.display = 'none';
    }
});
