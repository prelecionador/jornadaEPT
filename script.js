const questions = [
    {
        question: "Qual é o objetivo principal da EPT?",
        explanation: "A Educação Profissional e Tecnológica (EPT) não se resume a ensinar uma profissão. Ela visa preparar o cidadão para a vida, integrando o conhecimento técnico à formação humana e cultural.",
        options: [
            { id: 'a', text: "Integrar a formação para o trabalho com a formação cidadã.", isCorrect: true, feedback: "Exatamente! A EPT busca a formação integral do sujeito." },
            { id: 'b', text: "Focar no treinamento técnico para indústrias e mercado de trabalho.", isCorrect: false, feedback: "A EPT vai muito além do técnico, focando na formação integral e cidadã." },
            { id: 'c', text: "Preparar estudantes para o enem.", isCorrect: false, feedback: "O foco não é apenas acadêmico, mas a integração com o mundo do trabalho." },
            { id: 'd', text: "Substituir o ensino médio regular por cursos técnicos.", isCorrect: false, feedback: "A EPT pode ser integrada ao ensino médio, não apenas substituí-lo." },
            { id: 'e', text: "Oferecer cursos de pós-graduação.", isCorrect: false, feedback: "A EPT abrange desde cursos de qualificação básica até a pós-graduação." }
        ]
    },
    {
        question: "Segundo Paulo Freire, a educação deve ser:",
        explanation: "Paulo Freire, um dos maiores educadores do Brasil, defendia que a educação não é neutra. Para ele, aprender a ler e escrever é também aprender a ler o mundo de forma crítica.",
        options: [
            { id: 'a', text: "Promover a formação crítica do indivíduo a partir da realidade social.", isCorrect: false, feedback: "A formação crítica é essencial em Freire, mas sua proposta também enfatiza a transformação social por meio da educação." },
            { id: 'b', text: "Uma prática de liberdade e transformação social.", isCorrect: true, feedback: "Correto! A educação é um ato político e transformador." },
            { id: 'c', text: "Estimular o diálogo entre educador e educando na construção do conhecimento.", isCorrect: false, feedback: "O diálogo é um elemento central na pedagogia freireana, porém a questão busca a concepção mais ampla de educação defendida por Freire." },
            { id: 'd', text: "Relacionar o aprendizado às experiências culturais e sociais do educando.", isCorrect: false, feedback: "Freire valorizava o contexto do educando, mas a alternativa correta destaca a educação como prática libertadora." },
            { id: 'e', text: "Contribuir para a conscientização e participação ativa na sociedade.", isCorrect: false, feedback: "A conscientização faz parte da proposta freireana, porém ela está inserida em uma perspectiva maior de liberdade e transformação social." }
        ]
    },
    {
        question: "O que significa 'Omnilateralidade' no contexto da EPT?",
        explanation: "O termo 'omnilateralidade' vem do latim 'omni' (tudo/todos) e 'latus' (lado). Na educação, refere-se ao desenvolvimento completo de todas as potencialidades do ser humano.",
        options: [
            { id: 'a', text: "Integrar conhecimentos científicos, culturais e profissionais na formação do estudante.", isCorrect: false, feedback: "A integração de conhecimentos é importante, mas a omnilateralidade envolve o desenvolvimento humano em todas as dimensões." },
            { id: 'b', text: "Promover uma educação voltada para diferentes áreas do conhecimento e da sociedade.", isCorrect: false, feedback: "A diversidade de áreas faz parte da proposta, porém o conceito é mais amplo e ligado à formação integral." },
            { id: 'c', text: "Articular teoria e prática na construção de uma formação crítica e social.", isCorrect: false, feedback: "A articulação entre teoria e prática é essencial na EPT, mas não define completamente a omnilateralidade." },
            { id: 'd', text: "Valorizar diferentes formas de conhecimento no processo educativo e profissional.", isCorrect: false, feedback: "A valorização dos diferentes saberes é importante, mas a omnilateralidade refere-se ao desenvolvimento integral do ser humano." },
            { id: 'e', text: "A formação integral do ser humano em todas as suas dimensões.", isCorrect: true, feedback: "Perfeito! É a formação intelectual, física, cultural e política." }
        ]
    },
    {
        question: "Qual instituição é uma das principais provedoras de EPT no Brasil?",
        explanation: "A Rede Federal de Educação Profissional, Científica e Tecnológica tem mais de um século de história, evoluindo das antigas Escolas de Aprendizes Artífices até os atuais modelos de excelência.",
        options: [
            { id: 'a', text: "Escolas particulares.", isCorrect: false, feedback: "A rede pública tem um papel fundamental e histórico na EPT." },
            { id: 'b', text: "Universidades federais.", isCorrect: false, feedback: "As universidades oferecem, mas não são as únicas nem as principais exclusivas." },
            { id: 'c', text: "Os Institutos Federais.", isCorrect: false, feedback: "No inicio os IFs foram referência na oferta de EPT, hoje todo o Brasil fala sobre EPT." },
            { id: 'd', text: "Escolas de ensino fundamental.", isCorrect: false, feedback: "ONGs participam, mas a rede federal e estadual são as principais." },
            { id: 'e', text: "Todas as alternativas estão corretas.", isCorrect: true, feedback: "Isso mesmo! o EPT vai de ensino básico até pós-graduação" }
        ]
    },
    {
        question: "A integração do Ensino Médio com o Ensino Técnico pode ocorrer de várias formas. Qual destas NÃO é uma forma reconhecida?",
        explanation: "A legislação brasileira prevê diferentes formas de o estudante cursar o ensino médio e o técnico, dependendo do seu momento de vida e da sua trajetória escolar.",
        options: [
            { id: 'a', text: "Integrada.", isCorrect: false, feedback: "Esta é uma forma válida, onde ambos ocorrem de forma unificada na mesma instituição." },
            { id: 'b', text: "Concomitante.", isCorrect: false, feedback: "Forma válida, onde o aluno faz o técnico e o médio ao mesmo tempo." },
            { id: 'c', text: "Subsequente.", isCorrect: false, feedback: "Forma válida, destinada a quem já concluiu o ensino médio." },
            { id: 'd', text: "Articulada.", isCorrect: false, feedback: "É um termo geral na legislação que engloba as formas integrada e concomitante." },
            { id: 'e', text: "Excludente.", isCorrect: true, feedback: "Correto! A EPT busca a inclusão, não a exclusão." }
        ]
    },
    {
        question: "Qual é o papel da pesquisa e extensão na EPT?",
        explanation: "Na EPT, o aluno não fica apenas na sala de aula. Ele é incentivado a pesquisar soluções para problemas reais e a levar esse conhecimento para a comunidade através da extensão.",
        options: [
            { id: 'a', text: "Conectar o conhecimento acadêmico com as necessidades da comunidade.", isCorrect: true, feedback: "Exato! A indissociabilidade entre ensino, pesquisa e extensão é pilar da EPT." },
            { id: 'b', text: "Publicar artigos científicos por meio de estudo detalhado.", isCorrect: false, feedback: "A extensão exige impacto real e diálogo com a comunidade." },
            { id: 'c', text: "Facilitar o conhecimento teorico de bases normativas tecnicas da educação.", isCorrect: false, feedback: "Pelo contrário, enriquece e dá sentido prático à formação." },
            { id: 'd', text: "Promover projetos que integrem teoria, prática e transformação social.", isCorrect: false, feedback: "Embora projetos sejam importantes, o principal papel é aproximar o conhecimento acadêmico das demandas da sociedade." },
            { id: 'e', text: "Estimular a produção de conhecimento voltada para problemas do cotidiano.", isCorrect: false, feedback: "A pesquisa na EPT realmente busca resolver problemas reais, mas também precisa estar articulada com a extensão e a formação cidadã." }
        ]
    },
    {
        question: "O que é o conceito de 'Trabalho como Princípio Educativo'?",
        explanation: "O trabalho aqui não é visto apenas como emprego ou exploração, mas como a ação humana fundamental que transforma a natureza e a própria sociedade.",
        options: [
            { id: 'a', text: "Entender o trabalho como elemento importante para a formação crítica e social do indivíduo.", isCorrect: false, feedback: "A formação crítica faz parte do conceito, mas o princípio educativo envolve compreender o trabalho como atividade humana transformadora." },
            { id: 'b', text: "Relacionar a educação com a preparação para atuar de forma consciente na sociedade.", isCorrect: false, feedback: "A educação possui esse papel, porém o conceito também enfatiza o trabalho como fundamento da existência humana." },
            { id: 'c', text: "Valorizar práticas educativas que integrem conhecimento técnico, científico e social.", isCorrect: false, feedback: "Essa integração é importante na EPT, mas não define completamente o conceito de trabalho como princípio educativo." },
            { id: 'd', text: "Compreender o trabalho como a forma pela qual o ser humano transforma o mundo e a si mesmo.", isCorrect: true, feedback: "Perfeito! É entender o trabalho em sua dimensão ontológica." },
            { id: 'e', text: "Promover a articulação entre teoria e prática na construção do conhecimento.", isCorrect: false, feedback: "A articulação entre teoria e prática é essencial, mas o conceito vai além disso ao compreender o trabalho como essência da formação humana." }
        ]
    },
    {
        question: "Na EPT, qual é a importância da tecnologia?",
        explanation: "Vivemos em um mundo digital, mas a EPT nos ensina a não sermos apenas consumidores passivos de tecnologia, mas sim criadores e pensadores críticos sobre o seu uso e impacto.",
        options: [
            { id: 'a', text: "Utilizar a tecnologia de forma consciente para resolver problemas sociais e profissionais.", isCorrect: false, feedback: "A tecnologia pode contribuir para resolver problemas, mas a EPT também enfatiza a análise crítica de seus impactos." },
            { id: 'b', text: "Ser compreendida criticamente, não apenas consumida.", isCorrect: true, feedback: "Correto! Devemos entender como a tecnologia afeta a sociedade e o trabalho." },
            { id: 'c', text: "Promover inovação articulada com conhecimento científico e formação humana.", isCorrect: false, feedback: "A inovação é importante, porém a questão central está na compreensão crítica da tecnologia." },
            { id: 'd', text: "Integrar recursos tecnológicos aos processos educativos e produtivos da sociedade.", isCorrect: false, feedback: "A integração tecnológica faz parte da EPT, mas o foco principal é desenvolver uma visão crítica sobre seu uso." },
            { id: 'e', text: "Estimular o desenvolvimento de soluções tecnológicas voltadas às necessidades coletivas.", isCorrect: false, feedback: "Esse também é um objetivo importante, porém a EPT destaca principalmente a compreensão crítica da tecnologia." }
        ]
    },
    {
        question: "O que acontece quando você destranca a 'Porta do Conhecimento da EPT'?",
        explanation: "O conhecimento adquirido na EPT é uma ferramenta poderosa. Ele não serve apenas para o sucesso individual, mas para a melhoria coletiva e social.",
        options: [
            { id: 'a', text: "Você amplia sua capacidade de atuar de forma crítica e unilatel na sociedade.", isCorrect: false, feedback: "A formação crítica é importante, mas a principal ideia é tornar-se agente de transformação social." },
            { id: 'b', text: "Você desenvolve conhecimentos para contribuir com o mundo do trabalho.", isCorrect: false, feedback: "Essa contribuição faz parte da EPT, porém a alternativa correta enfatiza a transformação social gerada pelo conhecimento." },
            { id: 'c', text: "Você se torna um agente de transformação na sua comunidade e no mundo do trabalho.", isCorrect: true, feedback: "Parabéns! Esse é o verdadeiro objetivo da Educação Profissional e Tecnológica." },
            { id: 'd', text: "Você passa a compreender a importância da integração entre ciência, cultura e tecnologia.", isCorrect: false, feedback: "Essa integração é fundamental na EPT, mas o foco da questão está na atuação transformadora do sujeito." },
            { id: 'e', text: "Você fortalece sua formação humana e cultural para enfrentar desafios sociais.", isCorrect: false, feedback: "A formação humana é essencial, porém o objetivo central destacado é a transformação da realidade social." }
        ]
    }
];

