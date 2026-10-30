# MASTER — Cozy Studio

Versión documental 2.0 · 30 de octubre de 2026 · Habit Tracker YouTube

**Estado:** especificación para una reconstrucción desde cero; implementación nueva no iniciada. «2.0» identifica estos documentos, no una aplicación ya entregada.

## 1. Qué vamos a construir

Una app personal de escritorio para organizar la producción de resúmenes de manga, manhwa, manhua y one shots para un canal de YouTube. Su centro es el video: guardar una idea, preparar su producción, trabajar, retomar y publicar.

Al abrirla debe quedar claro qué video seguir y qué hacer ahora. El registro de hábitos acompaña ese trabajo. La app no debe convertirse en otra actividad que administrar.

Interfaz en español; contenido del canal en inglés y fuentes en ambos idiomas. Una persona, un canal y almacenamiento local. Sin cuentas, nube, scraping, publicación automática, generador de guiones, editor de video ni API de YouTube en esta primera entrega.

## 2. Autoridad y reinicio

La instrucción actual del propietario establece **Cozy Studio como única dirección visual**, elimina el hero por hora y pide una organización fácil de entender, con pocas palabras y consideración por dificultades de atención.

Este MASTER sustituye al anterior. `docs/DISENO_COZY_STUDIO.md` concreta componentes; `roadmap.md` ordena el trabajo; `PROMPTS_MAESTROS.md` lo divide en pasos CS01–CS36. Los archivos en `docs/archive/v1/` son históricos: no son requisitos activos ni acreditan el estado de la nueva app.

Las decisiones de detalle de esta versión son una base de trabajo editable, no preferencias personales supuestamente confirmadas. Si el propietario cambia una, actualizar las secciones afectadas sin defender una regla antigua por inercia.

## 3. Qué se mantiene, qué se flexibiliza

| Tipo | Contenido | Aplicación |
|---|---|---|
| Dirección elegida | Cozy Studio claro y cálido; sin hero temporal; lenguaje breve | Diseñar todo desde esta base |
| Preferencias conservadas | Sin violeta/morado de interfaz, sin degradados decorativos ni apariencia oscura | No alterar colores de fotos importadas |
| Valores ajustables | Metas, horarios, tiempos, fecha de entrega, orden visual, tamaños, intensidad de avisos | Son valores iniciales, no bloqueos |
| Integridad | Tiempo correcto, guardado confirmado, publicación explícita, copias recuperables | Verificar; no flexibilizar para maquillar resultados |
| Extras | Planta, jardín, XP, niveles, carrusel automático, rituales diarios | Fuera del alcance base; no implementar por defecto |

Se elimina la obligación de fondo blanco puro, fuentes solo del sistema, sombras neutras, tarjetas terminadas grises/sepia, mínimo de cuatro fotos y aprobación humana en cada paso. Tampoco se exige completar todas las tareas anteriores para trabajar en una etapa posterior.

## 4. Navegación y organización

| Lugar | Qué resuelve | Qué contiene |
|---|---|---|
| Hoy | Retomar trabajo | En tu mesa, avance de hoy, plan breve |
| Videos | Guardar y gestionar videos | En curso, Ideas, Publicados; búsqueda; detalle |
| Semana | Distribuir carga | Días, bloques, disponibilidad y fecha objetivo |
| Progreso | Consultar resultados | Tiempo, publicaciones, heatmap y análisis desplegable |
| Ajustes | Cambiar preferencias | Canal, planificación, avisos, apariencia, datos |

La barra lateral mantiene Hoy, Videos, Semana y Progreso juntos; Ajustes al pie. Avatar y nombre pequeño del canal, sin anillo duplicado ni edición accidental desde el encabezado. «Nueva idea» está siempre disponible como acción secundaria y por Ctrl+N. Los atajos no sustituyen controles visibles ni actúan dentro de un campo cuando puedan destruir texto.

El temporizador activo permanece accesible al navegar. En una ventana pequeña se compacta la navegación conservando etiquetas o nombres accesibles. Cambiar de pantalla no borra formularios ni reordena la colección.

## 5. Hoy y sustituto del hero: En tu mesa

