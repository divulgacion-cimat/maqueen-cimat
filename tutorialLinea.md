# Siguiendo una Línea

## {Introduction @unplugged}

En esta actividad aprenderás a utilizar el sensor infrarrojo para hacer que el robot siga una línea negra. A medida que avanzamos, verás cómo el robot ajusta su movimiento según los datos que recibe de sus sensores.

## {Step 1}

Siempre que trabajemos con el robot, debemos asegurarnos de inicializarlo. Para ello, en el bloque `||basic:al iniciar||` coloca un bloque `||robot:robot ... start||` y selecciona el *dfrobot maqueen*.
```blocks
robot.dfRobotMaqueen.start()
```

## {Step 2}

El robot debe verificar en todo momento si sus sensores detectan la línea. Para lograr esto, vamos a realizar todo el código necesario dentro de un bloque `||basic:para siempre||`, que ejecutará su contenido repetidamente mientras el programa esté corriendo. Coloca dicho bloque en el espacio de trabajo.

```blocks
basic.forever(function () {

})

```


## {Step 3}

El primer paso es hacer que el robot avance si ambos sensores detectan la línea. Para esto, coloca un bloque `||logic:si...entonces||` y sustituye **verdadero** por un bloque `||logic:y||`. Luego, de la categoría `||robot:Robot||` toma dos bloques `||robot:robot detect line||` y colócalos en ambos lados del bloque `||logic:y||`. Estos bloques se encargan de verificar si el sensor que indican detectó la línea. Selecciona en uno la opción *left*, izquierda, y en el otro *right*, derecha, para obtener la información de ambos sensores.

```blocks
basic.forever(function () {
    if (robot.detectLine(RobotLineDetector.Left) && robot.detectLine(RobotLineDetector.Right)) {
        //
    }
})

```

## {Step 4}

Dentro del bloque condicional, agrega un bloque `||robot:robot motor tank||` y asigna ambos valores a **30** para hacer que el robot avance. Al ejecutar la simulación, verás como el robot comienza a moverse pero aún no sigue la línea.

```blocks
basic.forever(function () {
    if (robot.detectLine(RobotLineDetector.Left) && robot.detectLine(RobotLineDetector.Right)) {
        //highlight
        robot.motorTank(30, 30)
    }
})
```

## {Step 5}

Notemos que si la condición anterior es falsa, entonces *al menos uno* de los sensores no está detectando la línea. Vamos a aprovechar este hecho. Haz click tres veces en el símbolo "**+**" para crear dos condicionales `||logic:si no,  si ... entonces||` y sustituye el **falso** de uno de ellos por un bloque `||robot:robot detect line left||`, y el del otro por `||robot:robot detect line right||` .

```blocks
basic.forever(function () {
    if (robot.detectLine(RobotLineDetector.Left) && robot.detectLine(RobotLineDetector.Right)) {
        robot.motorTank(30, 30)
    } else if (robot.detectLine(RobotLineDetector.Left)) {
        //
    } else if (robot.detectLine(RobotLineDetector.Right)) {
        //
    } else {
        //
    }
})

```

## {Step 6}

Si entramos a la rama `||logic: si robot detect line left entonces||`, significa que el sensor izquierdo está detectando la línea y, por lo que dijimos en el paso anterior, el sensor derecho no. Cuando esto pasa, el robot debe girar ligeramente a la **izquierda** para corregir su rumbo. Coloca dentro de esta rama un bloque `||robot:robot motor tank||` y asigna los valores **10** a la rueda izquierda y **30** a la rueda derecha. Al girar más rápido la llanta derecha, el robot girará a la izquierda como buscamos.

```blocks
basic.forever(function () {
    if (robot.detectLine(RobotLineDetector.Left) && robot.detectLine(RobotLineDetector.Right)) {
        robot.motorTank(30, 30)
    } else if (robot.detectLine(RobotLineDetector.Left)) {
        //highlight
        robot.motorTank(10, 30)
    } else if (robot.detectLine(RobotLineDetector.Right)) {
        //
    } else {
        //
    }
})

```


## {Step 7}

De la misma manera, si entramos a la rama `||logic: si robot detect line right entonces||`, entonces el sensor derecho está detectando la línea y el izquierdo no. En esta ocasión debemos girar ligeramente a la **derecha**. Coloca dentro de esta rama un bloque `||robot:robot motor tank||` y asigna los valores **30** a la rueda izquierda y **10** a la rueda derecha. Como ahora gira más rápido la llanta izquierda, el robot girará a la derecha. 

```blocks
basic.forever(function () {
    if (robot.detectLine(RobotLineDetector.Left) && robot.detectLine(RobotLineDetector.Right)) {
        robot.motorTank(30, 30)
    } else if (robot.detectLine(RobotLineDetector.Left)) {
        robot.motorTank(10, 30)
    } else if (robot.detectLine(RobotLineDetector.Right)) {
         //highlight
        robot.motorTank(30, 10)
    } else {
        //
    }
})

```


## {Step 8}

Si lo ejecutamos, ¡el robot ya sigue la línea! Sin embargo, aún queda una rama *si no* al final. Notemos que si el programa llega hasta ese punto, significa que ninguno de los sensores está detectando la línea, es decir, se salió de la trayectoria. En ese caso, es mejor detener el robot. Coloca dentro de la última rama un bloque `||robot:robot motor tank||` con ambos valores en **0** para detener al robot.

```blocks
basic.forever(function () {
    if (robot.detectLine(RobotLineDetector.Left) && robot.detectLine(RobotLineDetector.Right)) {
        robot.motorTank(30, 30)
    } else if (robot.detectLine(RobotLineDetector.Left)) {
        robot.motorTank(10, 30)
    } else if (robot.detectLine(RobotLineDetector.Right)) {
        robot.motorTank(30, 10)
    } else {
        //highlight
        robot.motorTank(0, 0)
    }
})

```

## {Step 9}

¡Excelente! Ahora tu robot está siguiendo una línea de manera automática.

**Desafío:** ¿Cómo podrías hacer que el robot vuelva a buscar la línea si se sale de ella completamente?

```template
//
```