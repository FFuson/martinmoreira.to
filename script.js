// Objeto de traducciones (parcial, para demostración)
const translations = {
    es: {
        "page_title": "Martín Moreira",
        "header_name_typing": "[Martín_Moreira]",
        "header_subtitle_typing": " // Desarrollador Web_",
        "comment_auth_complete": "// auth_sequence_complete: user_verified",
        "comment_secure_channel": "// secure_channel_established: true",
        "nav_about": "Sobre Mí",
        "nav_experience": "Experiencia",
        "nav_contact": "Contacto",
        "terminal_section_title": "// Consola Segura _",
        "terminal_prompt_alias": "[TU_ALIAS]",
        "terminal_prompt_host": "experto-seguridad",
        "comment_shell_loaded": "// shell_interface_loaded: awaiting_input",
        "about_section_title": "// Sobre Mí",
        "about_section_paragraph": "Soy un especialista en ciberseguridad y desarrollo web con una sólida formación académica y experiencia práctica en el mantenimiento de webs conocidas y creación de nuevas aplicaciones, principalmente desarrolladas en PHP. Busco constantemente aplicar mis conocimientos para abordar desafíos complejos y contribuir significativamente a los proyectos.",
        "experience_section_title": "// Experiencia Académica y Profesional_",
        "exp1_title": "Sistemas Microinformáticos y Redes",
        "exp1_loc_date": "<span class=\"font-semibold\">Colegio Tres Olivos</span> | 2020 - 2022",
        "exp1_desc": "Durante esta etapa, adquirí una base fundamental en la administración de sistemas y redes.",
        "exp2_title": "Desarrollo de aplicaciones web",
        "exp2_loc_date": "<span class=\"font-semibold\">ESIC</span> | 2022 - 2024",
        "exp2_desc": "Me capacité en el ciclo completo de desarrollo de aplicaciones web, con un énfasis en HTML, CSS, JS y PHP.",
        "exp3_title": "Máster en Ciber Seguridad",
        "exp3_loc_date": "<span class=\"font-semibold\">IFP</span> | 2024 - 2025",
        "exp3_desc": "Me formé en la protección de sistemas informáticos, redes y datos frente a amenazas digitales. Aprendí a identificar vulnerabilidades, gestionar riesgos y aplicar metodologías de análisis forense, hacking ético y pruebas de penetración.",
        "exp4_title": "Desarrollador Web",
        "exp4_loc_date": "<span class=\"font-semibold\">Varadero Software Factory</span> | 2024 - Actualidad",
        "exp4_desc": "Como Desarrollador Web, aplico mis conocimientos en la creación y mantenimiento de aplicaciones seguras y eficientes. Mi rol incluye la participación activa en el mantenimiento y desarrollo de aplicaciones web.",
        "contact_section_title": "// Contacto",
        "contact_section_paragraph": "Si tienes alguna pregunta, propuesta de colaboración o simplemente quieres conectar, no dudes en contactarme. Estoy abierto a nuevas oportunidades y desafíos en el mundo de la ciberseguridad y el desarrollo web. ¡Espero tu mensaje!",
        "contact_email_label": "Email:",
        "contact_github_label": "GitHub:",
        "contact_linkedin_label": "LinkedIn:",
        "contact_linkedin_profile_placeholder": "[Tu Perfil de LinkedIn]",
        "comment_e2e_active": "// e2e_encryption_layer: active",
        "comment_comms_link_handshake": "// secure_comms_link: established_awaiting_handshake",
        "comment_session_terminate": "// session.terminate();",
        "footer_copyright": "Martín Moreira García.",
        "comment_logoff_initiated": "// system_logoff_initiated: audit_trail_saved",
        "comment_mission_accomplished": "// mission_status: accomplished_securely",
        // Terminal
        "terminal_banner_line1": "Consola Linux v3.0",
        "terminal_banner_line2": "Escribe '<span class=\"tech-text-green\">ayuda</span>' para ver la lista de comandos disponibles.",
        "terminal_banner_line3": "Escribe '<span class=\"tech-text-purple\">iniciar_desafio</span>' para comenzar un reto de ciberseguridad.",
        "terminal_user_guest": "invitado",
        "terminal_user_hacker": "hacker_novato",
        "terminal_host_web": "linux-web",
        "terminal_host_challenge": "desafio-net",
        "terminal_cmd_not_found": "<span class=\"error-text\">Comando no encontrado: {commandName}</span>",
        "terminal_cmd_help_title": "Comandos disponibles:",
        "terminal_cmd_help_entry": "<span class=\"tech-text-green\">{command}</span>{padding}- <span class=\"terminal-description\">{description}</span>",
        "terminal_cmd_help_desc_ayuda": "Muestra esta lista de comandos.",
        "terminal_cmd_help_desc_ls": "Lista archivos y directorios.",
        "terminal_cmd_help_desc_cat": "Muestra el contenido de un archivo.",
        "terminal_cmd_help_desc_cd": "Cambia de directorio.",
        "terminal_cmd_help_desc_pwd": "Muestra el directorio actual.",
        "terminal_cmd_help_desc_about": "Muestra información sobre mí.",
        "terminal_cmd_help_desc_experiencia": "Muestra experiencia académica y profesional.",
        "terminal_cmd_help_desc_proyectos": "Muestra proyectos destacados.",
        "terminal_cmd_help_desc_habilidades": "Muestra habilidades clave.",
        "terminal_cmd_help_desc_contacto": "Muestra información de contacto.",
        "terminal_cmd_help_desc_whoami": "Muestra tu nombre de usuario.",
        "terminal_cmd_help_desc_date": "Muestra la fecha y hora actual.",
        "terminal_cmd_help_desc_clear": "Limpia la pantalla de la terminal.",
        "terminal_cmd_help_desc_echo": "Repite el texto que escribas.",
        "terminal_cmd_help_desc_sudo": "(Comando de broma).",
        "terminal_cmd_help_desc_banner": "Vuelve a mostrar el mensaje de bienvenida.",
        "terminal_cmd_help_desc_salir_desafio": "Abandona el modo desafío.",
        "terminal_cmd_help_desc_iniciar_desafio": "Comienza un pequeño reto de ciberseguridad.",
        "terminal_cmd_help_desc_inyectar_virus": "[!] Intenta obtener tu IP pública y geolocalización (simulado).",
        "terminal_cmd_help_desc_exit": "Cierra la terminal (simulado).",
    },
    en: {
        "page_title": "Martín Moreira",
        "header_name_typing": "[Martín_Moreira]",
        "header_subtitle_typing": " // Web Developer_",
        "comment_auth_complete": "// auth_sequence_complete: user_verified",
        "comment_secure_channel": "// secure_channel_established: true",
        "nav_about": "About Me",
        "nav_experience": "Experience",
        "nav_contact": "Contact",
        "terminal_section_title": "// Secure Console _",
        "terminal_prompt_alias": "[YOUR_ALIAS]",
        "terminal_prompt_host": "security-expert",
        "comment_shell_loaded": "// shell_interface_loaded: awaiting_input",
        "about_section_title": "// About Me",
        "about_section_paragraph": "I am a cybersecurity and web development specialist with a solid academic background and practical experience in maintaining well-known websites and creating new applications, mainly developed in PHP. I constantly seek to apply my knowledge to address complex challenges and contribute significantly to projects.",
        "experience_section_title": "// Academic and Professional Experience_",
        "exp1_title": "Microcomputer Systems and Networks",
        "exp1_loc_date": "<span class=\"font-semibold\">Colegio Tres Olivos</span> | 2020 - 2022", // School names might not be translated
        "exp1_desc": "During this stage, I acquired a fundamental basis in systems and network administration.",
        "exp2_title": "Web Application Development",
        "exp2_loc_date": "<span class=\"font-semibold\">ESIC</span> | 2022 - 2024",
        "exp2_desc": "I trained in the complete web application development cycle, with an emphasis on HTML, CSS, JS, and PHP.",
        "exp3_title": "Master in Cyber Security",
        "exp3_loc_date": "<span class=\"font-semibold\">IFP</span> | 2024 - 2025",
        "exp3_desc": "I trained in the protection of computer systems, networks, and data against digital threats. I learned to identify vulnerabilities, manage risks, and apply methodologies of forensic analysis, ethical hacking, and penetration testing.",
        "exp4_title": "Web Developer",
        "exp4_loc_date": "<span class=\"font-semibold\">Varadero Software Factory</span> | 2024 - Present",
        "exp4_desc": "As a Web Developer, I apply my knowledge in creating and maintaining secure and efficient applications. My role includes active participation in the maintenance and development of web applications.",
        "contact_section_title": "// Contact",
        "contact_section_paragraph": "If you have any questions, collaboration proposals, or just want to connect, don't hesitate to contact me. I am open to new opportunities and challenges in the world of cybersecurity and web development. I look forward to your message!",
        "contact_email_label": "Email:",
        "contact_github_label": "GitHub:",
        "contact_linkedin_label": "LinkedIn:",
        "contact_linkedin_profile_placeholder": "[Your LinkedIn Profile]",
        "comment_e2e_active": "// e2e_encryption_layer: active",
        "comment_comms_link_handshake": "// secure_comms_link: established_awaiting_handshake",
        "comment_session_terminate": "// session.terminate();",
        "footer_copyright": "Martín Moreira García.", // Name likely stays
        "comment_logoff_initiated": "// system_logoff_initiated: audit_trail_saved",
        "comment_mission_accomplished": "// mission_status: accomplished_securely",
        // Terminal
        "terminal_banner_line1": "Linux Console v3.0",
        "terminal_banner_line2": "Type '<span class=\"tech-text-green\">help</span>' to see the list of available commands.",
        "terminal_banner_line3": "Type '<span class=\"tech-text-purple\">start_challenge</span>' to begin a cybersecurity challenge.",
        "terminal_user_guest": "guest",
        "terminal_user_hacker": "rookie_hacker",
        "terminal_host_web": "linux-web",
        "terminal_host_challenge": "challenge-net",
        "terminal_cmd_not_found": "<span class=\"error-text\">Command not found: {commandName}</span>",
        "terminal_cmd_help_title": "Available commands:",
        "terminal_cmd_help_entry": "<span class=\"tech-text-green\">{command}</span>{padding}- <span class=\"terminal-description\">{description}</span>",
        "terminal_cmd_help_desc_ayuda": "Displays this list of commands.",
        "terminal_cmd_help_desc_ls": "Lists files and directories.",
        "terminal_cmd_help_desc_cat": "Displays the content of a file.",
        "terminal_cmd_help_desc_cd": "Changes directory.",
        "terminal_cmd_help_desc_pwd": "Displays the current directory.",
        "terminal_cmd_help_desc_about": "Displays information about me.",
        "terminal_cmd_help_desc_experiencia": "Displays academic and professional experience.",
        "terminal_cmd_help_desc_proyectos": "Displays featured projects.",
        "terminal_cmd_help_desc_habilidades": "Displays key skills.",
        "terminal_cmd_help_desc_contacto": "Displays contact information.",
        "terminal_cmd_help_desc_whoami": "Displays your username.",
        "terminal_cmd_help_desc_date": "Displays the current date and time.",
        "terminal_cmd_help_desc_clear": "Clears the terminal screen.",
        "terminal_cmd_help_desc_echo": "Repeats the text you type.",
        "terminal_cmd_help_desc_sudo": "(Joke command).",
        "terminal_cmd_help_desc_banner": "Redisplays the welcome message.",
        "terminal_cmd_help_desc_salir_desafio": "Exits challenge mode.",
        "terminal_cmd_help_desc_iniciar_desafio": "Starts a small cybersecurity challenge.",
        "terminal_cmd_help_desc_inyectar_virus": "[!] Attempts to get your public IP and geolocation (simulated).",
        "terminal_cmd_help_desc_exit": "Closes the terminal (simulated).",
    }
};

