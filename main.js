'use strict';


        // When Place Order button is clicked
    $('#order').click(function(){

        let pizzaSize = $(".pizza-size option:selected").val();
        let pizzaCrust = $(".crust option:selected").val();
        let pizzaToppings = $(".toppings option:selected").val();
        let total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
        let order = 1;
        let grandTotal = 0;

        $('.submit').hide();
        $('#addMore').show();
        $('.results').slideDown(500);

        $("#size").html($(".pizza-size option:selected").text() + " @ " + pizzaSize);
        $("#crust").html($(".crust option:selected").text() + " @ " + pizzaCrust);
        $("#toppings").html("With " + $(".toppings option:selected").text() + " @ " + pizzaToppings);
        $("#totals").html("Ksh" + pizzaValue());
        $('.g-total').html(`Total Bill: ${grandTotal + total}`);

        

         // When Done Shopping button is clicked
         $('.done').click(function(){
            $('.done').toggle('hide');
            $('.address').slideDown();
        })
    
        // When ADD Address button is clicked
        $('#addressAdd').click(function(){
            let address = $('#address').val();
            $('addressAdd').toggle('hide');
            $('.address').toggle('hide');
            $('.address-results').toggle('show');
            $('.location').text(address);
            $(".g-total").html(`Total Bill: ${grandTotal + total + 200}`);
            $('.checkout-btn').toggle('show');
        })
    
        // When Checkout button is clicked
        $('#checkout').click(function(){
            $('.overlay').show();
            $('#checkoutForm').toggle('show');
            $('.details').html("Pizza " + $(".pizza-size option:selected").text() + ", " + $(".crust option:selected").text() + " with " + $(".toppings option:selected").text());
            $('.del-location').text($('#address').val());
            $('.del-bill').text(`${grandTotal + total + 200}`);
            console.log($(pizzaSize).html());
        })

        // When Ok button on the modal is clicked
        $('#ok').click(function(){
            $('.overlay').toggle('hide');
            $('#checkoutForm').toggle('hide');
            $('#checkout').hide();
            $('.address-results').hide();
            $('.g-total').hide();
        })

         // When overlay is clicked
        $('.overlay').click(function(){
            $('.overlay').toggle('hide');
            $('#checkoutForm').toggle('hide');
        })
    })

       

    // When Order more button is clicked
    $('#addMore').click(function(){

        let pizzaSize = $(".pizza-size option:selected").val();
        let pizzaCrust = $(".crust option:selected").val();
        let pizzaToppings = $(".toppings option:selected").val();
        let total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
        order = order + 1;
        let grandTotal = 0;

        $('.submit').hide();
        $('#addMore').show();
        $('.results').slideDown(500);

        $("#size").html($(".pizza-size option:selected").text() + " @ " + pizzaSize);
        $("#crust").html($(".crust option:selected").text() + " @ " + pizzaCrust);
        $("#toppings").html("With " + $(".toppings option:selected").text() + " @ " + pizzaToppings);

        $("#totals").html("Ksh" + total);
        $('.g-total').html(`Total Bill: ${grandTotal + total}`);

        // Pizza Constructor Function
        function Pizza(orderNo, size, crust, toppings, total) {
            this.orderNo = orderNo;
            this.size = size;
            this.toppings = toppings;
            this.crust = crust;
            this.total = total;
          }

        let orderNew = new Pizza(order, pizzaSize, pizzaCrust, pizzaToppings, total);

        let newRow = '<tr><th scope="row">' + orderNew.orderNo  + '</th><td id="size">' + $(pizzaSize).text() + " - " + orderNew.size + '</td><td id="crust">' + $(pizzaCrust).text() + " - " + orderNew.pizzaCrust + '</td><td id="toppings">' + $(pizzaToppings).text() + " - " + orderNew.pizzaToppings + '</td><td id="total">' + orderNew.total + '</td></tr>'

        $(".resultsRow").append(newRow);

    })


    const pizzaValue = function(){
        let pizzaSize = $(".pizza-size option:selected").val();
        let pizzaCrust = $(".crust option:selected").val();
        let pizzaToppings = $(".toppings option:selected").val();
        let total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
        return total;
    }
}

let totalCounter = $('.qty');
let count = 1;

// Increase Quantity
function increment(){
    count++;
    let grandTotal = 0;
    grandTotal += pizzaValue();
    $(totalCounter).html(count);
    $("#totals").html(pizzaValue() * count);
    $(".g-total").text(grandTotal += pizzaValue());
    
}

// Decrease Quantity
function decrement(){
    
    $(totalCounter).html(function(){
        count--;
        $(totalCounter).html(count);
        $("#totals").html(pizzaValue() * count);
        if(count * 1 <= 1){
            return 1; 
        }else {return count * 1 - 1} 
    });

    
// orderPizza();

    