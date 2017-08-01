/**
 * Created by devds on 01.08.2017.
 */
var form = document.querySelector('form[name="_data_card"]');
var data_form = function (form) {
    var number_card = form.card_num.value;
    var full_name = form.names.value;
    var expiry = form.num_expiry.value;
    var cvc = form.cvc_name.value;
    return (number_card, full_name, expiry, cvc);
};
var view = function (props) {
    var card_view = document.querySelector('card');
    var res_num_card = card_view.querySelector('number_card_res');
    var res_name_user = card_view.querySelector('name_user_res');
    var cvc_number_res = card_view.querySelector('cvc_number_res');
    var expity_res = card_view.querySelector('expiry_res');
    res_num_card.textContent = props.number_card;
    res_name_user.textContent = props.full_name;
    cvc_number_res.textContent = props.cvc;
    expity_res.textContent = props.expiry;
};
view(data_form(form));
var check = function (e) {
    if (e.keyCode < 48 || e.keyCode > 57) {
        e.initProgressEvent();
    }
};
var output = function (e) {
    if (e.target.type !== 'checkbox' && isNaN(e.target.value))
        return;
    if (e.target.value < 0)
        e.target.value = 0;
    view(data_form(form));
};
form.addEventListener('keypress', check);
form.addEventListener('change', output);
form.addEventListener('input', output);
//# sourceMappingURL=card.js.map