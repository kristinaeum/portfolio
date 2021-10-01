window.onload=function(){
    //language
    const html = document.querySelector('html');
	const lang = html.querySelector('ul.lang');
	const liActive = lang.querySelector('ul.lang > li.active');

	liActive.addEventListener('click', () => {
		lang.classList.toggle('active');
	});

    //mobileMenu
    const btnMenuMo = html.querySelector('.btn_menu_mo');
	const menuMoArea = html.querySelector('.menu_mo_area');

	btnMenuMo.addEventListener('click', () => {
		html.classList.toggle('hidden');
		btnMenuMo.classList.toggle('active');
		menuMoArea.classList.toggle('active');
	});

    //swiper
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".newsSwiper", {
        slidesPerView: 1.,
        spaceBetween: 10,
        breakpoints: {
            760:{
                slidesPerView: 1.5,
            spaceBetween: 15,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

    var swiper = new Swiper(".global_slide .swiper-slide", {
        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        }
    });
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
    });

    //sitemap
    const sitemap = document.querySelector('.sitemap');
    const btnSitemap = sitemap.querySelector('.btn_map');

    btnSitemap.addEventListener('click', () => {
        sitemap.classList.toggle('active');
    });


    //family_site
    const drop=document.querySelector('.drop');
    const btn_family=drop.querySelector('.btn_family');

    btn_family.addEventListener('click',()=>{
        drop.classList.toggle('active');
    });


    //quick_menu
    

}   