No hay hero, saludo por hora, cielo, escena día/tarde/noche, parallax ni lógica de reloj para decoración. Una cabecera pequeña muestra «Hoy» y la fecha. La identidad cálida vive en las superficies y componentes.

**En tu mesa** es el área de trabajo principal, no un banner decorativo. Contiene:

- Portada pequeña o sustituto neutro.
- Nombre del video y etapa actual.
- Nota opcional «Seguir por aquí»: por ejemplo, «Revisar el cierre del guion».
- Acción dominante «Empezar», «Continuar» o «Ver sesión», según el estado real.
- Fecha objetivo como dato secundario; aviso corto solo si hay un problema relevante.

El resto de Hoy contiene un indicador de minutos frente a la meta y «Después», con hasta dos acciones previstas y acceso a Semana. El límite de dos es una pauta de legibilidad, no borra ni limita tareas del plan. No repetir heatmap, racha, gráficos, jardín y carrusel en esta pantalla. Se puede mostrar una franja semanal discreta si aporta contexto sin competir con el trabajo.

### 5.1 Selección de próxima acción

1. Si hay sesión activa o pausada, mostrar ese video/tarea y mantenerla al navegar.
2. En ausencia de sesión, usar el video fijado por el usuario si aún tiene trabajo pendiente.
3. Sin uno fijado, proponer el video en curso con fecha vigente más próxima; desempatar por inicio real y luego identificador. Sin fechas, usar el último trabajado; sin historial, el primero creado.
4. Dentro del video, usar la tarea elegida pendiente; si ya terminó, la primera pendiente del orden de plantilla. El usuario puede cambiarla.
5. Si tiene todas las tareas completas y no está publicado, ofrecer «Revisar publicación».
6. Sin trabajo en curso, ofrecer elegir una idea; si no hay ideas, «Crear primera idea».

La propuesta no inicia sesiones ni modifica prioridad automáticamente. «Después» usa bloques del día ordenados por hora cuando exista y por orden manual cuando no; sin plan no inventa tareas fechadas.

### 5.2 Diseño según estado

| Estado | Acción y contenido |
|---|---|
| Primera apertura | «Crear primera idea»; sin configuración obligatoria |
| Idea guardada, sin trabajo en curso | «Elegir video»; crear otra idea sigue disponible |
| Video seleccionado | Etapa pendiente y «Empezar» |
| Sesión pausada | Duración conocida y «Continuar» |
| Sesión activa | Tarea y controles de sesión; no un segundo botón para iniciar |
| Todo producido | «Revisar publicación» |
| Meta cumplida | «60 de 60 min» o total real superior; permite continuar |
| Atraso | «Quedan 2 tareas · Revisar plan»; detalles al abrir Semana |

## 6. Atención, reentrada y microtexto

Estas son decisiones de accesibilidad de uso, no un diagnóstico ni una promesa de tratar TDAH. Se aplican al diseño normal: no hay cuestionario médico ni etiqueta de «modo TDAH».

- Una acción principal clara por contexto, con posición estable.
- Información secundaria al abrir detalle; etiquetas esenciales siempre visibles.
- Captura de ideas con un campo. No obligar portada, URL, fecha, número ni tipo.
- Nota de reentrada opcional por tarea; se guarda sin exigir escribirla al salir.
- Vista «Enfoque» opcional: video, tarea, nota, recursos relevantes y controles de sesión. «Salir de enfoque» siempre visible; Escape vuelve sin parar el tiempo.
- Atajo a «Nueva idea» disponible desde Enfoque y retorno a la misma tarea después de guardar.
- Pocos avisos, sin sonido por defecto ni interrupciones repetidas al recuperar la app.
- Sin rotación automática, pulsaciones decorativas, contadores animados o confeti constante.
- Guardado automático y deshacer en cambios cotidianos recuperables.
- Metas editables por día; días sin meta no aparecen como fallos.
- Racha opcional y oculta inicialmente, sin frases de culpa ni penalizaciones visuales.

Ejemplos: «Continuar guion», «Mover al lunes», «Sesión guardada», «No se guardó. Reintentar». Evitar explicar qué hace un botón evidente. Ayudas contextuales solo para consecuencias o conceptos que lo necesiten, como restaurar una copia o diferenciar fecha original y vigente.

