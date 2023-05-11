"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) l callee
// Funktionsdeklaration
function test() 
{
    console.log("Hallo asad!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

ausgabeNamen();

function ausgabeNamen() 
{
    // what happens in VEGAS
    let firstName = "Alex";
    console.log("Hallo" , firstName,"!");
}

// console.log(firstName); // Fehler: Scope!