let currentLanguage = 'es'; // Idioma por defecto

// Función para establecer el idioma
function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;

    // Actualizar botones del selector de idioma
    document.querySelectorAll('#lang-switcher .lang-button').forEach(button => {
        if (button.dataset.lang === lang) {
            button.classList.add('active-lang');
        } else {
            button.classList.remove('active-lang');
        }
    });

    // Traducir elementos con data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        const translation = translations[lang][key] || translations['es'][key]; // Fallback a español

        if (translation !== undefined) {
            if (element.classList.contains('typing-effect') || element.classList.contains('typing-effect-delayed')) {
                // Para los efectos de tipeo, solo cambiamos el texto.
                // La animación de tipeo se reiniciará visualmente debido al cambio de contenido.
                element.textContent = translation;
            } else {
                element.innerHTML = translation; // Usar innerHTML para permitir HTML en las traducciones
            }
        } else {
            console.warn(`Missing translation for key: ${key} in language: ${lang}`);
        }
    });

    // Re-aplicar el efecto de glitch a los elementos que lo necesiten después de la traducción
    // Es importante que spanifyLetters se llame DESPUÉS de que el contenido haya sido traducido.
    document.querySelectorAll('[data-text-content]').forEach(el => {
        // Limpiar spans de cyber-letter existentes para evitar duplicados o anidamientos incorrectos
        // Esto es una simplificación; una solución más robusta podría ser necesaria para casos complejos.
        const existingCyberLetters = el.querySelectorAll('.cyber-letter');
        existingCyberLetters.forEach(span => {
            if (span.dataset.originalChar) {
                span.outerHTML = span.dataset.originalChar;
            } else if (span.textContent.length === 1 && span.parentElement && !span.parentElement.classList.contains('typing-effect') && !span.parentElement.classList.contains('typing-effect-delayed')) {
                // Solo revierte si no es parte de un efecto de tipeo y es un solo caracter
                 // span.outerHTML = span.textContent; // Comentado porque puede ser destructivo
            }
        });


        if (!el.querySelector('.typing-effect') && !el.querySelector('.typing-effect-delayed')) {
            spanifyLetters(el);
        } else {
            // Para elementos que contienen efectos de tipeo, procesar nodos hijos individualmente
            Array.from(el.childNodes).forEach(child => {
                if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
                    const tempWrapper = document.createElement('div');
                    tempWrapper.textContent = child.textContent;
                    spanifyLetters(tempWrapper);
                    while (tempWrapper.firstChild) {
                        child.parentNode.insertBefore(tempWrapper.firstChild, child);
                    }
                    if (child.parentNode) child.parentNode.removeChild(child);
                } else if (child.nodeType === Node.ELEMENT_NODE &&
                           !child.classList.contains('typing-effect') &&
                           !child.classList.contains('typing-effect-delayed') &&
                           !child.classList.contains('cyber-letter')) {
                    spanifyLetters(child);
                }
            });
        }
    });
    
    // Actualizar el prompt de la terminal si es necesario
    updateTerminalPrompt();
    // Si la terminal ya está abierta, el banner podría necesitar ser refrescado
    // o los comandos de ayuda, etc. Por ahora, los nuevos comandos usarán el idioma.
    // Para una actualización completa, se necesitaría limpiar y re-renderizar partes de la terminal.
}


