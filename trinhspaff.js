// Function to set a cookie
function Set_Cookie(a, b, c, e, f, g) {
  var d = new Date();
  d.setTime(d.getTime());
  d = new Date(d.getTime() + c);
  document.cookie = a + "=" + escape(b) + (c ? ";expires=" + d.toGMTString() : "") + (e ? ";path=" + e : "") + (f ? ";domain=" + f : "") + (g ? ";secure" : "");
}

// Function to get a cookie value
function Get_Cookie(a) {
  var b = document.cookie.indexOf(a + "="),
      c = b + a.length + 1;
  if (!b && a != document.cookie.substring(0, a.length) || -1 == b) return null;
  a = document.cookie.indexOf(";", c);
  -1 == a && (a = document.cookie.length);
  return unescape(document.cookie.substring(c, a));
}

// Function to randomly select a Shopee link
function getRandomShopeeLink() {
  var links = [
    "https://s.shopee.vn/2AzBGedvdZ",
    "https://s.shopee.vn/4VJb58jLIX",
    "https://shopee.vn/affiliate-link-3",
    "https://shopee.vn/affiliate-link-4"
  ];
  var randomIndex = Math.floor(Math.random() * links.length);
  return links[randomIndex];
}

// Function to open Shopee link in a pop-up
function openShopeePopup() {
  var lastClickTime = Get_Cookie('lastClickTime');
  var currentTime = new Date().getTime();

  // If the last click was over 20 minutes ago or no cookie exists
  if (!lastClickTime || (currentTime - lastClickTime >= 1200000)) {
    // Set a cookie with the current time (20 minutes)
    Set_Cookie('lastClickTime', currentTime, 1200000, '/');

    // Open the Shopee pop-up
    var link = getRandomShopeeLink();
    var popup = window.open(link, "ShopeeAd", "width=800,height=600,scrollbars=yes,resizable=yes");
    
    // If pop-up is blocked, show an alert
    if (!popup) {
      alert("Pop-up blocked! Please allow pop-ups for this website.");
    }
  } else {
    console.log("Not enough time has passed. Please wait.");
  }
}

// Listen for any click event on the page
document.body.addEventListener("click", function () {
  openShopeePopup();
});
