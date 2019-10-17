/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
    Created on : 17-Oct-2019, 12:14:51 PM
    Author     : nicolesawler
*/


/* Jquery Code */

// A $( document ).ready() block.
$( document ).ready(function() {
    
    console.log( "ready!" );
    //content goes here
    
});

//OR

// Shorthand for $( document ).ready()
$(function() {
    
    console.log( "ready!" );
    //content goes here
    
});




/* Regular JavaScript */

Name('Nicole Sawler');

function Name($name){
    console.log($name);
}

//P.S.
/*
 * the regular JS function will be called in before the jQuery
 * Once jquery is ready it will be called and the regular js will be ready right away!
 */