'use strict';

/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
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