# PROMPTS MAESTROS — Cozy Studio

Versión 2.0 · 30 de octubre de 2026 · 36 pasos CS01–CS36 para reconstruir desde cero

## 1. Uso

Abre una carpeta nueva con este paquete. Usa los nombres canónicos incluidos. Los P01–P48 y RD1–RD7 que aparecen en docs/archive/v1 son históricos y no se ejecutan en esta reconstrucción. No copies la base antigua al perfil nuevo sin diseñar una migración aparte.

El texto técnico de esta guía es para el agente. La interfaz del producto debe seguir el microtexto breve de MASTER y DISENO_COZY_STUDIO; no pegar estas explicaciones en pantallas.

## 2. INICIO

```text
Vamos a reconstruir desde cero Habit Tracker YouTube con el diseño Cozy Studio.
Lee MASTER.md, roadmap.md, docs/DISENO_COZY_STUDIO.md y el protocolo común de PROMPTS_MAESTROS.md. Consulta docs/STATUS.md; el histórico en docs/archive/v1 no gobierna la nueva app.
Ejecuta CS01 completo. Protege la versión anterior y sus datos; no continúes los prompts P ni RD.
Cozy Studio claro y cálido es la dirección elegida. No construyas el hero por hora. Prioriza En tu mesa, retomar trabajo y poco texto; resuelve decisiones rutinarias sin pedirme permiso por cada una.
Implementa lo autorizado por el paso, comprueba su resultado y termina con el reporte breve del protocolo. No declares pruebas ejecutadas si no las realizaste. Si una capacidad requiere mi PC, distingue lo verificado de lo pendiente.
```

Para seguir:

```text
Ejecuta CS02 de PROMPTS_MAESTROS.md. Verifica dependencias reales, aplica el protocolo común, completa el trabajo, corrige fallos y actualiza los registros. Reporta resultado y siguiente paso.
```

Sustituir CS02 por el siguiente. Por defecto un paso por turno. Si el propietario pide varios, ejecutar la secuencia autorizada comprobando dependencias entre ellos, sin pedir confirmación por cada número.

## 3. Protocolo común de ejecución

1. Lee estado, instrucciones del repositorio y secciones relevantes del MASTER/diseño. Inspecciona código y cambios antes de modificar.
2. Verifica dependencia anterior y las capacidades consumidas, según las excepciones del roadmap. Si falla, repara lo acotado; documenta bloqueos reales y continúa trabajo independiente autorizado.
3. Construye una función completa dentro del paso: UI, comportamiento y persistencia cuando corresponda. Simulaciones solo en prototipo/demo identificados.
4. Usa componentes Cozy Studio desde el principio. Ninguna instrucción histórica sobre blanco puro, hero, sepia, carrusel mínimo 4 o avisos insistentes por defecto prevalece sobre esta base.
5. Resuelve tamaños, estructura interna y ajustes rutinarios con criterio. Mostrar el resultado visual no crea una nueva barrera de aprobación. Si se recibe una corrección del propietario, incorporarla y actualizar la especificación afectada.
6. Comprueba lo que importa. Automatiza tiempo, integridad, estados, fechas y restauración; inspecciona visualmente composición, legibilidad y texto. Ejecuta regresión afectada, no toda la suite después de cada coma.
7. Reproduce y corrige fallos antes de dar el paso por terminado. No eliminar pruebas útiles, bajar criterios ni usar mocks para aparentar que una capacidad nativa funciona.
8. Actualiza una fila de STATUS y una entrada breve de verification con esperado, observado, entorno y evidencia. decisions solo si hubo una decisión relevante; README solo cuando cambie el uso. No crear otro Markdown por turno.
9. No inventes mediciones, aprobación del propietario, pruebas del PC, instalaciones o sesiones de piloto. No ejecutes pruebas destructivas en perfil real. No publiques ni contrates servicios sin instrucción.

Reporte de salida, breve:

```text
CSxx — Estado: terminado / en curso / bloqueado / pendiente de validación externa
Hecho: resultado concreto.
Verificado: comprobaciones y resultados; entorno cuando importe.
Errores: qué falló y cómo se corrigió, o ninguno observado en estas comprobaciones.
Pendiente: limitación real, si existe.
Siguiente: CSxx y motivo.
```

No prometer cero errores. Si un paso queda parcialmente hecho, registrar lo exacto y cómo retomarlo; no reiniciar de cero por perder contexto.

## 4. Secuencia ejecutable

Cada bloque se ejecuta junto al protocolo anterior. Dependencia por defecto: paso anterior terminado y capacidades utilizadas verificadas; las excepciones explícitas están en roadmap §3. Los criterios CS-AC se encuentran en MASTER §14.

### CS01 — Preparar un reinicio limpio

Criterios: CS-AC24.

