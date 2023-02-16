document.addEventListener('DOMContentLoaded', function () {
   const spoler_items = document.querySelectorAll('[data-spoler]')
   spoler_items.forEach(el => {
      el.style.cssText = `
         overflow: hidden;
      `
      let spoler_content = el.querySelector('[data-spoler-content]')
      let elD = spoler_content.offsetHeight
      spoler_content.style.cssText = `
         margin-top: -${elD}px
      `
      el.addEventListener('click', function () {
         for (const e of spoler_items) {
            if (e !== el) {
               e.classList.remove('_active')
            }
         }
         el.classList.toggle('_active')
      })
   });
}) 