var instance = new vidbg('.video', {
	mp4: 'video/world.mp4', // URL or relative path to MP4 video
	webm: 'video/world.webm', // URL or relative path to webm video
	poster: 'video/poster.jpg', // URL or relative path to fallback image
	overlay: false, // Boolean to display the overlay or not
}, {
	// Attributes
})

// var rellax = new Rellax('.rocket', {
// 	speed: 31,
// 	center: false,
// 	wrapper: null,
// 	round: true,
// 	vertical: true,
// 	horizontal: false
// });
var rellax = new Rellax('.rocket');
// if (document.body.clientWidth < 768) {
// 	rellax = { speed: 5 };
// }
// if (document.body.clientWidth < 960) {
// 	const speed = document.querySelector('.rocket');
// 	speed.setAttribute('data-rellax-speed="10"');
// }

if (document.body.clientWidth < 576) {
	// alert(!!!);
	rellax.destroy();
}
AOS.init();