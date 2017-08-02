/**
 * Created by devds on 01.08.2017.
 */
let form = document.querySelector('form[name="_data_card"]');

const data_form = form => {
    let number_card = form.card_num.value;
    let full_name = form.names.value;
    let expiry = form.num_expiry.value;
    let cvc = form.cvc_name.value;

    return (number_card, full_name, expiry, cvc);
};
const view = props =>{
    let card_view = document.querySelector('card');
    let res_num_card = card_view.querySelector('number_card_res');
    let res_name_user = card_view.querySelector('name_user_res');
    let cvc_number_res = card_view.querySelector('cvc_number_res');
    let expity_res = card_view.querySelector('expiry_res');

    res_num_card.textContent = props.number_card;
    res_name_user.textContent = props.full_name;
    cvc_number_res.textContent = props.cvc;
    expity_res.textContent = props.expiry;
};
view(data_form(form));

const check = e =>{
    if(e.keyCode<48 || e.keyCode>57){
        e.initProgressEvent();
    }
};
const output = e =>{
    if(e.target.type!=='checkbox' && isNaN(e.target.value)) return;
    if(e.target.value<0) e.target.value = 0;
    view(data_form(form));
};
form.addEventListener('keypress', check);
form.addEventListener('change', output);

form.addEventListener('input', output);

