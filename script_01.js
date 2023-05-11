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

// ausgabeNamen();

function ausgabeNamen() 
{
    // what happens in VEGAS
    let firstName = "Alex";
    console.log("Hallo" , firstName,"!");
}

// console.log(firstName); // Fehler: Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Asad"); // Argument (Daten für Parameter)
// ausgabeNamenParam("Roxana");
// ausgabeNamenParam("Alex");
//Argumente sind Daten für Parameter


function ausgabeNamenParam(firstName) //Parameter
{
    console.log("Hallo " + firstName,"!");  
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

ausgabeNamenParams("Batista", "Dave");
ausgabeNamenParams("Jamshid", "Rahmanzani");
ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?") );


function ausgabeNamenParams(firstName, familyName)
{
    console.log("Hallo " + firstName + " "+ familyName,"!");     
}