Texto descriptivo habitual: ninguna frase si el título basta; una frase breve cuando evita confusión. No convertir una cantidad rígida de palabras en requisito de programación. No recortar nombres importantes hasta volverlos irreconocibles.

## 7. Videos y ficha

### 7.1 Tres pestañas

| Pestaña | Incluye |
|---|---|
| En curso | Planificados, en producción y listos para publicar |
| Ideas | Fichas aún no iniciadas ni planificadas |
| Publicados | Publicaciones confirmadas, incluidas las que tengan correcciones pendientes |

Dentro de En curso, los estados se distinguen con etiquetas; no abrir una pestaña por cada estado. Publicados con corrección siguen en Publicados y pueden fijarse en Hoy con etiqueta «Corrección». No duplicar el video ni contar dos publicaciones.

Por defecto, orden estable por creación descendente. Un selector permite fecha objetivo o última actividad, y conserva la elección. Un video fijado se señala sin alterar silenciosamente ese orden. Búsqueda por obra, título y número.

### 7.2 Tarjetas

Portada, título, estado y próxima tarea; fecha solo cuando existe. El progreso de etapas puede verse al seleccionar o en el detalle, sin siete checks pequeños compitiendo en cada tarjeta. La finalizada conserva su portada y legibilidad; «Listo para publicar» o «Publicado» identifica el estado sin filtro gris, sepia ni dependencia de hover.

### 7.3 Detalle progresivo

Panel amplio; en ventanas pequeñas ocupa el contenido. Primera vista: título, siguiente acción, cinco etapas y fecha objetivo. Presentación agrupa sus tres checks. Secciones adicionales: «Recursos», «Plan y fechas», «Sesiones», «Notas». Se conserva su apertura durante la navegación cuando ayuda a retomar.

Datos disponibles: id estable, número opcional y único, obra, tipo, título del video, portada, canal de referencia, capítulos desde/hasta inclusivos o alcance libre, fuente de paneles en inglés, fuente de lectura en español, fechas, notas y publicación. Portada de obra y miniatura de YouTube son conceptos distintos.

Campos opcionales no bloquean guardar una idea. Rangos invertidos, número duplicado y URLs inválidas tienen errores junto al campo. Enlaces externos HTTP/HTTPS se abren en navegador. No se descargan ni se revisan enlaces automáticamente.

Cerrar detalle restaura scroll, filtros, selección y foco. Escape no descarta silenciosamente un cambio aún sin guardar.

## 8. Producción y fechas

| Etapa | Tareas iniciales | Presupuesto editable |
|---|---|---:|
| Lectura | Leer rango elegido | 120 min |
| Guion | Elaborar/revisar guion | 120 min |
| Presentación | Miniatura; título; SEO y descripción | 60 min conjuntos |
| Audio | Grabar audio | 150 min |
| Edición | Editar video | 240 min |
| Total | 7 tareas en 5 etapas | 690 min / 11 h 30 min |

Publicación es un hito adicional. El margen inicial de 90 min no forma parte de los 690 min de producción. Estos tiempos son estimaciones, no restricciones. Las tres tareas de Presentación no reciben 60 min cada una ni un reparto fijo obligatorio.

Crear una idea genera una sola plantilla. Se puede trabajar fuera de orden, renombrar tareas y cambiar presupuestos. Agregar plantillas completamente distintas queda para después; cambiar valores predeterminados solo afecta fichas nuevas, salvo cambio explícito por video.

Completar una tarea no requiere usar el temporizador. Si no hay inicio real, una confirmación breve permite hoy u otra fecha; no inventar tiempo retroactivo. «Finalizar sesión» y «Terminar tarea» tienen efectos distintos.

Creación, inicio real, fin de producción y publicación se guardan por separado. Completar 7/7 registra fin, sin publicar. Publicación manual con fecha/hora y URL opcional; subir o programar en YouTube no equivale a publicación confirmada. Reabrir conserva eventos previos y el hecho de publicación; una corrección no produce otra publicación mensual.

Conservar objetivo original y vigente. Reprogramar no reescribe la puntualidad histórica. Se permite rectificar una fecha mal capturada mediante una acción explícita registrada, distinta de reprogramar. No aceptar fin anterior al inicio.

