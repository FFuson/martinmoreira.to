/**
 * @file Script principal para una página de portafolio interactiva.
 * Incluye internacionalización (i18n), efectos de tipeo, efecto "glitch" en texto,
 * y una terminal interactiva simulada.
 *
 * @author Martín Moreira (Basado en el código proporcionado)
 * @version 1.0.0
 */

/**
 * Objeto que contiene las cadenas de texto traducidas para la interfaz de usuario.
 * Actualmente soporta español ('es') e inglés ('en').
 * Este es un ejemplo parcial para demostración.
 * @const {object} translations
 */
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
        // Salidas de comandos de la terminal (ejemplos)
        "terminal_cmd_output_ls_empty": "<span class='text-subtle'>(Directorio vacío)</span>",
        "terminal_cmd_error_ls_path": "<span class='error-text'>ls: No se puede acceder a '{path}': No es un directorio o no existe.</span>",
        "terminal_cmd_error_ls_normal_mode": "<span class='error-text'>Por ahora, 'ls' solo funciona en el directorio raíz (~) en modo normal.</span>",
        "terminal_cmd_error_cat_missing_arg": "<span class='error-text'>cat: Falta nombre de archivo. Uso: cat &lt;archivo&gt;</span>",
        "terminal_cmd_error_cat_normal_mode": "<span class='error-text'>cat: Solo se pueden leer archivos desde el directorio raíz (~) en modo normal.</span>",
        "terminal_cmd_error_cat_not_found_or_dir": "<span class='error-text'>cat: {file}: No existe tal archivo o es un directorio.</span>"
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
        "exp1_loc_date": "<span class=\"font-semibold\">Colegio Tres Olivos</span> | 2020 - 2022",
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
        "footer_copyright": "Martín Moreira García.",
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
        // Terminal command outputs (examples)
        "terminal_cmd_output_ls_empty": "<span class='text-subtle'>(Empty directory)</span>",
        "terminal_cmd_error_ls_path": "<span class='error-text'>ls: Cannot access '{path}': Not a directory or does not exist.</span>",
        "terminal_cmd_error_ls_normal_mode": "<span class='error-text'>For now, 'ls' only works in the root directory (~) in normal mode.</span>",
        "terminal_cmd_error_cat_missing_arg": "<span class='error-text'>cat: Missing file name. Usage: cat &lt;file&gt;</span>",
        "terminal_cmd_error_cat_normal_mode": "<span class='error-text'>cat: Files can only be read from the root directory (~) in normal mode.</span>",
        "terminal_cmd_error_cat_not_found_or_dir": "<span class='error-text'>cat: {file}: No such file or is a directory.</span>"
    }
};

// Idioma activo actualmente en la aplicación.
let currentLanguage = 'es'; // Idioma por defecto.

/**
 * Establece el idioma de la aplicación y actualiza la interfaz de usuario.
 * @param {string} lang - El código del idioma a establecer (ej. 'es', 'en').
 */
function setLanguage(lang) {
    currentLanguage = lang;
    // Establece el atributo 'lang' en el elemento HTML raíz para accesibilidad y CSS.
    document.documentElement.lang = lang;

    // Actualiza el estado visual de los botones del selector de idioma.
    document.querySelectorAll('#lang-switcher .lang-button').forEach(button => {
        if (button.dataset.lang === lang) {
            button.classList.add('active-lang');
        } else {
            button.classList.remove('active-lang');
        }
    });

    // Itera sobre todos los elementos que tienen una clave de traducción (data-lang-key).
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        // Obtiene la traducción para el idioma actual, con fallback a español si no se encuentra.
        const translation = translations[lang][key] || translations['es'][key];

        if (translation !== undefined) {
            if (element.classList.contains('typing-effect') || element.classList.contains('typing-effect-delayed')) {
                // Para los efectos de tipeo, solo cambiamos el texto.
                // La animación de tipeo se reiniciará visualmente debido al cambio de contenido.
                element.textContent = translation;
            } else {
                // Para otros elementos, usa innerHTML para permitir contenido HTML en las traducciones.
                element.innerHTML = translation;
            }
        } else {
            // Advierte en consola si falta una traducción.
            console.warn(`Missing translation for key: ${key} in language: ${lang}`);
        }
    });

    // Re-aplicar el efecto "glitch" a los elementos que lo requieren después de la traducción.
    // Es importante que spanifyLetters se llame DESPUÉS de que el contenido haya sido traducido.
    document.querySelectorAll('[data-text-content]').forEach(el => {
        // Limpia los spans 'cyber-letter' existentes para evitar duplicados o anidamientos incorrectos.
        const existingCyberLetters = el.querySelectorAll('.cyber-letter');
        existingCyberLetters.forEach(span => {
            if (span.dataset.originalChar) {
                span.outerHTML = span.dataset.originalChar;
            } else if (span.textContent.length === 1 && span.parentElement && !span.parentElement.classList.contains('typing-effect') && !span.parentElement.classList.contains('typing-effect-delayed')) {
                // Solo revierte si no es parte de un efecto de tipeo y es un solo caracter.
                // span.outerHTML = span.textContent; // Comentado porque puede ser destructivo si no se maneja con más lógica.
            }
        });

        // Si el elemento no contiene un efecto de tipeo, se procesa directamente.
        if (!el.querySelector('.typing-effect') && !el.querySelector('.typing-effect-delayed')) {
            spanifyLetters(el);
        } else {
            // Para elementos que SÍ contienen efectos de tipeo, procesamos sus nodos hijos individualmente.
            // Esto evita que spanifyLetters interfiera con la estructura interna de los efectos de tipeo.
            Array.from(el.childNodes).forEach(child => {
                if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
                    // Si es un nodo de texto, lo envolvemos temporalmente para procesarlo con spanifyLetters.
                    const tempWrapper = document.createElement('div');
                    tempWrapper.textContent = child.textContent;
                    spanifyLetters(tempWrapper);
                    // Reemplazamos el nodo de texto original con los nuevos spans generados.
                    while (tempWrapper.firstChild) {
                        child.parentNode.insertBefore(tempWrapper.firstChild, child);
                    }
                    if (child.parentNode) child.parentNode.removeChild(child);
                } else if (child.nodeType === Node.ELEMENT_NODE &&
                    !child.classList.contains('typing-effect') &&
                    !child.classList.contains('typing-effect-delayed') &&
                    !child.classList.contains('cyber-letter')) {
                    // Si es un nodo de elemento que no es parte de un efecto de tipeo ni un cyber-letter,
                    // lo procesamos recursivamente.
                    spanifyLetters(child);
                }
            });
        }
    });

    // Actualiza el prompt de la terminal para reflejar el cambio de idioma.
    updateTerminalPrompt();
    // Nota: Si la terminal ya está abierta y mostrando contenido (como la ayuda),
    // ese contenido no se re-traducirá automáticamente sin una lógica adicional
    // para refrescar la salida de la terminal.
}


