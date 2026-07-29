/* ─── SPANISH CONTENT ────────────────────────────────────────────────────────
   Los Angeles County has roughly four million Spanish speakers and essentially
   no private-security competitor serving them properly. These are professionally
   written Spanish pages, NOT machine translations of the English ones — a
   translated-feeling page ranks worse than no page, and reads worse to the
   property managers, HOA boards and general contractors this is aimed at.

   Scope is deliberate: the highest-intent pages only (home, four services,
   contact, cost guide) at /es/*, each with hreflang pointing to its English
   counterpart and vice versa. The English site is untouched.

   Register: neutral Latin American Spanish, business tone, "usted". Every fact
   traces to FACTS/SITE_CONFIG so the two languages cannot drift.
──────────────────────────────────────────────────────────────────────────── */

export type EsService = {
  /** URL slug under /es/servicios/ */
  slug: string;
  /** The English SERVICES slug this corresponds to, for hreflang */
  enSlug: string;
  /** <title> before the brand template appends (keep <=34 chars) */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  /** Answer-first extractable facts */
  puntosClave: string[];
  cuerpo: string[];
  incluye: string[];
  faqs: { q: string; a: string }[];
};

export const ES_SERVICES: EsService[] = [
  {
    slug: "patrullaje",
    enSlug: "patrol",
    metaTitle: "Patrullaje de Seguridad en LA",
    metaDescription:
      "Patrullaje móvil con vehículos identificados en Los Ángeles: rondas verificadas por GPS, respuesta a alarmas y reportes con fotos. Cobertura en 72 horas.",
    h1: "Patrullaje de Seguridad en Los Ángeles",
    lede:
      "Vehículos identificados y oficiales uniformados que revisan su propiedad varias veces por noche, documentan cada visita y responden a alarmas — a una fracción del costo de un puesto fijo de 24 horas.",
    puntosClave: [
      "Rondas con vehículo identificado y a pie, en horarios deliberadamente variados",
      "Puntos de control verificados por GPS y reportes con hora exacta y fotografías",
      "Respuesta a alarmas, apertura y cierre de instalaciones y revisión de propiedades vacías",
      "Cobertura normalmente activa dentro de 72 horas de firmado el acuerdo — en menos de 24 para casos urgentes",
      "Con licencia, fianza y seguro bajo la licencia PPO #122163 de California, con supervisor en vivo 24/7",
    ],
    cuerpo: [
      "El patrullaje móvil es la alternativa realista cuando un guardia de tiempo completo es más cobertura de la que su propiedad necesita. En lugar de pagar 168 horas semanales de presencia fija, usted paga por visitas programadas — y deliberadamente irregulares — en las que un oficial uniformado revisa accesos, perímetro, estacionamientos y áreas de carga, y deja constancia escrita de cada ronda.",
      "El horario irregular no es un detalle: una patrulla que llega a la misma hora todas las noches le enseña a cualquier observador exactamente cuándo la propiedad queda sin vigilancia. Por eso variamos la hora, el orden de los puntos y la dirección de aproximación en cada pase. Las rondas se diseñan alrededor de los puntos realmente vulnerables de su propiedad — no de un recorrido genérico.",
      "Cada visita queda documentada. El oficial escanea puntos de control verificados por GPS, fotografía cualquier anomalía y presenta un reporte con hora exacta que usted puede leer a la mañana siguiente. Si un portón quedó abierto a las 2:14 a.m., usted lo sabe a las 8:00. Como una ruta de patrullaje se comparte entre propiedades cercanas, el costo por propiedad es una fracción del de un puesto dedicado — razón por la cual muchos clientes combinan rondas nocturnas con respuesta a alarmas y apertura y cierre.",
      "Servimos propiedades en todo el condado de Los Ángeles: centros comerciales, edificios de oficinas, complejos residenciales y asociaciones de vecinos, obras de construcción y propiedades desocupadas. Si no está seguro de si necesita patrullaje o un puesto fijo, la evaluación en sitio es gratuita y un asesor le dirá con franqueza cuál corresponde.",
    ],
    incluye: [
      "Rondas programadas con vehículo identificado y a pie",
      "Puntos de control verificados por GPS en cada visita",
      "Reportes con hora exacta y documentación fotográfica",
      "Respuesta e investigación de alarmas",
      "Apertura y cierre de instalaciones",
      "Revisión de propiedades vacías o en obra",
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta el patrullaje de seguridad en Los Ángeles?",
        a: "El patrullaje se cotiza por visita o como tarifa mensual fija según un calendario acordado, y cuesta una fracción de un puesto fijo de 24 horas porque la ruta se comparte entre propiedades cercanas. El monto depende de la frecuencia de visitas, los horarios y si incluye respuesta a alarmas. La evaluación en sitio es gratuita y produce una cotización por escrito, normalmente dentro de un día hábil.",
      },
      {
        q: "¿Con qué frecuencia revisan la propiedad?",
        a: "Según el riesgo y el presupuesto: desde una o dos rondas por noche hasta varias, en horarios variados. Lo importante no es solo la cantidad, sino que el patrón no sea predecible. Durante la evaluación definimos la frecuencia contra los puntos vulnerables reales de la propiedad y contra el historial de incidentes, si existe.",
      },
      {
        q: "¿Responden a alarmas?",
        a: "Sí, es parte central del servicio. Un oficial acude, investiga, documenta lo que encuentra y escala a la policía solo cuando la alarma es real — lo que también evita cargos por falsas alarmas en su cuenta. Los tiempos de respuesta se acuerdan por escrito en las órdenes del puesto, no se dejan abiertos.",
      },
      {
        q: "¿Qué tan rápido puede comenzar la cobertura?",
        a: "La cobertura permanente normalmente comienza dentro de 72 horas de firmado el acuerdo. Para necesidades urgentes — un robo la noche anterior, una obra que quedó abierta, la falla de otro proveedor — hemos movilizado equipos en menos de 24 horas. Primero va la evaluación gratuita: un asesor responde dentro de un día hábil.",
      },
    ],
  },
  {
    slug: "guardias-de-seguridad",
    enSlug: "guard-services",
    metaTitle: "Guardias de Seguridad en LA",
    metaDescription:
      "Guardias de seguridad armados y desarmados en Los Ángeles. Oficiales con antecedentes verificados, capacitación superior al mínimo estatal, supervisión 24/7.",
    h1: "Guardias de Seguridad Armados y Desarmados en Los Ángeles",
    lede:
      "Oficiales con antecedentes verificados y capacitación por encima del mínimo estatal, colocados según lo que su propiedad realmente necesita — no según la tarifa más alta que podamos facturar.",
    puntosClave: [
      "Oficiales armados y desarmados, con la modalidad definida según el riesgo documentado",
      "Todos con tarjeta de guardia (guard card) del BSIS de California y verificación de antecedentes",
      "Capacitación en desescalada, control de accesos, reporte de incidentes y primeros auxilios",
      "Supervisión en vivo 24/7 — alguien verifica que el oficial esté en su puesto y reportando",
      "Con licencia, fianza y seguro bajo la licencia PPO #122163 de California",
    ],
    cuerpo: [
      "Lo que usted contrata en realidad no es un uniforme: es el oficial que estará en su propiedad a las 3 de la mañana y el sistema que verifica que esté despierto, en su puesto y escribiendo reportes. Esa es la diferencia entre proveedores, y es la razón por la que preguntamos por el riesgo real de la propiedad antes de proponer una modalidad.",
      "Muchas propiedades que asumen necesitar guardias armados quedan mejor servidas por oficiales desarmados bien capacitados con disciplina de patrullaje. Un oficial armado implica permisos adicionales del BSIS, calificación con arma de fuego y una exposición de seguro sustancialmente mayor — costos que se justifican cuando existe una amenaza documentada, manejo de efectivo o bienes de alto valor, y no cuando simplemente se quiere una presencia más imponente. Un asesor honesto le dirá cuál es su caso en lugar de recomendar automáticamente la opción más costosa.",
      "Nuestros oficiales provienen en buena parte de trayectorias militares y de las fuerzas del orden, lo que aporta compostura en situaciones que un guardia con capacitación mínima maneja mal: un huésped intoxicado, un inquilino molesto, una persona sin autorización que se niega a retirarse. La capacitación va más allá del mínimo estatal precisamente porque esas situaciones — no los robos — son las que ocurren todas las semanas.",
      "Cada puesto opera con órdenes escritas específicas para su propiedad: qué se revisa, con qué frecuencia, qué se documenta, cuándo el oficial resuelve y cuándo escala, y a quién se llama en su organización a media noche. Los reportes de incidentes se entregan con hora exacta, porque es el documento que su aseguradora o su abogado pedirán después.",
    ],
    incluye: [
      "Puestos fijos armados o desarmados, por turno o 24/7",
      "Control de accesos, registro de visitantes y proveedores",
      "Recepción y áreas comunes con enfoque de servicio",
      "Reportes de incidentes con hora exacta y fotografías",
      "Órdenes de puesto escritas y específicas para su propiedad",
      "Supervisión de campo y centro de operaciones 24/7",
    ],
    faqs: [
      {
        q: "¿Necesito guardias armados o desarmados?",
        a: "Depende de la amenaza documentada, no de la percepción. La mayoría de las propiedades comerciales y residenciales quedan mejor servidas por oficiales desarmados bien capacitados. La cobertura armada se justifica cuando hay una amenaza específica y verificable, manejo de efectivo o bienes de alto valor. Un asesor de Stratton le dirá cuál corresponde durante la evaluación gratuita, incluso cuando eso signifique la opción menos costosa.",
      },
      {
        q: "¿Qué capacitación y licencias tienen los oficiales?",
        a: "Todos los oficiales cuentan con la tarjeta de guardia del Bureau of Security and Investigative Services (BSIS) de California, que exige capacitación en Poder de Arresto y verificación de antecedentes ante el Departamento de Justicia y el FBI. Los oficiales armados suman el permiso de arma expuesta del BSIS y calificación con arma de fuego. Internamente capacitamos por encima de ese mínimo en desescalada, documentación y control de accesos.",
      },
      {
        q: "¿Cómo sé que el oficial está haciendo su trabajo de noche?",
        a: "Por supervisión y documentación, no por confianza. Los supervisores de campo visitan los puestos, y el centro de operaciones funciona 24/7. Los reportes se entregan con hora exacta y, donde aplica, con puntos de control verificados por GPS. Puede pedir la relación de supervisores por puesto antes de contratar — es una de las preguntas que distingue a un proveedor serio.",
      },
      {
        q: "¿Cuánto cuesta un guardia de seguridad en Los Ángeles?",
        a: "Las tarifas de mercado en Los Ángeles se ubican aproximadamente entre 22 y 38 dólares por hora para oficiales desarmados y entre 35 y 60 o más para armados. Esas son referencias de mercado, no una cotización de Stratton: su tarifa depende de las horas, las órdenes del puesto y el perfil de riesgo del sitio. La tarifa facturada cubre salario, impuestos sobre nómina, compensación laboral, seguro de responsabilidad, capacitación y supervisión.",
      },
    ],
  },
  {
    slug: "vigilancia-contra-incendios",
    enSlug: "fire-watch",
    metaTitle: "Vigilancia Contra Incendios LA",
    metaDescription:
      "Oficiales de fire watch en Los Ángeles cuando el sistema de rociadores o alarma está fuera de servicio. Registros por escrito para el departamento de bomberos.",
    h1: "Vigilancia Contra Incendios (Fire Watch) en Los Ángeles",
    lede:
      "Cuando el sistema de rociadores, la toma de agua o la alarma contra incendios queda fuera de servicio en un edificio ocupado, el Código de Incendios de California exige una vigilancia dedicada mientras dure la falla. Movilizamos en menos de 24 horas.",
    puntosClave: [
      "Oficiales dedicados exclusivamente a la vigilancia contra incendios, no a control de accesos",
      "Recorridos continuos de las áreas afectadas con registro escrito y hora exacta",
      "Conocimiento previo del edificio: estaciones de alarma, tomas de agua, rutas de evacuación",
      "Movilización urgente en menos de 24 horas — casi nunca se programa con anticipación",
      "Con licencia, fianza y seguro bajo la licencia PPO #122163 de California",
    ],
    cuerpo: [
      "La vigilancia contra incendios no es un puesto de guardia general, y confundir las dos cosas es un problema de cumplimiento. Cuando un sistema de protección contra incendios requerido queda fuera de servicio — por una remodelación, una reparación, una válvula cerrada tras una fuga o una inspección no aprobada — el Código de Incendios de California exige una vigilancia dedicada mientras la falla persista.",
      "La tarea del oficial es específica y limitada: recorrer las áreas afectadas en un ciclo fijo, vigilar humo, calor y fuentes de ignición, mantener despejadas las rutas de evacuación, conocer la ubicación de las estaciones de alarma manual y las tomas de agua, y llamar directamente al 911 — porque el sistema que normalmente haría esa llamada está desactivado. No está haciendo rondas de patrullaje ni atendiendo la recepción al mismo tiempo.",
      "La documentación es tan importante como la presencia. Cada recorrido se registra con hora, áreas cubiertas y cualquier observación, porque el departamento de bomberos y su aseguradora van a pedir ese registro y una garantía verbal posterior no sirve de nada. Los oficiales reciben información sobre su edificio en particular antes del primer recorrido: ubicación de estaciones de alarma y tomas de agua, salidas de escalera, qué elevadores pueden usarse y a quién llamar en su organización a las 3 de la mañana.",
      "Un detalle que importa en Los Ángeles: la autoridad competente cambia según la ciudad. En la ciudad de Los Ángeles es el Departamento de Bomberos de Los Ángeles (LAFD), pero Burbank, Glendale, Long Beach, Torrance y otras ciudades independientes operan sus propios departamentos con requisitos que no son intercambiables. Confirmamos la autoridad de su sitio específico antes de iniciar la vigilancia.",
    ],
    incluye: [
      "Oficiales dedicados exclusivamente a la vigilancia contra incendios",
      "Ciclos de recorrido definidos según el área afectada y el tiempo real de una ronda",
      "Registro escrito con hora exacta para la autoridad competente y su aseguradora",
      "Verificación de rutas de evacuación despejadas",
      "Cobertura continua hasta que el sistema se restablezca y se autorice",
      "Movilización en menos de 24 horas",
    ],
    faqs: [
      {
        q: "¿Cuándo se requiere legalmente una vigilancia contra incendios?",
        a: "Cuando un sistema de protección contra incendios requerido — rociadores, tomas de agua o alarma — queda fuera de servicio en un edificio ocupado, durante todo el tiempo que dure la falla, conforme al Código de Incendios de California. En la práctica se activa por remodelaciones, reparaciones, una válvula cerrada tras una fuga o una inspección no aprobada. La autoridad competente esperará una vigilancia continua y documentada, no recorridos ocasionales.",
      },
      {
        q: "¿Qué tan rápido pueden iniciar?",
        a: "En menos de 24 horas en la mayoría de los casos, y con frecuencia el mismo día. La vigilancia por falla de sistema casi nunca se planea con anticipación: se cierra una válvula o no se aprueba una inspección y la cobertura se necesita de inmediato. Llame al (424) 440-5554 y un asesor definirá por teléfono las áreas afectadas, la duración del ciclo y los turnos.",
      },
      {
        q: "¿Qué hace exactamente un oficial de fire watch?",
        a: "Recorre las áreas afectadas en un ciclo fijo buscando humo, calor y fuentes de ignición; mantiene despejadas las salidas; conoce la ubicación de estaciones de alarma, tomas de agua y escaleras de ese edificio en particular; llama directamente al 911 si encuentra algo, porque el sistema que normalmente lo haría está desactivado; y registra cada recorrido por escrito con hora exacta. Está asignado a esa tarea y no la combina con recepción o control de accesos.",
      },
      {
        q: "¿El registro sirve para el departamento de bomberos y la aseguradora?",
        a: "Para eso existe. Cada recorrido se documenta con hora, áreas cubiertas y observaciones, y el registro está disponible durante toda la vigilancia en lugar de armarse después. Tanto la autoridad competente como su aseguradora suelen pedirlo como evidencia de que la falla estuvo cubierta de forma continua — razón por la cual no acortamos ciclos ni dejamos huecos entre turnos.",
      },
    ],
  },
  {
    slug: "seguridad-para-obras-de-construccion",
    enSlug: "construction",
    metaTitle: "Seguridad para Obras en LA",
    metaDescription:
      "Seguridad para obras de construcción en Los Ángeles: robo de cobre y herramienta, control y registro de accesos, revisión de lotes vacíos. Cobertura en 72 horas.",
    h1: "Seguridad para Obras de Construcción en Los Ángeles",
    lede:
      "Cobertura nocturna y de fin de semana para obras activas, materiales en resguardo y lotes vacíos — con registro documentado de quién entró, cuándo y con qué autorización.",
    puntosClave: [
      "Cobertura nocturna y de fin de semana, cuando la obra está vacía",
      "Control de accesos documentado: quién entró, a qué hora y con qué autorización",
      "Rondas con vehículo identificado para lotes vacíos y obras en etapa de estructura",
      "Movilización urgente en menos de 24 horas; cobertura permanente normalmente en 72",
      "Con licencia, fianza y seguro bajo la licencia PPO #122163 de California",
    ],
    cuerpo: [
      "Lo que se roban de una obra sigue un patrón predecible, y entenderlo es lo que hace útil la cobertura. Cobre y cableado antes de que se cierren los muros; electrodomésticos y accesorios una vez entregados pero antes de instalarse; herramienta y compresores de bodegas y tráileres sin asegurar; madera y ventanas directamente de las estibas. La exposición alcanza su punto máximo en la ventana entre la entrega y la instalación, que es justo cuando la obra tiene más valor acumulado y menos protección alrededor.",
      "Por eso la cobertura se diseña contra ese calendario y no como una ronda nocturna plana: más presencia cuando llegan materiales, y revisión documentada de la bodega y el perímetro al cierre de la jornada. En obras de varios lotes en la misma calle, una sola ruta puede cubrir varios proyectos, lo que reparte el costo entre ellos en lugar de cobrar a cada obra un puesto dedicado.",
      "El control de accesos es la otra mitad del trabajo. Una obra recibe un flujo constante de subcontratistas, inspectores, cuadrillas de servicios públicos, transportistas de escombro y propietarios, y en un sitio sin personal permanente nadie está registrando quién pasó. Los oficiales verifican las llegadas contra su lista autorizada, detienen una entrega que no estaba prevista y escalan con usted en lugar de decidir por su cuenta. Cuando algo desaparece, ese registro escrito es lo primero que todos piden.",
      "También importa la geografía real del sitio. Calles angostas de cañón con un solo acceso, lotes sin retorno para vehículos y obras con frente largo cambian lo que una patrulla puede cubrir realmente y cuánto tarda una ronda completa. Eso se define en la evaluación en sitio, que es gratuita, y no en un mapa.",
    ],
    incluye: [
      "Rondas nocturnas y de fin de semana con vehículo identificado",
      "Control y registro de accesos contra lista autorizada",
      "Revisión de bodegas, tráileres y materiales en resguardo",
      "Revisión de lotes vacíos y obras en etapa de estructura",
      "Reportes con hora exacta y documentación fotográfica",
      "Cobertura coordinada con el calendario de entregas",
    ],
    faqs: [
      {
        q: "¿Qué se roban de una obra y cuándo?",
        a: "Cobre y cableado antes de cerrar muros; electrodomésticos y accesorios una vez entregados pero sin instalar; herramienta de bodegas y tráileres. El pico de exposición es el intervalo entre la entrega y la instalación, cuando hay más valor en el sitio con menos protección. Ajustar la cobertura a su calendario de entregas rinde más que agregar rondas a una tarifa fija.",
      },
      {
        q: "¿Pueden controlar quién entra a la obra?",
        a: "Sí. Los oficiales verifican las llegadas contra su lista autorizada de subcontratistas, inspectores y entregas, registran entradas y salidas con hora, detienen a quien no esté previsto y llaman a su contacto en obra en lugar de decidir por su cuenta. En una obra con rotación constante de cuadrillas, ese registro escrito suele ser lo primero que se solicita cuando algo falta.",
      },
      {
        q: "¿Cubren varias obras en la misma calle?",
        a: "Sí, y normalmente conviene. Cuando un constructor tiene varios proyectos cercanos, una sola ruta de patrullaje puede cubrirlos y el costo se reparte entre ellos, en lugar de cobrar a cada obra un puesto dedicado. Es una diferencia significativa en zonas de reconstrucción donde una misma calle tiene varias obras simultáneas.",
      },
      {
        q: "¿Qué tan rápido puede iniciar la cobertura?",
        a: "La cobertura permanente normalmente comienza dentro de 72 horas de firmado el acuerdo, y hemos movilizado equipos en menos de 24 horas cuando una obra fue robada o quedó abierta. Primero va la evaluación en sitio, que es gratuita: un asesor responde dentro de un día hábil, recorre la obra y define horarios y requisitos de acceso antes de programar oficiales.",
      },
    ],
  },
];

