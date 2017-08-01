
/*
	          COINFLIP
	----------------------------
	Desenvolvido em CoffeeScript

		Código: Fabiane Lima
 */

(function() {
  $(function() {
    var coin, coined, ctrl;
    coin = void 0;
    ctrl = [];
    coined = function() {
      var c;
      $('.coin').css({
        opacity: '1'
      });
      c = Math.floor(Math.random() * 2);
      if (coin === void 0) {
        coin = c;
      }
      if (ctrl.length === 0) {
        ctrl.push(coin);
      } else if (ctrl.length === 1) {
        if (coin === 0) {
          coin = 1;
        } else if (coin === 1) {
          coin = 0;
        }
        ctrl.push(coin);
      } else if (ctrl.length === 2) {
        ctrl = [];
        coin = void 0;
      }
      if (coin === 0) {
        $('.coin').html('1<br/><small>real</small>');
      }
      if (coin === 1) {
        return $('.coin').html('&#9787;');
      }
    };
    return $(document).on('click', '.start', function() {
      return coined();
    });
  });

}).call(this);
