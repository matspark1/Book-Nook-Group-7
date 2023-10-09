import { getPage } from "./model.js";

function initListeners() {
  $(window).on("hashchange", getPage);
  getPage();
  modalDefault();
}

function modalDefault(){
  $("#modal-inject .modal-wrapper2 .modal-content .login-button").on(
    "click",
    (e) => {
      e.preventDefault();
      $("#modal-inject").toggle();
    }
  );
}

function modalToggle() {
  $(document).on("submit", "#loginForm", (e) => {
    e.preventDefault();
    $("#modal-inject").toggle();
    $("#modal-inject").css("display", "flex");
  });
  $(document).on("submit", "#signupForm", (e) => {
    e.preventDefault();
    $("#modal-inject").toggle();
    $("#modal-inject").css("display", "flex");
  });
  $(document).on("click", ".close", (e) => {
    e.preventDefault();
    $("#modal-inject").toggle();
  }); 
}


function mobileNav(){
    $(window).on("resize", (e) => {
        if ($(window).width() > 768) {
          $(".site-wrapper nav .links").removeClass("hide");
          $(".site-wrapper nav .links").removeClass("mobile-nav");
          $(".site-wrapper nav .links").addClass("show");
        } else {
          $(".site-wrapper nav .links").addClass("hide");
          $(".site-wrapper nav .links").removeClass("show");
        }
      });
    
      let navShow = false;
      $(".site-wrapper nav .menu-mobile").on("click", (e) => {
        if (navShow) {
          $(".site-wrapper nav .links").removeClass("mobile-nav");
          $(".site-wrapper nav .links").addClass("hide");
          navShow = false;
        } else {
          $(".site-wrapper nav .links").addClass("mobile-nav");
          $(".site-wrapper nav .links").removeClass("hide");
          navShow = true;
        }
      });
    
      $(".site-wrapper nav .links a").on("click", (e) => {
        $(".site-wrapper nav .links").removeClass("mobile-nav");
        $(".site-wrapper nav .links").addClass("hide");
      })
}

$(document).ready(function () {
  initListeners();
  modalToggle();
  mobileNav();
});