```text
Ejecuta CS01 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
Carpeta del proyecto y documentos de esta versión disponibles.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Inspecciona carpeta, instrucciones aplicables y cambios existentes. Trabaja en una carpeta nueva para esta reconstrucción; si se abrió la anterior, prepara una carpeta hermana sin borrar código ni datos. Identifica los siete documentos activos, conserva los originales en docs/archive/v1 y evita copias docs/DOCS. Registra el entorno realmente accesible, distinguiéndolo del PC reportado en el historial. Inicia Git local si corresponde; crea README corto cuando existan comandos reales.

VERIFICACIÓN Y CIERRE
Comprueba que hay una sola fuente activa de cada documento y que el histórico queda identificado. Los registros CS empiezan pendientes. No inventes acceso al equipo ni des por migrada su base. Cierre: estructura segura y siguiente paso identificado.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS02 — Elegir base técnica y probar distribución temprano

Criterios: CS-AC20, CS-AC23, CS-AC24.

```text
Ejecuta CS02 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS01 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Consulta documentación oficial vigente de escritorio, persistencia y empaquetado. El stack anterior es antecedente; elige una combinación compatible con el PC objetivo sin construir dos alternativas. Crea una ventana mínima que guarde y recupere un registro y una imagen en un perfil de prueba. Empaqueta y prueba arranque sin servidor, ruta de datos, reinicio y capacidad de bandeja/avisos. Registra versiones elegidas, licencias, comandos y restricciones; no fijes por memoria versiones del historial.

VERIFICACIÓN Y CIERRE
Abrir el paquete fuera del servidor de desarrollo debe recuperar el registro y la imagen. Distingue ejecución en otro SO de verificación Windows. Si el empaquetado está bloqueado, registra la causa y continúa solo tareas independientes de diseño; no cierres la capacidad de escritorio. Cierre: prueba mínima ejecutada en el destino o bloqueo concreto.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS03 — Crear el sistema visual Cozy Studio

Criterios: CS-AC01, CS-AC21, CS-AC22.

```text
Ejecuta CS03 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS02 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Construye una galería pequeña de componentes con los tokens y fuentes de docs/DISENO_COZY_STUDIO.md. Incluye botones, inputs, fecha, estados, check, tabs, tarjeta, aviso y panel. Verifica licencia y carga local de fuentes. Usa terracota, papel y salvia con jerarquía; define estados de teclado, hover, error y carga. No implementes hero, texturas animadas ni lógica día/noche.

VERIFICACIÓN Y CIERRE
Inspecciona muestras con nombres largos, números y errores. Mide contraste en combinaciones usadas y foco real. Comprueba fallback sin red y movimiento reducido. No escribas pruebas que solo certifiquen un hex exacto. Cierre: componentes reales coherentes y valores ajustados según evidencia.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS04 — Prototipar el flujo completo antes de ampliarlo

Criterios: CS-AC01, CS-AC02, CS-AC05, CS-AC22.

```text
Ejecuta CS04 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS03 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Compón Hoy con En tu mesa, Videos con tres pestañas, detalle progresivo, Semana, Progreso, Ajustes y Enfoque. Usa una maqueta navegable con datos demo identificados y aislados. Haz visibles las transiciones idea → trabajo → publicación y el retorno al contexto. Presenta el resultado concreto; Cozy Studio ya está elegido, no impongas otro trámite de aprobación para decisiones rutinarias.

VERIFICACIÓN Y CIERRE
Revisa 1366×768 y 1920×1080, y adaptación a 1024×600. En Hoy se ve tarea y acción sin desplazar; no hay pared de métricas. Recorre crear, abrir, cerrar y retomar; vacíos y títulos largos. Registra la opinión del propietario si llega, sin inventarla. Cierre: errores de composición corregidos y referencia visual disponible.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS05 — Persistencia, modelo y migraciones

Criterios: CS-AC06, CS-AC20.

```text
Ejecuta CS05 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS04 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Implementa entidades del MASTER con identificadores estables, relaciones y migración inicial: videos, siete tareas, cinco presupuestos, sesiones, bloques, eventos, medios, preferencias y avisos. Prevé notas de reentrada y metas diarias históricas. Separa perfiles real/demo/prueba y datos del directorio de instalación. Limita la frontera privilegiada; reutiliza servicios sin imponer capas ceremoniales. Define instantes, fechas sin hora y precisión en segundos.

VERIFICACIÓN Y CIERRE
Prueba creación transaccional, rechazo de referencias inválidas, rollback ante fallo y reapertura de base. Verifica que perfil real arranca vacío y que una segunda ejecución de migración no duplica esquema ni datos. Cierre: persistencia y tipos base utilizables, sin interfaces simuladas presentadas como guardado.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS06 — Navegación y estructura de la app

Criterios: CS-AC01, CS-AC05, CS-AC21.

```text
Ejecuta CS06 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS05 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Integra componentes reales con Hoy, Videos, Semana, Progreso y Ajustes. Ajustes al pie; Nueva idea secundaria y acceso por teclado. Prepara el espacio del control de sesión persistente sin fingir tiempo activo. Mantén selección, filtros y desplazamiento al abrir/cerrar detalles. Muestra vacíos honestos donde aún falta funcionalidad; no botones sin efecto disfrazados de producto terminado.