// Establece el año actual en el elemento con id 'currentYear' del pie de página.
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Script para implementar el desplazamiento suave (smooth scroll) para enlaces ancla.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento de anclaje por defecto.
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // No hacer scroll si es el enlace a la terminal interactiva, solo enfocar el input.
            if (targetId !== '#terminal-interactiva') {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                if (terminalInput) terminalInput.focus();
            }
        }
    });
});

// --- Lógica para la terminal interactiva ---

// Elementos DOM de la terminal.
const terminalOutput = document.getElementById('terminalOutput');
const terminalInput = document.getElementById('terminalInput');
const terminalElement = document.getElementById('terminal'); // El contenedor principal de la terminal.
const promptDisplay = document.getElementById('terminalPromptDisplay'); // Elemento que muestra el prompt.

// Estado de la terminal.
let currentPath = "~"; // Ruta actual en el sistema de archivos simulado.
let commandHistory = []; // Historial de comandos introducidos.
let historyIndex = -1; // Índice actual en el historial de comandos.

// Estado del modo desafío.
let inChallengeMode = false; // Indica si la terminal está en modo desafío.
let currentChallengePath = "/"; // Ruta actual en el sistema de archivos del desafío.
let awaitingVirusConfirmation = false; // Indica si se está esperando confirmación para el comando 'inyectar_virus'.

// Caracteres pseudo-cirílicos para el efecto "glitch".
const pseudoRussianChars = [
    'Д', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'п', 'ф', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я',
    'Д', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'П', 'Ф', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я',
    'б', 'г', 'д', 'ё', 'ђ', 'ѓ', 'є', 'ѕ', 'ї', 'ј', 'љ', 'њ', 'ћ', 'ќ', 'ў', 'џ', 'ѻ', 'ѽ', 'ѿ', '҈', '҉'
];

// Mapeo simple de caracteres latinos a sus equivalentes visuales pseudo-cirílicos.
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

/**
 * Devuelve un carácter pseudo-ruso aleatorio del array `pseudoRussianChars`.
 * @returns {string} Un carácter pseudo-ruso.
 */
function getRandomPseudoRussianChar() {
    return pseudoRussianChars[Math.floor(Math.random() * pseudoRussianChars.length)];
}

/**
 * Convierte un carácter latino a su equivalente pseudo-ruso o a uno aleatorio si no hay mapeo directo.
 * @param {string} char - El carácter a convertir.
 * @returns {string} El carácter transformado o el original si no es alfanumérico.
 */
function toPseudoRussianChar(char) {
    // Solo transforma caracteres alfanuméricos.
    if (char.match(/[a-zA-Z0-9]/)) {
        return latinToCyrillicSimple[char] || getRandomPseudoRussianChar();
    }
    // Devuelve el carácter original si no es alfanumérico (ej. símbolos, espacios).
    return char;
}

/**
 * Aplica o revierte la transformación de un carácter a pseudo-ruso en un elemento span.
 * Utilizado para el efecto "glitch".
 * @param {HTMLElement} element - El elemento <span> que contiene el carácter.
 * @param {boolean} transform - True para aplicar la transformación, false para revertirla.
 */
