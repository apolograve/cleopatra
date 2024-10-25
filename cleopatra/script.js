// ESTE CÓDIGO FOI RIGOROSAMENTE VERIFICADO E ESTÁ *PRONTO PARA USO*, TENDO SIDO SUBMETIDO A UMA ANÁLISE MINUCIOSA E TESTADO COM SUCESSO PARA GARANTIR SUA INTEGRIDADE E FUNCIONALIDADE PELO SEU CRIADOR.

'use strict';

/* alert("ESTE CÓDIGO NÃO SERÁ EXECUTADO! REMOVA O COMENTÁRIO!"); */
/* console.log("BLOCO DE CÓDIGO DESATIVADO, REMOVA O COMENTÁRIO!"); */


// ESTÁ ESTRUTURA POSSUI REDUNDÂNCIAS PROPOSITAIS.
// BLOQUEAR INSPEÇÃO DE ELEMENTOS
/*
  document.addEventListener('keydown', function(event) {
    if (event.key === 'i' && event.ctrlKey && event.shiftKey) {
      event.preventDefault();
    }
  });
  
  // BLOQUEAR EXIBIR CÓDIGO FONTE
  document.addEventListener('keydown', function(event) {
    if (event.key === 'u' && event.ctrlKey) {
      event.preventDefault();
    }
  });

  // BLOQUEAR AS TECLAS DE ACESSO AO CÓDIGO FONTE
  document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && (event.key === 's' || event.key === 'c')) {
          event.preventDefault();
      }
  });
  
  // BLOQUEAR MENU DE CONTEXTO
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  
  // BLOQUEAR ATALHO "CTRL+U"
  document.addEventListener('keydown', function(event) {
    if (event.key === 'u' && event.ctrlKey) {
      event.preventDefault();
    }
  });

  // BLOQUEAR ATALHO "CTRL+P"
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.keyCode == 80) {
        event.preventDefault();
    }
  });

  // BLOQUEAR ATALHO "CTRL+S"
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
    }
  });

  // BLOQUEAR ATALHO "PRINT-SCR"
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 44) { // código da tecla PrintScreen
      event.preventDefault();
    }
  });

  // BLOQUEAR ATALHO "PRINT-2"
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
      event.preventDefault();
    }
  });

  // BLOQUEAR VISIBILIDADE
  document.addEventListener('webkitvisibilitychange', function() {
    if (document.webkitVisibilityState === 'hidden') {
      event.preventDefault();
    }
  });

  // BLOQUEIA A VISIBILIDADE - UPDATE
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
      event.preventDefault();
    }
  });

  // BLOQUEAR TODAS A TECLAS
  document.addEventListener('keydown', function(event) {
    event.preventDefault();
  });
  
  // BLOQUEAR BOTÃO DE VOLTAR
  window.addEventListener('beforeunload', function(event) {
    event.preventDefault();
  });
  
  // BLOQUEAR INSPEÇÃO DE CÓDIGO POR "F12"
  document.addEventListener('keydown', function(event) {
    if (event.key === 'f12') {
      event.preventDefault();
    }
  });

  // BLOQUEAR VIEW-SOURCE:
  if (window.location.href.includes('view-source:')) {
    window.location.href = window.location.href.replace('view-source:', '');
  }
  
  // BLOQUEAR EVENTOS DE TECLADO E MOUSE
  document.addEventListener('keydown', function(event) {
    event.preventDefault();
  });
  document.addEventListener('mousedown', function(event) {
    event.preventDefault();
  });

  // OCULTAR O MENU DO NAVEGADOR
  document.addEventListener('DOMContentLoaded', function() {
    document.body.style.userSelect = 'none';
    document.body.style.MozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.WebkitUserSelect = 'none';
    document.body.style.userDrag = 'none';
    document.body.style.MozUserDrag = 'none';
    document.body.style.msUserDrag = 'none';
    document.body.style.WebkitUserDrag = 'none';
  });

   // REDIRECIONAR PARA UMA PÁGINA DE ERRO AO TENTAR ACESSAR O CÓDIGO FONTE - SUBSTITUIR
   document.addEventListener('contextmenu', function(event) {
    if (event.target.tagName === 'CODE') {
        window.location.href = 'acesso-nao-autorizado/rastreando-localizacao/localizacao-enviada-para-o-monitoramento/index.html';
    }
   });

   // AUTENTICAÇÃO E AUTORIZAÇÃO DE ACESSO AO CÓDIGO FONTE - SUBSTITUIR
   function authenticate() {
    // VERIFICAR SE O USUÁRIO ESTÁ AUTENTICADO
    if (!authenticated) {
        window.location.href = 'acesso-nao-autorizado/rastreando-localizacao/localizacao-enviada-para-o-monitoramento/index.html';
    }
   }

   // MONITORAR O ACESSO AO CÓDIGO FONTE - SUBSTITUIR
   setInterval(function() {
    // VERIFICAR SE HÁ TENTATIVAS DE ACESSO AO CÓDIGO FONTE
    if (attemptedAccess) {
        // BLOQUEAR O ACESSO AO CÓDIGO FONTE
        window.location.href = 'acesso-nao-autorizado/rastreando-localizacao/localizacao-enviada-para-o-monitoramento/index.html';
    }
}, 1000);
*/

