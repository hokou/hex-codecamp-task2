
const cost_base = [0.6, 0.55, 0.5, 0.4]
const cost_normal = [1.6, 1.55, 1.5, 1.4]

$(document).ready(function () {
  $('.btn-top').click(function (e) {
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });
  
  $('.plan-number a').click(function (e) {
    e.preventDefault();
    let text = $(this).text().replace('位', '');
    if (text == '>25000') {
      $('.user-number span').text(text+' ');
      $('.cost-number1 span').text('專案價');
      $('.cost-number1 sub').text('');
      $('.cost-number2 span').text('專案價');
      $('.cost-number2 sub').text('');
    } else if (text == '10000') {
      cost_calu(text, 0);
    } else if (text == '15000') {
      cost_calu(text, 1);
    } else if (text == '20000') {
      cost_calu(text, 2);
    } else if (text == '25000') {
      cost_calu(text, 3);
    } 
  });
});

function cost_calu(text, num){
  $('.user-number span').text(text+' ');
  $('.cost-number1 span').text(parseInt(text)*cost_base[num]);
  $('.cost-number2 span').text(parseInt(text)*cost_normal[num]);
}