## 9. Semana sin exceso de planificación

Vista por días con bloques de tarea y duración. Sin horas configuradas, es carga diaria, no una agenda con horarios inventados. Con intervalos disponibles, se pueden ubicar bloques en horas concretas. En poco ancho, mostrar lista de días en lugar de siete columnas aplastadas.

Plantilla inicial editable: lunes/martes lectura 60+60; miércoles/jueves guion 60+60; viernes Presentación 60 compartidos; sábado Audio 150 + Edición 90; domingo Edición 150. Total 690 min. Margen adicional de publicación 90 min. Fecha habitual: domingo antes de las 18:00 local; reserva orientativa desde las 16:30 solo si ese horario está configurado.

Mover, dividir y ajustar bloques mediante controles y, opcionalmente, arrastrar. Audio continuo como sugerencia, sin bloqueo. Mover 90 min a 30+60 conserva la carga y no registra sesiones de trabajo.

Al detectar atraso: un aviso corto y «Revisar plan». Allí se presenta una propuesta concreta con cambios, carga y nueva fecha, más opciones «Aplicar» y «Editar». Cancelar no cambia nada. No mostrar tres planes largos en Hoy ni crear otro video automáticamente cada lunes.

El restante parte de estimaciones editables. Tiempo consumido no equivale a avance real: si se agota el presupuesto pero la tarea sigue pendiente, solicitar ajustar estimado o mostrar «Por estimar». Solo afirmar un margen temporal cuando existen disponibilidad y restante suficientes; sin ellos, «Revisa el plan».

## 10. Temporizador, sesiones y enfoque

Un solo temporizador global, con iniciar, pausar, continuar y finalizar. Trabajar en otro video resuelve explícitamente la sesión anterior sin perderla. Pausas excluidas; sumar segundos antes de redondear la presentación.

Enfoque no crea otro temporizador. Una sugerencia «Empezar 15 min» es opcional, no obliga Pomodoro ni pausa automáticamente al llegar al límite. Aviso de final de tramo discreto y silencioso; continuar conserva la misma sesión.

Sesiones manuales: fecha, video/tarea, duración y nota opcional. Sin hora conocida no crear medianoche ficticia. Permitir corregir y descartar de forma recuperable; advertir intervalos solapados. No afirmar ausencia de solapamiento si falta la hora.

Guardar puntos de recuperación. Tras cierre inesperado o suspensión, distinguir tiempo confirmado de tramo incierto; proponer conservar el confirmado y permitir ajustar. No sumar una noche automáticamente ni deducir inactividad por teclado durante grabación.

Instantes absolutos, zona y fecha local de atribución persistentes. Repartir por medianoche local; fechas sin hora son fechas. Cambiar zona no desplaza silenciosamente días históricos.

## 11. Progreso y metas

Resumen inicial: tiempo de la semana y videos publicados del periodo, más heatmap. Análisis por etapa, estimado/real, duración y puntualidad en «Ver detalle». No presentar una pared de indicadores vacíos.

| Métrica | Definición |
|---|---|
| Tiempo efectivo | Sesiones válidas sin pausas, excluyendo descartadas |
| Meta diaria | Inicial 60 min, editable por día; el total no se recorta al alcanzarla |
| Días activos | Fechas distintas con trabajo registrado |
| Duración de producción | Inicio real a fin, diferente de horas efectivas |
| Tareas | Completadas de 7; no porcentaje de esfuerzo |
| Publicaciones | Videos con publicación confirmada, por su fecha real |
| Puntualidad | Publicados antes del objetivo original / publicados con objetivo conocido |

Si la regla es «antes de las 18:00», las 18:00 exactas no son puntuales. Vencidos sin publicar se muestran aparte. Denominador cero: «Sin datos». Cambios manuales recalculan todas las vistas desde el mismo servicio.

Heatmap anual completo o últimos doce meses de calendario, no «364 días = doce meses». Colores sólidos cálidos. Para duración exacta d en segundos: vacío d=0; nivel 1: 0<d<1800; nivel 2: 1800≤d<3600; nivel 3: 3600≤d<7200; nivel 4: d≥7200. Un día de 59m50s no cumple meta de 60m. Tooltip y teclado muestran fecha y valor.

