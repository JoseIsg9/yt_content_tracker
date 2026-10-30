# Cozy Studio — Diseño de la nueva app

Versión 2.0 · 30 de octubre de 2026 · Desarrollo desde cero

Este documento concreta el MASTER vigente. Sustituye el plan RD1–RD7 de reforma de la app anterior. No pide terminar P44 ni conservar pruebas de colores viejos para empezar.

## 1. Dirección visual

Un estudio cálido, limpio y adulto: papel claro, superficies marfil, tinta marrón, terracota para actuar y salvia para completar. La personalidad debe percibirse en las tarjetas, la tipografía y la composición, sin convertir la interfaz en un juego decorado.

Se adopta Cozy Studio desde el primer componente. No se parte de la interfaz blanca/azul anterior para «ponerle beige» al final. Sin hero temporal, escena nocturna, gradientes de cielo, orbes animados ni saludos cambiantes.

No confundir acogedor con bajo contraste, letra pequeña, demasiadas plantas, cursivas por todas partes o texturas detrás de contenido.

## 2. Tokens de partida, ajustables

| Uso | Valor base | Criterio |
|---|---|---|
| Fondo papel | #F8F1E5 | Cálido y claro |
| Tarjeta | #FFFBF4 | Separación suave respecto al fondo |
| Superficie agrupada | #EFE5D4 | Campos, secciones secundarias |
| Texto | #2E2118 | Lectura principal |
| Secundario | #6F5C4B | Metadatos, sin bajar opacidad |
| Acción | #A54A32 | Terracota más oscuro para sostener texto claro |
| Hover de acción | #8F3D29 | Cambio discreto, sin salto de tamaño |
| Texto sobre acción | #FFFBF4 | Comprobar combinación en contexto |
| Completado | #3E6240 sobre #E8F0E3 | Salvia en superficie, tinta verde en texto |
| Atención | #5C410A sobre #FBF0D5 | Miel como fondo, no letra amarilla |
| Error | #8A2B2B sobre #F8E4DF | Ladrillo, uso localizado |
| Enlace/foco | #365F80 | Azul apagado legible |
| Línea decorativa | #E4D6BF | No usar como única pista para localizar un control |
| Contorno funcional | #8A735E | Campos y límites que necesitan distinguirse |

No todos los colores aparecen en cada pantalla. El estado usa icono o texto además del color. El set de color no cambia según la hora. Las fotos importadas conservan sus colores.

Fuentes propuestas: **Fraunces** para títulos breves, **Figtree** para interfaz. Verificar disponibilidad y licencia antes de empaquetar; la app debe cargar fuentes locales y tener fallback legible. Fraunces no se aplica a párrafos, campos, botones ni cronómetros. Las cifras del temporizador usan Figtree con números tabulares.

Base orientativa: texto 15–16 px; metadatos 13–14 px; títulos 24–32 px. Ajustar al escalado; no imponer un valor fijo si causa desbordamiento. Controles de unos 40 px de alto como objetivo cómodo. Radios aproximados 10–12 px en controles y 18–22 px en tarjetas. Espaciado por familias, sin crear un token para cada píxel.

Sombras suaves cálidas para separar tarjetas importantes y capas flotantes. Grano estático opcional de muy baja presencia, solo en fondo y apagado si afecta lectura. No es requisito de entrega. Sin degradados, glassmorphism ni paleta violeta/morada.

Contraste: medir al implementar texto normal, texto grande, controles y foco; objetivo 4,5:1 en texto normal y 3:1 donde corresponda a texto grande/elementos gráficos esenciales. Un chequeo de hex no certifica la interfaz completa: faltan opacidad, tamaño, fondo real, estados y foco.

## 3. Composición de Hoy

| Zona | Contenido | Prioridad |
|---|---|---|
| Cabecera baja | Hoy, fecha; Nueva idea secundaria | Orientación |
| En tu mesa | Portada, video, tarea, Seguir por aquí, Continuar | Principal |
| Avance de hoy | Un indicador con minutos/meta | Secundaria |
| Después | Hasta dos entradas y acceso a Semana | Secundaria |
| Moodboard opcional | Una imagen estática o navegación manual | Prescindible; debajo del trabajo |

En una pantalla de 1366×768 debe verse la tarea y su acción principal sin desplazar la página. No fijar una altura inmutable para conseguirlo: probar nombres largos, zoom y textos reales. A 1920×1080, limitar el ancho de lectura para no estirar las tarjetas de borde a borde. A 1024×600 o zoom alto, apilar módulos con desplazamiento natural.

**Ejemplo de contenido, no datos del perfil real:**

> En tu mesa  
> Video 18 · Nombre de la obra  
> Guion  
> Seguir por aquí: revisar el cierre.  
> Continuar

La tarjeta no debe añadir «Aquí puedes organizar tus tareas» ni explicar qué es el guion. Fecha y próxima entrega van en segundo plano. Si hay sesión activa, su control ocupa el lugar de Continuar.

Una ilustración estática muy pequeña de escritorio puede aparecer en un estado vacío. No hace falta en Hoy lleno: la portada y la composición ya aportan identidad.

## 4. Componentes e interacción

