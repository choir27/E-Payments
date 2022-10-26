new Cleave('.cardNumber', {
  creditCard: true,
  onCreditCardTypeChanged: function(type) {
     document.querySelector('.type').innerHTML = '<i class="fa fa-cc-' + type + ' fa-fw fa-2x active" aria-hidden="true"></i>';
  }
});


new Cleave('.expiry', {
  date: true,
  datePattern: ['m', 'y']
});
