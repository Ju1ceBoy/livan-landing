window.addEventListener("DOMContentLoaded", () => {

    initMaskTel();
    initFancy();
    initCustomSelect();

    function initCustomSelect() {
        $('select').select2({
            width: '100%',
        });
    };

    function initFancy() {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
        Fancybox.defaults.autoFocus = false;
    }

    function initMaskTel() {
        // Маска для телефона
        $.fn.setCursorPosition = function (pos) {
            if ($(this).get(0).setSelectionRange) {
                $(this).get(0).setSelectionRange(pos, pos);
            } else if ($(this).get(0).createTextRange) {
                var range = $(this).get(0).createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
        $.mask.definitions['~'] = '[49]';
        $("input[type='tel']").click(function () {
            $(this).setCursorPosition(4);
        }).mask("+7 (~99) 999-99-99", {
            placeholder: "_"
        });
    }
})
