$(function() {
  // 変更前の元のテキストを保存しておく
  var originalText = $("h1").html();
  var isChanged = false; // 状態を追跡するフラグ

  $("button").click(function() {
    if (isChanged) {
      // 変更されている場合（2回目以降のクリック）
      // テキストを元に戻す
      $("h1").html(originalText);
      // CSSクラス 'red' を削除する
      $("h1").removeClass("red");
      isChanged = false;
    } else {
      // 変更されていない場合（1回目のクリック）
      // テキストを変更する
      $("h1").html("そなん");
      // CSSクラス 'red' を追加する
      $("h1").addClass("red");
      isChanged = true;
    }
  });
});