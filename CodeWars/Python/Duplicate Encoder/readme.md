# Ejercicio Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

```js
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
```

Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

---

## Solucion

se uso lower para convertir la cadena a minusculas y se creo una lista nueva donde se guardara el resultado de las comparaciones, con .count() se verifica si hay duplicados y si hay se agrega ) si no se agrega ( con un if