VERIFICACIÓN Y CIERRE
Navega con teclado y comprueba nombres accesibles, foco y retorno de panel. Comprueba que el shell carga desde el paquete mínimo. No certifiques aún flujos de video o temporizador. Cierre: navegación real y estructura reutilizable conectadas a la aplicación.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS07 — Capturar y recuperar ideas

Criterios: CS-AC03, CS-AC06, CS-AC20.

```text
Ejecuta CS07 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS06 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Crea el diálogo de Nueva idea con solo nombre obligatorio. Guarda ficha, siete tareas y cinco presupuestos de forma atómica una sola vez. Muestra la idea en su pestaña y permite buscarla. Conserva el texto si falla el guardado; bloquea doble envío accidental sin perder la entrada. No pidas portada, número, fecha o URLs para comenzar.

VERIFICACIÓN Y CIERRE
Crear, cerrar completamente y reabrir conserva una ficha y una plantilla 7/5. Presupuestos 120+120+60+150+240=690; Presentación compartida. Crear no fija inicio, no crea sesiones ni recordatorios de entrega. Fuerza fallo y reintenta sin duplicar. Cierre: captura persistente de extremo a extremo.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS08 — Videos, tarjetas y detalle progresivo

Criterios: CS-AC04, CS-AC05, CS-AC15, CS-AC22.

```text
Ejecuta CS08 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS07 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Completa En curso, Ideas y Publicados; orden estable por creación y selector opcional de orden. Añade portada importada con copia propia y encuadre, campos de obra/título/número, capítulos o alcance libre y fuentes. Detalle con acción y etapas arriba; Recursos, Plan y fechas, Sesiones y Notas como secciones adicionales. Usa etiquetas de estado, sin atenuar fotos al finalizar.

VERIFICACIÓN Y CIERRE
Idea sin portada, título largo, capítulos 1–15=15, rango invertido, número duplicado y URL inválida. Editar no reordena la vista por creación. Cerrar panel conserva scroll/filtros/foco. Eliminar el archivo externo de prueba no elimina la portada importada. Cierre: ficha usable sin completar campos opcionales.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS09 — Estados, etapas y fechas reales

Criterios: CS-AC06, CS-AC07.

```text
Ejecuta CS09 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS08 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Implementa planificación, inicio y checks fuera de orden. La primera sesión o Iniciar fija inicio real una sola vez; marcar sin inicio ofrece hoy u otra fecha sin inventar horas. Presentación contiene tres checks con presupuesto común. La séptima tarea registra fin de producción; reabrir conserva el evento anterior. Permite ajustes de presupuestos por video sin reescribir históricos ajenos.

VERIFICACIÓN Y CIERRE
Recorre idea → planificado → en producción → listo para publicar con reinicios. Comprueba que finalizar o reabrir tarea no borra sesiones. Validar fin anterior al inicio y repetición accidental de la última tarea. Cierre: ciclo de producción consistente; publicación aún separada.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS10 — Publicación e historial sin perder trabajo

Criterios: CS-AC04, CS-AC07, CS-AC20.

```text
Ejecuta CS10 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS09 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Añade revisión breve y confirmación manual de publicación con fecha/hora y URL opcional. Guardar evento una sola vez; programado en YouTube no equivale a publicado. Publicados conserva correcciones pendientes con etiqueta, localizable desde Hoy si se fija. Implementa borrado recuperable/papelera para videos e historial básico de cambios; no eliminar originales externos.

VERIFICACIÓN Y CIERRE
Doble clic no duplica publicación. Reabrir edición mantiene publicación y muestra corrección; completar otra vez no aumenta publicaciones mensuales. Borrar y recuperar una ficha conserva relaciones; sesión activa exige resolver antes de eliminar. Cierre: publicación, recuperación e historial reales.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS11 — Temporizador único y control persistente

Criterios: CS-AC08.

```text
Ejecuta CS11 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS10 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Implementa iniciar, pausar, continuar y finalizar mediante un servicio compartido y datos persistidos. Una sesión pertenece a tarea/video o a publicación. Cambiar de tarea resuelve la anterior explícitamente; evitar dobles sesiones por doble clic o varias ventanas. La barra persiste al navegar. Finalizar guarda tiempo, no completa automáticamente una tarea.

VERIFICACIÓN Y CIERRE
20 min trabajo +10 pausa +15 trabajo =35 efectivos. Dos inicios simultáneos producen una sesión activa. Navegar no reinicia ni duplica; pausar y reabrir conserva el estado. Confirma duración por datos y reloj inyectable, no contador visual. Cierre: registro automático funcional.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS12 — Conectar Hoy y En tu mesa temprano

Criterios: CS-AC02, CS-AC04, CS-AC08.

```text
Ejecuta CS12 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS11 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Implementa selección de video y tarea según MASTER §5.1 usando datos reales. Muestra portada, tarea y acción correspondiente; permite fijar/cambiar video. Integra tiempo de hoy desde el mismo registro de sesiones; dejar cálculo compartido para su consolidación en CS21. Después muestra plan existente o un vacío breve, nunca horarios inventados. No añadas gráficos ni hero para llenar huecos.

