module.exports = function toReadable (number) {
    var result = '';
    var number1To19 = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    var tw = ['', '', 'twenty', 'thirty', 'forty',
      'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var numberString = String(number);
    var digitalPosition = numberString.length;
    if(numberString.length == 1 && numberString == '0'){
      return 'zero';
  }
      for (let x = 0; x < numberString.length; x++) {
          if (digitalPosition == 3) {
              result = number1To19[Math.floor(number/100)] + ' ' + 'hundred';
              digitalPosition--;
          }
          if (number%100 > 0 && number%100 < 20) {
              result = result + ' ' + number1To19[number%100];
              break;
          }
          if(number%100 >= 20){
              result = result + ' ' + tw[Math.floor(number%100/10)];
              if(digitalPosition == 2){
                  result = result + ' ' + number1To19[Math.floor(number%10)];
                 break;
              }
          }
      }
    return result;
}
