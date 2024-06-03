function showText(elementId) {
    var overlay = document.getElementById("overlay");
    var overlayContent = document.querySelector(".overlay-content");
    overlay.style.display = "block";
    overlayContent.style.opacity = "1"; // Torna a caixa de texto visível
    var overlayText = document.getElementById("overlay-text");
    if (elementId === "disciplina") {
        overlayText.textContent = "Desenvolvimento Web em HTML5, CSS, JavaScript e Python. Consciente em uma disciplina certificadora, onde aprendemos a criar página em navegadores com HTML. Organizando a parte visual do site, decoração da página com CSS. Com JavaScript vamos tornar tudo mais dinâmico nas aplicações Web, onde os navegadores irão responder a interação do usuário ao conteúdo da página. Com o python vamos integrar nosso site ao banco de dados, onde tudo ficará salvo. Em resumo, vamos estruturar cada detalhe de uma página da internet.";
    } else if (elementId === "grupo") {
        overlayText.innerHTML = 
        `<div class="participant">
            <img src="https://i.imgur.com/FUFid8p.png" alt="Imagem de Júlia">
            <div>
                <p><strong>Nome:</strong> Júlia Gabriela Galdino Barbosa de Oliveira <br>
                <strong>Matrícula:</strong> 202308423134<br>
                <strong>Função:</strong> Programador e Designer</p>
            </div>
        </div>
        <div class="participant">
            <img src="https://i.imgur.com/US5V9TV.png" alt="Imagem de Lucas">
            <div>
                <p><strong>Nome:</strong> Lucas Moura Tavares <br>
                <strong>Matrícula:</strong> 202203060351<br>
                <strong>Função:</strong> Programador e Designer</p>
            </div>
        </div>
        <div class="participant">
            <img src="https://i.imgur.com/NcKohOE.png" alt="Imagem de Mirella">
            <div>
                <p><strong>Nome:</strong> Mirella Lais Silva de Oliveira <br>
                <strong>Matrícula:</strong> 202402397011<br>
                <strong>Função:</strong> Programador e Designer</p>
            </div>
        </div>
        <div class="participant">
            <img src="https://i.imgur.com/pGrqcbY.png" alt="Imagem de Pierre">
            <div>
                <p><strong>Nome:</strong> Pierre Henrique de Oliveira Silva <br>
                <strong>Matrícula:</strong> 202402396919<br>
                <strong>Função:</strong> Programador e Designer</p>
            </div>
        </div>
        <div class="participant">
            <img src="https://i.imgur.com/P69GwxD.png" alt="Imagem de Henrique">
            <div>
                <p><strong>Nome:</strong> Henrique José Silva Albuquerque <br>
                <strong>Matrícula:</strong> 202203377256<br>
                <strong>Função:</strong> Programador e Designer</p>
            </div>
        </div>`;
    } else if (elementId === "projeto") {
        overlayText.textContent = "É uma réplica web do app MFIT - Personal. Diante disso, nosso projeto consiste em um site onde o personal (cliente) poderá adicionar, remover, trocar e entre outras utilidades do treino de seus alunos. Além disso também, a parte de cadastro e acesso do personal e aluno.";
    }
}

function hideText() {
    var overlay = document.getElementById("overlay");
    var overlayContent = document.querySelector(".overlay-content");
    overlayContent.style.opacity = "0"; // Oculta a caixa de texto
    overlay.style.display = "none"; // Esconde a caixa de texto
}

function redirectToLogin() {
    window.location.href = "templates/login.html";
}