function applyCharTransform(element, transform) {
    // Verifica que el elemento sea válido, tenga la clase 'cyber-letter' y no sea un espacio.
    if (!element || !element.classList.contains('cyber-letter') || element.textContent === ' ') return;

    if (transform) {
        // Si se va a transformar y no se ha guardado el original, se guarda en 'data-original-char'.
        if (!element.dataset.originalChar) {
            element.dataset.originalChar = element.textContent;
        }
        // Aplica la transformación y añade la clase 'glitching'.
        element.textContent = toPseudoRussianChar(element.dataset.originalChar);
        element.classList.add('glitching');
    } else {
        // Si se revierte la transformación y se había guardado el original, se restaura.
        if (element.dataset.originalChar) {
            element.textContent = element.dataset.originalChar;
        }
        // Quita la clase 'glitching'.
        element.classList.remove('glitching');
    }
}

/**
 * Envuelve cada carácter de texto (no espacio) dentro de un elemento en spans individuales
 * con la clase 'cyber-letter'. Esto permite aplicar efectos de "glitch" al pasar el ratón por encima.
 * Ignora elementos que ya son parte de un efecto de tipeo o que son hijos de estos.
 * @param {HTMLElement} element - El elemento cuyos nodos de texto serán procesados.
 */
function spanifyLetters(element) {
    // Evita procesar si el elemento no existe, es parte de un efecto de tipeo, o está anidado dentro de uno.
    if (!element || element.classList.contains('typing-effect') || element.classList.contains('typing-effect-delayed') || element.closest('.typing-effect, .typing-effect-delayed')) {
        return;
    }

    const childNodes = Array.from(element.childNodes); // Copia los nodos hijos para iterar de forma segura.
    childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE && child.textContent.trim() !== '') {
            // Si es un nodo de texto y no está vacío (después de quitar espacios).
            const text = child.textContent;
            const fragment = document.createDocumentFragment(); // Fragmento para eficiencia al añadir nuevos nodos.
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                if (char === ' ') {
                    // Los espacios se añaden como nodos de texto simples.
                    fragment.appendChild(document.createTextNode(' '));
                } else {
                    // Los otros caracteres se envuelven en un span 'cyber-letter'.
                    const span = document.createElement('span');
                    span.className = 'cyber-letter';
                    span.textContent = char;
                    span.dataset.originalChar = char; // Guarda el carácter original para poder restaurarlo.

                    // Añade event listeners para el efecto "glitch" al pasar el ratón.
                    span.addEventListener('mouseenter', (e) => {
                        const current = e.target;
                        const prev = current.previousElementSibling;
                        const next = current.nextElementSibling;
                        // Aplica transformación al carácter actual y a sus vecinos.
                        applyCharTransform(current, true);
                        if (prev && prev.classList.contains('cyber-letter')) applyCharTransform(prev, true);
                        if (next && next.classList.contains('cyber-letter')) applyCharTransform(next, true);
                    });
                    span.addEventListener('mouseleave', (e) => {
                        const current = e.target;
                        const prev = current.previousElementSibling;
                        const next = current.nextElementSibling;
                        // Revierte transformación al carácter actual y a sus vecinos.
                        applyCharTransform(current, false);
                        if (prev && prev.classList.contains('cyber-letter')) applyCharTransform(prev, false);
                        if (next && next.classList.contains('cyber-letter')) applyCharTransform(next, false);
                    });
                    fragment.appendChild(span);
                }
            }
            // Reemplaza el nodo de texto original con el fragmento de spans y espacios.
            if (child.parentNode) child.parentNode.replaceChild(fragment, child);
        } else if (child.nodeType === Node.ELEMENT_NODE &&
                   !child.classList.contains('cyber-letter') &&
                   !child.classList.contains('typing-effect') &&
                   !child.classList.contains('typing-effect-delayed')) {
            // Si es un nodo de elemento (que no sea 'cyber-letter' o de efecto de tipeo),
            // llama recursivamente a spanifyLetters para procesar su contenido.
            spanifyLetters(child);
        }
    });
}


/**
 * Event listener que se ejecuta cuando el DOM (Document Object Model) está completamente cargado y parseado.
 * Es el punto de entrada para inicializar funcionalidades dependientes del DOM.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Aplica el idioma inicial (por defecto 'es' o el último guardado en localStorage).
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        setLanguage(savedLang);
    } else {
        setLanguage(currentLanguage); // 'es' por defecto si no hay nada guardado.
    }

    // Añade listeners a los botones de cambio de idioma.
    document.querySelectorAll('#lang-switcher .lang-button').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('preferredLanguage', lang); // Guarda la preferencia de idioma.
        });
    });

    // Inicialización de la terminal (banner y prompt) solo si el elemento terminal existe.
    if (terminalElement) {
        addOutput(getBanner(), false); // Muestra el banner inicial.
        updateTerminalPrompt(); // Configura el prompt inicial.
        if(terminalInput) terminalInput.focus(); // Enfoca el input de la terminal.
    }
});

/**
 * Devuelve un objeto con el contenido de las secciones "estáticas" de la terminal,
 * utilizando las traducciones del idioma actual.
 * @returns {object} Objeto con el contenido traducido de las secciones.
 */
