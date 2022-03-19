'use strict';

// const order = document.getElementById('order');
// const results = document.getElementById('result');
// order.addEventListener('click', function(){
//     results.classList.remove('hidden');
// })

let totalCounter = $('.qty');
let count = 0;

let totals = Number($('#totals').val());

function increment(){
    count++;
    $(totalCounter).html(count);
}

function decrement(){
    count--;
    $(totalCounter).html(function(){
        return count * 1 <= 1 ? 1 : count * 1 - 1;
    });
}

$(document).ready(function(){
    $('.submit').click(function(){
        $('.results').slideDown(1000);
    })
})

