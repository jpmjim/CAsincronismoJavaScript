# CAsincronismoJavaScript
Curso de Asincronismo con JavaScript

  ## Qué es Asincronismo
    Asincronismo es una forma de programar en JavaScript que permite ejecutar código sin esperar a que se termine de ejecutar el código anterior.

  ### ¿En qué formas JS puede manejar la asincronía?
    Callbacks:
    Una función que se pasa como argumento de otra función y que será invocada según sea su necesidad.

    Promesas (ES6):
    Función no-bloqueante y asíncrona la cual puede retornar un valor ahora, en el futuro o nunca.

    Async / Await (ES2017)
    Permite estructurar una función asincrónica sin bloqueo de una manera similar a una función sincrónica ordinaria.

    Estos 3 conceptos son con los que más se trabajan dentro del asincronismo.

    El asincronismo es básicamente una manera de aprovechar el tiempo y los recursos de nuestra aplicación, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la información de una API), para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.

    Un ejemplo fácil es comparando asincronismo vs sincronismo: En lenguajes síncronos al hacer un temporizador para ejecutar una función, todo el código se pausa hasta terminar el tiempo, mientras que en Javascript u otros lenguajes asíncronos, podemos estar aprovechando ese tiempo para ejecutar otros procesos hasta que ese tiempo finaliza.

  ### GLOSARIO

    API
    Interfaz de programación de aplicaciones (Application Programming Interface). Es un conjunto de
    rutinas que provee acceso a funciones de un determinado software.

    Concurrencia
    Cuando dos o más tareas progresan simultáneamente.

    Paralelismo
    Cuando dos o más tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.
    
    Bloqueante
    Una llamada u operación bloqueante no devuelve el control a nuestra aplicación hasta que se ha
    completado. Por tanto el thread queda bloqueado en estado de espera.

    Síncrono
    Es frecuente emplear ‘bloqueante’ y ‘síncrono’ como sinónimos, dando a entender que toda la
    operación de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que
    se complete para procesar el resultado.

    Asíncrono
    La finalización de la operación I/O se señaliza más tarde, mediante un mecanismo específico
    como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta
    sea procesada en diferido.
        
    Call Stack
    La pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en
    que punto del programa estamos, por donde vamos.

    Heap
    Región de memoria libre, normalmente de gran tamaño, dedicada al alojamiento dinámico de
    objetos. Es compartida por todo el programa y controlada por un recolector de basura que se
    encarga de liberar aquello que no se necesita.

    Cola o Queue
    Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al
    de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su
    callback correspondiente.

    Eventloop o Loop de eventos
    Cuando la pila de llamadas (call stack) se vacía, es decir, no hay nada más que ejecutar, se
    procesan los mensajes de la cola. Con cada ‘tick’ del bucle de eventos, se procesa un nuevo
    mensaje.

    Hoisting
    Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del
    código en tiempo de compilación.

    DOM
    DOM permite acceder y manipular las páginas XHTML como si fueran documentos XML. De
    hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos XML.
    
    XML
    Lenguaje de marcado creado para la transferencia de información, legible tanto para seres
    humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida
    sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del
    primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de
    XML.

    Events
    Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar
    una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una
    opción de un desplegable (onselect), que pase el ratón sobre un objeto (onmouseover), etc.

    Compilar
    Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como
    la máquina virtual de Java.

    Transpilar
    Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un
    programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el
    original.

  ## Event Loop
  El bucle de eventos es un bucle que se ejecuta en una aplicación cuando se detecta un evento.

  Herramienta donde poder probar event loop "http://latentflip.com/loupe"
  
  ![](https://media.giphy.com/media/JFsW5Wtec5dA1rthkq/giphy.gif)

    Event Loop: el buble de eventos de un patró de diseño que espera y distribuye eventos o mensajes de un programa.

    Memory Heap: Los objetos son asignados a un montículo (espacio grante en la memoria no organizado).

    Call Stack (pila): Aplila de forma organizada las instrucciones de nuestro programa .

    Task Queue: Cola de tareas, que se maneja la concurrencia, se agregan las tareas que ua estan listas para pasar al Stack (Pila). El stack debe de estar vacio.

    MicroTask Queue: Las promesas tienen otra forma de ejecutarse y de una prioridad superior.

    Wev APIs: JavaScript del lado del cliente: setTimeout XMLHttpRequest, File Reader, Dom. Node: fs, https.

    Event Loop: Tarea asignada para mover el Task Queue al Stack, solo si el Stack está vacío.

  ## Configuración
    - El editor que usaremos sera Visual Studio Code.
    - La documentación de JavaScript es la que se encuentra en la siguiente dirección: https://developer.mozilla.org/es/docs/Web/JavaScript
    - La fake API de platzi: https://developer.mozilla.org/es/docs/Web/JavaScript
    - Code Runner que se integra con el editor: https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner

  ### Comandos en la terminal
      - pwd donde me encuentro en la carpeta actual.
      - mkdir crear una carpeta nos movemos a la carpeta con cd.
      - inicializamos nuestro repo local con git init.
      - inicilizar con npm init.
      - creamos una estructura de carpetas.
  
  ## Qué son los Callbacks
    Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
  
  ## XMLHTTPRequest "el llamodo a una API de Platzi"
    - Instalación de recurso npm i xmlhttprequest.
    - Link de la API "https://fakeapi.platzi.com/"
    
    Para obtener el JSON se utilizará un API llamado XMLHttpRequest (a menudo llamado XHR). Éste en un objeto JavaScript muy útil que permite realizar solicitudes de red para recuperar recursos desde un servidor vía JavaScript (por ejemplo: imágenes, texto, JSON, incluso código HTML), con lo que es posible actualizar pequeñas secciones de contenido sin tener que volver a cargar la página entera. Con ello se obtienen páginas web más interactivas, pero está fuera del alcance de este artículo entrar en detalle.
  ### Códigos de estado de respuesta HTTP
    Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. Las respuestas se agrupan en cinco clases:
      
      Respuestas informativas (100–199),
      Respuestas satisfactorias (200–299),
      Redirecciones (300–399),
      Errores de los clientes (400–499),
      y errores de los servidores (500–599).
 