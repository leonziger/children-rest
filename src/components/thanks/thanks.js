import $ from "jquery";
import vex from "vex-js";


export const openThanksModal = function() {

        const modalName = $(this).data('modal-toggle');
        const modal = $(`[data-modal=thanks]`);

        if (!modal.length) {
            return console.error('Modal is not exist!');
        }

        vex.open({
            unsafeContent: modal.html(),
            afterOpen: function() {
                const name = $('[name="name"]').val();
                let intro = 'Добрый день,<br> Ваш запрос принят в работу!';
                const hello = $('.thanks__title');
                hello.html(intro);
            },
            closeClassName: 'thanks__close'
        });
};
