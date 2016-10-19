$(document).ready(function(){

  ///////////////////////
 //diferenciar background con text
  var leftText = 0, leftBack =0, rightText = 0, rightBack = 0;

	$("#leftTagText").on('click', function(e){
		e.preventDefault();
		leftText = 1;
		leftBack = 0;
    rightText = 0;
    rightBack = 0;
    $("#leftTagText").css('background-color', '#878f8f');
    $("#leftTagBack").css('background-color', '#c1cdcd');
    $("#rightTagText").css('background-color', '#c1cdcd');
    $("#rightTagBack").css('background-color', '#c1cdcd');
	});

  $("#leftTagBack").on('click', function(e){
		e.preventDefault();
		leftText = 0;
    leftBack = 1;
    rightText = 0;
    rightBack = 0;
    $("#leftTagText").css('background-color', '#c1cdcd');
    $("#leftTagBack").css('background-color', '#878f8f');
    $("#rightTagText").css('background-color', '#c1cdcd');
    $("#rightTagBack").css('background-color', '#c1cdcd');
	});

  $("#rightTagText").on('click', function(e){
		e.preventDefault();
    leftText = 0;
    leftBack = 0;
    rightText = 1;
		rightBack = 0;
    $("#leftTagText").css('background-color', '#c1cdcd');
    $("#leftTagBack").css('background-color', '#c1cdcd');
    $("#rightTagText").css('background-color', '#878f8f');
    $("#rightTagBack").css('background-color', '#c1cdcd');
	});

  $("#rightTagBack").on('click', function(e){
		e.preventDefault();
    leftText = 0;
    leftBack = 0;
		rightText = 0;
    rightBack = 1;
    $("#leftTagText").css('background-color', '#c1cdcd');
    $("#leftTagBack").css('background-color', '#c1cdcd');
    $("#rightTagText").css('background-color', '#c1cdcd');
    $("#rightTagBack").css('background-color', '#878f8f');
	});
 //diferenciar background con text
///////////////////////


    var $bgL = $('#leftImg'),
        $bgR = $('#rightImg'),
        elbounds = {
            w: parseInt($bgL.width()),
            h: parseInt($bgL.height())
        },
        elboundsR ={
            w: parseInt($bgR.width()),
            h: parseInt($bgR.height())
        },
        bounds = {w: 4898 - elbounds.w, h: 3220 - elbounds.h},
        boundsR ={w: 4898 - elboundsR.w, h: 3220 - elboundsR.h},
        origin = {x: 0, y: 0},
        originR = {x: 0, y: 0},
        start = {x: 0, y: 0},
        startR = {x: 0, y: 0},
        startDiv = {x: 0, y: 0},
        originDiv = {x: 0, y: 0},
        startDivR = {x: 0, y: 0},
        originDivR = {x: 0, y: 0},
        movecontinue = false;

    function move (e){
        var inbounds = {x: false, y: false},
            offset = {
                x: start.x - (origin.x - e.clientX),
                y: start.y - (origin.y - e.clientY)
            };

        inbounds.x = offset.x < 0 && (offset.x * -1) < bounds.w;
        inbounds.y = offset.y < 0 && (offset.y * -1) < bounds.h;
        if (movecontinue) {
            start.x = offset.x;
            start.y = offset.y;

            $(this).css('background-position', start.x + 'px ' + start.y + 'px');
        }

        origin.x = e.clientX;
        origin.y = e.clientY;

        e.stopPropagation();
        return false;
    }

    function moveR (e){
        var inboundsR = {x: false, y: false},
            offset = {
                x: startR.x - (originR.x - e.clientX),
                y: startR.y - (originR.y - e.clientY)
            };

        inboundsR.x = offset.x < 0 && (offset.x * -1) < boundsR.w;
        inboundsR.y = offset.y < 0 && (offset.y * -1) < boundsR.h;
        if (movecontinue) {
            startR.x = offset.x;
            startR.y = offset.y;

            $(this).css('background-position', startR.x + 'px ' + startR.y + 'px');
        }

        originR.x = e.clientX;
        originR.y = e.clientY;

        e.stopPropagation();
        return false;
    }

    function movediv (e){
      var inbounds = {x: false, y: false},
          offset = {
              x: startDiv.x - (originDiv.x - e.clientX),
              y: startDiv.y - (originDiv.y - e.clientY)
          };

      if (movecontinue ) {
          startDiv.x = offset.x;
          startDiv.y = offset.y;

          $(this).css('left', startDiv.x + 'px');
          $(this).css('top', startDiv.y + 'px' );
      }

      originDiv.x = e.clientX;
      originDiv.y = e.clientY;

      e.stopPropagation();
      return false;
    }

    function movedivR (e){
      var inboundsR = {x: false, y: false},
          offset = {
              x: startDivR.x - (originDivR.x - e.clientX),
              y: startDivR.y - (originDivR.y - e.clientY)
          };

      if (movecontinue ) {
          startDivR.x = offset.x;
          startDivR.y = offset.y;

          $(this).css('left', startDivR.x + 'px');
          $(this).css('top', startDivR.y + 'px' );
      }

      originDivR.x = e.clientX;
      originDivR.y = e.clientY;

      e.stopPropagation();
      return false;
    }

    /*function handleLeft (e){
        movecontinue = false;
        $bgL.unbind('mousemove', move);
        $(".textEdit").unbind('mousemove', move);
        if (e.type == 'mousedown') {
          if(leftBack==1){
            origin.x = e.clientX;
            origin.y = e.clientY;
            movecontinue = true;
            $bgL.bind('mousemove', move);
         }else if (leftText==1) {
            originDiv.x = e.clientX;
            originDiv.y = e.clientY;
            movecontinue = true;
            $(".textEdit").bind('mousemove', movediv);

          }
        } else {
            $('.textEdit').focus();
        }

        e.stopPropagation();
        return false;
    }*/

    function handle (e){
        movecontinue = false;
        $bgL.unbind('mousemove', move);
        $bgR.unbind('mousemove', moveR);
        $("#contentLeft").unbind('mousemove', movediv);
        $("#contentRight").unbind('mousemove', movedivR);

        if (e.type == 'mousedown') {
          if(leftBack==1){
            origin.x = e.clientX;
            origin.y = e.clientY;
            movecontinue = true;
            $bgL.bind('mousemove', move);
         }else if (leftText==1) {
            originDiv.x = e.clientX;
            originDiv.y = e.clientY;
            movecontinue = true;
            $("#contentLeft").bind('mousemove', movediv);

          }else if (rightBack==1){
            originR.x = e.clientX;
            originR.y = e.clientY;
            movecontinue = true;
            $bgR.bind('mousemove', moveR);
          }else if (rightText==1) {
            originDivR.x = e.clientX;
            originDivR.y = e.clientY;
            movecontinue = true;
            $('#contentRight').bind('mousemove', movedivR);

          }
        } else {

          if(leftBack==1 || leftText==1){
            $('#contentLeft').focus();
          }else if (rightBack==1 || rightText==1){
            $('#contentRight').focus();
          }

        }

        e.stopPropagation();
        return false;
    }

    function reset (){
        start = {x: 0, y: 0};
        $(this).css('backgroundPosition', '0 0');
    }

    $bgL.bind('mousedown mouseup mouseleave', handle);
    $bgL.bind('dblclick', reset);
    $("#contentLeft").bind('mousedown mouseup mouseleave', handle);

    $bgR.bind('mousedown mouseup mouseleave', handle);
    $bgR.bind('dbclick', reset);
    $("#contentRight").bind('mousedown mouseup mouseleave', handle);
});
