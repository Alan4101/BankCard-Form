/**
 * Created by devds on 27.07.2017.
 */
$(document).ready(function () {

    //
    // var inp = document.getElementById("cardNumber");
    // inp.oninput = function(){
    //     var card_num = document.getElementById("cardNumber").value;
    //     document.getElementById("number_card_res").innerHTML =  card_num;
    // };
    // $('#cardNumber').keyup(function () {
    //     console.log(1);
    //     $('#number_card_res').text($('#cardNumber').val());
    // });

   var card_form = {
        number_card : $('#cardNumber'),
        full_name: $('#fullname'),
        expiry: $('#expiry'),
        cvc: $('#cvc'),
        res_num_card: $('#number_card_res'),

    };
   function input_form(id_with, id_to) {
       id_with.keyup(function () {
           id_to.text(id_with.val());
           console.log(12);
       });
   }
   function front_part() {
       input_form(card_form.cvc,);
   }
   function back_part() {

   }
   input_form();
    function check_card(id_with,id_to) {
        if(typeof(id_with.val())!=='string'){
            $(id_with).keypress(function (e) {
                if (e.which < 8 && e.which > 0 && e.which == 46 && (e.which != 48 || e.which !=  57)) {
                    input_form(id_with,id_to);
                }
            });
        }else {
            $(id_with).keypress(function (e) {
                if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
                    return false;
                }else {
                    input_form(id_with, id_to);
                }
            });
        }
    }










});