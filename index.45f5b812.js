!function(){var e,o;e=document.querySelector("[data-menu-button]"),o=document.querySelector("[data-menu]"),e.addEventListener("click",(function(){var t="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!t),o.classList.toggle("is-open")})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-mob-open]"),closeModalBtn:document.querySelector("[data-modal-mob-close]"),modal:document.querySelector("[data-modal-mob]")};function o(){document.body.classList.toggle("data-modal-mob-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-header-open]"),closeModalBtn:document.querySelector("[data-header-close]"),modal:document.querySelector("[data-header]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-product-cream-open]"),closeModalBtn:document.querySelector("[data-product-cream-close]"),modal:document.querySelector("[data-product]")};function o(){document.body.classList.toggle("data-cream-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-product-coffee-open]"),closeModalBtn:document.querySelector("[data-product-coffee-close]"),modal:document.querySelector("[data-product]")};function o(){document.body.classList.toggle("product-coffee-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-product-milkshake-open]"),closeModalBtn:document.querySelector("[data-product-milkshake-close]"),modal:document.querySelector("[data-product-milkshake]")};function o(){document.body.classList.toggle("data-product-milkshake-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-about-open]"),closeModalBtn:document.querySelector("[data-about-close]"),modal:document.querySelector("[data-about]")};function o(){document.body.classList.toggle("data-about-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}();new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0}})}();
//# sourceMappingURL=index.45f5b812.js.map