const getSectionContents = () => {
    const lang = translations[currentLanguage];
    return {
        "sobremi.txt": `
== ${lang.about_section_title || "Sobre Mí"} ==
${lang.about_section_paragraph || "Contenido sobre mí..."}
// profile_access_level: user
`,
        "experiencia.txt": `== ${lang.experience_section_title || "Experiencia"} ==
${lang.exp1_title}
${lang.exp1_loc_date.replace(/<\/?span[^>]*>/g, "")} ${lang.exp1_desc}

${lang.exp2_title}
${lang.exp2_loc_date.replace(/<\/?span[^>]*>/g, "")}
${lang.exp2_desc}

${lang.exp3_title}
${lang.exp3_loc_date.replace(/<\/?span[^>]*>/g, "")}
${lang.exp3_desc}

${lang.exp4_title}
${lang.exp4_loc_date.replace(/<\/?span[^>]*>/g, "")}
${lang.exp4_desc}
`,
        "contacto.txt": `== ${lang.contact_section_title || "Contacto"} ==
${lang.contact_section_paragraph || "Información de contacto..."}
${lang.contact_email_label} tu_email@ejemplo.com
${lang.contact_github_label} tu_usuario_github
${lang.contact_linkedin_label} ${lang.contact_linkedin_profile_placeholder}
`,
        "habilidades.txt": `== Habilidades ==
- Ciberseguridad (Análisis forense, Hacking Ético, Pruebas de Penetración)
- Desarrollo Web (PHP, HTML, CSS, JavaScript)
- Administración de Sistemas y Redes
- Gestión de Riesgos
- PHP, Python, Bash
- SQL, Docker, Git
`, // Placeholder, podría ser más dinámico o traducido.
        "proyectos.txt": `== Proyectos Destacados ==
- Proyecto Alpha: Desarrollo de una aplicación web segura con PHP y MySQL.
- Proyecto Beta: Implementación de un sistema de detección de intrusos.
- Portafolio Interactivo: (Este mismo proyecto) con terminal simulada y efectos visuales.
` // Placeholder.
    };
};

/**
 * Representación del sistema de archivos simulado para el modo normal de la terminal.
 * El contenido de los archivos se obtiene a través de `contentProvider` que a su vez
 * utiliza `getSectionContents` para obtener textos traducidos.
 * @const {object} fileSystem
 */
const fileSystem = {
    "~": { // Directorio raíz del usuario.
        "type": "directory",
        "content": {
            "sobremi.txt": { "type": "file", "contentProvider": () => getSectionContents()["sobremi.txt"] },
            "experiencia.txt": { "type": "file", "contentProvider": () => getSectionContents()["experiencia.txt"] },
            "contacto.txt": { "type": "file", "contentProvider": () => getSectionContents()["contacto.txt"] },
            "habilidades.txt": { "type": "file", "contentProvider": () => getSectionContents()["habilidades.txt"] },
            "proyectos.txt": { "type": "file", "contentProvider": () => getSectionContents()["proyectos.txt"] }
        }
    }
};

/**
 * Sistema de archivos simulado para el modo desafío de la terminal.
 * Esta estructura es un placeholder y necesitaría ser completamente definida y
 * probablemente refactorizada para ser fácilmente traducible si su contenido textual lo requiere.
 * @const {object} challengeFileSystem
 */
const challengeFileSystem = {
    "/": {
        type: "directory",
        content: {
            "readme.txt": { type: "file", content: "Bienvenido al desafío. Tu objetivo es encontrar la FLAG.txt. ¡Suerte!" },
            "bin": { type: "directory", content: { /* test */ } },
            "docs": { type: "directory", content: {
                "hint1.txt": {type: "file", content: "A veces, los secretos están a simple vista, pero ofuscados."}
            }},
            "secret_folder": { type: "directory", content: {
                "not_here.txt": {type: "file", content: "Casi... pero no."},
                "deep_secret": { type: "directory", content: {
                    "FLAG.txt": { type: "file", content: "¡Felicidades! FLAG{CH4LL3NG3_C0MPL3T3D}" }
                }}
            }}
        }
    }
};

/**
 * Obtiene un nodo (archivo o directorio) del sistema de archivos del modo desafío.
 * @param {string} path - La ruta al nodo deseado.
 * @returns {object|null} El nodo si se encuentra, o null si no.
 */
function getChallengeFsNode(path) {
    const parts = path.split('/').filter(p => p.length > 0);
    let currentNode = challengeFileSystem['/'];
    if (path === '/') return currentNode;

    for (const part of parts) {
        if (currentNode && currentNode.type === "directory" && currentNode.content && currentNode.content[part]) {
            currentNode = currentNode.content[part];
        } else {
            return null; // Ruta no encontrada o no es un directorio
        }
    }
    return currentNode;
}


