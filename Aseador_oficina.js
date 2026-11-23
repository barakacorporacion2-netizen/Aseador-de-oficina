(() => {
  "use strict";

  const COURSE_KEY = "baraka_aseador_oficina_v1";
  const PASS_SCORE = 4;
  const levels = [
    {
      title: "Fundamentos del aseo en oficinas",
      summary: "El servicio, los espacios y la planeación.",
      lessons: [
        {
          title: "El rol del aseador de oficina",
          intro: "Comprende la importancia del servicio de aseo y su aporte al bienestar y funcionamiento de una organización.",
          sections: [
            ["Propósito del servicio", `<p>El aseo de oficina busca conservar los espacios limpios, ordenados y en condiciones adecuadas para las actividades diarias. No se trata solamente de retirar suciedad: también implica cuidar los bienes, prevenir riesgos y respetar a las personas que utilizan cada área.</p><h4>Responsabilidades principales</h4><ul><li>Realizar las tareas asignadas de acuerdo con la programación.</li><li>Usar correctamente los implementos y productos autorizados.</li><li>Señalizar condiciones que puedan ocasionar accidentes.</li><li>Informar daños, faltantes o situaciones que requieran atención.</li><li>Mantener una actitud respetuosa, discreta y orientada al servicio.</li></ul><div class="tip-box"><strong>Recuerda:</strong> la calidad del servicio se refleja en la limpieza, la seguridad, el cuidado de los elementos y el cumplimiento de las tareas.</div>`],
            ["Tipos de espacios", `<p>En una oficina pueden existir áreas con necesidades diferentes. Antes de iniciar, identifica el uso del espacio, el tipo de superficie y las instrucciones del responsable.</p><ul><li><strong>Áreas de trabajo:</strong> escritorios, sillas, equipos y superficies de contacto.</li><li><strong>Áreas comunes:</strong> recepción, salas de reuniones, pasillos y zonas de circulación.</li><li><strong>Servicios sanitarios:</strong> lavamanos, sanitarios, espejos y puntos de contacto.</li><li><strong>Zonas de alimentación:</strong> mesas, mesones y superficies destinadas al consumo de alimentos.</li></ul><p>Las áreas sanitarias y las zonas de alimentación requieren implementos diferenciados para evitar contaminación cruzada.</p>`],
            ["Actitud y comunicación", `<p>El personal de aseo trabaja en espacios compartidos. Por eso debe respetar la privacidad, evitar mover documentos sin autorización, cuidar los objetos personales y comunicar oportunamente cualquier novedad.</p><h4>Buenas prácticas</h4><ul><li>Saludar y atender indicaciones con respeto.</li><li>Consultar antes de intervenir un escritorio ocupado o documentos.</li><li>Respetar horarios y zonas restringidas.</li><li>Reportar objetos olvidados o daños sin manipularlos innecesariamente.</li></ul>`]
          ],
          quiz: [
            ["¿Cuál es el propósito principal del servicio de aseo en una oficina?", ["Conservar espacios limpios, seguros y ordenados", "Cambiar la ubicación de los muebles", "Desechar todos los objetos que estén sobre los escritorios"], 0],
            ["¿Qué debe hacerse antes de limpiar un área?", ["Aplicar cualquier producto disponible", "Identificar el espacio, la superficie y las instrucciones", "Mezclar productos para ahorrar tiempo"], 1],
            ["¿Cómo deben tratarse los documentos sobre un escritorio?", ["Moverlos para limpiar más rápido", "Desechar los que parezcan antiguos", "Respetarlos y no manipularlos sin autorización"], 2],
            ["¿Qué se debe hacer si se detecta un daño en una instalación?", ["Informarlo al responsable", "Ocultarlo", "Intentar repararlo siempre, aunque no se tenga autorización"], 0],
            ["¿Por qué se diferencian los implementos por áreas?", ["Para usar más herramientas", "Para reducir el riesgo de contaminación cruzada", "Para evitar organizar el trabajo"], 1]
          ]
        },
        {
          title: "Reconocimiento y planeación de áreas",
          intro: "Organiza el trabajo antes de comenzar y establece una secuencia eficiente.",
          sections: [
            ["Inspección inicial", `<p>Realiza un recorrido visual para reconocer las áreas, el nivel de suciedad, los obstáculos, los avisos de riesgo y los elementos que requieren cuidado especial.</p><ul><li>Identifica superficies delicadas y equipos eléctricos.</li><li>Observa si hay derrames, vidrios rotos u objetos cortopunzantes.</li><li>Verifica la disponibilidad de agua, bolsas y productos autorizados.</li><li>Consulta las prioridades y restricciones del lugar.</li></ul>`],
            ["Secuencia de trabajo", `<p>Una secuencia ordenada evita repetir tareas y reduce la posibilidad de ensuciar superficies ya atendidas. Como orientación general, trabaja de arriba hacia abajo, de las zonas menos sucias a las más sucias y desde el fondo hacia la salida, adaptando el procedimiento al área.</p><h4>Antes de iniciar</h4><ul><li>Prepara los implementos necesarios.</li><li>Coloca señalización cuando exista riesgo para las personas.</li><li>Organiza los tiempos según la prioridad del servicio.</li></ul>`],
            ["Lista de verificación", `<p>Una lista de chequeo permite confirmar que las tareas fueron realizadas. Puede incluir área, actividad, estado inicial, resultado, hora y observaciones. Registra novedades de forma clara y verificable.</p>`]
          ],
          quiz: [
            ["¿Qué permite la inspección inicial?", ["Reconocer áreas, riesgos y necesidades", "Evitar toda planeación", "Usar el mismo producto en todas las superficies"], 0],
            ["¿Qué secuencia suele ayudar a evitar repetir tareas?", ["De abajo hacia arriba", "De arriba hacia abajo y de zonas menos sucias a más sucias", "Limpiar primero el piso y luego sacudir"], 1],
            ["¿Para qué sirve una lista de chequeo?", ["Reemplazar la capacitación", "Aumentar el uso de productos", "Verificar tareas y registrar novedades"], 2],
            ["Si hay un derrame que puede causar resbalones, ¿qué debe hacerse?", ["Ignorarlo hasta terminar", "Señalizar y atenderlo según el procedimiento seguro", "Cubrirlo con papel sin señalizar"], 1],
            ["¿Qué debe considerarse al planear el servicio?", ["Prioridades, horarios, superficies y riesgos", "Solo la rapidez", "Únicamente el tamaño de la oficina"], 0]
          ]
        }
      ]
    },
    {
      title: "Implementos, productos y superficies",
      summary: "Selección y uso responsable de materiales.",
      lessons: [
        {
          title: "Utensilios y equipos de limpieza",
          intro: "Reconoce los implementos habituales y aprende a conservarlos en buen estado.",
          sections: [
            ["Implementos básicos", `<p>Según la tarea pueden utilizarse paños de microfibra, mopas, escobas, recogedores, cepillos, esponjas no abrasivas, cubetas, señalización y bolsas para residuos. Cada elemento debe estar limpio, íntegro y destinado al uso correspondiente.</p><ul><li>Paños: retirar polvo y limpiar superficies compatibles.</li><li>Mopas: limpiar pisos con el método indicado.</li><li>Cepillos: atender suciedad adherida en superficies apropiadas.</li><li>Señales: advertir sobre pisos húmedos u otros riesgos.</li></ul>`],
            ["Uso y mantenimiento", `<p>Revisa los mangos, uniones, cables y accesorios antes de utilizar un equipo. No uses elementos deteriorados. Al terminar, lava o limpia los implementos según las instrucciones, déjalos secar y guárdalos en el lugar asignado.</p><div class="tip-box"><strong>Importante:</strong> no guardes paños húmedos y sucios dentro de recipientes cerrados; pueden generar malos olores y favorecer el crecimiento de microorganismos.</div>`],
            ["Diferenciación por áreas", `<p>Utiliza implementos separados para sanitarios, áreas de alimentación y superficies generales. Si el lugar cuenta con un sistema de colores, respétalo. No inventes equivalencias: sigue el código definido por la organización y evita intercambiar paños entre zonas.</p>`]
          ],
          quiz: [
            ["¿Qué se debe revisar antes de usar un equipo?", ["Su estado físico y condiciones de funcionamiento", "Solo su color", "Que esté húmedo"], 0],
            ["¿Cómo deben almacenarse los implementos?", ["Sucios y juntos", "Limpios, secos y en el lugar asignado", "En cualquier salida de emergencia"], 1],
            ["¿Por qué se separan los implementos por áreas?", ["Para aumentar el inventario", "Para cambiar la decoración", "Para evitar contaminación cruzada"], 2],
            ["¿Qué se hace con un utensilio deteriorado?", ["Se continúa usando", "Se retira y se reporta según el procedimiento", "Se presta a otra área"], 1],
            ["¿Qué sistema debe seguirse si existen códigos de colores?", ["El definido por la organización", "Uno diferente cada día", "El que resulte más rápido sin consultar"], 0]
          ]
        },
        {
          title: "Productos de limpieza y superficies",
          intro: "Selecciona productos compatibles y evita prácticas peligrosas.",
          sections: [
            ["Lectura de etiquetas", `<p>Antes de utilizar un producto, lee su etiqueta y las instrucciones del fabricante. Verifica su uso previsto, dilución, tiempo de contacto, precauciones, elementos de protección y condiciones de almacenamiento. Nunca uses un producto sin identificar.</p><ul><li>Conserva los productos en su envase original y con etiqueta legible.</li><li>No trasvases a botellas de bebidas o recipientes sin identificación.</li><li>Prepara diluciones únicamente según instrucciones autorizadas.</li><li>No excedas concentraciones ni tiempos indicados.</li></ul>`],
            ["Compatibilidad de superficies", `<p>No todas las superficies admiten los mismos productos. Madera, vidrio, acero, laminados, pantallas y superficies pintadas pueden requerir métodos distintos. Consulta las indicaciones del fabricante o del responsable y prueba en un área poco visible cuando el procedimiento lo permita.</p>`],
            ["Mezclas que deben evitarse", `<p><strong>Nunca mezcles productos de limpieza.</strong> En particular, no combines hipoclorito o lejía con amoniaco, ácidos, vinagre ni otros limpiadores. Estas mezclas pueden liberar gases tóxicos o causar reacciones peligrosas. Usa un solo producto según su etiqueta y ventila el área conforme a las instrucciones.</p><div class="tip-box"><strong>Ante una exposición:</strong> aléjate del área, evita seguir inhalando vapores, informa de inmediato y solicita ayuda de emergencia o atención médica según la situación. No intentes neutralizar la mezcla con otro químico.</div>`]
          ],
          quiz: [
            ["¿Qué información debe revisarse antes de usar un producto?", ["Solo el precio", "Etiqueta, uso, dilución y precauciones", "El aroma"], 1],
            ["¿Dónde deben conservarse los productos?", ["En envases originales identificados", "En botellas de bebidas", "En recipientes sin tapa ni etiqueta"], 0],
            ["¿Qué práctica es peligrosa?", ["Leer las instrucciones", "Usar guantes indicados", "Mezclar hipoclorito con amoniaco o ácidos"], 2],
            ["¿Qué debe hacerse si una superficie es delicada?", ["Aplicar el químico más fuerte", "Consultar compatibilidad e instrucciones", "Frotar con cualquier abrasivo"], 1],
            ["¿Qué hacer ante vapores irritantes por una mezcla accidental?", ["Alejarse, informar y solicitar ayuda", "Añadir otro producto", "Permanecer limpiando"], 0]
          ]
        }
      ]
    },
    {
      title: "Procedimientos de limpieza y desinfección",
      summary: "Técnicas para mantener las áreas en condiciones adecuadas.",
      lessons: [
        {
          title: "Limpieza de mobiliario y áreas de trabajo",
          intro: "Aplica métodos cuidadosos para escritorios, sillas, equipos y superficies de contacto.",
          sections: [
            ["Preparación del área", `<p>Coordina el momento de intervención para no interrumpir actividades. Solicita autorización cuando sea necesario, evita mover documentos y desconecta equipos únicamente si existe autorización y el procedimiento lo contempla. No rocíes líquidos directamente sobre computadores, teclados, teléfonos o conexiones.</p>`],
            ["Mobiliario y superficies", `<p>Retira el polvo con un paño adecuado y limpia con el producto compatible. Trabaja con movimientos ordenados, sin saturar la superficie de humedad. Presta atención a manijas, interruptores y puntos de contacto, respetando las instrucciones de higiene del lugar.</p>`],
            ["Equipos electrónicos", `<p>Los equipos electrónicos requieren especial precaución. No apliques líquidos directamente, no introduzcas humedad en ranuras y no manipules cables o conexiones. Sigue las instrucciones del fabricante y las indicaciones del área de tecnología.</p>`]
          ],
          quiz: [
            ["¿Qué debe hacerse antes de limpiar un escritorio ocupado?", ["Mover todos los documentos", "Coordinar y solicitar autorización cuando corresponda", "Rociar el escritorio sin avisar"], 1],
            ["¿Cómo se aplica un producto cerca de equipos electrónicos?", ["Directamente sobre el teclado", "Sobre conexiones eléctricas", "Según las instrucciones, sin rociar directamente el equipo"], 2],
            ["¿Qué método ayuda a retirar el polvo?", ["Un paño adecuado y limpio", "Un cepillo metálico en cualquier superficie", "Un chorro de agua"], 0],
            ["¿Qué se debe hacer con documentos personales?", ["Desecharlos", "No manipularlos sin autorización", "Apilarlos en el piso"], 1],
            ["¿Por qué se atienden los puntos de contacto?", ["Porque suelen tocarse con frecuencia", "Porque no necesitan limpieza", "Para mojarlos abundantemente"], 0]
          ]
        },
        {
          title: "Pisos, baños y zonas comunes",
          intro: "Aplica procedimientos diferenciados según el tipo de área y el nivel de suciedad.",
          sections: [
            ["Limpieza de pisos", `<p>Retira primero residuos sueltos con el implemento indicado. Utiliza el método y producto compatible con el tipo de piso. Evita exceso de agua, controla el tránsito y coloca señalización visible cuando el piso esté húmedo. Deja secar según el procedimiento.</p>`],
            ["Servicios sanitarios", `<p>Los baños requieren implementos exclusivos y una secuencia que evite contaminar superficies limpias. Usa los elementos de protección indicados, atiende lavamanos, griferías, espejos y sanitarios con utensilios diferenciados, repón consumibles y verifica que el área quede seca y ordenada.</p>`],
            ["Zonas comunes y residuos", `<p>En recepción, salas y pasillos, mantén libres las rutas de circulación. Retira residuos sin compactarlos con las manos, utiliza bolsas apropiadas y deposítalos en los puntos definidos. No manipules objetos cortopunzantes o residuos desconocidos directamente; señaliza y reporta.</p>`]
          ],
          quiz: [
            ["¿Qué debe hacerse cuando el piso está húmedo?", ["Dejarlo sin advertencia", "Señalizar y controlar el tránsito", "Cubrirlo con cartón"], 1],
            ["¿Los implementos de baños deben mezclarse con los de cafetería?", ["No, deben mantenerse diferenciados", "Sí, siempre", "Solo si están mojados"], 0],
            ["¿Cómo se deben retirar residuos de una papelera?", ["Introduciendo la mano", "Compactándolos con el pie", "Usando la protección y bolsa apropiadas"], 2],
            ["¿Qué se debe mantener despejado?", ["Las rutas de circulación y salidas", "Los accesos de emergencia con cajas", "Las puertas con implementos"], 0],
            ["¿Qué hacer si aparece un objeto cortopunzante?", ["Recogerlo con la mano", "No manipularlo directamente, señalizar y reportar", "Ocultarlo en la bolsa común"], 1]
          ]
        }
      ]
    },
    {
      title: "Seguridad, servicio y control de calidad",
      summary: "Prevención, ergonomía, residuos y verificación.",
      lessons: [
        {
          title: "Seguridad y prevención de riesgos",
          intro: "Identifica peligros frecuentes y adopta medidas para protegerte y proteger a otras personas.",
          sections: [
            ["Elementos de protección", `<p>Utiliza los elementos de protección personal definidos para cada tarea y producto, como guantes adecuados, calzado antideslizante, protección ocular o mascarilla cuando la evaluación del riesgo y las instrucciones lo indiquen. Revisa su estado y solicita reemplazo si están dañados.</p>`],
            ["Riesgos frecuentes", `<ul><li><strong>Resbalones y caídas:</strong> señaliza pisos húmedos y mantén pasillos despejados.</li><li><strong>Contacto químico:</strong> lee etiquetas, usa protección y evita mezclas.</li><li><strong>Riesgo eléctrico:</strong> no manipules cables dañados ni uses equipos eléctricos con manos mojadas.</li><li><strong>Cortaduras o pinchazos:</strong> no introduzcas las manos en bolsas ni manipules objetos desconocidos.</li><li><strong>Esfuerzo físico:</strong> utiliza técnicas seguras de levantamiento y solicita apoyo para cargas pesadas.</li></ul>`],
            ["Respuesta ante incidentes", `<p>Detén la actividad si existe peligro, protege el área sin exponerte, informa al responsable y sigue el procedimiento de emergencia de la organización. Ante una lesión, exposición química o descarga eléctrica, solicita atención de emergencia según la gravedad. No improvises tratamientos.</p>`]
          ],
          quiz: [
            ["¿Qué determina los elementos de protección que deben utilizarse?", ["La tarea, el riesgo y las instrucciones aplicables", "La preferencia estética", "El clima únicamente"], 0],
            ["¿Qué hacer ante un cable eléctrico dañado?", ["Usarlo con cuidado", "Cubrirlo con un paño húmedo", "No manipularlo y reportarlo"], 2],
            ["¿Cómo prevenir resbalones?", ["Dejar charcos", "Señalizar pisos húmedos y mantener rutas despejadas", "Apagar las luces"], 1],
            ["¿Qué hacer ante una exposición química?", ["Continuar trabajando", "Añadir otro producto", "Detenerse, alejarse e informar para recibir atención adecuada"], 2],
            ["¿Cómo levantar una carga pesada?", ["Solicitar ayuda y aplicar técnicas seguras", "Girar bruscamente la espalda", "Levantarla de cualquier manera"], 0]
          ]
        },
        {
          title: "Residuos, ergonomía y calidad del servicio",
          intro: "Cierra el proceso verificando resultados y comunicando novedades.",
          sections: [
            ["Manejo de residuos", `<p>Separa y entrega los residuos conforme al sistema de clasificación y las instrucciones vigentes en el lugar de trabajo. No mezcles residuos especiales o peligrosos con residuos ordinarios. No abras bolsas para recuperar materiales ni manipules residuos desconocidos.</p>`],
            ["Ergonomía y autocuidado", `<p>Alterna tareas cuando sea posible, evita posturas forzadas prolongadas, acerca los implementos al cuerpo y utiliza herramientas con mangos adecuados. Realiza pausas según la organización del trabajo y comunica molestias o condiciones que puedan generar lesiones.</p>`],
            ["Verificación final", `<p>Al terminar, revisa que las superficies estén limpias, los pisos secos, los residuos retirados, los consumibles repuestos y los implementos guardados. Retira la señalización solo cuando ya no exista el riesgo. Registra las tareas y reporta novedades.</p><h4>Indicadores sencillos de calidad</h4><ul><li>Tareas programadas completadas.</li><li>Ausencia de residuos visibles y malos olores.</li><li>Superficies y elementos en condiciones adecuadas.</li><li>Señalización y almacenamiento correctos.</li><li>Novedades reportadas oportunamente.</li></ul>`]
          ],
          quiz: [
            ["¿Cómo se deben separar los residuos?", ["Según el sistema e instrucciones del lugar", "Todos en una sola bolsa", "Abriendo bolsas para clasificarlos manualmente"], 0],
            ["¿Qué práctica favorece la ergonomía?", ["Mantener posturas forzadas", "Acercar implementos y evitar giros bruscos", "Cargar todo de una vez"], 1],
            ["¿Cuándo se retira la señalización de piso húmedo?", ["Cuando ya no exista el riesgo", "Antes de que se seque", "Al iniciar la limpieza"], 0],
            ["¿Qué debe incluir el cierre del servicio?", ["Guardar implementos sucios", "Dejar consumibles agotados", "Verificar resultados, registrar y reportar novedades"], 2],
            ["¿Qué hacer con residuos desconocidos o especiales?", ["Manipularlos directamente", "Seguir el procedimiento y reportar", "Mezclarlos con residuos ordinarios"], 1]
          ]
        }
      ]
    }
  ];

  const state = loadState();
  let selectedLevel = 0;
  let selectedLesson = 0;
  let activeSection = 0;
  let quizAnswers = {};
  let quizResult = null;

  const levelList = document.getElementById("levelList");
  const lessonContent = document.getElementById("lessonContent");
  const progressPercent = document.getElementById("progressPercent");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const toast = document.getElementById("toast");

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(COURSE_KEY));
      return saved && Array.isArray(saved.passed) ? saved : { passed: [], completedLessons: [] };
    } catch {
      return { passed: [], completedLessons: [] };
    }
  }

  function saveState() {
    localStorage.setItem(COURSE_KEY, JSON.stringify(state));
    renderProgress();
  }

  function isUnlocked(index) {
    return index === 0 || state.passed.includes(index - 1);
  }

  function levelCompleted(index) {
    return state.passed.includes(index);
  }

  function lessonKey(level, lesson) {
    return `${level}-${lesson}`;
  }

  function lessonCompleted(level, lesson) {
    return state.completedLessons.includes(lessonKey(level, lesson));
  }

  function renderProgress() {
    const count = state.passed.length;
    const percent = Math.round((count / levels.length) * 100);
    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
    progressText.textContent = `${count} de ${levels.length} niveles aprobados`;
  }

  function renderLevels() {
    levelList.innerHTML = levels.map((level, index) => {
      const locked = !isUnlocked(index);
      const completed = levelCompleted(index);
      const active = selectedLevel === index;
      return `<button class="level-button ${active ? "active" : ""} ${completed ? "completed" : ""}" data-level="${index}" ${locked ? "disabled" : ""}>
        <span class="level-number">${completed ? "✓" : locked ? "🔒" : String(index + 1).padStart(2, "0")}</span>
        <span class="level-info"><strong>${level.title}</strong><small>${level.summary}</small></span>
        <span class="level-status">${completed ? "✓" : ""}</span>
      </button>`;
    }).join("");

    levelList.querySelectorAll("[data-level]").forEach(button => {
      button.addEventListener("click", () => {
        selectedLevel = Number(button.dataset.level);
        selectedLesson = 0;
        activeSection = 0;
        quizAnswers = {};
        quizResult = null;
        renderAll();
      });
    });
  }

  function renderLesson() {
    const level = levels[selectedLevel];
    const lesson = level.lessons[selectedLesson];
    const done = lessonCompleted(selectedLevel, selectedLesson);
    const allLessonsDone = level.lessons.every((_, i) => lessonCompleted(selectedLevel, i));
    const sections = lesson.sections.map((section, index) =>
      `<button class="lesson-tab ${activeSection === index ? "active" : ""}" data-section="${index}">${section[0]}</button>`
    ).join("");

    lessonContent.innerHTML = `
      <div class="lesson-topline"><span class="pill">NIVEL ${selectedLevel + 1} · LECCIÓN ${selectedLesson + 1}</span><span class="pill">${done ? "Lección completada ✓" : "En progreso"}</span></div>
      <h3>${lesson.title}</h3>
      <p class="lesson-intro">${lesson.intro}</p>
      <div class="lesson-tabs">${sections}</div>
      <div class="lesson-body">${lesson.sections[activeSection][1]}</div>
      <div class="lesson-actions">
        <button class="action-button secondary" id="prevLesson" ${selectedLesson === 0 ? "disabled" : ""}>← Lección anterior</button>
        <button class="action-button" id="completeLesson">${done ? "Lección completada ✓" : "Marcar lección como completada"}</button>
        <button class="action-button secondary" id="nextLesson" ${selectedLesson === level.lessons.length - 1 ? "disabled" : ""}>Siguiente lección →</button>
      </div>
      <div class="lesson-actions">
        <button class="action-button secondary" id="showQuiz">Ir a la evaluación del nivel →</button>
        <span class="lesson-intro">${level.lessons.filter((_, i) => lessonCompleted(selectedLevel, i)).length} de ${level.lessons.length} lecciones completadas</span>
      </div>`;

    lessonContent.querySelectorAll("[data-section]").forEach(button => {
      button.addEventListener("click", () => {
        activeSection = Number(button.dataset.section);
        renderLesson();
      });
    });

    document.getElementById("prevLesson").addEventListener("click", () => {
      if (selectedLesson > 0) { selectedLesson--; activeSection = 0; renderLesson(); }
    });
    document.getElementById("nextLesson").addEventListener("click", () => {
      if (selectedLesson < level.lessons.length - 1) { selectedLesson++; activeSection = 0; renderLesson(); }
    });
    document.getElementById("completeLesson").addEventListener("click", () => {
      const key = lessonKey(selectedLevel, selectedLesson);
      if (!state.completedLessons.includes(key)) state.completedLessons.push(key);
      saveState();
      notify("Lección registrada. ¡Buen trabajo!");
      renderLesson();
    });
    document.getElementById("showQuiz").addEventListener("click", renderQuiz);
  }

  function renderQuiz() {
    const level = levels[selectedLevel];
    const allLessonsDone = level.lessons.every((_, i) => lessonCompleted(selectedLevel, i));
    if (!allLessonsDone) {
      lessonContent.innerHTML = `<div class="empty-state"><div class="empty-icon">✎</div><h3>Completa las lecciones primero</h3><p>Debes marcar como completadas las ${level.lessons.length} lecciones del nivel antes de presentar la evaluación.</p><button class="action-button" id="backToLesson">Volver a las lecciones</button></div>`;
      document.getElementById("backToLesson").addEventListener("click", renderLesson);
      return;
    }

    const questions = level.lessons.flatMap(lesson => lesson.quiz);
    const quizQuestions = questions.slice(0, 5);
    lessonContent.innerHTML = `
      <div class="lesson-topline"><span class="pill">EVALUACIÓN COMPLEMENTARIA · NIVEL ${selectedLevel + 1}</span><span class="pill">5 preguntas</span></div>
      <h3>Comprueba lo aprendido</h3>
      <p class="lesson-intro">Selecciona una respuesta por pregunta. Para aprobar necesitas al menos 4 respuestas correctas de 5 (80%).</p>
      <form id="quizForm">
        ${quizQuestions.map((q, index) => `<div class="quiz-question"><strong>${index + 1}. ${q[0]}</strong>${q[1].map((option, optionIndex) => `<label class="quiz-option"><input type="radio" name="q${index}" value="${optionIndex}" ${quizAnswers[index] === optionIndex ? "checked" : ""}> <span>${option}</span></label>`).join("")}</div>`).join("")}
        <div class="lesson-actions"><button class="action-button" type="submit">Calificar evaluación</button><button class="action-button secondary" type="button" id="backToLessons">Volver a lecciones</button></div>
      </form>
      ${quizResult !== null ? `<div class="quiz-result ${quizResult < PASS_SCORE ? "fail" : ""}">${quizResult >= PASS_SCORE ? `¡Felicitaciones! Obtuviste ${quizResult}/5. Nivel aprobado y siguiente nivel desbloqueado.` : `Obtuviste ${quizResult}/5. Necesitas mínimo 4 respuestas correctas. Puedes revisar el contenido e intentarlo de nuevo.`}</div>` : ""}`;

    document.getElementById("quizForm").addEventListener("change", event => {
      if (event.target.matches('input[type="radio"]')) {
        const index = Number(event.target.name.slice(1));
        quizAnswers[index] = Number(event.target.value);
      }
    });
    document.getElementById("quizForm").addEventListener("submit", event => {
      event.preventDefault();
      const unanswered = quizQuestions.some((_, i) => quizAnswers[i] === undefined);
      if (unanswered) {
        notify("Responde las cinco preguntas antes de calificar.");
        return;
      }
      const score = quizQuestions.reduce((sum, q, i) => sum + (quizAnswers[i] === q[2] ? 1 : 0), 0);
      quizResult = score;
      if (score >= PASS_SCORE && !state.passed.includes(selectedLevel)) {
        state.passed.push(selectedLevel);
        saveState();
        notify("¡Nivel aprobado! Se desbloqueó el siguiente nivel.");
      }
      renderLevels();
      renderQuiz();
    });
    document.getElementById("backToLessons").addEventListener("click", renderLesson);
  }

  function notify(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
  }

  function renderAll() {
    renderLevels();
    renderProgress();
    renderLesson();
  }

  renderAll();
})();
