$(function() {
  $("button").click(function() {
    
    // 現在のH1の状態をチェック
    if ($("h1").hasClass("red")) {
      
      // 1. 画像をゆっくり消す (1秒)
      $("#taka-photo").fadeOut(1000); 

      // 2. 文字とクラスを元に戻す
      $("h1").html("ブブブ、ブブブリブブ");
      $("h1").removeClass("red");

    } else {

      // 1. 画像をゆっくり出す (2秒)
      $("#taka-photo").fadeIn(2000); 

      // 2. 文字を変えて赤くする
      $("h1").html("マムロのたかおちゃんの音かぁ");
      $("h1").addClass("red");
    }

  });
});