| Elemento | Diseño e interacción |
|---|---|
| Botón principal | Terracota sólido, verbo claro; uno dominante por contexto |
| Secundario | Tonal claro o contorno, misma altura; no todos parecen primarios |
| Acción discreta | Texto con foco visible; usar para abrir detalles, no esconder borrar |
| Tarjeta de video | Portada, título, estado, próxima tarea; área de apertura clara |
| Publicado/listo | Etiqueta legible; sin gris o sepia automático en la imagen |
| Etapas | Cinco grupos etiquetados; Presentación expande sus tres checks |
| Checkbox | Estado y etiqueta legibles; marcar no cambia de pantalla |
| Campos | Etiqueta persistente, borde funcional y error junto al campo |
| Selector de fecha | Fecha actual visible y opción de quitar; no obliga horarios |
| Panel de detalle | Encabezado estable, cierre visible, scroll propio cuando convenga |
| Pestañas | En curso, Ideas, Publicados; selección con forma y texto, no solo color |
| Nota de reentrada | Una línea en Hoy; editar en tarea, sin modal obligatorio al salir |
| Temporizador | Cifras estables, pausar/finalizar accesibles; nunca otro motor de tiempo |
| Semana | Bloques con duración escrita; sin escala horaria si faltan horas |
| Gráficas | Etiquetas directas, unidades y periodo; tabla o detalle textual accesible |
| Error | Acción de recuperación concreta; conservar lo escrito |
| Toast | Confirmación discreta; eventos críticos no desaparecen antes de poder actuar |

No esconder acciones esenciales solo en hover. Menús «Más» para operaciones infrecuentes, no para iniciar/pausar. Diálogos para decisiones con consecuencias, no para confirmar cada check.

## 5. Detalle del video

Orden inicial: nombre y estado → próxima tarea → etapas → fecha objetivo. Recursos, plan/fechas, sesiones y notas como secciones plegables con nombres claros. Mostrar el recurso relevante junto a la tarea cuando exista: lectura, paneles u otro enlace guardado; no inventar un enlace para llenar espacio.

El título es editable sin activar modo edición de toda la ficha. Guardado automático con mensaje solo si está en curso de forma perceptible o falló. No repetir «Guardado correctamente» en cada tecla.

Cinco etapas no equivalen a cinco grandes tarjetas apiladas. Usar filas compactas con expansión; no esconder todo el checklist detrás de iconos sin etiqueta.

## 6. Enfoque y atención

Enfoque reduce lo visible a tarea, nota, recursos y controles; mantiene retorno evidente. No bloquea otras apps ni fuerza pantalla completa. Se puede capturar una idea sin perder el trabajo actual.

Movimiento por defecto breve y funcional, aproximadamente 120–200 ms. No entrada escalonada de todos los bloques, crecimiento de plantas, partículas, parallax, contadores que cuentan desde cero o tarjetas que flotan continuamente. Con movimiento reducido, suprimir desplazamientos y decoración animada.

Usar etiquetas específicas: «Continuar guion», «Guardar idea», «Mover bloque». Cambiar una etiqueta según el estado es útil; cambiar de posición el botón mientras se trabaja no lo es.

No saturar de colores cada etapa. En Semana pueden usarse acentos suaves por etapa con texto, pero el contraste semántico de error/atención debe seguir siendo inequívoco.

## 7. Menos texto sin ocultar consecuencias

| Situación | Texto propuesto |
|---|---|
| Idea nueva | «Nombre de la obra» + «Guardar idea» |
| Campo opcional | Etiqueta simple; omitir explicación si ya se entiende |
| Guardado fallido | «No se guardó. Reintentar» |
| Sin sesiones | «Aún no hay sesiones» |
| Retomar | «Seguir por aquí: revisar el cierre» |
| Plan cargado | «Faltan 45 min por ubicar» cuando el cálculo sea posible |
| Plan incierto | «Actualiza el tiempo restante» |
| Meta cumplida | «60 de 60 min»; sin discurso motivacional |
| Reprogramación | «Mover al lunes»; resumen de cambios antes de aplicar |
| Copia destructiva | «Esta copia reemplazará los datos actuales» + resumen y confirmación |

La brevedad no justifica «Aceptar» sin contexto en una restauración. Una ayuda contextual breve puede explicar un riesgo real; no explica repetidamente la app completa.

## 8. Revisión visual temprana

CS03 construye tokens y componentes. CS04 muestra Hoy, Videos, detalle, Semana, Progreso, Ajustes y Enfoque antes de expandir la implementación. Comparar con este documento y corregir problemas visuales evidentes de inmediato.

Cozy Studio ya fue elegido por el propietario. Presentar capturas o prototipo para que pueda opinar, sin bloquear el trabajo rutinario esperando otra autorización de estilo. Registrar «revisión del propietario pendiente» si no hay respuesta; eso no equivale a aprobación ni impide tareas compatibles. Si el propietario rechaza una composición, corregirla antes de extenderla.

Comprobar vacío, con datos, error, sesión activa/pausada, pendiente de publicar y título largo. Recorrer teclado, cerrar detalle y recuperar foco. Las capturas deben pertenecer a la nueva app, no a la versión anterior.

## 9. Qué se elimina del rediseño anterior

- Hero de ventana, tres franjas horarias, lámpara nocturna y pruebas de cambio de escena.
- Duplicación de anillo en avatar y Hoy.
- Plan de mañana y cierre del día como tarjetas automáticas.
- Racha protagonista y múltiples elementos motivacionales simultáneos.
- Jardín y planta como obligaciones de la entrega inicial.
- Requisito de tarjetas terminadas en sepia.
- Plan RD1–RD7 intercalado entre pasos antiguos.
- Declaraciones de «aprobado por defecto» o citas de aprobación no presentes en la solicitud actual.

## 10. Alternativas al hero consideradas

| Alternativa | Ventaja | Decisión base |
|---|---|---|
| En tu mesa | Conecta identidad con trabajo real y reentrada | Elegida para esta propuesta |
| Encabezado pequeño con póster estático | Personalización sencilla, menor utilidad práctica | Opcional mediante moodboard |
| Meta semanal grande | Hace visible el resultado | Mantener como dato en Semana, no reemplaza la próxima acción |

La mejor sustitución es usar ese espacio para retomar. No hace falta rellenar el hueco con otra decoración de igual tamaño.
