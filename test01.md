# Medidor de Amor

## {Introduction @unplugged}

Cuánto amor 

![Mensaje del banner del medidor de amor](/static/mb/projects/love-meter/love-meter.gif)

## {Step 1}

Usaremos el bloque de `||input:al presionarse pin||` para que se ejecute nuestro código si el pin **0** de la @boardname@ está presionado. De la categoría `||basic:Básico||` de la Caja de herramientas arrastra un bloque `||basic:mostrar número||` y déjalo dentro del bloque `||input:al presionarse pin||`.

```blocks
input.onPinPressed(TouchPin.P0, function() {
    //@highlight
    basic.showNumber(0)
})
```

## {Step 2}

De la categoría `||math:Matemática||` coge un bloque `||Math:escoge al azar||` y déjalo dentro del bloque `||basic:mostrar número||` para reemplazar el 0.

```blocks
input.onPinPressed(TouchPin.P0, function() {
    //@highlight
    basic.showNumber(randint(0, 100))
})
```

## {Step 3}

¡Asegurémonos de identificar nuestro Medidor de amor! De la categoría `||basic:Básico||` de la Caja de herramientas arrastra un bloque `||basic:al iniciar||` y ponlo en cualquier lugar del espacio de trabajo. A continuación coge un bloque `||basic:mostrar cadena||` y colócalo dentro del bloque `||basic:al iniciar||`. Escribe las palabras "MEDIDOR DE AMOR" dentro del bloque `||basic:mostrar cadena||`.

```blocks
//@highlight
basic.showString("MEDIDOR DE AMOR")
input.onPinPressed(TouchPin.P0, function() {
    basic.showNumber(randint(0, 100))
})
```

## {Step 4}

Probemos nuestro código. Presiona el pin **0** en el simulador en pantalla (abajo a la izquierda). Números entre 0 y 25 = Sin amor; 26-50 = Amor de mejores amigos; 51-75 = Amor desconsolado; 76-100 = Amor ardiente. 


```blockconfig.global
randint(0, 100)
```

```validation.global
# BlocksExistValidator
```

```template
input.onPinPressed(TouchPin.P0, function() {})
```
