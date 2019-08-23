console.log("welcome to linebot");
var ele = document.getElementById("linebot-login");
if (ele) {
  if (__st.cid) {
    ele.href += "?ext=" + __st.cid;
  } else {
    ele.href = "javascript:alert('ログインしてください');";
  }
}