// Para el año actual en el footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Script para suavizar el scroll de los enlaces ancla
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            if (targetId !== '#terminal-interactiva') { // No hacer scroll si es el enlace a la terminal
                 targetElement.scrollIntoView({ behavior: 'smooth' });
            } else { // Si es el enlace a la terminal, solo enfocar el input
                if (terminalInput) terminalInput.focus();
            }
        }
    });
});

// --- Lógica para la terminal interactiva ---
const terminalOutput = document.getElementById('terminalOutput');
const terminalInput = document.getElementById('terminalInput');
const terminalElement = document.getElementById('terminal');
const promptDisplay = document.getElementById('terminalPromptDisplay');

let currentPath = "~";
let commandHistory = [];
let historyIndex = -1;

let inChallengeMode = false;
let currentChallengePath = "/";
let awaitingVirusConfirmation = false;

const pseudoRussianChars = [
    'Д', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'п', 'ф', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я',
    'Д', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'П', 'Ф', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
    'б', 'г', 'д', 'ё', 'ђ', 'ѓ', 'є', 'ѕ', 'ї', 'ј', 'љ', 'њ', 'ћ', 'ќ', 'ў', 'џ', 'ѻ', 'ѽ', 'ѿ', '҈', '҉'
];

const latinToCyrillicSimple = {
    'a': 'а', 'b': 'б', 'c': 'ц', 'd': 'д', 'e': 'е', 'f': 'ф', 'g': 'г', 'h': 'х',
    'i': 'и', 'j': 'ј', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
    'q': 'я', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'v': 'в', 'w': 'ш', 'x': 'х',
    'y': 'ы', 'z': 'з',
    'A': 'А', 'B': 'Б', 'C': 'Ц', 'D': 'Д', 'E': 'Е', 'F': 'Ф', 'G': 'Г', 'H': 'Х',
    'I': 'И', 'J': 'Ј', 'K': 'К', 'L': 'Л', 'M': 'М', 'N': 'Н', 'O': 'О', 'P': 'П',
    'Q': 'Я', 'R': 'Р', 'S': 'С', 'T': 'Т', 'U': 'У', 'V': 'В', 'W': 'Ш', 'X': 'Х',
    'Y': 'Ы', 'Z': 'З',
    '0':'О', '1':'І', '2':'З', '3':'З', '4':'Ч', '5':'Ѕ', '6':'Ь', '7':'Г', '8':'В', '9':'Э'
};

