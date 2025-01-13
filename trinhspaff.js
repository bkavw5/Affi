/* <![CDATA[ */
function Set_Cookie(a,b,c,e,f,g){
  var d = new Date;
  d.setTime(d.getTime());
  d = new Date(d.getTime() + c);
  document.cookie = a + "=" + escape(b) + (c ? ";expires=" + d.toGMTString() : "") + (e ? ";path=" + e : "") + (f ? ";domain=" + f : "") + (g ? ";secure" : "")
}

function Get_Cookie(a){
  var b = document.cookie.indexOf(a + "="),
      c = b + a.length + 1;
  if (!b && a != document.cookie.substring(0, a.length) || -1 == b)
    return null;
  a = document.cookie.indexOf(";", c);
  -1 == a && (a = document.cookie.length);
  return unescape(document.cookie.substring(c, a))
}

function Delete_Cookie(a,b,c){
  Get_Cookie(a) && (document.cookie = a + "=" + (b ? ";path=" + b : "") + (c ? ";domain=" + c : "") + ";expires=Mon, 11-November-2020 00:00:01 GMT")
}

function popunder(){
  null == Get_Cookie("cucre") && (
    Set_Cookie("cucre", "cucre Popunder", "1", "/", "", ""),
    pop = window.open("https://s.shopee.vn/2AzBGedvdZ", "windowcucre"),
    pop.blur(),
    window.focus()
  )
}

function addEvent(a, b, c){
  a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener ? a.addEventListener(b, c, !0) : a["on" + b] = c
}

addEvent(window, "load", function(){
  addEvent(document.body, "click", function(){
    popunder()
  })
});
/* ]]> */