/**
 * Genera el mensaje de bienvenida (banner) para la terminal, utilizando el idioma actual.
 * @returns {string} El HTML del banner traducido.
 */
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

/**
 * Función asíncrona (simulada) para obtener y mostrar información de geolocalización IP.
 * El texto de salida de esta función también necesitaría claves de traducción para una i18n completa.
 */
async function fetchAndDisplayIPInfo() {
    // TODO: Añadir claves de traducción para los mensajes de esta función.
    addOutput("<span class='tech-text-blue'>[SIMULACIÓN] Obteniendo información de geolocalización IP...</span>", false);
    try {
        // Simulación de llamada a API
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simula retraso de red
        const mockIP = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
        const mockLocation = "Ciudad Ficticia, País Imaginario";
        addOutput(`<span class='tech-text-green'>[SIMULACIÓN] IP Pública: ${mockIP}</span>`, false);
        addOutput(`<span class='tech-text-green'>[SIMULACIÓN] Geolocalización: ${mockLocation}</span>`, false);
        addOutput("<span class='error-text'>[ADVERTENCIA SIMULADA] ¡Tu sistema podría estar comprometido!</span>", false);
    } catch (error) {
        addOutput("<span class='error-text'>[SIMULACIÓN] Error al obtener la información IP.</span>", false);
        console.error("Simulated IP fetch error:", error);
    }
}


/**
 * Objeto que mapea nombres de comandos a sus funciones de ejecución para la terminal.
 * Las funciones toman un array de argumentos y devuelven el texto (o HTML) a mostrar.
 * @const {object} commands
 */