function getRandomPseudoRussianChar() {
    return pseudoRussianChars[Math.floor(Math.random() * pseudoRussianChars.length)];
}

function toPseudoRussianChar(char) {
    if (char.match(/[a-zA-Z0-9]/)) {
        return latinToCyrillicSimple[char] || getRandomPseudoRussianChar();
    }
    return char;
}

function applyCharTransform(element, transform) {
    if (!element || !element.classList.contains('cyber-letter') || element.textContent === ' ') return;
    if (transform) {
        if (!element.dataset.originalChar) {
            element.dataset.originalChar = element.textContent;
        }
        element.textContent = toPseudoRussianChar(element.dataset.originalChar);
        element.classList.add('glitching');
    } else {
        if (element.dataset.originalChar) {
            element.textContent = element.dataset.originalChar;
        }
        element.classList.remove('glitching');
    }
}

function spanifyLetters(element) {
    if (!element || element.classList.contains('typing-effect') || element.classList.contains('typing-effect-delayed') || element.closest('.typing-effect, .typing-effect-delayed')) {
        return;
    }

    const childNodes = Array.from(element.childNodes);
    childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
            const text = child.textContent;
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                if (char === ' ') {
                    fragment.appendChild(document.createTextNode(' '));
                } else {
                    const span = document.createElement('span');
                    span.className = 'cyber-letter';
                    span.textContent = char;
                    span.dataset.originalChar = char; // Guardar el caracter original
                    span.addEventListener('mouseenter', (e) => {
                        const current = e.target;
                        const prev = current.previousElementSibling;
                        const next = current.nextElementSibling;
                        applyCharTransform(current, true);
                        if (prev && prev.classList.contains('cyber-letter')) applyCharTransform(prev, true);
                        if (next && next.classList.contains('cyber-letter')) applyCharTransform(next, true);
                    });
                    span.addEventListener('mouseleave', (e) => {
                        const current = e.target;
                        const prev = current.previousElementSibling;
                        const next = current.nextElementSibling;
                        applyCharTransform(current, false);
                        if (prev && prev.classList.contains('cyber-letter')) applyCharTransform(prev, false);
                        if (next && next.classList.contains('cyber-letter')) applyCharTransform(next, false);
                    });
                    fragment.appendChild(span);
                }
            }
            if (child.parentNode) child.parentNode.replaceChild(fragment, child);
        } else if (child.nodeType === Node.ELEMENT_NODE &&
                   !child.classList.contains('cyber-letter') &&
                   !child.classList.contains('typing-effect') &&
                   !child.classList.contains('typing-effect-delayed')) {
            spanifyLetters(child);
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    // Aplicar idioma inicial (por defecto 'es' o el guardado)
    // Podrías guardar la preferencia del usuario en localStorage aquí
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        setLanguage(currentLanguage); // 'es' por defecto
    }


    // Event listeners para los botones de idioma
    document.querySelectorAll('#lang-switcher .lang-button').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('preferredLanguage', lang); // Guardar preferencia
        });
    });

    // Inicialización de la terminal solo después de que el DOM esté listo
    if (terminalElement) {
        addOutput(getBanner(), false); // getBanner ahora usará currentLanguage
        updateTerminalPrompt(); // updateTerminalPrompt ahora usará currentLanguage
        if(terminalInput) terminalInput.focus();
    }
});

