  const tela = document.getElementById('tela');
    const historicoDiv = document.getElementById('historico');
    let historico = [];

    function inserir(valor) {
      if (tela.textContent === '0' && valor !== '.') {
        tela.textContent = valor;
      } else {
        tela.textContent += valor;
      }
    }

    function limpar() {
      tela.textContent = '0';
    }

    function apagar() {
      tela.textContent = tela.textContent.slice(0, -1) || '0';
    }

    function calcular() {
      try {
        const expressao = tela.textContent;
        const resultado = eval(expressao);
        tela.textContent = resultado;

        // Adiciona ao histórico
        historico.unshift(`${expressao} = ${resultado}`);
        if (historico.length > 5) historico.pop();
        atualizarHistorico();
      } catch {
        tela.textContent = 'Erro';
      }
    }

    function atualizarHistorico() {
      historicoDiv.innerHTML = historico.map(h => `<div>${h}</div>`).join('');
    }