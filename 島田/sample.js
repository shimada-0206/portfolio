$("button").click(function() {
  // もしh1に "red" クラスがついていたら（＝すでに変わっている状態なら）
  if ($("h1").hasClass("red")) {
    // 元に戻す
    $("h1").html("ブブブ、ブブブリブブ");
    $("h1").removeClass("red");
  } 
  // そうでなければ（＝元の状態なら）
  else {
    // 変える
    $("h1").html("マムロのたかおちゃんの音かぁ");
    $("h1").addClass("red");
  }
});