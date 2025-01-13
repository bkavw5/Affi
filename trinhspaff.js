// Function to set a cookie
function Set_Cookie(a, b, c, e, f, g) {
  var d = new Date;
  d.setTime(d.getTime());
  d = new Date(d.getTime() + c);
  document.cookie = a + "=" + escape(b) + (c ? ";expires=" + d.toGMTString() : "") + (e ? ";path=" + e : "") + (f ? ";domain=" + f : "") + (g ? ";secure" : "");
}

// Function to get a cookie
function Get_Cookie(a) {
  var b = document.cookie.indexOf(a + "="),
      c = b + a.length + 1;
  if (!b && a != document.cookie.substring(0, a.length) || -1 == b)
    return null;
  a = document.cookie.indexOf(";", c);
  -1 == a && (a = document.cookie.length);
  return unescape(document.cookie.substring(c, a));
}

// Function to open Shopee link after a delay
function openShopee() {
  var lastClickTime = Get_Cookie('lastClickTime');
  var currentTime = new Date().getTime();
  
  // If the last click was over 20 minutes ago or no cookie exists
  if (!lastClickTime || (currentTime - lastClickTime >= 1200000)) {
    // Set a cookie with the current time to track when the last click happened
    Set_Cookie('lastClickTime', currentTime, 120, '/');
    
    // Open the Shopee link in a new tab
    window.open("https://s.shopee.vn/2AzBGedvdZ", "_blank");
  }
}

// Attach click event listener to the document
document.body.addEventListener("click", function () {
  openShopee();
});
