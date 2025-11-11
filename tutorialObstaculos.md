# Detección de Obstáculos

## {Introduction @unplugged}

En esta actividad aprenderás cómo utilizar el sensor de proximidad del robot para detectar obstáculos y detener su movimiento cuando sea necesario. ¡Vamos a hacerlo paso a paso!

## {Step 1}

Siempre que trabajemos con el robot, debemos asegurarnos de inicializarlo. Para ello, en el bloque `||basic:al iniciar||` coloca un bloque `||robot:robot ... start||` y selecciona el *dfrobot maqueen*.
```blocks
robot.dfRobotMaqueen.start()
```

## {Step 2}

Ahora necesitamos una variable que almacene la distancia mínima entre el robot y los obstáculos. Cada vez que el robot detecte un cambio en la distancia, la variable debe actualizarse. Para esto utilizaremos el nuevo bloque: `||robot:robot on obstacle distance changed||`, que en español significa *Robot al cambiar la distancia al obstáculo*. Colócalo dentro del espacio de trabajo.


```blocks
robot.onObstacleDistanceChanged(function () {
   
})

```


## {Step 3}

Crea una variable `||variables:distancia||` y coloca el bloque `||variables:fijar distancia a||` dentro del bloque que colocaste en el paso anterior. Toma ahora un bloque `||robot:robot obstacle distance||` y asígnaselo como valor a la variable en lugar del **0**.

```blocks
robot.onObstacleDistanceChanged(function () {
    distancia = robot.obstacleDistance()
})

```

## {Step 4}

Queremos que el robot avance si la distancia a los obstáculos es suficientemente grande. Para ello, usaremos un condicional. Arrastra un bloque `||logic:si ... entonces||` y colócalo debajo del bloque que acabamos de crear.

```blocks
robot.onObstacleDistanceChanged(function () {
    distancia = robot.obstacleDistance()
     if (true) {
            //
        } 
})
```

## {Step 5}

Ahora, en el condicional vamos a verificar si la distancia es mayor que 15 cm. Para hacerlo, arrastra un bloque  `||logic:0 < 0||`, sustituye el **verdadero** con él y cambia el signo **<** por **>**. En el lado izquierdo reemplaza el valor **0** por un bloque `||variables:distancia||` y en el lado derecho cambia el valor a **15**.


```blocks
robot.onObstacleDistanceChanged(function () {
    distancia = robot.obstacleDistance()
     if (distancia > 15) {
            //
        }
})

```

## {Step 6}

Dentro del condicional, agrega un bloque `||robot:robot motor tank||` y asigna un valor de **30** a ambos motores para hacer que el robot avance. Ejecuta el programa y arrastra un obstáculo enfrente del robot. Observarás que el robot sigue hacia adelante aunque la distancia sea claramente menor a 15cm.

```blocks
robot.onObstacleDistanceChanged(function () {
    distancia = robot.obstacleDistance()
     if (distancia > 15) {
        //highlight
            robot.motorTank(30, 30)
        }
})
```


## {Step 7}

Esto ocurre porque le estamos asignando velocidad a los motores, pero en ningún momento los detenemos. Para solucionar esto, da click en el símbolo de **+** del condicional para agregar una rama *si no*. Dentro de esta rama, coloca otro bloque `||robot:robot motor tank||`, pero esta vez deja los valores en **0** para detener los motores. ¡Notarás que el robot ahora se detiene!

```blocks
robot.onObstacleDistanceChanged(function () {
    distancia = robot.obstacleDistance()
     if (distancia > 15) {
        //highlight
            robot.motorTank(30, 30)
        } else {
        //highlight
            robot.motorTank(0, 0)
        }
}) 

```

## {Step 8}

¡Listo! Ahora tu robot se detendrá al detectar un obstáculo frente a él.

**Desafío:** ¿Cómo modificarías este código para que el robot, en lugar de detenerse, dé una vuelta para evitar el obstáculo?


```template
//
```
