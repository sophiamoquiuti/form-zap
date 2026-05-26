function irWhatsapp() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    let mensagem =
`Olá!
Nome: ${nome}
Email: ${email}
WhatsApp: ${telefone}`;

    let numero = "5511999999999";

    let url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}