/** Home page copy. */
export const ES_HOME = {
  metaTitle: "Seguridad Privada en Los Ángeles",
  metaDescription:
    "Compañía de seguridad privada en Los Ángeles con licencia PPO #122163. Guardias armados y desarmados, patrullaje, fire watch. Evaluación gratuita, respuesta en un día hábil.",
  h1: "Compañía de Seguridad Privada en Los Ángeles",
  lede:
    "Colocamos únicamente profesionales calificados, con antecedentes verificados y capacitación rigurosa — con la disciplina del servicio militar y de las fuerzas del orden, adaptada a lo que su propiedad necesita.",
  puntosClave: [
    "Licencia PPO #122163 del Bureau of Security and Investigative Services de California",
    "Con licencia, fianza y seguro; centro de operaciones y supervisión en vivo 24/7",
    "Evaluación de seguridad en sitio gratuita, con respuesta de un asesor dentro de un día hábil",
    "Cobertura normalmente activa dentro de 72 horas de firmado el acuerdo — en menos de 24 para casos urgentes",
    "Atendemos todo el condado de Los Ángeles y el sur de California",
  ],
  intro: [
    "Stratton Security Group es una compañía de seguridad privada con sede en Los Ángeles. Protegemos propiedades comerciales, residenciales y eventos en todo el condado: edificios de oficinas, centros comerciales, hoteles, complejos de departamentos y asociaciones de vecinos, obras de construcción, residencias privadas y recintos de eventos.",
    "Lo que nos distingue no es una frase publicitaria, son cosas que usted puede verificar antes de contratar: nuestra licencia PPO está activa y puede confirmarla en el registro público del BSIS; nuestros oficiales pasan verificación de antecedentes y capacitación superior al mínimo estatal; y cada puesto opera bajo supervisión en vivo con reportes documentados, no bajo confianza.",
    "Si está comparando proveedores, hágalo con criterios y no con precio solamente. Una cotización muy por debajo del mercado se financia con el salario del oficial, con el seguro o con la supervisión — y esas tres cosas son exactamente lo que usted está comprando. Nuestra guía de costos explica las tarifas de mercado en Los Ángeles y qué preguntar a cualquier compañía antes de firmar.",
  ],
  porQue: [
    {
      titulo: "Oficiales con trayectoria",
      texto:
        "Buena parte de nuestros oficiales proviene del servicio militar y de las fuerzas del orden. Eso aporta compostura en las situaciones que ocurren de verdad todas las semanas: una persona intoxicada, un inquilino molesto, alguien sin autorización que se niega a retirarse.",
    },
    {
      titulo: "Supervisión verificable",
      texto:
        "Un centro de operaciones 24/7 y supervisores de campo que visitan los puestos. Puede pedir la relación de supervisores por puesto antes de contratar — es una de las preguntas que distingue a un proveedor serio de uno que no lo es.",
    },
    {
      titulo: "Documentación, no promesas",
      texto:
        "Reportes con hora exacta, puntos de control verificados por GPS en patrullaje y documentación fotográfica de incidentes. Es el registro que su aseguradora o su abogado pedirán después, y la razón por la que no dependemos de garantías verbales.",
    },
    {
      titulo: "Recomendación honesta",
      texto:
        "Si su propiedad no necesita cobertura armada, se lo diremos. Si el patrullaje resuelve su problema a una fracción del costo de un puesto de 24 horas, también. La evaluación existe para diseñar un programa, no para vender el servicio más caro.",
    },
  ],
};

