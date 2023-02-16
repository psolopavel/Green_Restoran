document.addEventListener('DOMContentLoaded', function () {
   document.querySelector('.new-select').addEventListener('click', e => {
      document.querySelector('.header-form__select-conteiner').classList.toggle('_active')
      document.querySelector('.header-center__form').classList.toggle('_active')
   })

   document.querySelectorAll('.header-top__link').forEach(el => {
      el.addEventListener('mouseenter', function () {
         let trX = el.getBoundingClientRect().left
         document.querySelector('.header__line').style.cssText = `
            height:1px;
            opacity:1;
            transform: translate(${trX - 130}px, 1px);
            width:${el.offsetWidth}px;
         `
      })
      el.addEventListener('mouseout', function () {
         let trX = el.getBoundingClientRect().left
         document.querySelector('.header__line').style.cssText = `
         transform: translate(${trX - 130}px, 1px);
            height:0px;
            opacity:0;
            width:${el.offsetWidth}px;
         `
      })
   });
   document.querySelector('.header-center__burger').addEventListener('click', e => {
      document.querySelector('.header-center__burger').classList.toggle('_active')
      document.querySelector('.burger').classList.toggle('_active')
      document.body.classList.toggle('_hidden')
   })
   document.querySelector('.burger__lines').addEventListener('click', e => {
      document.querySelector('.header-center__burger').classList.remove('_active')
      document.querySelector('.burger').classList.remove('_active')
      document.body.classList.remove('_hidden')
   })
   document.addEventListener('click', function (event) {
      if (!event.target.closest('.burger') && !event.target.closest('.header-center__burger')) {
         document.querySelector('.burger').classList.remove('_active')
         document.querySelector('.header-center__burger').classList.remove('_active')
         document.body.classList.remove('_hidden')
      }
   })
   const burder_parent = document.querySelectorAll('.header-bottom__link')
   const sub_block = document.querySelectorAll('.header-sub-block')
   let y = 0
   let j = 0
   burder_parent.forEach(el => {
      y += 1
      if (y <= document.querySelectorAll('.header-sub-block').length) {
         el.setAttribute('data-parent', `${y}`)
      }
   });
   sub_block.forEach(el => {
      j++
      el.setAttribute('data-submenu', `${j}`)
      el.querySelectorAll('.header-sub-block__images').forEach(e => {
         e.setAttribute('data-da', '.burger__images,669')
      });
   });
   let imagesArr = []
   document.querySelectorAll('.header-sub-block__image img').forEach(el => {
      imagesArr.push(el.getAttribute('src'))
   });
   const makeUniq = (arr) => [...new Set(arr)];
   imagesArr = makeUniq(imagesArr)
   const burger_swiper = document.querySelector('.burger-images__swipper');
   imagesArr.forEach(it => {
      burger_swiper.insertAdjacentHTML(
         'afterbegin',
         `
         <div class='burger-images__slide swiper-slide'>
            <img src='${it}' alt='Картинка'>
         </div>
         `
      )
   })
   document.querySelectorAll('.header-bottom__item [data-parent]').forEach(elp => {
      elp.insertAdjacentHTML(
         'afterend',
         `  <div class="header-bottom__sub-items" data-spoler-content>

            </div>
         `
      )
   });
   document.querySelectorAll('.header-bottom__item').forEach(element => {
      let par = element.querySelector('.header-bottom__link').getAttribute('data-parent')
      document.querySelectorAll(`[data-submenu="${par}"]`).forEach(pel => {
         pel.querySelectorAll('.header-sub-block__link').forEach(lel => {
            element.querySelector('.header-bottom__sub-items').insertAdjacentHTML(
               'afterbegin',
               `
               <a href="" class="header-bottom__sub-item">${lel.innerHTML}</a>
               `
            )
         });
      });
   });
   document.querySelectorAll('.header-bottom__link').forEach(el => {
      el.addEventListener('click', function () {
         for (const it of document.querySelectorAll('.header-bottom__sub-items')) {
            if (it !== el.nextElementSibling) {
               it.classList.remove('_active')
            }
         }
         el.nextElementSibling.classList.toggle('_active')
      })
   });
})