let currentStage = 0;
let keysCollected = 0;
let errorsCount = 0;
let playerName = "";
let bubbleTimeout;

const synth = window.speechSynthesis;
let preferredVoice = null;

function loadVoices() {
    const voices = synth.getVoices();
    const ptVoices = voices.filter(v => v.lang === 'pt-BR' || v.lang === 'pt_BR');
    
    if (ptVoices.length > 0) {
        let bestScore = -1;
        
        ptVoices.forEach(v => {
            let score = 0;
            const name = v.name.toLowerCase();
            
            if (name.includes('online') || name.includes('cloud')) score += 10;
            if (name.includes('google')) score += 8;
            if (name.includes('natural')) score += 8;
            if (name.includes('microsoft antonio')) score += 7;
            if (name.includes('microsoft francisca')) score += 7;
            if (name.includes('luciana')) score += 4;
            
            if (score > bestScore) {
                bestScore = score;
                preferredVoice = v;
            }
        });
        
        if (!preferredVoice) {
            preferredVoice = ptVoices[0];
        }
    }
}

loadVoices();

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
}

function speak(text) {
    if (synth.speaking) {
        synth.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    
    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }

    utterance.pitch = 1.2;
    utterance.rate = 1.05;

    const elements = document.querySelectorAll('.owl-character, .owl-avatar');

    utterance.onstart = () => {
        elements.forEach(el => el.classList.add('talking'));
    };
    
    utterance.onend = () => {
        elements.forEach(el => el.classList.remove('talking'));
        clearTimeout(bubbleTimeout);

        bubbleTimeout = setTimeout(() => {
            const bubble = document.getElementById('owl-bubble');

            if (bubble) {
                bubble.classList.add('hidden');
            }
        }, 8000);
    };
    
    utterance.onerror = () => {
        elements.forEach(el => el.classList.remove('talking'));
    };

    synth.speak(utterance);
}

