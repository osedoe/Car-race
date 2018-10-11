# Practica - Los Coches Locos

Vamos a desarrollar una página web donde se represente una carrera entre tres contendientes.
Los contendientes serán representados mediante imágenes diferenciadas, que se adjuntan a este enunciado.
Cada contendiente tendrá una ventaja y un hándicap. La ventaja es su velocidad al correr y su hándicap es un retroceso o una detención en la carrera. Cada uno de los contendientes tendrá una probabilidad Pi de aprovechar su ventaja y una probabilidad 1-Pi de sufrir su hándicap.
La representación la realizaremos mediante la impresión por pantalla de la imagen correspondiente, dejando a la izquierda tantos espacios como casillas haya avanzado el contendiente. Gana el primer contendiente que llegue la meta, que se encuentra en la casilla 200.
En el caso de que un contendiente tenga como hándicap el retroceso, éste no podrá hacerle retroceder más allá de la línea de meta.
La tabla de ventajas y hándicaps se muestra a continuación:

CONTENDIENTE  
VENTAJA  
HÁNDICAP  
Contendiente 1  
2 (75%)  
0 (25%)  
Contendiente 2  
4 (50%)  
-1 (50%)  
Contendiente 3  
6 (25%)  
0 (75%)  

Todos los contendientes participarán en el mismo turno. Cada turno vendrá indicado justo encima de donde se represente la carrera. A su vez, cada turno se representará debajo del anterior.
La carrera terminará cuando el último contendiente llegue a meta, momento en el que se imprimirá por pantalla el pódium resultante.

El tiempo transcurrido entre un turno y otro vendrá determinado por una función sleep, que tendremos que desarrollar, y cuyo pseudocódigo es el siguiente:

´´´´javascript
función esperar(milisegundos) {
   fecha_de_referencia = Sistema.fecha_actual();
   while (Sistema.fecha_actual() < fecha_de_referencia + milisegundos) {
   }
}
´´´

Requisitos de entrega:

* Sube el proyecto comprimido en formato ZIP.
* Indenta adecuadamente el código y usa los comentarios que consideres oportunos.
* Elimina las importaciones de librerías que no uses.
* Recuerda que el proyecto deberá disponer de un ejecutable en la carpeta dist.
    
Criterios de calificación:

* Requisitos mínimos (70%):
  * Deberán estar implementadas todas las funcionalidades descritas.
  * Los contendientes con hándicap negativo no podrán retroceder más atrás de la línea de meta.
* Buenas prácticas de programación (20%):
  * Sólo se valorará si se obtienen al menos 5 puntos de 7 en el apartado anterior.
  * Código mínimo imprescindible.
  * Código optimizado.
  * Comentarios necesarios y suficientes.
  * Variables y métodos con nombres significativos y autoexplicativos.
* Originalidad y creatividad (10%). Se valorarán positivamente las aportaciones creativas o innovadoras para enriquecer la aplicación:
  * Sólo se valorará si se obtienen al menos 7 puntos de 9 entre los dos apartados anteriores.
  * Se valorarán como máximo dos aportaciones.
  
El plagio o la incapacidad de defender la entrega se calificará con un cero.
