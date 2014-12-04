function getNav(url) {
  var response = UrlFetchApp.fetch(url).getContentText();  
  var regex = new RegExp('(<span class="bd30tp">)[0-9.]*(</span>)',"gi");
  var priceContainer = regex.exec(response)[0];
  var price = priceContainer.split('>')[1].split('<')[0];
  return price;
}
