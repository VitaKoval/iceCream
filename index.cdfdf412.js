!function(){var e,t;e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),e.addEventListener("click",(function(){var o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open")})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-header-open]"),closeModalBtn:document.querySelector("[data-header-close]"),modal:document.querySelector("[data-header]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-product-cream-open]"),closeModalBtn:document.querySelector("[data-product-cream-close]"),modal:document.querySelector("[data-product]")};function t(){document.body.classList.toggle("data-cream-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-product-coffee-open]"),closeModalBtn:document.querySelector("[data-product-coffee-close]"),modal:document.querySelector("[data-product]")};function t(){document.body.classList.toggle("product-coffee-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-product-milkshake-open]"),closeModalBtn:document.querySelector("[data-product-milkshake-close]"),modal:document.querySelector("[data-product-milkshake]")};function t(){document.body.classList.toggle("data-product-milkshake-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}(),function(){var e={openModalBtn:document.querySelector("[data-about-open]"),closeModalBtn:document.querySelector("[data-about-close]"),modal:document.querySelector("[data-about]")};function t(){document.body.classList.toggle("data-about-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0}})}();
//# sourceMappingURL=index.cdfdf412.js.map