window.playIntroAudio = function() {
    speak("Olá! Eu sou a Coruja Pedagógica, sua guia nesta jornada. Vamos abrir a Porta do Conhecimento da Educação Profissional e Tecnológica, a EPT! A EPT busca formar cidadãos completos, unindo o trabalho e a vida em sociedade. Como disse Paulo Freire: Educação não transforma o mundo. Educação muda as pessoas. Pessoas transformam o mundo.");
};

window.playInstructionsAudio = function() {
    speak("Instruções: Responda às perguntas corretamente para ganhar chaves. Colete todas as 9 chaves para abrir a Porta do Conhecimento! Use os botões de áudio se precisar de ajuda para ler.");
};

window.playQuestionAudio = function() {
    const qText = questions[currentStage].question;
    speak(qText);
};

window.playOptionsAudio = function() {
    const options = questions[currentStage].options;
    let text = "As opções são: ";

    options.forEach((opt) => {
        text += `Opção ${opt.id.toUpperCase()}: ${opt.text}. `;
    });

    speak(text);
};

window.playEndAudio = function() {
    speak("Parabéns! Você destrancou a Porta do Conhecimento da EPT! Agora você é um agente de transformação na sua comunidade e no mundo do trabalho.");
};

window.startGame = function() {
    synth.cancel();

    playerName = document.getElementById("player-name").value.trim();

    if (playerName === "") {
        alert("Digite seu nome antes de começar.");
        return;
    }

    document.getElementById('intro-screen').classList.remove('active');
    document.getElementById('intro-screen').classList.add('hidden');

    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('game-screen').classList.add('active');

    document.getElementById('top-bar').classList.remove('hidden');
    document.getElementById('owl-character').className = 'owl-character pos-game';

    initKeysVisual();
    loadQuestion();
};

