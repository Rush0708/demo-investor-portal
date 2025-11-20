export function selectSetup() {
  //(function () {
  //  'use strict';
  //  window.addEventListener('load', function () {
  //    // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //    var forms = document.getElementsByClassName('needs-validation');
  //    // Loop over them and prevent submission
  //    var validation = Array.prototype.filter.call(forms, function (form) {
  //      form.addEventListener('submit', function (event) {
  //        if (form.checkValidity() === false) {
  //          event.preventDefault();
  //          event.stopPropagation();
  //        }
  //        form.classList.add('was-validated');
  //        var $dte = $('.custom-select');
  //        $('.invalid-feedback').is(':visible') ? $dte.addClass('appended') : $dte.removeClass('appended')
  //      }, false);
  //    });
  //  }, false);
  //})();
  
  //$(function () {
  //  $('[data-toggle="popover"]').popover()
  //})
  //$('.popover-dismiss').popover({
  //  trigger: 'focus'
  //})

  //var x, i, j, l, ll, selElmnt, a, b, c;
  ///* custom-select */
  //x = document.getElementsByClassName("custom-select");
  //l = x.length;
  //for (i = 0; i < l; i++) {
  //  selElmnt = x[i].getElementsByTagName("select")[0];
  //  ll = selElmnt.length;
  //  /* div selected item */
  //  a = document.createElement("DIV");
  //  a.setAttribute("class", "select-selected");
  //  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  //  x[i].appendChild(a);
  //  /* div container for option list */
  //  b = document.createElement("DIV");
  //  b.setAttribute("class", "select-items select-hide");
  //  for (j = 1; j < ll; j++) {
  //    /* select element - append new DIV as option item */
  //    c = document.createElement("DIV");
  //    c.innerHTML = selElmnt.options[j].innerHTML;
  //    c.addEventListener("click", function (e) {
  //      /* update the original select and the selected item: */
  //      var y, i, k, s, h, sl, yl;
  //      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
  //      sl = s.length;
  //      h = this.parentNode.previousSibling;
  //      for (i = 0; i < sl; i++) {
  //        if (s.options[i].innerHTML == this.innerHTML) {
  //          s.selectedIndex = i;
  //          h.innerHTML = this.innerHTML;
  //          y = this.parentNode.getElementsByClassName("same-as-selected");
  //          yl = y.length;
  //          for (k = 0; k < yl; k++) {
  //            y[k].removeAttribute("class");
  //          }
  //          this.setAttribute("class", "same-as-selected");
  //          break;
  //        }
  //      }
  //      h.click();
  //    });
  //    b.appendChild(c);
  //  }
  //  x[i].appendChild(b);
  //  a.addEventListener("click", function (e) {
  //    /* select box is clicked, close any other select boxes open/close the current select box: */
  //    e.stopPropagation();
  //    closeAllSelect(this);
  //    this.nextSibling.classList.toggle("select-hide");
  //    this.classList.toggle("select-arrow-active");
  //  });
  //}

  function closeAllSelect(elmnt) {
    /* close all select boxes in the document except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* outside click - close all select boxes */
  document.addEventListener("click", closeAllSelect);
}