// --- Definiciones de contenido de la terminal (deben usar traducciones) ---
// Ejemplo: sectionContents (necesitaría ser una función o acceder a translations)
const getSectionContents = () => {
    const lang = translations[currentLanguage];
    return {
        "sobremi.txt": `
== ${lang.about_section_title || "Sobre Mí"} == 
${lang.about_section_paragraph || "Contenido sobre mí..."}
// profile_access_level: user
`,
        // ... otras secciones traducidas
        "experiencia.txt": `Contenido de experiencia...`, // Placeholder
        "contacto.txt": `Contenido de contacto...`,     // Placeholder
        "habilidades.txt": `Contenido de habilidades...`, // Placeholder
        "proyectos.txt": `Contenido de proyectos...`      // Placeholder
    };
};

const fileSystem = { // Este sistema de archivos es estático, su contenido debe ser traducido
    "~": {
        "type": "directory",
        "content": {
            // Los contentProvider ahora deben ser conscientes del idioma
            "sobremi.txt": { "type": "file", "contentProvider": () => getSectionContents()["sobremi.txt"] },
            "experiencia.txt": { "type": "file", "contentProvider": () => getSectionContents()["experiencia.txt"] },
            "contacto.txt": { "type": "file", "contentProvider": () => getSectionContents()["contacto.txt"] },
            "habilidades.txt": { "type": "file", "contentProvider": () => getSectionContents()["habilidades.txt"] },
            "proyectos.txt": { "type": "file", "contentProvider": () => getSectionContents()["proyectos.txt"] }
        }
    }
};

