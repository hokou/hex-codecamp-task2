
const cost_base = [0.06, 0.05, 0.04, 0.035]
const cost_normal = [0.16, 0.15, 0.14, 0.135]

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
  $('.cost-number1 span').text(parseInt(parseInt(text)*cost_base[num])+' ');
  $('.cost-number2 span').text(parseInt(parseInt(text)*cost_normal[num])+' ');
  $('.cost-number1 sub').text(' TWD');
  $('.cost-number2 sub').text(' TWD');
}