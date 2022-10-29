$(function() {

    var owner = $('#owner'),
    cardNumber = $('#cardNumber'),
    cardNumberField = $('#card-number-field'),
    CVV = $("#cvv"),
    mastercard = $("#mastercard"),
    confirmButton = $('#confirm-purchase'),
    visa = $("#visa"),
    amex = $("#amex");

    // Use the payform library to format and validate
    // the payment fields.

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


    cardNumber.keyup(function() {
        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');
    
        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.removeClass('has-success');
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }
    
        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('transparent');
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('transparent');
            visa.addClass('transparent');
        }
    });

    confirmButton.click(function(e) {
    
        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());
    
       
    });
})