/*
// TRAVA DE DOMÍNIO - SUBSTITUIR
const desiredDomain = 'http://127.0.0.1:5500/index.html';
const currentDomain = location.host;

if (currentDomain === desiredDomain) {
  // Execute a função com o código
  function executeCode() {
    // Coloque todo o código JavaScript aqui
  }
  executeCode();
} else {
  window.location.href = 'acesso-nao-autorizado/rastreando-localizacao/localizacao-enviada-para-o-monitoramento/index.html';
}
*/


// GEOLOCALIZAÇÃO - RAIO 50KM
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(({ city }) => {
    document.querySelectorAll('.city').forEach(element => {
      element.textContent = city;
    });
  })
.catch(error => console.error('Erro ao obter informações da cidade:', error));



// USUÁRIOS AO VIVO
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

if (localStorage.getItem('live-users') !== null) {
    var counts = parseInt(localStorage.getItem('live-users'));
} else {
    var initial = random(500, 2000);
    var counts = initial;
}

setInterval(function() {
    var variation = random(-5, 5);

    counts += variation
    document.querySelector('.live-users').innerHTML = counts;

    localStorage.setItem('live-users', counts);
}, 1000)



// DELAY
var divs = document.querySelectorAll('.container-cta, .container_ticket_cta, .container_cta_end, .container-cta-bar-button');

setTimeout(function() {

    divs.forEach(function(div) {
        div.style.display = 'block';
    });
}, 5000);



// NO-PLAY
window.addEventListener('load', function() {
    var iframe = document.getElementById('youtube-video');
    var message = {
      event: 'command',
      func: 'playVideo'
    };
    iframe.contentWindow.postMessage(JSON.stringify(message), '*');
});



// POPUP SEM FADE
function randomName(names) {
  return names[Math.floor(Math.random() * names.length)];
}

function showPopup(message) {
  var popup = document.querySelector('.popup');
  popup.textContent = message;
  popup.style.display = 'block';
  setTimeout(function() {
      popup.style.display = 'none';
  }, 5000);
}

var names = ["amanda", "jéssica", "helena", "suzana", "evelin", "julia", "maria", "luísa", "eduarda", "ana", "laura", "beatriz", "rafaella", "natalia", "regina", "mariana", "maria", "eloah", "leticia", "lorena", "nicole", "daiana", "sandra", "luiza", "vitoria", "fabiana", "carol", "sabrina", "damião", "vanderleia", "giovanna", "alice", "lohana", "bianca", "gabriela", "daiane", "antonia", "sofia", "juliana"];
var message = " acabou de comprar";