VERIFICACIÓN Y CIERRE
Prueba sin ideas, con idea, video en curso, sesión pausada/activa, listo para publicar y publicado con corrección. La sesión activa siempre tiene prioridad y nunca se inicia otra por entrar en Hoy. En 1366×768 la acción sigue visible. Cierre: abrir y retomar trabajo real antes de completar analítica.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS13 — Sesiones manuales y correcciones

Criterios: CS-AC10, CS-AC13.

```text
Ejecuta CS13 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS12 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Añade historial compacto por video y registro manual con día, duración, tarea y nota opcional. Permite editar y descartar/recuperar sin tocar checks. Advierte solapamiento cuando hay intervalos; sin hora exacta conserva solo fecha de atribución y origen manual. No inventes horas de inicio ni mezcles una edición con un temporizador activo sin resolverlo.

VERIFICACIÓN Y CIERRE
Registrar 90 min y corregir a 60 modifica el total; descartar resta y recuperar devuelve. Duraciones negativas se rechazan. Dos sesiones de 40 segundos suman 80 antes de redondear. Validar intervalos superpuestos sin impedir trabajo manual legítimo. Cierre: historial y totales actualizados después de guardar.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS14 — Recuperar cierres y suspensión

Criterios: CS-AC08, CS-AC10.

```text
Ejecuta CS14 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS13 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Persiste checkpoints y detecta sesión interrumpida al abrir. Distingue duración confirmada y tramo incierto; propone recuperar lo confirmado y permite ajustar o descartar de forma clara. Integra señales de suspensión/reanudación disponibles. No uses ausencia de teclado como prueba de inactividad, especialmente en Audio.

VERIFICACIÓN Y CIERRE
Simula kill y suspensión en perfil aislado; reapertura no suma horas desconocidas ni genera dos recuperaciones. Repetir confirmación es idempotente. Registra por separado prueba simulada y suspensión física si fue realizada. Cierre: no hay pérdida silenciosa ni tiempo nocturno inventado.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS15 — Fechas locales y métricas temporales básicas

Criterios: CS-AC10, CS-AC13.

```text
Ejecuta CS15 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS14 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Centraliza reloj y zona horaria. Reparte sesiones que cruzan medianoche según intervalos efectivos, excluyendo pausas. Conserva fechas sin hora como fechas. Separa horas efectivas, días activos y duración transcurrida. Definir cambios de zona que no desplacen silenciosamente historial. Reutiliza este servicio en Hoy y sesiones.

VERIFICACIÓN Y CIERRE
23:30–00:30 sin pausa reparte 30/30. Prueba cruce de mes/año, día bisiesto y zona con cambio horario cuando se soporte. Tiempo manual sin hora sigue en su día; dos instantes iguales no dan duración negativa. Cierre: cálculos temporales reproducibles.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS16 — Seguir por aquí y vista Enfoque

Criterios: CS-AC09, CS-AC21, CS-AC22.

```text
Ejecuta CS16 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS15 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Guarda una nota opcional de reentrada por tarea. Muestra la de la tarea actual en En tu mesa. Construye Enfoque con tarea, nota, recursos y controles de la misma sesión; salida visible y Escape sin detener tiempo. Permite Nueva idea y retorno sin perder foco. Ofrece tramo opcional de 15 min sin Pomodoro obligatorio ni finalización automática.

VERIFICACIÓN Y CIERRE
Escribe nota, cierra y retoma la misma tarea tras reinicio. Entrar/salir de Enfoque y capturar idea mantienen una sesión. Llegar a 15 min no completa tarea ni corta tiempo; aviso no roba foco. Cierre: reentrada útil y opción de concentración con controles accesibles.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS17 — Semana y plantilla inicial editable

Criterios: CS-AC11.

```text
Ejecuta CS17 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS16 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Construye días con carga y bloques persistentes de la plantilla del MASTER. Mantén 690 min de producción y margen separado. Sin disponibilidad horaria, mostrar duraciones por día; no franjas de reloj. Vista compacta por lista en ventanas pequeñas. Instanciar plantilla una sola vez por plan y video; no crear otro video automáticamente al cambiar de semana.

VERIFICACIÓN Y CIERRE
Suma 690; Presentación viernes 60 total; sábado Audio 150+Edición90; domingo Edición150, margen 90 aparte. Reinicio no duplica bloques. Vista sin horas no muestra citas inventadas. Cierre: plan base editable y conectado al video.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS18 — Mover, dividir y ajustar trabajo

Criterios: CS-AC11, CS-AC21.

```text
Ejecuta CS18 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS17 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Permite cambiar día y duración, dividir/reunir bloques y editar disponibilidad con controles accesibles. Arrastrar es opcional. Audio continuo por defecto, modificable. Integrar Después de Hoy con el plan real y mantener orden manual cuando no haya horas. Mostrar sobrecarga con una frase, no modal repetitivo.

