export function getPage() {
    let hash = window.location.hash;
    let pageID = hash.replace("#", "");
  
    if (pageID != "") {
      $.get(`pages/${pageID}.html`, function (data) {
        $("#app-inject").html(data);
      });
    } else {
      $.get(`pages/home.html`, function (data) {
        $("#app-inject").html(data);
      });
    }
  }