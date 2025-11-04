# Detección de Obstáculos

## {Introduction @unplugged}

En esta actividad aprenderás a utilizar el sensor de proximidad para detener al robot.

## {Step 1}

Siempre es necesario iniciar el robot cuando trabajemos con él. Para esto, en el bloque `||basic:al iniciar||` coloca un bloque `||robot:robot ... start||` y selecciona el *dfrobot maqueen*.
```blocks
robot.dfRobotMaqueen.start()
```

## {Step 2}

Ahora necesitamos una variable para guardar la mínima distancia del robot a los obstáculos. Esta deberá actualizarse cada vez que detecte un nuevo valor por lo que usaremos un nuevo bloque: `||robot:robot on obstacle distance changed||`, que en español significa *Robot al cambiar la distancia al obstáculo*. Colócalo dentro del espacio de trabajo.


```blocks
robot.onObstacleDistanceChanged(function () {
   
})

```


## {Step 3}

Crea ahora una variable `||variables:distancia||` y coloca el bloque `||variables:fijar distancia a||` dentro del bloque que acabas de colocar. Toma ahora un bloque `||robot:robot obstacle distance||` y asígnaselo como valor a la variable en lugar del **0**.

```blocks
robot.onObstacleDistanceChanged(function () {
    distance = robot.obstacleDistance()
})

```

## {Step 4}

Queremos que nuestro robot avance si la distancia a los obstáculos es suficientemente grande. Para esto vamos a usar un condicional. Toma un condicional `||logic:si ... entonces||` y colócalo debajo de lo anterior.

```blocks
robot.onObstacleDistanceChanged(function () {
    distance = robot.obstacleDistance()
     if (true) {
            //
        } 
})
```

## {Step 5}


Ahora crea un bloque  `||logic:>||` y sustituye el **verdadero**. En la parte izquierda  coloca un bloque `||variables:distancia||` y cambia el **0** de la derecha por **15**.

```blocks
robot.onObstacleDistanceChanged(function () {
    distance = robot.obstacleDistance()
     if (distance > 15) {
            //
        }
})

```

## {Step 6}

Finalmente, para que se mueva el robot hacia adelante, coloca un bloque `||robot:robot motor tank||` dentro del condicional y asigna ambos valores a **30**. Ejecuta el programa y arrastra un obstáculo enfrente del robot. Observarás que el robot sigue hacia adelante aunque la distancia sea claramente menor a 15cm.

```blocks
distance = robot.obstacleDistance()
     if (distance > 15) {
        //highlight
            robot.motorTank(30, 30)
        }

```


## {Step 7}

Esto es porque estamos asignando una velocidad a los motores para que avance, ¡pero nunca se la quitamos! Da click en el símbolo de **+** del condicional para agregar una rama *sino* y dentro coloca otro bloque `||robot:robot motor tank||` pero deja los valores en 0 para apagar los motores. ¡Notarás que el robot ahora se detiene!
```blocks
    distance = robot.obstacleDistance()
     if (distance > 15) {
            robot.motorTank(30, 30)
        } else {
        //highlight
            robot.motorTank(0, 0)
        }

```

## {Step 8}

¡Excelenete! Ahora nuestro robot se detiene al detectar un obstáculo enfrente de él. ¿Cómo harías para que en su lugar diera una vuelta para evitar el obstáculo?


```template
//
```