VERIFICACIÓN Y CIERRE
Dividir 90 a30+60 conserva total; mover bloque no crea sesiones. Cancelar edición conserva plan; guardar y reiniciar mantiene cambios. Teclado permite las mismas operaciones necesarias que ratón. Cierre: planificación sencilla y consistente.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS19 — Objetivos, restante y margen honesto

Criterios: CS-AC11, CS-AC12, CS-AC13.

```text
Ejecuta CS19 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS18 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Gestiona objetivo original/vigente, disponibilidad y restante editable. Objetivo inicial domingo antes de 18:00 y margen 90 son valores ajustables. Solo calcula holgura cuando existen datos suficientes; agotar presupuesto con tarea pendiente exige estimar de nuevo. Separar corregir error de captura de reprogramar, dejando evento visible en detalle.

VERIFICACIÓN Y CIERRE
Con objetivo 18:00 y margen 90, reserva16:30 solo si hay horario aplicable. Una tarea pendiente con presupuesto consumido nunca muestra cero restante confirmado. Sin disponibilidad no afirmar «llegas». Fechas originales sobreviven reprogramación. Cierre: riesgo sustentado, no certeza falsa.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS20 — Reorganizar atrasos sin castigar

Criterios: CS-AC12, CS-AC22.

```text
Ejecuta CS20 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS19 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Desde Revisar plan, presenta una propuesta concreta con bloques movidos, carga y fecha resultante. Permite Editar y Aplicar; no genera opciones kilométricas en Hoy. Aplica de forma atómica tras confirmación, manteniendo sesiones, checks y objetivo original. Si el plan cambió mientras se revisaba, recalcula antes de sobrescribir.

VERIFICACIÓN Y CIERRE
Cancelar no modifica registros. Aceptar mueve únicamente lo mostrado; reiniciar conserva resultado. Simula cambio concurrente y evita pérdida. No crear otro video ni reiniciar hábitos al llegar lunes. Cierre: recuperar una semana es un flujo corto y reversible.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS21 — Consolidar un servicio de métricas

Criterios: CS-AC13, CS-AC14.

```text
Ejecuta CS21 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS20 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Centraliza tiempo diario/semanal, metas por fecha, días activos, duración y publicaciones. Implementa puntualidad respecto al objetivo original, vencidos sin publicar aparte y racha estricta opcional definida en MASTER. Hoy y Progreso consumen los mismos cálculos. Mantén exactitud de segundos y metas históricas; no reescribir pasado al cambiar una preferencia futura.

VERIFICACIÓN Y CIERRE
Lunes60 lectura+martes30 lectura+miércoles60 guion =150; lectura90/guion60. Racha miércoles tras meta=1. Hoy sin meta aún completada no rompe ayer anticipadamente. Publicación17:59 cumple antes de18;18:00 no. Denominador cero sin datos. Cierre: valores conocidos reproducidos en todas las vistas.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS22 — Heatmap útil y accesible

Criterios: CS-AC13, CS-AC21.

```text
Ejecuta CS22 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS21 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Implementa año calendario completo o doce meses calendario, con paleta cálida de niveles sólidos y leyenda. Celdas por sesiones válidas; no por checks. Foco/tooltip con fecha y tiempo; abrir detalle del día. Estado vacío sin sembrar actividad. No reducir siempre doce meses a364 días.

VERIFICACIÓN Y CIERRE
Prueba años365/366, meses limítrofes y59m50s bajo la meta60. Un registro menor a un minuto tiene actividad visible. Corregir y descartar sesión actualiza su celda; el teclado accede al mismo detalle. Cierre: heatmap fiel y sin información inaccesible solo al hover.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS23 — Progreso con pocas cifras y análisis bajo demanda

Criterios: CS-AC13, CS-AC22.

```text
Ejecuta CS23 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS22 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Arriba muestra tiempo semanal y videos del periodo; heatmap y Ver detalle para etapas, estimado/real, duración y puntualidad. Usa unidades, periodos y denominadores; no tendencia con un dato. Ofrece datos textuales accesibles. No copies todas las gráficas en Hoy ni incluyas racha protagonista por defecto.

VERIFICACIÓN Y CIERRE
Prueba perfil vacío, un video y varios, corrección postpublicación y cambio de periodo. Cada gráfico coincide con servicio de métricas; publicación repetida no suma dos. Tiempo y tareas no se presentan como la misma medida. Cierre: análisis legible sin saturar la primera vista.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS24 — Metas, descanso y ajustes claros

Criterios: CS-AC14, CS-AC22.

```text
Ejecuta CS24 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS23 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Agrupa Ajustes en Canal, Planificación, Avisos, Apariencia y Datos. Edita meta por día y días sin meta; deja racha opcional apagada. Aplica cambios de metas hacia futuro sin alterar históricos salvo corrección explícita. Mantén inicio sin configuración obligatoria y no añadas cuestionario de atención. Las opciones nativas aún no disponibles deben indicar su estado real.