// El challengeFileSystem es extenso y también necesitaría una refactorización similar
// a getSectionContents para ser completamente traducible.
// Por brevedad, se omite la refactorización completa aquí.
const challengeFileSystem = { /* ... Estructura original ... */ };
function getChallengeFsNode(path) { /* ... Lógica original ... */ return null;}


function getBanner() {
    const lang = translations[currentLanguage];
    return `
<div class="ascii-banner">
<span style="color: var(--primary-text); font-size: 0.9em;">${lang.terminal_banner_line1}</span>
</div>
<span class="primary-text">${lang.terminal_banner_line2}</span>
<span class="primary-text">${lang.terminal_banner_line3}</span>
------------------------------------------------------------------`;
}

async function fetchAndDisplayIPInfo() {
    // Esta función genera mucho texto que necesitaría claves de traducción.
    // Por brevedad, se deja como ejercicio.
    addOutput("<span class='tech-text-blue'>Obteniendo información de geolocalización IP...</span>", false);
    // ... resto de la función
}


const commands = {
    ayuda: () => {
        const lang = translations[currentLanguage];
        let helpText = `${lang.terminal_cmd_help_title}\n`;
        const commandHelpEntries = [
            { cmd: "ayuda", descKey: "terminal_cmd_help_desc_ayuda" },
            { cmd: "ls", descKey: "terminal_cmd_help_desc_ls" },
            { cmd: "cat <archivo>", descKey: "terminal_cmd_help_desc_cat" },
            { cmd: "cd <directorio>", descKey: "terminal_cmd_help_desc_cd" },
            { cmd: "pwd", descKey: "terminal_cmd_help_desc_pwd" },
        ];
        if (!inChallengeMode) {
            commandHelpEntries.push(
                { cmd: "about | sobremi", descKey: "terminal_cmd_help_desc_about" },
                { cmd: "experiencia", descKey: "terminal_cmd_help_desc_experiencia" },
                { cmd: "proyectos", descKey: "terminal_cmd_help_desc_proyectos" },
                { cmd: "habilidades", descKey: "terminal_cmd_help_desc_habilidades" },
                { cmd: "contacto", descKey: "terminal_cmd_help_desc_contacto" }
            );
        }
        commandHelpEntries.push(
            { cmd: "whoami", descKey: "terminal_cmd_help_desc_whoami" },
            { cmd: "date", descKey: "terminal_cmd_help_desc_date" },
            { cmd: "clear | limpiar", descKey: "terminal_cmd_help_desc_clear" },
            { cmd: "echo <texto>", descKey: "terminal_cmd_help_desc_echo" },
            { cmd: "sudo <comando>", descKey: "terminal_cmd_help_desc_sudo" },
            { cmd: "banner", descKey: "terminal_cmd_help_desc_banner" }
        );
        if (inChallengeMode) {
            commandHelpEntries.push({ cmd: "salir_desafio", descKey: "terminal_cmd_help_desc_salir_desafio" });
        } else {
            commandHelpEntries.push(
                { cmd: "iniciar_desafio", descKey: "terminal_cmd_help_desc_iniciar_desafio" },
                { cmd: "inyectar_virus", descKey: "terminal_cmd_help_desc_inyectar_virus", isError: true }
            );
        }
        commandHelpEntries.push({ cmd: "exit", descKey: "terminal_cmd_help_desc_exit" });

        commandHelpEntries.forEach(entry => {
            const desc = lang[entry.descKey] || entry.descKey;
            // Ajustar padding para alineación
            const cmdText = entry.isError ? `<span class="tech-text-red">${entry.cmd}</span>` : `<span class="tech-text-green">${entry.cmd}</span>`;
            const padding = ' '.repeat(Math.max(0, 25 - entry.cmd.length));
            helpText += `  ${cmdText}${padding}- <span class="terminal-description">${desc}</span>\n`;
        });
        return helpText;
    },
    ls: (args) => {
        // Esta función y otras de comandos necesitarían usar traducciones para sus salidas.
        // Ejemplo: "<span class='text-subtle'>(Directorio vacío)</span>" -> lang.terminal_ls_empty
        let output = "";
        if (inChallengeMode) {
            const node = getChallengeFsNode(currentChallengePath);
            if (node && node.type === "directory" && node.content) {
                if (Object.keys(node.content).length === 0) return translations[currentLanguage].terminal_cmd_output_ls_empty || "<span class='text-subtle'>(Directorio vacío)</span>";
                for (const item in node.content) {
                    if (node.content[item].type === "directory") {
                        output += `<span class="directoryname">${item}/</span>\n`;
                    } else {
                        output += `<span class="filename">${item}</span>\n`;
                    }
                }
            } else {
                // return `<span class='error-text'>ls: No se puede acceder a '${currentChallengePath}': No es un directorio o no existe.</span>`;
                 return (translations[currentLanguage].terminal_cmd_error_ls_path || "Error: ls path error for {path}").replace('{path}', currentChallengePath);
            }
        } else {
            if (currentPath !== "~") return translations[currentLanguage].terminal_cmd_error_ls_normal_mode || "<span class='error-text'>Por ahora, 'ls' solo funciona en el directorio raíz (~) en modo normal.</span>";
            const rootContent = fileSystem["~"].content;
            for (const item in rootContent) {
                 output += `<span class="filename">${item}</span>\n`;
            }
        }
        return output.trim() || (translations[currentLanguage].terminal_cmd_output_ls_empty || "<span class='text-subtle'>(Directorio vacío)</span>");
    },
    cat: (args) => {
        const langKeys = translations[currentLanguage];
        if (!args || args.length === 0) return langKeys.terminal_cmd_error_cat_missing_arg || `<span class='error-text'>cat: Falta nombre de archivo. Uso: cat &lt;archivo&gt;</span>`;
        const targetFile = args[0];

        if (inChallengeMode) {
            // ... Lógica de cat en modo desafío, usando traducciones para errores ...
            return `<span class='error-text'>cat (challenge mode) for ${targetFile} not fully translated.</span>`;
        } else {
            if (currentPath !== "~") return langKeys.terminal_cmd_error_cat_normal_mode || `<span class='error-text'>cat: Solo se pueden leer archivos desde el directorio raíz (~) en modo normal.</span>`;
            const rootContent = fileSystem["~"].content;
            if (rootContent[targetFile] && rootContent[targetFile].type === "file") {
                // El contentProvider ya debería devolver el contenido traducido
                return rootContent[targetFile].contentProvider().replace(/\n/g, "<br>");
            } else {
                return (langKeys.terminal_cmd_error_cat_not_found_or_dir || `<span class='error-text'>cat: {file}: No existe tal archivo o es un directorio.</span>`).replace('{file}', targetFile);
            }
        }
    },
    cd: (args) => { /* ... Necesitaría traducciones para mensajes de error ... */ return "CD command output not fully translated."; },
    pwd: () => {
        if (inChallengeMode) {
            return currentChallengePath;
        } else {
            return currentPath;
        }
    },
    about: () => commands.cat(["sobremi.txt"]),
    sobremi: () => commands.cat(["sobremi.txt"]),
    experiencia: () => commands.cat(["experiencia.txt"]),
    proyectos: () => commands.cat(["proyectos.txt"]),
    habilidades: () => commands.cat(["habilidades.txt"]),
    contacto: () => commands.cat(["contacto.txt"]),
    whoami: () => {
        const lang = translations[currentLanguage];
        return inChallengeMode ? lang.terminal_user_hacker : lang.terminal_user_guest;
    },
    date: () => new Date().toLocaleString(currentLanguage === 'en' ? 'en-US' : 'es-ES', { dateStyle: 'full', timeStyle: 'long'}), // Formato de fecha localizado
    clear: () => { if(terminalOutput) terminalOutput.innerHTML = ''; return ""; },
    limpiar: () => commands.clear(),
    echo: (args) => args ? args.join(" ") : "",
    sudo: (args) => {
        const responses = ["¡Uy! Eso estuvo cerca.", "Permiso denegado.", "¿De verdad creíste que funcionaría? ;-)", "Acceso Super Usuario no concedido."]; // Estas podrían traducirse
        return `<span class='tech-text-red'>${responses[Math.floor(Math.random() * responses.length)]}</span>`;
    },
    banner: () => getBanner(),
    exit: () => { /* ... Necesitaría traducciones ... */ return "Exit command output not fully translated.";},
    iniciar_desafio: () => { /* ... Necesitaría traducciones ... */ return "Start challenge command output not fully translated.";},
    salir_desafio: () => { /* ... Necesitaría traducciones ... */ return "Exit challenge command output not fully translated.";},
    inyectar_virus: () => { /* ... Necesitaría traducciones ... */ return "Inject virus command output not fully translated.";}
};