Racha opcional: cuenta días consecutivos que alcanzaron su meta guardada para esa fecha. Un día sin meta termina la racha estricta, pero se presenta como descanso y no como fallo. No llamar a esto continuidad con descanso ni añadir un segundo contador. Hoy incompleto mantiene el valor de ayer hasta cerrar el día. Cambiar metas futuras no reescribe silenciosamente metas históricas.

## 12. Personalización y avisos

Nombre y avatar editables en Ajustes; al estar fuera de una zona de edición accidental, se elimina el candado. Imágenes copiadas al almacenamiento propio; encuadre persistente y original externo intacto. Portadas sin obligación de llenar espacios vacíos.

Moodboard opcional: apagado inicialmente, acepta desde una imagen, navegación manual, ocultable en Hoy; no altera En tu mesa ni aparece en Enfoque. Tope inicial propuesto de 8 imágenes por sencillez técnica, revisable sin convertirlo en regla de producto. Sin reproducción automática en la base.

Avisos desactivados hasta que se elija horario. Al activarlos: modo suave, sonido apagado, una notificación por ocurrencia y sin repeticiones por defecto. Modo insistente permanece disponible por elección explícita; intervalo y máximo configurables. No bloquear pantalla ni robar foco por defecto.

Empezar/continuar, posponer y abrir Semana producen efectos distintos. Posponer no reprograma. Persistir acciones y evitar duplicados al reiniciar. Audio o modo grabación manual bloquean nuevas emisiones sonoras y ventanas propias; al terminar, como máximo un resumen silencioso. No prometer retirar avisos ya entregados por el sistema.

Bandeja y arranque con el sistema opcionales. Cerrar ventana y salir completamente se distinguen. No prometer avisos con equipo apagado o proceso totalmente cerrado.

## 13. Datos y base técnica

Los registros viejos reportan Windows 10, Electron, TypeScript y SQLite. Son antecedente, no una comprobación actual. CS02 verifica sistema objetivo, compatibilidad y versiones mediante documentación oficial. Favorecer una solución sencilla y mantenible; no construir dos stacks ni copiar versiones antiguas sin validar.

Separar presentación, casos de uso, reglas, persistencia y capacidades de escritorio con la estructura mínima útil. No imponer seis capas ceremoniales o un archivo por cada abstracción. Cálculos compartidos y temporizador único sí son necesarios.

Modelo conceptual: Canal; Video; Tarea; PresupuestoEtapa; Sesion; BloquePlan; EventoVideo; Imagen; Preferencias; EstadoAviso. Nota de reentrada ligada a tarea. Preferencias de meta por día con valores históricos conservados. Tipos y nombres de tablas se deciden al implementar.

Persistencia local estructurada y transacciones en creación de ficha, última tarea, publicación, sesiones y cambios de plan. Datos fuera del directorio de instalación; perfiles real/demo/prueba aislados. Guardado automático solo anuncia éxito tras confirmación. Mantener borrador ante error.

Importar imágenes con validación de formato/tamaño y miniaturas. URLs seguras; sin ejecutar rutas o comandos derivados del contenido. Capacidades privilegiadas expuestas de forma limitada. Sin telemetría ni carga remota por defecto.

Exportación integral de datos, imágenes, preferencias y manifiesto versionado. Restaurar: validar en área temporal, crear copia previa, confirmar sustitución, recuperar ante fallo. Rechazar rutas de escape, archivos truncados o versión incompatible antes de tocar datos actuales. Validar migración en staging antes de sustituir cuando sea necesaria. Borrado explícito recuperable no toca archivos externos.

La reconstrucción comienza en carpeta nueva. No borrar la app anterior ni sus datos. Migrar su base no se presupone compatible: una importación del proyecto viejo sería un trabajo adicional explícito.

## 14. Criterios de aceptación nuevos

Estos identificadores CS-AC sustituyen a AC-01…AC-20 del proyecto anterior; no heredan aprobaciones.