VERIFICACIÓN Y CIERRE
Meta90 frente a60 muestra90, sin truncar tiempo. Día sin meta se muestra descanso, no falla; no se incluye como día cumplido de racha estricta. Cambiar una meta futura no recalcula silenciosamente historia. Reinicio conserva preferencias. Cierre: personalización comprensible y opcional.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS25 — Identidad del canal e imágenes propias

Criterios: CS-AC15, CS-AC20.

```text
Ejecuta CS25 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS24 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Edita nombre/avatar desde Ajustes; sin candado ni nombre editable accidentalmente en Hoy. Importa y recorta con copia propia, miniaturas y límites razonados. Valida formato/tamaño, reemplazo y eliminación segura de referencias. Usa fallback neutro si falta archivo. Preserva colores originales de fotos.

VERIFICACIÓN Y CIERRE
Nombre Unicode largo no rompe sidebar. Ajusta encuadre, reinicia y conserva; borrar original externo no afecta copia. Imagen corrupta muestra sustituto sin borrar ficha. Comprueba archivos y datos fuera de instalación. Cierre: identidad persistente sin decoración obligatoria.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS26 — Moodboard manual y acabado de personalización

Criterios: CS-AC15, CS-AC16, CS-AC21.

```text
Ejecuta CS26 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS25 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Añade módulo optativo apagado inicialmente. Una imagen basta; varias se recorren manualmente. Importar, ordenar, reemplazar, eliminar y encuadrar; tope inicial8 revisable. Ocultar conserva archivos y preferencias. En Hoy va después del trabajo y nunca en Enfoque. Sin autoplay ni hueco decorativo cuando está apagado.

VERIFICACIÓN Y CIERRE
Prueba0/1/2/8 imágenes, ocultar/mostrar y reiniciar. La novena ofrece gestionar límite sin perder existentes. Navegar manualmente no mueve la acción principal; reducir movimiento conserva funcionamiento. Cierre: personalización pequeña y no distractora.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS27 — Avisos suaves y protección de grabación

Criterios: CS-AC17.

```text
Ejecuta CS27 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS26 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Habilita avisos solo tras elegir horario; valores base suaves, silenciosos y sin repeticiones. Implementa posponer persistente, empezar tarea y abrir Semana con efectos distintos. Insistencia solo por selección explícita. Deduplica ocurrencias y limita resúmenes al reabrir. Audio y modo manual impiden nuevas emisiones/ventanas propias; comprobar protección justo antes de emitir.

VERIFICACIÓN Y CIERRE
Con avisos apagados no emite. Posponer sobrevive reinicio; doble callback no crea dos sesiones. Con Audio o grabación manual no hay sonido ni ventana nueva, y salir no reproduce cadena. Registra entrega nativa comprobada y límites del SO. Cierre: avisos reales, optativos y no invasivos.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS28 — Bandeja, cierre y arranque del sistema

Criterios: CS-AC18, CS-AC23.

```text
Ejecuta CS28 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS27 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Integra bandeja opcional, restaurar ventana y salir completamente. Con sesión activa, resuelve guardado o cancelación antes de salir. Inicio con sistema requiere elección explícita y se presenta según estado efectivo, no solo solicitado. Explica brevemente el efecto de cerrar si continúa en bandeja; no prometer recordatorios con proceso apagado.

VERIFICACIÓN Y CIERRE
Ejecuta en escritorio: cerrar/abrir restaura misma instancia; salir detiene proceso y conserva tiempo. Activa y desactiva inicio en perfil de prueba y confirma estado efectivo; deja configuración como estaba. Comprueba reanudación sin avisos acumulados. Cierre: ciclo nativo verificado, sin basarse solo en navegador.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS29 — Exportar copia integral

Criterios: CS-AC19, CS-AC20.

```text
Ejecuta CS29 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS28 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Exporta paquete versionado con datos, imágenes, preferencias y manifiesto. Instantánea consistente, destino temporal y publicación completa solo al éxito. Si hay sesión activa, toma checkpoint y describe recuperación pendiente sin duplicar duración. No incluyas credenciales, archivos externos arbitrarios ni el propio destino dentro de la copia.

VERIFICACIÓN Y CIERRE
Inspecciona contenidos de perfil de prueba con video publicado, activo, sesiones, avatar y moodboard. Error/cancelación no produce un archivo final que parezca válido. Registra versión y conteos; no declares aún restauración comprobada. Cierre: exportación consistente disponible desde interfaz.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS30 — Restaurar sin perder el estado actual

Criterios: CS-AC19.

```text
Ejecuta CS30 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS29 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Valida manifiesto, tamaño, rutas, integridad, medios y versión en área temporal. Migra allí si es compatible antes del intercambio. Presenta resumen y confirmación porque reemplaza datos; crea copia previa. Sustituye de forma recuperable y resuelve sesiones importadas sin duplicarlas. Cancelación no altera destino.