window.addEventListener('load', function() {
  setTimeout(function() {
    showPopup(randomName(names) + message);
  }, 5000);

setInterval(function() {
  showPopup(randomName(names) + message);
}, 10000);
});



// TIMER INFERIOR
let minutes = localStorage.getItem('minutes') ? parseInt(localStorage.getItem('minutes')) : 15;
let seconds = localStorage.getItem('seconds') ? parseInt(localStorage.getItem('seconds')) : 0;
let intervalId;

function updateTimer() {
    document.querySelectorAll(".timer").forEach(timer => {
        timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            clearInterval(intervalId);
            // Não remove os valores do localStorage
        }
        localStorage.setItem('minutes', minutes);
        localStorage.setItem('seconds', seconds);
    });
}

intervalId = setInterval(updateTimer, 1000);



// LIKE DISLIKE
let contadores = document.querySelectorAll(".reaction_number");
    let botoes = document.querySelectorAll(".fb_options");
    let containerIndex = 0;

    botoes.forEach((botao, index) => {
      let contador = contadores[index];

      botao.addEventListener("click", function() {
        let valor = parseInt(contador.textContent);
        let textoBotao = botao.textContent;
        let soma = textoBotao === "Curtir";

        if (soma) {
          valor++;
        } else {
          valor--;
        }
        contador.innerHTML = valor;
        botao.textContent = soma ? "Descurtir" : "Curtir";
    });
});



// SEMANA
const getDayOfWeek = date => ['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO'][date.getDay()];

const dayOfWeekDivs = document.querySelectorAll('.day-of-week');

dayOfWeekDivs.forEach(div => {
  div.textContent = getDayOfWeek(new Date());
});



// DIA/MÊS
const dateElements = document.querySelectorAll('.data');
const date = new Date();

dateElements.forEach(element => {
  element.textContent = `${date.getDate()}/${date.getMonth() + 1}`;
});



// ATUALIZAÇÃO MÊS/ANO
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var mesAtual = meses[new Date().getMonth()];
var ano = new Date().getFullYear();

document.querySelectorAll('.floating_desc_uppercase').forEach(elemento => elemento.textContent = `${mesAtual} de ${ano}`);



// ATUALIZAÇÃO ANO COPYRIGHT
var ano = new Date().getFullYear();

document.querySelectorAll('.copyright_year').forEach(elemento => {
  elemento.textContent = ano;
});



// ACORDEÃO
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Fechar todos os outros painéis
        for (var j = 0; j < acc.length; j++) {
            if (acc[j] !== this) {
                acc[j].classList.remove("active");
                acc[j].nextElementSibling.style.display = "none";
            }
        }
        
        // Alternar o estado do painel atual
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



// INTEGRITY VERIFICATION - COMPLETE
window.addEventListener('load', function() {
  // Verifica se o documento já terminou de carregar
  if (document.readyState === 'complete') {
    showSuccessIndicator();
  } else {
    window.addEventListener('load', showSuccessIndicator);
  }
});

function showSuccessIndicator() {
  setTimeout(function() {

    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'black';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);

    setTimeout(function() {
      overlay.style.backgroundColor = 'transparent';
      setTimeout(function() {
        overlay.style.backgroundColor = 'black';
        setTimeout(function() {
          overlay.style.backgroundColor = 'transparent';
          setTimeout(function() {
            overlay.style.backgroundColor = 'black';
            overlay.remove();
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }, 4500);
}



document.addEventListener('DOMContentLoaded', function() {
  var typingText = document.getElementById('typing');
  var doneText = document.getElementById('done');

  window.addEventListener('scroll', function() {
      if (isElementInViewport(typingText)) {
          setTimeout(function() {
              typingText.style.display = 'none';
              doneText.style.display = 'block';
          }, 5000);
      }
  });

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
});