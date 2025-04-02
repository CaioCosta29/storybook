function mudarDisplay(menuId) {
    const dropdown = document.getElementById(menuId);
    const botao = document.getElementById("button");

    dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none";
    
    botao.classList.toggle("ativo");
}