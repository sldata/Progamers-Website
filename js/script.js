// adding listener when website is loaded
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')
	// adding background shadow on navigation when scroll is greater or equal 200px on scroll
	function addShadow() {
		if (window.scrollY >= 200) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	// removing navigation after clicking
	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

	window.addEventListener('scroll', addShadow)
})
