# Siguiendo una Línea

## {Introduction @unplugged}

En esta actividad aprenderás a utilizar el sensor infrarojo para hacer que el robot siga una línea negra.

## {Step 1}

Siempre es necesario iniciar el robot cuando trabajemos con él. Para esto, en el bloque `||basic:al iniciar||` coloca un bloque `||robot:robot ... start||` y selecciona el *dfrobot maqueen*.
```blocks
robot.dfRobotMaqueen.start()
```

## {Step 2}

El robot debe verificar en todo momento si sus sensores detectan la línea. Para lograr esto, vamos a realizar todo el código necesario dentro de un bloque `||basic:para siempre||`. Coloca dicho bloque en el espacio de trabajo.

```blocks
basic.forever(function () {

})

```


## {Step 3}

Vamos a hacer que el robot avance si ambos sensores detectan la línea. Coloca un bloque `||logic:si...entonces||` y sustituye **verdadero** por un bloque `||logic:y||`. Ahora, de la categoría `||robot:Robot||` toma dos bloques `||robot:robot detect line||` y colócalos en ambos lados del bloque `||logic:y||`. Estos bloques se encargan de indicar si el sensor detectó la línea. Selecciona en uno la opción *left*, izquierda, y en el otro *right*, derecha.
```blocks
basic.forever(function () {
    if (robot.detectLine(RobotLineDetector.Left) && robot.detectLine(RobotLineDetector.Right)) {
        //
    }
})

```

## {Step 4}

Ahora sí, dentro del bloque condicional coloca un bloque `||robot:robot motor tank||` y asigna ambos valores a **30**. Al correr la simulación verás como el robot comienza a moverse pero aún no sigue la línea.

```blocks
basic.forever(function () {
    if (robot.detectLine(RobotLineDetector.Left) && robot.detectLine(RobotLineDetector.Right)) {
        //highlight
        robot.motorTank(30, 30)
    }
})
```

## {Step 5}

Notemos que si la condición que colocamos es falsa, entonces *al menos uno* de los sensores no está detectando la línea. Aprovechemos esto. Haz click tres veces en el símbolo "**+**" para crear dos condiciones `||logic:si no,  si ... entonces||` y sutituye el **falso** de uno de ellos por un bloque `||robot:robot detect line left||` y el del otro por `||robot:robot detect line right||` .
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

Si solo el sensor de la izquierda, *left*, detecta la línea, significa que debemos girar un poco a la **izquierda** para corregir el rumbo. En la condición `||logic: si robot detect line left entonces||` coloca un bloque `||robot:robot motor tank||` y asigna los valores **10** y **30**. Al girar más rápido la llanta derecha, el robot gira a la izquierda como buscamos.

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

Ahora, si solo el sensor derecho, *right*, detecta la línea, significa que debemos girar a la derecha. En la condición `||logic: si robot detect line right entonces||` coloca un bloque `||robot:robot motor tank||` y asigna los valores **30** y **10**. Como ahora gira más rápido la llanta izquierda, el robot gira a la derecha. 

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

Si lo ejectuamos, ¡el robot ya sigue la línea! Sin embargo, aún queda una rama *si no* al final. Notemos que si el programa llega hasta ese punto, significa que ninguno de los sensores está detectando la línea. En ese caso será mejor detener el robot. Coloca entonces un bloque `||robot:robot motor tank||` con ambos valores en **0** en la última rama.
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

¡Excelente! Ahora tienes un robot que puede seguir una línea de manera automática.


```template
//
```