function updateTerminalPrompt() {
    if (!promptDisplay) return;
    const lang = translations[currentLanguage];
    const userText = inChallengeMode ? lang.terminal_user_hacker : lang.terminal_user_guest;
    const hostText = inChallengeMode ? lang.terminal_host_challenge : lang.terminal_host_web;
    // El path no se traduce generalmente, pero los componentes del prompt sí.
    // Actualizamos los elementos del prompt que tienen data-lang-key directamente en setLanguage
    // Aquí solo reconstruimos el prompt con los valores actuales de currentPath, etc.
    // O, si los elementos del prompt no tienen data-lang-key, los actualizamos aquí:
    const userSpan = promptDisplay.querySelector('.user');
    const hostSpan = promptDisplay.querySelector('.host');
    const pathSpan = promptDisplay.querySelector('.path');

    if (userSpan) userSpan.textContent = userText;
    if (hostSpan) hostSpan.textContent = hostText;
    if (pathSpan) pathSpan.textContent = inChallengeMode ? currentChallengePath : currentPath;

    // Si el prompt se construye dinámicamente cada vez:
    // promptDisplay.innerHTML = `<span class="user">${userText}</span>@<span class="host">${hostText}</span>:<span class="path">${inChallengeMode ? currentChallengePath : currentPath}</span><span class="dollar">$</span>`;
}