function initKeysVisual() {
    const container = document.getElementById('keys-visual');
    container.innerHTML = '';

    for (let i = 0; i < questions.length; i++) {
        const key = document.createElement('span');

        key.className = 'key-icon';
        key.innerText = '🔑';
        key.id = `key-${i}`;

        container.appendChild(key);
    }
}

function loadQuestion() {
    if (currentStage >= questions.length) {
        endGame();
        return;
    }

    const q = questions[currentStage];

    document.getElementById('question-text').innerText = `Fase ${currentStage + 1}: ${q.question}`;
    document.getElementById('explanation-text').innerText = q.explanation;
    
    const optionsContainer = document.getElementById('options-container');
    const explanationContainer = document.getElementById('explanation-container');
    
    optionsContainer.innerHTML = '';
    
    optionsContainer.classList.add('hidden');
    explanationContainer.classList.remove('hidden');

    q.options.forEach(opt => {
        const btn = document.createElement('button');

        btn.className = 'option-btn';
        btn.innerHTML = `<strong>${opt.id.toUpperCase()})</strong>&nbsp; ${opt.text}`;
        btn.onclick = () => window.selectOption(opt, btn);

        optionsContainer.appendChild(btn);
    });

    showOwlMessage("Leia a explicação e clique em Resolver Questão!");
}