/** Contact page copy. */
export const ES_CONTACT = {
  metaTitle: "Contacto — Seguridad en LA",
  metaDescription:
    "Solicite una evaluación de seguridad gratuita en Los Ángeles. Respuesta de un asesor dentro de un día hábil. Llame al (424) 440-5554, disponible 24/7.",
  h1: "Solicite una Evaluación Gratuita",
  lede:
    "Cuéntenos sobre su propiedad y un asesor de Stratton le responderá dentro de un día hábil. La evaluación en sitio es gratuita y sin compromiso.",
  pasos: [
    {
      titulo: "1. Nos contacta",
      texto:
        "Por teléfono al (424) 440-5554 o mediante el formulario. Si el asunto es urgente — una obra abierta, una alarma sin resolver, una orden de fire watch — llame; contestamos a toda hora.",
    },
    {
      titulo: "2. Recorremos la propiedad",
      texto:
        "Un asesor visita el sitio, revisa accesos, perímetro, horarios de riesgo y cualquier historial de incidentes. Esta visita es gratuita y no obliga a nada.",
    },
    {
      titulo: "3. Recibe una propuesta por escrito",
      texto:
        "Con el número real para su propiedad: modalidad, horas, órdenes de puesto y costo. Sin tarifa de gancho que cambie después de firmar.",
    },
    {
      titulo: "4. Iniciamos la cobertura",
      texto:
        "Normalmente dentro de 72 horas de firmado el acuerdo. En casos urgentes hemos movilizado equipos en menos de 24 horas.",
    },
  ],
  queLlevar: [
    "El horario de cobertura que cree necesitar",
    "Cualquier historial de incidentes: reportes policiales, quejas, fechas de robos",
    "Logística del sitio: accesos, estacionamiento, dónde se ubicaría un oficial o un vehículo",
  ],
};