if (terminalInput) {
    terminalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const fullCommandText = terminalInput.value.trim();

            if (fullCommandText && (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== fullCommandText)) {
                commandHistory.push(fullCommandText);
            }
            historyIndex = commandHistory.length;
            terminalInput.value = '';

            // Obtener el prompt actual (ya debería estar traducido por updateTerminalPrompt)
            const currentPromptHTML = promptDisplay.innerHTML;
            addOutput(`${currentPromptHTML} ${fullCommandText}`, false); // No escapar HTML del prompt

            if (awaitingVirusConfirmation) {
                // ... Lógica de confirmación, necesitaría traducciones para mensajes ...
                if (fullCommandText.toLowerCase() === 'si' || fullCommandText.toLowerCase() === 'yes') { // Aceptar en ambos idiomas
                    fetchAndDisplayIPInfo();
                } else {
                    addOutput("Operación cancelada.", true); // Traducir "Operación cancelada"
                }
                awaitingVirusConfirmation = false;
                if(terminalElement) terminalElement.scrollTop = terminalElement.scrollHeight;
                return;
            }


            if (fullCommandText) {
                const [commandName, ...args] = fullCommandText.split(/\s+/);
                const commandToExecute = commandName.toLowerCase();

                if (commands[commandToExecute]) {
                    const output = commands[commandToExecute](args);
                    if (output || output === "") {
                       addOutput(output, false); // Muchos comandos devuelven HTML, no escapar
                    }
                } else {
                    const lang = translations[currentLanguage];
                    addOutput(lang.terminal_cmd_not_found.replace('{commandName}', commandName) , false);
                }
            }
            if(terminalElement) terminalElement.scrollTop = terminalElement.scrollHeight;
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            if (commandHistory.length > 0 && historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
                terminalInput.setSelectionRange(terminalInput.value.length, terminalInput.value.length);
            }
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
                terminalInput.setSelectionRange(terminalInput.value.length, terminalInput.value.length);
            } else if (historyIndex === commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = "";
            }
        }
    });
}

function addOutput(message, escapeHtml = true) {
    if (!terminalOutput) return;
    const outputLine = document.createElement('div');
    if (typeof message === 'string') {
        // La lógica de añadir clases de error/éxito puede mantenerse,
        // pero los strings de error deben venir de las traducciones.
        if (message.includes("FLAG{")) outputLine.classList.add('success-text');
        // No añadir 'error-text' basado en keywords si el mensaje ya es HTML con la clase
        else if (!message.includes("class='error-text'") && (message.toLowerCase().includes("error") || message.toLowerCase().includes("no encontrado") || message.toLowerCase().includes("no existe") || message.toLowerCase().includes("falta nombre"))) {
            if (!message.includes("class='error-text terminal-description'")) {
                 // outputLine.classList.add('error-text'); // Comentado para que el HTML del mensaje prevalezca
            }
        }
    }

    if (escapeHtml && typeof message === 'string' && !(message.includes('<span') || message.includes('<br>') || message.includes('█') || message.includes('▓') || message.includes('░'))) {
        outputLine.textContent = message;
    } else {
         outputLine.innerHTML = message; // Permitir HTML en los mensajes
    }
    terminalOutput.appendChild(outputLine);
    if(terminalElement) terminalElement.scrollTop = terminalElement.scrollHeight;
}

if (terminalElement) {
    terminalElement.addEventListener('click', (event) => {
        if (terminalInput && event.target.tagName !== 'A' && !terminalInput.disabled) {
            terminalInput.focus();
        }
    });
}