| ID | Resultado observable |
|---|---|
| CS-AC01 | Las cinco áreas usan Cozy Studio; no se construye hero temporal. |
| CS-AC02 | Hoy muestra trabajo y siguiente acción antes de decoración, a 1366×768. |
| CS-AC03 | Crear idea solo pide título, persiste y no inicia producción. |
| CS-AC04 | Tres pestañas contienen todos los videos; publicados con corrección siguen localizables. |
| CS-AC05 | Detalle conserva contexto; recursos secundarios no saturan la primera vista. |
| CS-AC06 | Plantilla única 7/5 con 690 min iniciales y Presentación 60 compartidos. |
| CS-AC07 | Checks fuera de orden, fechas separadas y publicación manual sin duplicados. |
| CS-AC08 | Temporizador global sin pausas contadas ni sesiones duplicadas. |
| CS-AC09 | Nota de reentrada persiste; Enfoque usa la misma sesión y permite salir. |
| CS-AC10 | Recuperación, medianoche, correcciones y manuales mantienen totales correctos. |
| CS-AC11 | Semana permite mover/dividir, no inventa horarios y separa margen. |
| CS-AC12 | Reprogramar conserva original y avances; cancelar no modifica. |
| CS-AC13 | Métricas coinciden entre vistas, muestran periodos y no inventan datos. |
| CS-AC14 | Metas por día y descanso persisten; racha opcional no redefine actividad. |
| CS-AC15 | Imágenes, encuadre y nombre sobreviven reinicios sin archivos originales. |
| CS-AC16 | Moodboard funciona con una imagen, se oculta y no rota automáticamente. |
| CS-AC17 | Avisos optativos, posposición persistente y protección de grabación. |
| CS-AC18 | Cierre, bandeja y salida son comprensibles y mantienen sesiones. |
| CS-AC19 | Copia restaura datos y medios; una inválida conserva el estado previo. |
| CS-AC20 | Perfil real vacío y datos fuera de instalación; sin datos demo filtrados. |
| CS-AC21 | Teclado, foco, contraste, escalado y movimiento reducido revisados. |
| CS-AC22 | Mensajes breves, sin ayudas redundantes ni estados solo por color. |
| CS-AC23 | La app empaquetada arranca sin servidor y conserva datos al actualizar. |
| CS-AC24 | Verificaciones reales y limitaciones registradas; histórico no cuenta como prueba nueva. |

## 15. Mejoras sugeridas para después

| Idea | Valor esperado | Cuándo considerarla |
|---|---|---|
| Copias automáticas con retención | Menos trabajo para proteger datos | Tras comprobar restauración manual |
| Abrir carpeta de guion/proyecto | Reducir búsqueda de archivos de trabajo | Tras probar el flujo diario; permisos y rutas explícitos |
| Estimaciones basadas en historial | Ajustar presupuestos a tu ritmo | Cuando haya varios videos comparables; nunca cambiar automáticamente |
| Planta o jardín de publicaciones | Identidad visual opcional | Solo si lo echas de menos; ocultable, sin marchitarse |
| Plantillas de producción propias | Adaptar otros formatos de video | Cuando la plantilla actual resulte insuficiente |

No añadir un tablero configurable con veinte widgets, diarios obligatorios, puntos o niveles en esta reconstrucción. Primero comprobar que abrir → retomar → trabajar → guardar funciona con poco esfuerzo.

## 16. Referencias y límites de esta revisión

Se revisaron los siete Markdown adjuntos. No se recibió el repositorio ni capturas de la app; el diagnóstico es documental. El historial reporta pruebas antiguas, pero aquí no se verificó código ni ejecutables anteriores.

La simplificación toma como apoyo las orientaciones W3C WAI sobre [reducir pasos](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o5p02-short-paths/), [evitar distracciones](https://www.w3.org/WAI/WCAG2/supplemental/objectives/o5-user-focus/), [hacer evidente el contexto](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o1p01-clear-purpose/) y [texto comprensible](https://www.w3.org/WAI/WCAG2/supplemental/objectives/o3-clear-content/), consultadas el 30 de octubre de 2026. Son orientaciones complementarias; esta especificación no certifica accesibilidad ni eficacia clínica. Las decisiones concretas de esta app son propuestas de diseño que deben comprobarse con uso real.
