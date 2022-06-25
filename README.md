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

  