VERIFICACIÓN Y CIERRE
Restaura CS29 en un perfil limpio y compara registros, totales, notas, preferencias e imágenes. Rechaza ZIP truncado, rutas de escape, medio faltante o versión futura sin cambiar destino. Simula fallo de intercambio y recupera anterior. Cierre: copia realmente recuperable, no solo exportable.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS31 — Resiliencia, privacidad y actualización de datos

Criterios: CS-AC19, CS-AC20, CS-AC22.

```text
Ejecuta CS31 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS30 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Revisa fallos de guardado/importación, migraciones y permisos mediante entorno aislado. Audita navegación/URLs y acceso privilegiado, perfil demo separado y ausencia de tráfico personal no solicitado. Prueba actualizar esquema manteniendo datos. Reutiliza componentes de error con recuperación y sin textos técnicos innecesarios para el usuario.

VERIFICACIÓN Y CIERRE
Fallo no anuncia Guardado; borrador permanece. Restauración/migración interrumpida conserva una versión recuperable. No se ejecutan esquemas de URL arbitrarios ni se mezclan demo/real. Registra diferencias entre fallo simulado y prueba nativa. Cierre: protección de datos verificada con límites honestos.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS32 — Generar y probar el paquete actual

Criterios: CS-AC23, CS-AC24.

```text
Ejecuta CS32 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS31 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Construye la candidata que contiene la revisión actual. Documenta identidad de build, comandos, instalación o distribución portable elegida y ruta de datos. Ejecuta fuera del servidor con perfil aislado. Revalida fuentes locales, medios, bandeja y avisos. No atribuyas la prueba mínima CS02 ni un ejecutable viejo a esta entrega.

VERIFICACIÓN Y CIERRE
Arranque frío, crear idea, iniciar/pausar, salir/reabrir y conservar datos; instalación/actualización si forman parte del formato elegido. Identifica artefacto exacto. Si automatización no lanza pero manual sí, registra ambos y resuelve o delimita el fallo antes de afirmar cobertura completa. Cierre: candidata actual verificable.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS33 — Verificación integral del producto

Criterios: CS-AC03, CS-AC07, CS-AC08, CS-AC09, CS-AC10, CS-AC11, CS-AC12, CS-AC13, CS-AC17, CS-AC18, CS-AC19, CS-AC24.

```text
Ejecuta CS33 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS32 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Recorre escenarios de roadmap y todos los CS-AC en la candidata actual, usando perfil de prueba. Incluye video completo, corrección posterior, nota de reentrada, enfoque, semana, métricas, avisos y restauración. Contrasta MASTER, interfaz y persistencia; corrige fallos dentro de alcance y repite solo lo afectado.

VERIFICACIÓN Y CIERRE
Cada criterio queda con evidencia ejecutada o pendiente concreta; una marca antigua no cuenta. Comparar totales y fechas antes/después de reinicio y restauración. No declarar aprobado un criterio sin entorno disponible. Cierre: informe consolidado de cobertura real, sin garantía de cero errores.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS34 — Revisión visual, carga de información y rendimiento

Criterios: CS-AC01, CS-AC02, CS-AC04, CS-AC05, CS-AC15, CS-AC16, CS-AC21, CS-AC22.

```text
Ejecuta CS34 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS33 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Inspecciona las cinco áreas y Enfoque en la candidata actual: vacío, lleno, errores, títulos largos, teclado, escalado y movimiento reducido. Compara con referencia CS04; elimina texto redundante y controles que compitan. Mide arranque y coste del temporizador en el equipo accesible sin inventar umbrales universales. No añadas decoración para disimular problemas.

VERIFICACIÓN Y CIERRE
En Hoy la tarea y acción siguen claras; no hero, autoplay o rachas protagonistas. Foco y contraste medidos en controles reales, ningún botón inaccesible al hacer zoom. Timer no recalcula todo el histórico cada segundo. Reporta medidas y equipo, no «rápida» sin evidencia. Cierre: problemas relevantes corregidos o limitaciones explícitas.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS35 — Piloto de uso real y ajustes finales

Criterios: CS-AC02, CS-AC09, CS-AC22, CS-AC24.

