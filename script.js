const questions = [
    {
        question: "Qual é o objetivo principal da EPT?",
        explanation: "A Educação Profissional e Tecnológica (EPT) não se resume a ensinar uma profissão. Ela visa preparar o cidadão para a vida, integrando o conhecimento técnico à formação humana e cultural.",
        options: [
            { id: 'a', text: "Integrar a formação para o trabalho com a formação cidadã.", isCorrect: true, feedback: "Exatamente! A EPT busca a formação integral do sujeito." },
            { id: 'b', text: "Focar apenas no treinamento técnico para indústrias.", isCorrect: false, feedback: "A EPT vai muito além do técnico, focando na formação integral e cidadã." },
            { id: 'c', text: "Preparar estudantes exclusivamente para o vestibular.", isCorrect: false, feedback: "O foco não é apenas acadêmico, mas a integração com o mundo do trabalho." },
            { id: 'd', text: "Substituir o ensino médio regular por cursos rápidos.", isCorrect: false, feedback: "A EPT pode ser integrada ao ensino médio, não apenas substituí-lo." },
            { id: 'e', text: "Oferecer apenas cursos de pós-graduação.", isCorrect: false, feedback: "A EPT abrange desde cursos de qualificação básica até a pós-graduação." }
        ]
    },
    {
        question: "Segundo Paulo Freire, a educação deve ser:",
        explanation: "Paulo Freire, um dos maiores educadores do Brasil, defendia que a educação não é neutra. Para ele, aprender a ler e escrever é também aprender a ler o mundo de forma crítica.",
        options: [
            { id: 'a', text: "Um processo de transferência de conhecimento.", isCorrect: false, feedback: "Freire criticava a 'educação bancária' de mera transferência." },
            { id: 'b', text: "Uma prática de liberdade e transformação social.", isCorrect: true, feedback: "Correto! A educação é um ato político e transformador." },
            { id: 'c', text: "Focada na memorização de conteúdos.", isCorrect: false, feedback: "A memorização mecânica não promove o pensamento crítico." },
            { id: 'd', text: "Desvinculada da realidade do aluno.", isCorrect: false, feedback: "A educação deve sempre partir da realidade e do contexto do educando." },
            { id: 'e', text: "Um privilégio para poucos.", isCorrect: false, feedback: "A educação é um direito fundamental de todos." }
        ]
    },
    {
        question: "O que significa 'Omnilateralidade' no contexto da EPT?",
        explanation: "O termo 'omnilateralidade' vem do latim 'omni' (tudo/todos) e 'latus' (lado). Na educação, refere-se ao desenvolvimento completo de todas as potencialidades do ser humano.",
        options: [
            { id: 'a', text: "Focar em apenas uma habilidade técnica.", isCorrect: false, feedback: "Isso seria unilateralidade, o oposto do que buscamos." },
            { id: 'b', text: "Estudar apenas disciplinas de exatas.", isCorrect: false, feedback: "A formação deve ser completa, englobando todas as áreas." },
            { id: 'c', text: "Separar o trabalho manual do trabalho intelectual.", isCorrect: false, feedback: "A omnilateralidade busca exatamente superar essa divisão histórica." },
            { id: 'd', text: "Priorizar o lucro das empresas.", isCorrect: false, feedback: "O foco central é o desenvolvimento humano e social." },
            { id: 'e', text: "A formação integral do ser humano em todas as suas dimensões.", isCorrect: true, feedback: "Perfeito! É a formação intelectual, física, cultural e política." }
        ]
    },
    {
        question: "Qual instituição é uma das principais provedoras de EPT no Brasil?",
        explanation: "A Rede Federal de Educação Profissional, Científica e Tecnológica tem mais de um século de história, evoluindo das antigas Escolas de Aprendizes Artífices até os atuais modelos de excelência.",
        options: [
            { id: 'a', text: "Apenas escolas particulares.", isCorrect: false, feedback: "A rede pública tem um papel fundamental e histórico na EPT." },
            { id: 'b', text: "Somente universidades federais.", isCorrect: false, feedback: "As universidades oferecem, mas não são as únicas nem as principais exclusivas." },
            { id: 'c', text: "Os Institutos Federais de Educação, Ciência e Tecnologia (IFs).", isCorrect: true, feedback: "Isso mesmo! Os IFs são referência na oferta de EPT no país." },
            { id: 'd', text: "Apenas ONGs.", isCorrect: false, feedback: "ONGs participam, mas a rede federal e estadual são as principais." },
            { id: 'e', text: "Escolas de ensino fundamental exclusivamente.", isCorrect: false, feedback: "A EPT foca principalmente no ensino médio e superior." }
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
            { id: 'b', text: "Apenas publicar artigos científicos.", isCorrect: false, feedback: "A extensão exige impacto real e diálogo com a comunidade." },
            { id: 'c', text: "Dificultar a formação do aluno.", isCorrect: false, feedback: "Pelo contrário, enriquece e dá sentido prático à formação." },
            { id: 'd', text: "Substituir as aulas teóricas.", isCorrect: false, feedback: "Elas são complementares, unindo teoria e prática." },
            { id: 'e', text: "Focar apenas em teorias abstratas.", isCorrect: false, feedback: "A EPT foca na aplicação prática, tecnológica e social do conhecimento." }
        ]
    },
    {
        question: "O que é o conceito de 'Trabalho como Princípio Educativo'?",
        explanation: "O trabalho aqui não é visto apenas como emprego ou exploração, mas como a ação humana fundamental que transforma a natureza e a própria sociedade.",
        options: [
            { id: 'a', text: "Trabalhar desde a infância.", isCorrect: false, feedback: "O trabalho infantil é ilegal. O conceito é sobre a compreensão do trabalho." },
            { id: 'b', text: "Estudar apenas para conseguir um emprego.", isCorrect: false, feedback: "A educação vai além da mera empregabilidade." },
            { id: 'c', text: "Fazer trabalhos manuais na escola.", isCorrect: false, feedback: "É um conceito filosófico mais profundo que apenas atividades manuais." },
            { id: 'd', text: "Compreender o trabalho como a forma pela qual o ser humano transforma o mundo e a si mesmo.", isCorrect: true, feedback: "Perfeito! É entender o trabalho em sua dimensão ontológica." },
            { id: 'e', text: "Ignorar a teoria e focar só na prática.", isCorrect: false, feedback: "A práxis une indissociavelmente a teoria e a prática." }
        ]
    },
    {
        question: "Na EPT, qual é a importância da tecnologia?",
        explanation: "Vivemos em um mundo digital, mas a EPT nos ensina a não sermos apenas consumidores passivos de tecnologia, mas sim criadores e pensadores críticos sobre o seu uso e impacto.",
        options: [
            { id: 'a', text: "Substituir os professores por máquinas.", isCorrect: false, feedback: "A tecnologia é uma ferramenta de apoio, não um substituto para a mediação humana." },
            { id: 'b', text: "Ser compreendida criticamente, não apenas consumida.", isCorrect: true, feedback: "Correto! Devemos entender como a tecnologia afeta a sociedade e o trabalho." },
            { id: 'c', text: "Usar apenas as ferramentas mais caras.", isCorrect: false, feedback: "A tecnologia deve ser acessível e adequada ao contexto social." },
            { id: 'd', text: "Focar apenas em redes sociais.", isCorrect: false, feedback: "A tecnologia abrange processos produtivos, ferramentas, ciências e saberes." },
            { id: 'e', text: "Ignorar os impactos ambientais.", isCorrect: false, feedback: "A EPT promove o uso sustentável e consciente da tecnologia." }
        ]
    },
    {
        question: "O que acontece quando você destranca a 'Porta do Conhecimento da EPT'?",
        explanation: "O conhecimento adquirido na EPT é uma ferramenta poderosa. Ele não serve apenas para o sucesso individual, mas para a melhoria coletiva e social.",
        options: [
            { id: 'a', text: "Você ganha um prêmio em dinheiro.", isCorrect: false, feedback: "O verdadeiro prêmio é o conhecimento e a capacidade de transformação." },
            { id: 'b', text: "O jogo reinicia infinitamente.", isCorrect: false, feedback: "Há um objetivo maior na sua jornada educacional." },
            { id: 'c', text: "Você se torna um agente de transformação na sua comunidade e no mundo do trabalho.", isCorrect: true, feedback: "Parabéns! Esse é o verdadeiro objetivo da Educação Profissional e Tecnológica." },
            { id: 'd', text: "Você esquece tudo o que aprendeu.", isCorrect: false, feedback: "O conhecimento é para ser levado e aplicado por toda a vida." },
            { id: 'e', text: "Você para de estudar.", isCorrect: false, feedback: "A educação é um processo contínuo ao longo de toda a vida." }
        ]
    }
];

let currentStage = 0;
let keysCollected = 0;
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
            if (bubble) bubble.classList.add('hidden');
        }, 3000);
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
        btnElement.classList.add('wrong');
        showOwlMessage(option.feedback);
        speak("Ops! " + option.feedback);

        setTimeout(() => {
            allBtns.forEach(b => {
                b.disabled = false;
                b.classList.remove('wrong');
            });
            showOwlMessage("Tente novamente!");
        }, 4000);
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

function endGame() {
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    document.getElementById('end-screen').classList.add('active');
    document.getElementById('top-bar').classList.add('hidden');
    document.getElementById('owl-character').className = 'owl-character pos-end';
    window.playEndAudio();
}
