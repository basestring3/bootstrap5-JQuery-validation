/**
 * bootstrap-validation switch
 * 
 * this switch the opject with class between is-valid and is in-valid or remove both classes
 *
 * Copyright 2023 Berend Jan van Zanten
 */

!function ($) {
    "use strict";// jshint ;_;
    var ValidationSwitch = function (input, options) {
        if (options) {
            $(input).removeClass('is-invalid');
            $(input).addClass('is-valid');
        } else {
            $(input).removeClass('is-valid');
            $(input).addClass('is-invalid');
        }
    };
    var RemoveValidation = function (input) {
        $(input).removeClass('is-invalid');
        $(input).removeClass('is-valid');
    };
    $.fn.valid = function (options) {
        var instance = this.data('validationSwitch');
        var elem = this;
        return elem.each(function () {
            var validationSwitch;
            if (instance) {
                return;
            }
            if (options === undefined) {
                validationSwitch = RemoveValidation(elem);
                elem.data('valid', RemoveValidation);
            } else {
                validationSwitch = ValidationSwitch(elem, options);
                elem.data('valid', ValidationSwitch);
            }
        });
    };
}(window.jQuery);
