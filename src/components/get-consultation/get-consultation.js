import $ from 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput';
import 'jquery-validation/dist/jquery.validate';
import 'jquery-validation/dist/localization/messages_ru';
import {openThanksModal} from "../thanks/thanks";

const gcForm = $('.get-consultation__form');
const phone = $('[name="phone"]');
const fieldErrorClassName = 'get-consultation__field-error';
const fieldValidClassName = 'get-consultation__field-valid';

phone.mask('+7 (999) 999-99-99', { autoclear: false });

$.validator.addMethod('condition', function(value, element, condition) {
    if (typeof condition !== 'function') {
        throw new Error('"condition" rule must return a function');
    }
    return this.optional(element) || condition(value);
});

const gcValidator = gcForm.validate({
    rules: {
        name: {
            required: true,
            condition: () => (value) => {
                const expression = new RegExp(/^[а-яА-ЯёЁ\s]+$/);
                if(expression.test(value)) {
                    return expression.test(value);
                };
            },
            minlength: 3
        },
        phone: {
            required: true,
            condition: () => (value) => value.indexOf('_') === -1
        }
    },

    messages: {
        name: {
            required: 'Обязательное поле для заполнения',
            condition: 'Введите Ваше имя, минимум 3 кириллических символа'
        },
        phone: {
            required: 'Обязательное поле для заполнения',
            condition: 'Введите 10 цифр номера Вашого телефона'
        }
    },

    highlight: (element) => {
        $(element).addClass(fieldErrorClassName).removeClass(fieldValidClassName);
    },

    unhighlight: (element) => {
        $(element).removeClass(fieldErrorClassName).addClass(fieldValidClassName);
    },

    errorPlacement: function(error, element) {
        error.addClass('get-consultation__error-message');
        error.insertAfter(element);
    },

    submitHandler: function(form) {
        gcForm.trigger('reset');
        openThanksModal();
    }
});

gcForm.click( function() {
    gcValidator.form();
});