const commands = {
    /** Muestra la lista de comandos disponibles y su descripción. */
    ayuda: () => {
        const lang = translations[currentLanguage];
        let helpText = `${lang.terminal_cmd_help_title}\n`;
        // Define las entradas de ayuda con sus claves de descripción para traducción.
        const commandHelpEntries = [
            { cmd: "ayuda", descKey: "terminal_cmd_help_desc_ayuda" },
            { cmd: "ls", descKey: "terminal_cmd_help_desc_ls" },
            { cmd: "cat <archivo>", descKey: "terminal_cmd_help_desc_cat" },
            { cmd: "cd <directorio>", descKey: "terminal_cmd_help_desc_cd" },
            { cmd: "pwd", descKey: "terminal_cmd_help_desc_pwd" },
        ];
        // Comandos disponibles solo en modo normal.
        if (!inChallengeMode) {
            commandHelpEntries.push(
                { cmd: "about | sobremi", descKey: "terminal_cmd_help_desc_about" },
                { cmd: "experiencia", descKey: "terminal_cmd_help_desc_experiencia" },
                { cmd: "proyectos", descKey: "terminal_cmd_help_desc_proyectos" },
                { cmd: "habilidades", descKey: "terminal_cmd_help_desc_habilidades" },
                { cmd: "contacto", descKey: "terminal_cmd_help_desc_contacto" }
            );
        }
        // Comandos comunes.
        commandHelpEntries.push(
            { cmd: "whoami", descKey: "terminal_cmd_help_desc_whoami" },
            { cmd: "date", descKey: "terminal_cmd_help_desc_date" },
            { cmd: "clear | limpiar", descKey: "terminal_cmd_help_desc_clear" },
            { cmd: "echo <texto>", descKey: "terminal_cmd_help_desc_echo" },
            { cmd: "sudo <comando>", descKey: "terminal_cmd_help_desc_sudo" }, // Comando de broma.
            { cmd: "banner", descKey: "terminal_cmd_help_desc_banner" }
        );
        // Comandos específicos del modo desafío o para iniciarlo/pararlo.
        if (inChallengeMode) {
            commandHelpEntries.push({ cmd: "salir_desafio", descKey: "terminal_cmd_help_desc_salir_desafio" });
        } else {
            commandHelpEntries.push(
                { cmd: "iniciar_desafio", descKey: "terminal_cmd_help_desc_iniciar_desafio" },
                { cmd: "inyectar_virus", descKey: "terminal_cmd_help_desc_inyectar_virus", isError: true } // Comando simulado peligroso.
            );
        }
        commandHelpEntries.push({ cmd: "exit", descKey: "terminal_cmd_help_desc_exit" }); // Simula cierre.

        // Formatea cada entrada de ayuda.
        commandHelpEntries.forEach(entry => {
            const desc = lang[entry.descKey] || entry.descKey; // Obtiene descripción traducida.
            const cmdText = entry.isError ? `<span class="tech-text-red">${entry.cmd}</span>` : `<span class="tech-text-green">${entry.cmd}</span>`;
            const padding = ' '.repeat(Math.max(0, 25 - entry.cmd.length)); // Padding para alineación.
            helpText += `  ${cmdText}${padding}- <span class="terminal-description">${desc}</span>\n`;
        });
        return helpText;
    },
    /** Lista archivos y directorios en la ruta actual. */
    ls: (args) => {
        const langKeys = translations[currentLanguage];
        let output = "";
        const currentFS = inChallengeMode ? challengeFileSystem : fileSystem;
        const currentFsPath = inChallengeMode ? currentChallengePath : currentPath;
        const node = inChallengeMode ? getChallengeFsNode(currentFsPath) : currentFS[currentFsPath];

        if (node && node.type === "directory" && node.content) {
            if (Object.keys(node.content).length === 0) return langKeys.terminal_cmd_output_ls_empty;
            for (const item in node.content) {
                if (node.content[item].type === "directory") {
                    output += `<span class="directoryname">${item}/</span>\n`;
                } else {
                    output += `<span class="filename">${item}</span>\n`;
                }
            }
        } else {
            // Manejo de error si la ruta no es un directorio o no existe.
            if (inChallengeMode) {
                 return (langKeys.terminal_cmd_error_ls_path || "Error: ls path error for {path}").replace('{path}', currentFsPath);
            } else {
                // En modo normal, 'ls' solo funciona en '~' por simplicidad.
                return langKeys.terminal_cmd_error_ls_normal_mode;
            }
        }
        return output.trim() || langKeys.terminal_cmd_output_ls_empty;
    },
    /** Muestra el contenido de un archivo. */
    cat: (args) => {
        const langKeys = translations[currentLanguage];
        if (!args || args.length === 0) return langKeys.terminal_cmd_error_cat_missing_arg;
        const targetFile = args[0];

        const currentFS = inChallengeMode ? challengeFileSystem : fileSystem;
        const currentFsPath = inChallengeMode ? currentChallengePath : currentPath;
        const baseNode = inChallengeMode ? getChallengeFsNode(currentFsPath) : currentFS[currentFsPath];

        if (baseNode && baseNode.type === "directory" && baseNode.content && baseNode.content[targetFile]) {
            const fileNode = baseNode.content[targetFile];
            if (fileNode.type === "file") {
                if (fileNode.contentProvider) { // Para fileSystem normal
                    return fileNode.contentProvider().replace(/\n/g, "<br>");
                } else if (fileNode.content !== undefined) { // Para challengeFileSystem
                    return file_content = typeof fileNode.content === 'function' ? fileNode.content() : fileNode.content;
                }
            } else {
                return (langKeys.terminal_cmd_error_cat_not_found_or_dir || "cat: {file}: Es un directorio.").replace('{file}', targetFile);
            }
        }
        return (langKeys.terminal_cmd_error_cat_not_found_or_dir || "cat: {file}: No existe tal archivo o es un directorio.").replace('{file}', targetFile);
    },
    /** Cambia el directorio actual (simulado). */
    cd: (args) => {
        // TODO: Implementar traducciones para mensajes de error de 'cd'.
        if (!args || args.length === 0) return "<span class='error-text'>cd: Falta operando de directorio.</span>";
        const targetDir = args[0];

        if (inChallengeMode) {
            let newPath;
            if (targetDir === "..") {
                if (currentChallengePath === "/") return ""; // No se puede ir más atrás de la raíz.
                const parts = currentChallengePath.split('/').filter(p => p.length > 0);
                parts.pop();
                newPath = "/" + parts.join('/');
            } else if (targetDir.startsWith("/")) {
                newPath = targetDir; // Ruta absoluta.
            } else {
                newPath = (currentChallengePath === "/" ? "" : currentChallengePath) + "/" + targetDir; // Ruta relativa.
            }
            // Normalizar la ruta (ej. remover "//")
            newPath = newPath.replace(/\/\//g, '/');
            if (newPath !== '/' && newPath.endsWith('/')) newPath = newPath.slice(0, -1);
            if (newPath === '') newPath = '/';


            const node = getChallengeFsNode(newPath);
            if (node && node.type === "directory") {
                currentChallengePath = newPath;
                updateTerminalPrompt();
                return "";
            } else {
                return `<span class='error-text'>cd: ${targetDir}: No es un directorio o no existe.</span>`;
            }
        } else {
            // En modo normal, solo se permite 'cd ~' o 'cd ..' desde subdirectorios (si se implementaran).
            // Por ahora, es muy simple.
            if (targetDir === "~" || targetDir === "") {
                currentPath = "~";
                updateTerminalPrompt();
                return "";
            }
            return "<span class='error-text'>cd: En modo normal, solo 'cd ~' está soportado o la navegación es limitada.</span>";
        }
    },
    /** Muestra la ruta del directorio de trabajo actual. */
    pwd: () => {
        return inChallengeMode ? currentChallengePath : currentPath;
    },
    /** Alias para cat sobremi.txt. */
    about: () => commands.cat(["sobremi.txt"]),
    /** Alias para cat sobremi.txt. */
    sobremi: () => commands.cat(["sobremi.txt"]),
    /** Muestra la experiencia. */
    experiencia: () => commands.cat(["experiencia.txt"]),
    /** Muestra los proyectos. */
    proyectos: () => commands.cat(["proyectos.txt"]),
    /** Muestra las habilidades. */
    habilidades: () => commands.cat(["habilidades.txt"]),
    /** Muestra la información de contacto. */
    contacto: () => commands.cat(["contacto.txt"]),
    /** Muestra el nombre de usuario actual. */
    whoami: () => {
        const lang = translations[currentLanguage];
        return inChallengeMode ? lang.terminal_user_hacker : lang.terminal_user_guest;
    },
    /** Muestra la fecha y hora actual, localizada. */
    date: () => new Date().toLocaleString(currentLanguage === 'en' ? 'en-US' : 'es-ES', { dateStyle: 'full', timeStyle: 'long'}),
    /** Limpia la pantalla de la terminal. */
    clear: () => { if(terminalOutput) terminalOutput.innerHTML = ''; return ""; },
    /** Alias para clear. */
    limpiar: () => commands.clear(),
    /** Repite el texto proporcionado. */
    echo: (args) => args ? args.join(" ") : "",
    /** Comando de broma para simular sudo. */
    sudo: (args) => {
        // TODO: Traducir estas respuestas de broma.
        const responses = ["¡Uy! Eso estuvo cerca.", "Permiso denegado.", "¿De verdad creíste que funcionaría? ;-)", "Acceso Super Usuario no concedido."];
        return `<span class='tech-text-red'>${responses[Math.floor(Math.random() * responses.length)]}</span>`;
    },
    /** Vuelve a mostrar el banner de bienvenida. */
    banner: () => getBanner(),
    /** Simula el cierre de la terminal. */
    exit: () => {
        addOutput("Cerrando sesión...", false); // TODO: Traducir.
        if (terminalInput) terminalInput.disabled = true;
        // Podría añadir un efecto de cierre o redirección aquí.
        return "// session.terminate(); // system_logoff_initiated";
    },
    /** Inicia el modo desafío de la terminal. */
    iniciar_desafio: () => {
        // TODO: Traducir mensajes de este comando.
        if (inChallengeMode) return "Ya estás en modo desafío.";
        inChallengeMode = true;
        currentChallengePath = "/"; // Resetea la ruta del desafío.
        if(terminalOutput) terminalOutput.innerHTML = ''; // Limpia la terminal.
        addOutput(getBanner(), false); // Muestra el banner estándar.
        addOutput("Modo desafío iniciado. Usa 'ls' y 'cat' para explorar. Tu objetivo: encontrar FLAG.txt.", false);
        updateTerminalPrompt();
        return "";
    },
    /** Sale del modo desafío. */
    salir_desafio: () => {
        // TODO: Traducir mensajes.
        if (!inChallengeMode) return "No estás en modo desafío.";
        inChallengeMode = false;
        currentPath = "~"; // Restablece la ruta normal.
        if(terminalOutput) terminalOutput.innerHTML = '';
        addOutput(getBanner(), false);
        addOutput("Has salido del modo desafío. Volviendo a la consola normal.", false);
        updateTerminalPrompt();
        return "";
    },
    /** Comando simulado de "inyectar virus". */
    inyectar_virus: () => {
        // TODO: Traducir mensajes.
        if (inChallengeMode) return "<span class='error-text'>Comando no disponible en modo desafío.</span>";
        addOutput("<span class='error-text'>[ADVERTENCIA] Este comando intentará obtener tu IP y geolocalización (simulado). ¿Continuar? (si/no)</span>", false);
        awaitingVirusConfirmation = true;
        return "";
    }
};

/**
 * Actualiza el prompt de la terminal (usuario, host, ruta) según el idioma actual y el modo (normal/desafío).
 */
function updateTerminalPrompt() {
    if (!promptDisplay) return;
    const lang = translations[currentLanguage];

    // Determina el usuario y host basado en si estamos en modo desafío o no.
    const userText = inChallengeMode ? lang.terminal_user_hacker : lang.terminal_user_guest;
    const hostText = inChallengeMode ? lang.terminal_host_challenge : lang.terminal_host_web;
    const pathText = inChallengeMode ? currentChallengePath : currentPath;

    // Actualiza los spans individuales dentro del prompt.
    const userSpan = promptDisplay.querySelector('.user');
    const hostSpan = promptDisplay.querySelector('.host');
    const pathSpan = promptDisplay.querySelector('.path');

    if (userSpan) userSpan.textContent = userText;
    if (hostSpan) hostSpan.textContent = hostText;
    if (pathSpan) pathSpan.textContent = pathText;

    // Alternativamente, si el prompt se construyera completamente cada vez:
    // promptDisplay.innerHTML = `<span class="user">${userText}</span>@<span class="host">${hostText}</span>:<span class="path">${pathText}</span><span class="dollar">$</span> `;
}


// Añade el manejador de eventos al input de la terminal si existe.
if (terminalInput) {
    terminalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Previene el comportamiento por defecto (nueva línea).
            const fullCommandText = terminalInput.value.trim();

            // Añade el comando al historial si no está vacío y es diferente al último.
            if (fullCommandText && (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== fullCommandText)) {
                commandHistory.push(fullCommandText);
            }
            historyIndex = commandHistory.length; // Resetea el índice del historial para nuevas entradas.
            terminalInput.value = ''; // Limpia el campo de entrada.

            // Muestra el comando tecleado en la salida de la terminal, incluyendo el prompt actual.
            // El promptDisplay.innerHTML ya debería estar traducido por updateTerminalPrompt.
            const currentPromptHTML = promptDisplay.innerHTML;
            addOutput(`${currentPromptHTML} ${fullCommandText}`, false); // No escapar HTML del prompt.

            // Manejo de la confirmación para el comando 'inyectar_virus'.
            if (awaitingVirusConfirmation) {
                // TODO: Traducir mensajes de confirmación.
                if (fullCommandText.toLowerCase() === 'si' || fullCommandText.toLowerCase() === 'yes') {
                    fetchAndDisplayIPInfo(); // Ejecuta la acción simulada.
                } else {
                    addOutput("Operación cancelada.", true);
                }
                awaitingVirusConfirmation = false; // Resetea el estado de espera.
                if(terminalElement) terminalElement.scrollTop = terminalElement.scrollHeight; // Auto-scroll.
                return;
            }

            // Procesa el comando si no se estaba esperando una confirmación.
            if (fullCommandText) {
                const [commandName, ...args] = fullCommandText.split(/\s+/);
                const commandToExecute = commandName.toLowerCase();

                if (commands[commandToExecute]) {
                    const output = commands[commandToExecute](args); // Ejecuta el comando.
                    if (output || output === "") { // Incluso si la salida es una cadena vacía, se añade.
                        addOutput(output, false); // Muchos comandos devuelven HTML, así que no se escapa.
                    }
                } else {
                    // Si el comando no existe, muestra un mensaje de error traducido.
                    const lang = translations[currentLanguage];
                    addOutput(lang.terminal_cmd_not_found.replace('{commandName}', commandName) , false);
                }
            }
            if(terminalElement) terminalElement.scrollTop = terminalElement.scrollHeight; // Auto-scroll.

        } else if (event.key === "ArrowUp") { // Navegación del historial con flecha arriba.
            event.preventDefault();
            if (commandHistory.length > 0 && historyIndex > 0) {
                historyIndex--;
                terminalInput.value = commandHistory[historyIndex];
                terminalInput.setSelectionRange(terminalInput.value.length, terminalInput.value.length); // Mueve el cursor al final.
            }
        } else if (event.key === "ArrowDown") { // Navegación del historial con flecha abajo.
            event.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                terminalInput.value = commandHistory[historyIndex];
                terminalInput.setSelectionRange(terminalInput.value.length, terminalInput.value.length);
            } else if (historyIndex === commandHistory.length - 1) {
                // Si ya está en el último comando, ir "más abajo" limpia el input.
                historyIndex++;
                terminalInput.value = "";
            }
        }
    });
}

