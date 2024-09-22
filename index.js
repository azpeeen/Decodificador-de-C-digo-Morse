// dicionario morse
const morseCode = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', 
    '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', 
    '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z', 
    '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', 
    '---..': '8', '----.': '9', '/': ' '  // '/' representa um espaço entre palavras
};


function decodeMorse() {
    const morseMensagem = document.getElementById('morseInput').value;
    const palavras = morseMensagem.split(' ');
    const mensagemTraduzida = palavras.map(symbol => morseCode[symbol] || '').join('');
    document.getElementById('decodedMessage').innerText = "Mensagem decodificada: " + mensagemTraduzida;
}