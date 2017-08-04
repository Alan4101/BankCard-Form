/**
 * Created by devds on 27.07.2017.
 */
$(document).ready(function () {
    // var inp = document.getElementById("cardNumber");
    // inp.oninput = function(){
    //     var card_num = document.getElementById("cardNumber").value;
    //     document.getElementById("number_card_res").innerHTML =  card_num;
    // };

   var card_form = {
        number_card : $('#cardNumber'),
        full_name: $('#fullname'),
        expiry: $('#expiry'),
        cvc: $('#cvc'),
        //result container
        res_num_card: $('#number_card_res'),
        res_fullName : $('.name_user_res'),
        res_expiry: $('.expiry_res'),
        res_cvc : $('.cvc_number_res')

    };
/*вивід inputа на картці*/

   function input_form(id_with, id_to, side) {
       id_with.keyup(function () {
           id_to.text(id_with.val());
           if(side!='front'){
               $('.container-card-all').removeClass('flip');
               console.log("good f");
           }else{
               $('.container-card-all').addClass('flip');
               console.log('good b');
           }
           // console.log(12);
       });
   }
// передня частина
    function front_part() {
        var front = 'front',
         back = "back";
        $('#data_info input').each(function () {
            if($('input').hasClass('num')){
                OnlyDigits($('input'));
                input_form(card_form.number_card, card_form.res_num_card, front);
                input_form(card_form.expiry, card_form.res_expiry, front);
                input_form(card_form.cvc, card_form.res_cvc, back);
            }
            input_form(card_form.full_name, card_form.res_fullName, front);
        });
    }
    front_part();
//
    function SpaceNumber(card_code) {
        var temp = card_code.value.replace(/[^\d]/g, '').substr(0,16);
        temp = card_code.value!= ' '?card_code.match(/.{1,4}/g).join(' '): '';
        card_code.value = temp;
    }
// тільци цифри
    function OnlyDigits(input_name) {
        input_name.bind("input change", function () {
            if(this.value.match(/[^0-9]/g)){
                this.value = this.value.replace(/[^0-9]/g, '');
            }
        });
    }











});