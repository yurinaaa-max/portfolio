$(function () {





  //タイムライン縦線
  function ScrollTimelineAnime(){
    $('.timeline li').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var startPoint = 400; 
      if (scroll >= elemPos - windowHeight-startPoint){				
        var H = $(this).outerHeight(true)
        var percent = (scroll+startPoint - elemPos) / (H/2) *100;
  
        if(percent  > 100){
          percent  = 100;
        }
        $(this).children('.border-line').css({
          height: percent + "%",
        });
      } 
    });
  }
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).on('scroll', function(){
    ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
  });

  // CONTACT
  // 送信ボタンクリック時の処理
  $('#submit').on('click', function (event) {
  // formタグによる送信を拒否
  event.preventDefault();

  // 入力チェックをした結果をresultに格納
  let result = inputCheck();
  // エラー判定とメッセージを取得
  let error = result.error;
  let message = result.message;

  // エラーが無かったらフォームを送信する
  if (error == false) {
    alert('お問い合わせを送信しました。')
    // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
  } else {
    // エラーメッセージを表示する
      alert(message);
  }
  });
  // フォーカスが外れたとき（blur）にフォームの入力チェックをする
  $('#name').blur(function () {
  inputCheck();
  });
  $('#email').blur(function () {
    inputCheck();
  });
  $('#message').blur(function () {
    inputCheck();
  });
  // お問い合わせフォームの入力チェック
  function inputCheck() {
    // エラーのチェック結果
    let result;

    // エラーメッセージのテキスト
    let message = '';

    // エラーがなければfalse、エラーがあればtrue
    let error = false;
  // お名前のチェック
  if ($('#name').val() == '') {
    // エラーあり
    $('#name').css('background-color', '#fce3e3');
    error = true;
    message += 'お名前を入力してください。\n';
  } else {
    // エラーなし
    $('#name').css('background-color', '#fcfcfc');
  }
  // お問い合わせのチェック
  if ($('#message').val() == '') {
    // エラーあり
    $('#message').css('background-color', '#fce3e3');
    error = true;
    message += 'お問い合わせ内容を入力してください。\n';
  } else {
    // エラーなし
    $('#message').css('background-color', '#fcfcfc');
  }
  // メールアドレスのチェック
  if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
    // エラーあり
    $('#email').css('background-color', '#fce3e3');
    error = true;
    message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
  } else {
    // エラーなし
    $('#email').css('background-color', '#fcfcfc');
  }
  // オブジェクトでエラー判定とメッセージを返す
  result = {
    error: error,
    message: message
  }

  // 戻り値としてエラーがあるかどうかを返す
  return result;
  }









  // ABOUTリンクボタン
  $(window).scroll(function(){
    if($(this).scrollTop()> 2000){
      $('#about-btn').fadeIn();
    } else {
      $('#about-btn').fadeOut();
    }
  });

  // 経歴テキストフェードイン
  $('.list-text').on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });

});

//drawer追記//
$(function() {
  $('.drawer-toggle ').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    $('.header').toggleClass('is-active');
    $('.gnav').toggleClass('is-active');
    if($('.drawer-toggle ').hasClass('is-active')){
      $('.gnav a').on('click',function(){
        $('.gnav').removeClass('is-active');
        $('.header').removeClass('is-active');
        $('.drawer-toggle ').removeClass('is-active');
          $('.drawer').removeClass('is-active');
      });
    return false;
    }
   });

    });