/** Cost guide. */
export const ES_COSTOS = {
  slug: "costos-de-seguridad-en-los-angeles",
  enSlug: "how-much-do-security-guards-cost-in-los-angeles",
  metaTitle: "Costos de Seguridad en LA",
  metaDescription:
    "Cuánto cuesta un guardia de seguridad en Los Ángeles: tarifas de mercado por hora, costo mensual de cobertura 24/7 y las opciones más económicas.",
  h1: "¿Cuánto Cuesta un Guardia de Seguridad en Los Ángeles?",
  lede:
    "Tarifas de mercado reales en Los Ángeles, cuánto cuesta al mes la cobertura de 24 horas, las alternativas más económicas y cómo comparar cotizaciones sin que la más baja le salga cara.",
  puntosClave: [
    "Tarifas de mercado en Los Ángeles: oficiales desarmados aproximadamente 22 a 38 dólares por hora; armados 35 a 60 o más",
    "La tarifa facturada no es el salario del guardia: cubre sueldo, impuestos sobre nómina, compensación laboral, seguro, capacitación y supervisión",
    "Un puesto de 24/7 son unas 730 horas al mes, de modo que la cobertura continua desarmada ronda los 16,000 a 27,700 dólares mensuales a precios de mercado",
    "La opción más económica que es realmente segura suele ser el patrullaje móvil, no un guardia mal pagado",
    "Una cotización muy por debajo del mercado es una advertencia: algo tiene que ceder, y normalmente es el salario, el seguro o la supervisión",
  ],
  secciones: [
    {
      titulo: "Tarifas de mercado en Los Ángeles",
      cuerpo: [
        "El servicio de seguridad en Los Ángeles se factura por hora, y la tarifa facturada no es el salario del oficial: cubre su sueldo, impuestos sobre nómina, compensación laboral, seguro de responsabilidad, capacitación, supervisión, programación y el margen de la empresa. Esa distinción explica casi toda la diferencia de precios que verá al pedir cotizaciones.",
        "Al momento de escribir esto, la mayoría de las compañías serias y debidamente licenciadas en Los Ángeles factura oficiales desarmados entre aproximadamente 22 y 38 dólares por hora, y armados desde 35 hasta 60 o más, según la asignación. Puestos especializados — protección ejecutiva, sitios de alto riesgo, oficiales fuera de servicio — cuestan más.",
        "Trate cualquier cotización muy por debajo de esa banda como una advertencia y no como una oportunidad. Una tarifa desarmada de menos de veinte dólares por hora no deja margen para pagar legalmente a un guardia en Los Ángeles, mantener un seguro real y supervisar el puesto. Algo tiene que ceder, y normalmente es el salario del oficial, el seguro, o ambos.",
      ],
    },
    {
      titulo: "¿Cuánto cuesta al mes la cobertura de 24 horas?",
      cuerpo: [
        "La cobertura continua son 168 horas por semana, es decir unas 730 horas al mes. A tarifas de mercado de Los Ángeles, eso ubica un puesto desarmado de 24/7 entre unos 16,000 y 27,700 dólares mensuales, y un puesto armado de 24/7 entre unos 25,500 y 43,800 o más.",
        "Haga esa multiplicación con cualquier propuesta que reciba — tarifa por hora por horas mensuales — y verá de inmediato si el número mensual es verosímil. Un puesto parcial de ocho horas por noche son unas 243 horas al mes, no 730, de modo que se ubica aproximadamente entre 5,300 y 9,300 dólares; y como el volumen semanal es la mayor palanca de precio, un puesto de menos horas suele cotizarse en la parte alta de la banda por hora, no en la baja.",
        "Estas son referencias de mercado para verificar propuestas, no una cotización de Stratton. Su número sale de su propiedad: las horas, armado o desarmado, las órdenes del puesto y el perfil de riesgo del sitio.",
      ],
    },
    {
      titulo: "¿Cuál es la forma más económica de tener seguridad?",
      cuerpo: [
        "La respuesta honesta es que la seguridad más económica que además es segura no consiste en un guardia más barato, sino en la cantidad correcta de cobertura. Pagar de menos por un puesto fijo le consigue un oficial sin capacitación, sin supervisión y que renuncia en un mes. Dimensionar bien le consigue presencia donde su propiedad está realmente expuesta.",
        "Piénselo como una escala. Cámaras e iluminación son la capa más económica, pero registran incidentes en lugar de responder a ellos. El patrullaje móvil es la primera capa con una persona: un vehículo identificado y un oficial uniformado que hace revisiones programadas y deliberadamente irregulares, con respuesta a alarmas entre ellas — y como la ruta se comparte entre propiedades cercanas, el costo por propiedad es una fracción de un puesto fijo. Por encima está un puesto parcial que cubre solo sus horas de mayor riesgo, luego un puesto desarmado de 24/7, y finalmente cobertura armada continua cuando una amenaza documentada lo justifica.",
        "Para muchas asociaciones de vecinos, centros comerciales, edificios de oficinas y obras de construcción, un programa de patrullaje con buena iluminación y cámaras entrega la mayor parte de la disuasión de un guardia fijo a una fracción del precio. La respuesta honesta de un asesor con frecuencia es una combinación: cobertura fija para las horas de alto riesgo y patrullaje para el resto.",
      ],
    },
    {
      titulo: "Por qué la cotización más baja suele salir más cara",
      cuerpo: [
        "Cuando una cotización queda un tercio por debajo del mercado, el ahorro sale de algo que usted habría pagado a propósito. Lo más común: el salario del oficial — que es lo que produce la rotación y las ausencias que caracterizan a los operadores de bajo costo —, la cobertura de seguro, la capacitación, y la supervisión, es decir que nadie verifica que el guardia de las 2 de la mañana esté despierto, en su puesto y escribiendo reportes.",
        "Las verificaciones toman minutos y vale la pena hacerlas en cada propuesta: confirme que la licencia de Private Patrol Operator esté activa en el registro público del BSIS — Stratton opera bajo la licencia PPO #122163 de California, y cualquier empresa legítima le dará su número sin que haya que pedirlo dos veces —; solicite un certificado de seguro vigente que lo nombre como asegurado adicional; y pregunte cuánto se le pagará realmente al oficial asignado a su propiedad. Esa última pregunta incomoda visiblemente a los proveedores de bajo costo, que es justamente el punto.",
        "También hay una aritmética de responsabilidad. Si el guardia de una empresa con seguro insuficiente lesiona a alguien o falla en actuar en su propiedad, el reclamo no se queda como problema del proveedor. Los pocos dólares por hora que ahorró pueden quedar empequeñecidos por un solo incidente que termine en su propia póliza — o en su propio balance.",
      ],
    },
    {
      titulo: "Cómo obtener un número exacto para su propiedad",
      cuerpo: [
        "Las referencias de mercado acotan el problema, pero su tarifa sale de su propiedad: las horas que necesita, armado o desarmado, las órdenes del puesto y el perfil de riesgo del sitio. Cualquier empresa serie de Los Ángeles pondrá un número por escrito después de un recorrido. En Stratton el recorrido y la evaluación son gratuitos, y lo que regresa es una propuesta clara por escrito, no una tarifa de gancho que crece una vez firmado.",
        "Para que cualquier cotización sea más rápida y precisa, tenga listas tres cosas: la ventana de cobertura que cree necesitar — con franqueza sobre si es tranquilidad o respuesta a incidentes concretos —, cualquier historial de incidentes como reportes policiales, quejas de la asociación o fechas de robos, y la logística del sitio: accesos, estacionamiento y dónde se ubicaría realmente un oficial o un vehículo de patrullaje.",
        "Luego compare las propuestas por el conjunto: la tarifa facturada, el salario del oficial detrás de ella, el certificado de seguro, el estándar de capacitación, el modelo de supervisión y los mínimos y condiciones de salida del contrato. El número más bajo de la página es fácil de encontrar. El mejor valor — el programa que efectivamente evita el incidente — toma una llamada más. Comuníquese al (424) 440-5554 y le daremos un número real para su propiedad dentro de un día hábil del recorrido.",
      ],
    },
  ],
  faqs: [
    {
      q: "¿Cuánto cuesta un guardia de seguridad por hora en Los Ángeles?",
      a: "La mayoría de las compañías serias y debidamente licenciadas en Los Ángeles factura oficiales desarmados entre aproximadamente 22 y 38 dólares por hora, y armados desde 35 hasta 60 o más. Los puestos especializados cuestan más. La tarifa facturada cubre el salario del oficial más impuestos sobre nómina, compensación laboral, seguro de responsabilidad, capacitación y supervisión, razón por la cual está bastante por encima de lo que el guardia recibe.",
    },
    {
      q: "¿Cuánto cuesta al mes la seguridad de 24 horas?",
      a: "La cobertura continua son 168 horas por semana, unas 730 al mes. A tarifas de mercado de Los Ángeles eso ubica un puesto desarmado de 24/7 cerca de 16,000 a 27,700 dólares mensuales, y uno armado entre unos 25,500 y 43,800. Son referencias para verificar propuestas, no una cotización: su número depende de las horas, las órdenes del puesto y el riesgo del sitio.",
    },
    {
      q: "¿Cuál es la forma más económica de proteger un negocio en Los Ángeles?",
      a: "El enfoque más económico que sigue siendo seguro es dimensionar bien la cobertura, no pagarle menos a un guardia. Para la mayoría de las propiedades eso significa patrullaje móvil — un vehículo identificado y un oficial uniformado que hace revisiones programadas e irregulares — combinado con buena iluminación y cámaras. Como la ruta se comparte entre propiedades cercanas, el costo por propiedad es una fracción de un puesto dedicado, y usted conserva visitas documentadas y respuesta a alarmas.",
    },
    {
      q: "¿Por qué algunas cotizaciones son mucho más baratas?",
      a: "Cuando una propuesta queda un tercio por debajo del mercado, el ahorro sale de algo que usted habría pagado a propósito: el salario del oficial, la cobertura de seguro, la capacitación por encima del mínimo estatal, o la supervisión. Verifique la licencia de Private Patrol Operator en el registro público del BSIS, pida un certificado de seguro que lo nombre como asegurado adicional, y pregunte cuánto se le pagará al oficial asignado a su propiedad.",
    },
  ],
};
