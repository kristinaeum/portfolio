window.onload=function(){
    const btnMenuMo = html.querySelector('.mo_btn');
	const menuMoArea = html.querySelector('.menu_mo');

	btnMenuMo.addEventListener('click', () => {
		html.classList.toggle('hidden');
		btnMenuMo.classList.toggle('active');
		menuMoArea.classList.toggle('active');
	});
    
    
}