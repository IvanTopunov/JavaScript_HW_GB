'use strict';

/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

/**
 * Функция сложения чисел.
 * @param {number} a число
 * @param {number} b число
 * @returns {number} число
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция вычитания чисел (a - b).
 * @param {number} a число
 * @param {number} b число
 * @returns {number} число
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Функция деления чисел (a / b).
 * @param {number} a число
 * @param {number} b число
 * @returns {number} число
 */
function segmentation(a, b) {
    return a / b;
}

/**
 * Функция умножения чисел (a * b).
 * @param {number} a число
 * @param {number} b число
 * @returns {number} число
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция математических операций над двумя числами.
 * @param {number} arg1 - число
 * @param {number} arg2 - число
 * @param {string} operation - строка принимает значение "+", "-", "/", "*"
 * @returns{number} число
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return segmentation(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error(operation + " Эта операция выполнится не может"); // Из 2 урока про валюты взял.
    }
}

console.log(mathOperation(5, 6, "+"));
console.log(mathOperation(5, 6, "-"));
console.log(mathOperation(5, 6, "/"));
console.log(mathOperation(5, 6, "*"));
console.log(mathOperation(5, 6, "asasad"));