```text
Ejecuta CS35 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS34 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Entrega candidata usable con instrucciones breves y copia de seguridad. Recoge observaciones de una sesión real: encontrar tarea, trabajar, interrumpir, volver y localizar recurso. Si hay una semana real de producción disponible, úsala para revisar planificación. No impongas siete días de espera como requisito artificial de entrega ni simules opiniones. Corrige fricción observada sin introducir extras.

VERIFICACIÓN Y CIERRE
Separa pruebas del agente de experiencia reportada por el propietario. Si no hay observaciones, registra piloto pendiente y mantén etiqueta de candidata; continúa documentación de entrega. Si se corrige código, reempaqueta y repite el caso afectado. Cierre de validación de uso solo con evidencia real.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

### CS36 — Entregar y dejar continuidad limpia

Criterios: CS-AC23, CS-AC24.

```text
Ejecuta CS36 aplicando el protocolo común de PROMPTS_MAESTROS.md.

ENTRADA
CS35 y capacidades previas utilizadas; aplicar excepciones de roadmap §3 cuando correspondan.
Lee las secciones del MASTER y del diseño relacionadas con este trabajo; comprueba el estado real, no solo las marcas.

TRABAJO
Consolida README con ejecutar, instalar/abrir, datos, copias y recuperar. Actualiza STATUS sin duplicados, decisions solo con elecciones relevantes y verification con resultados/pendientes. Entrega artefacto actual y fuentes según el entorno disponible. No publiques repositorios ni servicios. Las extensiones siguen como sugerencias, no requisitos incumplidos.

VERIFICACIÓN Y CIERRE
Comprueba que comandos y rutas existen, que paquete corresponde a la última corrección y que todos los criterios tienen estado honesto. Si falta piloto o una prueba del PC, entrega candidata con pendiente explícito; no la llames validada allí. Cierre: entrega reproducible y siguiente acción clara.

SALIDA
Actualiza STATUS y verification sin duplicados. Registra decisiones nuevas solo si aportan contexto útil. Entrega el reporte breve y señala el siguiente paso habilitado. No atribuyas pruebas del proyecto antiguo a esta implementación.
```

## 5. Retomar, reparar y revisar

### Retomar en un chat nuevo

```text
Lee MASTER.md, docs/DISENO_COZY_STUDIO.md, docs/STATUS.md y los registros pertinentes. Identifica el último CS realmente verificado mediante código y evidencia. Conserva avances y cambios del propietario. Continúa el paso pendiente o el siguiente habilitado, sin ejecutar P/RD históricos ni reconstruir lo ya válido.
```

### Reparar un bloqueo

```text
Reproduce el fallo indicado en STATUS usando el perfil de prueba apropiado. Identifica causa y alcance, corrige sin borrar datos ni rebajar el criterio y repite las comprobaciones afectadas. Actualiza la misma entrada con la solución y el paso habilitado. Si falta una capacidad externa, explica exactamente cuál y qué trabajo independiente sí puede seguir.
```

### Auditar coherencia

```text
Compara los documentos activos con la implementación. Busca hero temporal, colores o componentes del diseño viejo, duplicación de temporizadores, información innecesaria, estados contradictorios y datos demo en perfil real. Diferencia hallazgos comprobados de hipótesis. Corrige lo autorizado y verifica; no generes otro informe Markdown.
```

## 6. Cobertura

| Criterio | Pasos principales |
|---|---|
| CS-AC01 | CS03, CS04, CS06, CS34 |
| CS-AC02 | CS04, CS12, CS34, CS35 |
| CS-AC03 | CS07, CS33 |
| CS-AC04 | CS08, CS10, CS12, CS34 |
| CS-AC05 | CS04, CS06, CS08, CS34 |
| CS-AC06 | CS05, CS07, CS09 |
| CS-AC07 | CS09, CS10, CS33 |
| CS-AC08 | CS11, CS12, CS14, CS33 |
| CS-AC09 | CS16, CS33, CS35 |
| CS-AC10 | CS13, CS14, CS15, CS33 |
| CS-AC11 | CS17, CS18, CS19, CS33 |
| CS-AC12 | CS19, CS20, CS33 |
| CS-AC13 | CS13, CS15, CS19, CS21, CS22, CS23, CS33 |
| CS-AC14 | CS21, CS24 |
| CS-AC15 | CS08, CS25, CS26, CS34 |
| CS-AC16 | CS26, CS34 |
| CS-AC17 | CS27, CS33 |
| CS-AC18 | CS28, CS33 |
| CS-AC19 | CS29, CS30, CS31, CS33 |
| CS-AC20 | CS02, CS05, CS07, CS10, CS25, CS29, CS31 |
| CS-AC21 | CS03, CS06, CS16, CS18, CS22, CS26, CS34 |
| CS-AC22 | CS03, CS04, CS08, CS16, CS20, CS23, CS24, CS31, CS34, CS35 |
| CS-AC23 | CS02, CS28, CS32, CS36 |
| CS-AC24 | CS01, CS02, CS32, CS33, CS35, CS36 |

Esta guía contiene instrucciones de trabajo futuro. La preparación documental no demuestra que exista una nueva app, que el diseño esté probado por el propietario o que el paquete se haya instalado.