window.showOptions = function() {
    const optionsContainer = document.getElementById('options-container');
    const explanationContainer = document.getElementById('explanation-container');
    
    explanationContainer.classList.add('hidden');
    optionsContainer.classList.remove('hidden');
    
    showOwlMessage("Vamos lá! Escolha a resposta certa.");
};

window.selectOption = function(option, btnElement) {
    synth.cancel();
    
    const allBtns = document.querySelectorAll('.option-btn');

    allBtns.forEach(b => b.disabled = true);

    if (option.isCorrect) {
        btnElement.classList.add('correct');

        showOwlMessage(option.feedback);
        speak("Correto! " + option.feedback);
        
        document.getElementById(`key-${currentStage}`).classList.add('collected');

        keysCollected++;
        document.getElementById('keys-count').innerText = keysCollected;

        setTimeout(() => {
            currentStage++;
            loadQuestion();
        }, 4500);

    } else {
        errorsCount++;

        btnElement.classList.add('wrong');

        showOwlMessage(option.feedback);
        speak("Ops! " + option.feedback);

        setTimeout(() => {
            allBtns.forEach(b => {
                b.disabled = false;
                b.classList.remove('wrong');
            });

            showOwlMessage("Tente novamente!");
        }, 8000);
    }
};

function showOwlMessage(msg) {
    const bubble = document.getElementById('owl-bubble');

    bubble.innerText = msg;
    bubble.classList.remove('hidden');

    clearTimeout(bubbleTimeout);

    bubbleTimeout = setTimeout(() => {
        bubble.classList.add('hidden');
    }, 6000);
}

function enviarResultadoParaPlanilha() {
    const url = "https://script.google.com/macros/s/AKfycbycMhj3yZqpEtv4NOMCWGfYfLhWlvmQAgRAv5u5kAEcOLef0fNQN_EoNx2_fJPOP_Ue6A/exec";

    const dados = new FormData();

    dados.append("nome", playerName);
    dados.append("chaves", keysCollected);
    dados.append("totalQuestoes", questions.length);
    dados.append("erros", errorsCount);

    fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: dados
    });
}

function endGame() {
    enviarResultadoParaPlanilha();

    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('hidden');

    document.getElementById('end-screen').classList.remove('hidden');
    document.getElementById('end-screen').classList.add('active');

    document.getElementById('top-bar').classList.add('hidden');

    document.getElementById('owl-character').className = 'owl-character pos-end';

    window.playEndAudio();
}