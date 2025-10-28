var typedDataElement = document.getElementById('TypedData');
if (typedDataElement) {
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 90,
    backSpeed: 50,
    loop: true,
    strings: typedDataElement.dataset.elements.split(','),
  });
}