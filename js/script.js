const conteudos = {
    "portugues": {

        "contato": `
        <a>Contato</a>
        `,
        "sobre": `
        <h2>SOBRE MIM</h2>
        <article>
            <p>
                Sou graduando em Ciência da Computação pela UNESC, atualmente na terceira fase do curso. Minha
                trajetória é marcada pela curiosidade técnica e pela vontade de construir ferramentas que facilitem o
                cotidiano, unindo o desenvolvimento de software à inteligência artificial.

                No campo do desenvolvimento, possuo experiência intermediária em Python e sólida base em Java, com foco
                na criação de sistemas de automação e análise de dados utilizando FastAPI, Streamlit e Pandas. Tenho
                grande interesse na integração de LLMs (como o Llama 3.1) para processamento de linguagem natural e
                análise de sentimentos em tempo real.

                Além do código, sou um entusiasta de idiomas, estudando ativamente Norueguês (A2), Inglês (B2), o que me
                permite acessar documentações globais e colaborar em ambientes diversos. Também
                possuo um interesse particular em áreas que exigem análise estrutural e mecânica, como eletrônica e
                robótica, aplicando esse pensamento analítico em cada linha de código que escrevo.
            </p>
        </article>
        `,
        "formacao": `
            <h2>FORMAÇÃO ACADÊMICA</h2>
            <article>
                <ul>
                    <li>UNESC - Criciúma, SC</li>
                    <li>Bacharelado de Ciência da Computação</li>
                    <li>Status - Cursando | Previsão - Dezembro 2028</li>
                </ul>
            </article>
        `,
        "projetos": `
        <h2>PROJETOS </h2>
        <article id="Ninja_System">
            <ul>
                <li>Nome do Projeto: <a href="https://github.com/Andre-code-ai/Projeto_Interdisciplinar_Java_Banco_de_Dados" target="_blank"
                        rel="noopener">Sistema-de-Gerenciamento-Ninja.</a>
                </li>
                <li>Tecnologia usada: Java (Swing/JDBC), MySQL.</li>
                <li>O que faz: Sistema desktop em camadas (DAO/Service/View) para gerenciar ninjas e missões, com
                    validação de regras de negócio, vínculo entre ninja e missão, geração de totalizadores e views
                    otimizadas no banco.</li>
                <li>Aprendizado: Aprendi arquitetura em camadas, otimização de queries SQL e boas práticas de
                    gerenciamento de recursos JDBC.</li>
            </ul>
        </article>
        <article id="Market_Analyst">
            <ul>
                <li>Nome do Projeto: <a href="https://github.com/Andre-code-ai/market-sentiment-analyst" target="_blank"
                        rel="noopener">Market-Sentiment-Analyst.</a>
                </li>
                <li>Tecnologia usada: FastAPI, Streamlit, Groq Cloud, Pandas, Plotly, NewsAPI.</li>
                <li>O que faz: Ferramenta de análise financeira que processa manchetes via NewsAPI e utiliza modelos de
                    linguagem (Llama 3.1 via Groq) para classificar o sentimento do mercado em tempo real.</li>
                <li>Aprendizado: Aprendi a desenvolver sistemas de análises de dados com usos de API e Inteligência
                    Artificial.</li>
            </ul>
        </article>
        <article id="Urna_Eletronica">
            <ul>
                <li>Nome do Projeto: <a href="https://github.com/Andre-code-ai/Urna_Eletronica-Python" target="_blank"
                        rel="noopener">Urna-Eletrônica.</a></li>
                <li>Tecnologia usada: Python, Tkinter, MySQL.</li>
                <li>O que faz: Sistema de votação com interface gráfica em Tkinter, arquitetura em camadas
                    (conexão/serviço/interface) e banco de dados MySQL normalizado, com tabela de candidatos vinculada
                    aos votos por chave estrangeira.</li>
                <li>Aprendizado: Aprendi a estruturar um projeto Python em camadas e a normalizar um banco de dados
                    relacional com integridade referencial.</li>
            </ul>
        </article>
        <article id="Interface_Web">
            <ul>
                <li>Nome do Projeto: <a href="https://github.com/Andre-code-ai/Interface-Web-Responsiva" target="_blank"
                        rel="noopener">Interface-Web-Responsiva.</a>
                </li>
                <li>Tecnologia usada: Desenvolvimento web [HTML, CSS].</li>
                <li>O que faz: Desenvolvimento de uma página web estática focada em boas práticas de layout e adaptação
                    para diferentes tamanhos de tela.</li>
                <li>Aprendizado: Primeiro projeto web desenvolvido na faculdade, aprendendo a como criar sites
                    responsivos.</li>
            </ul>
        </article>
        `,
        "habilidades": `
        <h2>HABILIDADES E COMPETÊNCIAS</h2>
        <article>
            <ul>
                <li>Linguagens: Python (Intermediário), Java (Swing/JDBC), C/C++.</li>
                <li>Frameworks & Web: FastAPI, Streamlit, HTML5, CSS3.</li>
                <li>Dados & IA: MySQL, Integração com LLMs (Groq, OpenAI), Pandas, Plotly.</li>
                <li>DevOps & Ferramentas: Git, GitHub.</li>
            </ul>
        </article>
        `,

        "idiomas": `        
        <h2>IDIOMAS</h2>
        <article>
            <ul>
                <li>Português: Língua materna;</li>
                <li>Norueguês: A2 - Básico;</li>
                <li>Espanhol: A1 - Iniciante;</li>
                <li>Inglês: B2 - Intermediário;</li>
            </ul>
        </article>
        `,

        "rodape": `
        <p>Sombrio, SC | +55 48 99661-1732 | andreborgesdossantos123@gmail.com</p>
        <p>Projetado por André Borges dos Santos</p>
        `,

        "idiomas_label": "Mudar idioma:"

    },
    "ingles": {
        "contato": `
        <a>Contact</a>
        `,
        "sobre": `
            <h2>ABOUT ME</h2>
            <article>
                <p>
                I am a Computer Science student at UNESC, currently in my third semester. My journey is driven by technical curiosity and a desire to build tools that simplify daily life, merging software development with Artificial Intelligence.
                In the development field, I have intermediate experience in Python and a solid foundation in Java, focusing on automation systems and data analysis using FastAPI, Streamlit, and Pandas. I am highly interested in integrating LLMs (such as Llama 3.1) for natural language processing and real-time sentiment analysis.
                Beyond coding, I am a language enthusiast, actively studying Norwegian (A2) and English (B2), which allows me to access global documentation and collaborate in diverse environments. I also have a particular interest in areas requiring structural and mechanical analysis, such as electronics and robotics, applying this analytical mindset to every line of code I write.                
                </p>
            </article>
        `,
        "formacao": `
            <h2>EDUCATION</h2>
            <article>
                <ul>
                    <li>UNESC - Criciúma, SC</li>
                    <li>Bachelor of Computer Science</li>
                    <li>Status - Enrolled | Expected Graduation - December 2028</li>
                </ul>
            </article>`,

        "projetos": `
        <h2>MAIN PROJECTS</h2>
<article id="Ninja_System">
    <ul>
        <li>Project Name: <a href="https://github.com/Andre-code-ai/Projeto_Interdisciplinar_Java_Banco_de_Dados" target="_blank" rel="noopener">Ninja-Management-System.</a></li>
        <li>Technologies used: Java (Swing/JDBC), MySQL.</li>
        <li>What it does: Layered desktop system (DAO/Service/View) for managing ninjas and missions, including business rule validation, ninja-mission linking, totalizer generation, and optimized database views.</li>
        <li>Key Learning: Learned layered architecture, SQL query optimization, and JDBC resource management best practices.</li>
    </ul>
</article>
<article id="Market_Analyst">
    <ul>
        <li>Project Name: <a href="https://github.com/Andre-code-ai/market-sentiment-analyst" target="_blank" rel="noopener">Market-Sentiment-Analyst.</a></li>
        <li>Technologies used: FastAPI, Streamlit, Groq Cloud, Pandas, Plotly, NewsAPI.</li>
        <li>What it does: Financial analysis tool that processes headlines via NewsAPI and utilizes language models (Llama 3.1 via Groq) to classify market sentiment in real-time.</li>
        <li>Key Learning: Developed data analysis systems using APIs and Artificial Intelligence.</li>
    </ul>
</article>
<article id="Urna_Eletronica">
    <ul>
        <li>Project Name: <a href="https://github.com/Andre-code-ai/Urna_Eletronica-Python" target="_blank" rel="noopener">Urna-Eletrônica.</a></li>
        <li>Technologies used: Python, Tkinter, MySQL.</li>
        <li>What it does: Voting system with a Tkinter graphical interface, layered architecture (connection/service/UI), and a normalized MySQL database, with a candidates table linked to votes via foreign key.</li>
        <li>Key Learning: Learned how to structure a layered Python project and normalize a relational database with referential integrity.</li>
    </ul>
</article>
<article id="Interface_Web">
    <ul>
        <li>Project Name: <a href="https://github.com/Andre-code-ai/Interface-Web-Responsiva" target="_blank" rel="noopener">Responsive-Web-Interface.</a></li>
        <li>Technologies used: Web Development [HTML, CSS].</li>
        <li>What it does: Development of a static web page focused on layout best practices and adaptation for different screen sizes.</li>
        <li>Key Learning: First web project developed in college, learning how to create responsive websites.</li>
    </ul>
    </article>
        
    `,

        "habilidades": `
<h2>SKILLS & COMPETENCIES</h2>
<article>
    <ul>
        <li>Languages: Python (Intermediate), Java (Swing/JDBC), C/C++.</li>
        <li>Frameworks & Web: FastAPI, Streamlit, HTML5, CSS3.</li>
        <li>Data & AI: MySQL, LLM Integration (Groq, OpenAI), Pandas, Plotly.</li>
        <li>DevOps & Tools: Git, GitHub.</li>
    </ul>
</article>
`,
        "idiomas": `
    <h2>LANGUAGES</h2>
    <article>
        <ul>
            <li>Portuguese: Native speaker;</li>
            <li>Norwegian: A2 - Elementary;</li>
            <li>Spanish: A1 - Beginner;</li>
            <li>English: B2 - Upper-intermediate;</li>
        </ul>
    </article>
    `,
        "rodape": `
    <p>Sombrio, SC | +55 48 99661-1732 | andreborgesdossantos123@gmail.com</p>
    <p>Designed by André Borges dos Santos</p>
        `,
        "idiomas_label": "Change language"
    },

    "espanhol": {
        "contato": `
        <a>Contacto</a>
        `,
        "sobre": `
            <h2>SOBRE MÍ</h2>
            <article>
                <p>
                    Soy estudiante de Ciencias de la Computación en la UNESC, actualmente en la tercera etapa de la carrera. Mi trayectoria está marcada por la curiosidad técnica y el deseo de construir herramientas que faciliten el día a día, uniendo el desarrollo de software con la Inteligencia Artificial.
                    En el campo del desarrollo, poseo experiencia intermedia en Python y una base sólida en Java, con enfoque en la creación de sistemas de automatización y análisis de datos utilizando FastAPI, Streamlit y Pandas. Tengo un gran interés en la integración de LLMs (como Llama 3.1) para el procesamiento de lenguaje natural y el análisis de sentimientos en tiempo real.
                    Además del código, soy un entusiasta de los idiomas, estudiando activamente noruego (A2) e inglés (B2), lo que me permite acceder a documentación global y colaborar en entornos diversos. También poseo un interés particular en áreas que requieren análisis estructural y mecánico, como la electrónica y la robótica, aplicando este pensamiento analítico en cada línea de código que escribo.
                </p>
            </article>
            
            `,
        "formacao": `
            <h2>FORMACIÓN ACADÉMICA</h2>
            <article>
                <ul>
                    <li>UNESC - Criciúma, SC</li>
                    <li>Grado en Ciencias de la Computación</li>
                    <li>Estado: En curso | Graduación prevista: Diciembre de 2028</li>
                </ul>
            </article>
            
            `,

        "projetos": `
            <h2>PROYECTOS PRINCIPALES</h2>
<article id="Ninja_System">
    <ul>
        <li>Nombre del Proyecto: <a href="https://github.com/Andre-code-ai/Projeto_Interdisciplinar_Java_Banco_de_Dados" target="_blank" rel="noopener">Sistema-de-Gestión-Ninja.</a></li>
        <li>Tecnología utilizada: Java (Swing/JDBC), MySQL.</li>
        <li>Qué hace: Sistema de escritorio en capas (DAO/Service/View) para gestionar ninjas y misiones, con validación de reglas de negocio, vinculación ninja-misión, generación de totalizadores y vistas optimizadas en la base de datos.</li>
        <li>Aprendizaje: Aprendí arquitectura en capas, optimización de consultas SQL y buenas prácticas de gestión de recursos JDBC.</li>
    </ul>
</article>
<article id="Market_Analyst">
    <ul>
        <li>Nombre del Proyecto: <a href="https://github.com/Andre-code-ai/market-sentiment-analyst" target="_blank" rel="noopener">Market-Sentiment-Analyst.</a></li>
        <li>Tecnología utilizada: FastAPI, Streamlit, Groq Cloud, Pandas, Plotly, NewsAPI.</li>
        <li>Qué hace: Herramienta de análisis financiero que procesa titulares vía NewsAPI y utiliza modelos de lenguaje (Llama 3.1 vía Groq) para clasificar el sentimiento del mercado en tiempo real.</li>
        <li>Aprendizaje: Aprendí a desarrollar sistemas de análisis de datos con el uso de API e Inteligencia Artificial.</li>
    </ul>
</article>
<article id="Urna_Eletronica">
    <ul>
        <li>Nombre del Proyecto: <a href="https://github.com/Andre-code-ai/Urna_Eletronica-Python" target="_blank" rel="noopener">Urna-Eletrônica.</a></li>
        <li>Tecnología utilizada: Python, Tkinter, MySQL.</li>
        <li>Qué hace: Sistema de votación con interfaz gráfica en Tkinter, arquitectura en capas (conexión/servicio/interfaz) y base de datos MySQL normalizada, con una tabla de candidatos vinculada a los votos mediante clave foránea.</li>
        <li>Aprendizaje: Aprendí a estructurar un proyecto Python en capas y a normalizar una base de datos relacional con integridad referencial.</li>
    </ul>
</article>
<article id="Interface_Web">
    <ul>
        <li>Nombre del Proyecto: <a href="https://github.com/Andre-code-ai/Interface-Web-Responsiva" target="_blank" rel="noopener">Interfaz-Web-Responsiva.</a></li>
        <li>Tecnología utilizada: Desarrollo web [HTML, CSS].</li>
        <li>Qué hace: Desarrollo de una página web estática enfocada en buenas prácticas de diseño y adaptación para diferentes tamaños de pantalla.</li>
        <li>Aprendizaje: Primer proyecto web desarrollado en la facultad, aprendiendo a crear sitios responsivos.</li>
    </ul>
</article>
            
            `,
        "habilidades": `
<h2>HABILIDADES Y COMPETENCIAS</h2>
<article>
    <ul>
        <li>Lenguajes: Python (Intermedio), Java (Swing/JDBC), C/C++.</li>
        <li>Frameworks y Web: FastAPI, Streamlit, HTML5, CSS3.</li>
        <li>Datos e IA: MySQL, Integración con LLMs (Groq, OpenAI), Pandas, Plotly.</li>
        <li>DevOps y Herramientas: Git, GitHub.</li>
    </ul>
</article>
`,
        "idiomas": `
    <h2>IDIOMAS</h2>
    <article>
        <ul>
            <li>Portugués: Lengua materna;</li>
            <li>Noruego: A2 - Básico;</li>
            <li>Español: A1 - Principiante;</li>
            <li>Inglés: B2 - Intermedio;</li>
        </ul>
    </article>
        `,
        "rodape": `
        <p>Sombrio, SC | +55 48 99661-1732 | andreborgesdossantos123@gmail.com</p>
        <p>Diseñado por André Borges dos Santos</p>
        `,

        "idiomas_label": "Cambiar idioma:"
    },

    "noruegues": {
        "contato": `
        <a>kontakt</a>
        `,
        "sobre": `
            <h2>OM MEG</h2>
            <article>
                <p>
                    Jeg er informatikkstudent ved UNESC, og går for tiden i mitt tredje semester. Min reise er preget av teknisk nysgjerrighet og et ønske om å bygge verktøy som forenkler hverdagen, ved å forene programvareutvikling med kunstig intelligens.
                    Innen utvikling har jeg mellomnivå-erfaring med Python og et solid grunnlag i Java, med fokus på utvikling av automatiseringssystemer og dataanalyse ved bruk av FastAPI, Streamlit og Pandas. Jeg har stor interesse for integrering av store språkmodeller (som Llama 3.1) for naturlig språkbehandling og sentimentanalyse i sanntid.
                    Utenom koding er jeg språkinteressert og studerer aktivt norsk (A2) og engelsk (B2). Dette gjør at jeg kan lese global dokumentasjon og samarbeide i internasjonale miljøer. Jeg har også en spesiell interesse for områder som krever strukturell og mekanisk analyse, som elektronikk og robotikk, og jeg bruker denne analytiske tilnærmingen i hver kodelinje jeg skriver.
                </p>
            </article>
        `,
        "formacao": `
            <h2>UTDANNING</h2>
            <article>
                <ul>
                    <li>UNESC - Criciúma, SC</li>
                    <li>Bachelor i informatikk</li>
                    <li>Pågående | Forventet ferdigstillelse: Desember 2028</li>
                </ul>
            </article>
        `,
        "projetos": `
        <h2>HOVEDPROSJEKTER</h2>
<article id="Ninja_System">
    <ul>
        <li>Prosjektnavn: <a href="https://github.com/Andre-code-ai/Projeto_Interdisciplinar_Java_Banco_de_Dados" target="_blank" rel="noopener">Ninja-administrasjonssystem.</a></li>
        <li>Brukt teknologi: Java (Swing/JDBC), MySQL.</li>
        <li>Hva det gjør: Lagdelt skrivebordssystem (DAO/Service/View) for å administrere ninjaer og oppdrag, med validering av forretningsregler, kobling mellom ninja og oppdrag, generering av oppsummeringer og optimaliserte databasevisninger.</li>
        <li>Læring: Lærte lagdelt arkitektur, SQL-spørringsoptimalisering og god praksis for JDBC-ressurshåndtering.</li>
    </ul>
</article>
<article id="Market_Analyst">
    <ul>
        <li>Prosjektnavn: <a href="https://github.com/Andre-code-ai/market-sentiment-analyst" target="_blank" rel="noopener">Market-Sentiment-Analyst.</a></li>
        <li>Brukt teknologi: FastAPI, Streamlit, Groq Cloud, Pandas, Plotly, NewsAPI.</li>
        <li>Hva det gjør: Verktøy for finansanalyse som behandler overskrifter via NewsAPI og bruker språkmodeller (Llama 3.1 via Groq) for å klassifisere markedsstemning i sanntid.</li>
        <li>Læring: Lærte å utvikle dataanalysesystemer ved bruk av API-er og kunstig intelligens.</li>
    </ul>
</article>
<article id="Urna_Eletronica">
    <ul>
        <li>Prosjektnavn: <a href="https://github.com/Andre-code-ai/Urna_Eletronica-Python" target="_blank" rel="noopener">Urna-Eletrônica.</a></li>
        <li>Brukt teknologi: Python, Tkinter, MySQL.</li>
        <li>Hva det gjør: Valsystem med grafisk grensesnitt i Tkinter, lagdelt arkitektur (tilkobling/tjeneste/grensesnitt) og en normalisert MySQL-database, med en kandidattabell koblet til stemmene via fremmednøkkel.</li>
        <li>Læring: Lærte å strukturere et lagdelt Python-prosjekt og normalisere en relasjonsdatabase med referanseintegritet.</li>
    </ul>
</article>
<article id="Interface_Web">
    <ul>
        <li>Prosjektnavn: <a href="https://github.com/Andre-code-ai/Interface-Web-Responsiva" target="_blank" rel="noopener">Responsivt-Web-Grensesnitt.</a></li>
        <li>Brukt teknologi: Web-utvikling [HTML, CSS].</li>
        <li>Hva det gjør: Utvikling av en statisk nettside med fokus på beste praksis for layout og tilpasning til ulike skjermstørrelser.</li>
        <li>Læring: Første webprosjekt utviklet på universitetet, hvor jeg lærte å lage responsive nettsider.</li>
    </ul>
</article>
        `,

        "habilidades": `
<h2>FERDIGHETER OG KOMPETANSE</h2>
<article>
    <ul>
        <li>Språk: Python (Mellomnivå), Java (Swing/JDBC), C/C++.</li>
        <li>Rammeverk og Web: FastAPI, Streamlit, HTML5, CSS3.</li>
        <li>Data og AI: MySQL, Integrering med LLMs (Groq, OpenAI), Pandas, Plotly.</li>
        <li>DevOps og Verktøy: Git, GitHub.</li>
    </ul>
</article>
`,
        "idiomas": `
    <h2>SPRÅK</h2>
    <article>
        <ul>
            <li>Portugisisk: Morsmål;</li>
            <li>Norsk: A2 - Grunnleggende;</li>
            <li>Spansk: A1 - Nybegynner;</li>
            <li>Engelsk: B2 - Mellomnivå;</li>
        </ul>
    </article>
        
        `,
        "rodape": `
            <p>Sombrio, SC | +55 48 99661-1732 | andreborgesdossantos123@gmail.com</p>
            <p>Designet av André Borges dos Santos</p>
        `,

        "idiomas_label": "Bytt språk:"
    }
};

const langCodes = {
    portugues: "pt-BR",
    ingles: "en",
    espanhol: "es",
    noruegues: "no"
};

const selectIdioma = document.getElementById('Idiomas');

selectIdioma.addEventListener('change', (e) => {
    const lang = e.target.value;

    document.documentElement.lang = langCodes[lang];

    document.getElementById("contato").innerHTML = conteudos[lang].contato;
    document.getElementById('sobre').innerHTML = conteudos[lang].sobre;
    document.getElementById('formacao').innerHTML = conteudos[lang].formacao;
    document.getElementById('projetos').innerHTML = conteudos[lang].projetos;
    document.getElementById('habilidades').innerHTML = conteudos[lang].habilidades;
    document.getElementById('idiomas').innerHTML = conteudos[lang].idiomas;
    document.getElementById('rodape').innerHTML = conteudos[lang].rodape;

    document.querySelector('label[for="Idiomas"]').innerHTML = conteudos[lang].idiomas_label;
});