/**
 * Añade un mensaje a la salida de la terminal.
 * @param {string} message - El mensaje a añadir (puede ser HTML).
 * @param {boolean} [escapeHtml=true] - Si es true y el mensaje no parece HTML complejo (no contiene etiquetas span, br o caracteres de bloque),
 * se tratará como texto plano. Si es false, o el mensaje contiene dichas etiquetas/caracteres, se usará innerHTML.
 */
function addOutput(message, escapeHtml = true) {
    if (!terminalOutput) return;
    const outputLine = document.createElement('div');

    // Añade clases de estilo para mensajes especiales (ej. FLAG encontrada).
    if (typeof message === 'string') {
        if (message.includes("FLAG{")) outputLine.classList.add('success-text');
        // La detección de errores basada en keywords es frágil; es mejor que los comandos devuelvan HTML con clases de error.
        // else if (!message.includes("class='error-text'") && (message.toLowerCase().includes("error") || ...)) { ... }
    }

    // Decide si escapar HTML o insertarlo directamente.
    // Se considera "HTML complejo" si contiene etiquetas comunes o caracteres de arte ASCII de bloque.
    const isComplexHtml = typeof message === 'string' && (message.includes('<span') || message.includes('<br>') || message.includes('█') || message.includes('▓') || message.includes('░'));

    if (escapeHtml && !isComplexHtml) {
        outputLine.textContent = message;
    } else {
        outputLine.innerHTML = message; // Permite HTML en los mensajes.
    }
    terminalOutput.appendChild(outputLine);
    if(terminalElement) terminalElement.scrollTop = terminalElement.scrollHeight; // Auto-scroll.
}

// Listener para enfocar el input de la terminal cuando se hace clic en cualquier parte de ella,
// excepto si se hace clic en un enlace o el input está deshabilitado.
if (terminalElement) {
    terminalElement.addEventListener('click', (event) => {
        // Si el clic no fue en un enlace (<a>) y el input existe y no está deshabilitado.
        if (terminalInput && event.target.tagName !== 'A' && !terminalInput.disabled) {
            terminalInput.focus();
        }
    });
}
