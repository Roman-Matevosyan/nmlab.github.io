$(document).ready( function(){
	// smooth scroll
	$( document ).ready(function() {
		$('.navbar a').on('click', function(event) {
			if(this.hash !== ''){
				event.preventDefault();
				const hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 580);
				$('.menu-wrap .toggler').click();
			}
		});
	});

	// Dropdown flag-menu _ hide-show 
	$('.flag-dropdown-btn').click( function(event){
	    event.stopPropagation();
	    $('.flag-dropdown-menu').toggle();
	});
	$(document).click( function(){
	    $('.flag-dropdown-menu').hide();
	});

	// Animation of info pages text blocks 
	document.querySelector('html').classList.remove('no-js');
	if (!window.Cypress) {
	    const scrollCounter = document.querySelector('.js-scroll-counter');

	    AOS.init({
	        mirror: true
	    });

	    document.addEventListener('aos:in', function(e) {
	        console.log('in!', e.detail);
	    });

	    window.addEventListener('scroll', function() {
	        scrollCounter.innerHTML = window.pageYOffset;
	    });
	}

});

changeable_text = $('.changeable');

const text_armenian = [
	'Պորտֆոլիո',
	'Գլխավոր',
	'Մեր մասին',
	'Ծառայություններ',
	'Պորտֆոլիո',
	'Կապ',
	'Վեբ Կայքերի Պատրաստում',
	'Ոչ միայն դուք եք մեզ ընտրում, այլ նաև մենք Ձեզ: Մենք ընտրում ենք միայն ամբիցիոզ և նպատակային պրոյեկտները, որպեսզի միասին ուրախանանք ընդհանուր ձեռբերումների համար:',
	'Վեբ Ծրագրավորում',
	'Դիզայն',
	'IT Աութսորսինգ',
	'Աուդիտ',
	'Գովազդ',
	'Թվային Մարքեթինգ',
	'Կայքերի ստեղծումը հանդիսանում է մեր ընկերության աշխատանքի առանցքային առանձնահատկությունը: 30-ից ավելի ավարտված նախագծեր և մշակումներ իրականացնող աշխատակիցների սեփական հաստիքակազմ: Մեր խնդիրը ինտերնետ-ռեսուրսների ստեղծումն է, վեբ-մշակման հետ կապված լուծումների հայտնաբերումը բիզնեսի ամենատարբեր ոլորտների համար: Մեզ հետ համագործակցող պատվիրատուների մեծ մասը, նման ծառայությունների կարիք ունենալիս, կրկին դիմում են մեզ: Մեր հիմնական նպատակը բացարձակապես ցանկացած տեսակի ծառայությունների մատուցումն է վեբ-տեխնոլոգիաների ոլորտում:',
	'Մեր Ծառայությունները',
	'Կայքերի մշակում, վերափոխում և վերակառուցում (կայքերի ռեդիզայն, ռեինժենիրինգ, զարգացում):',
	'Մեր դիզայներները և ծրագրավորողները աշխատում են ամերիկյան, ռուսական և եվրոպական մի շարք պրոյեկտների վրա և մենք վստահեցնում ենք, որ եվրոպական թրենդները մեզ են հասնում վայրկենական, այլ ոչ թե տարիների ընթացքում...',
	'Կայքի հիմնական նպատակն է կարճ ժամանակում այցելուին տալ մաքսիմում ինֆորմացիա:',
	'Հաճախորդը չպետք է ժամանակ կորցնի կառավարման էլեմենտները փնտրելու վրա, դա կարող է կայքից հիասթափվելու պատճառ դառնալ: Մեր կողմից ստեղծված կայքի դիզայնը մտածված է և ծառայում է այցելուի հարմարավետությանը:',
	'Ցանկացած բարդությամբ վեբ կայքեր (բիզնես, գրասենյակային, անձնական, գովազդային, տուրիստական և այլ թեմաներով)...',
	'Աշխատանքները կատարում ենք սեղմ և սահմանված ժամկետներում, մատչելի գներով, յուրաքանչյուր պատվիրատուին ցուցաբերում ենք առանձնահատուկ մոտեցում, նախնական տալիս ենք պատվիրատուի պահանջներին բավարարող մի քանի տարբերակով մեր դիզայներների կողմից մշակած էսքիզներ...',
	'Կայքերի, ինտերնետային բիզնեսի ծրագրերի պատրաստում և առցանց-խանութների մշակում զրոյից:',
	'Մեր առաջարկը նրանց համար է ովքեր ցանկանում են ունենալ որակյալ կայք և առանց մեր մասնագետների օգնությամբ կառավարել կայքը, չկատարելով մեծ ներդրումներ:',
	'Տեղեկատվական այս դարում անհնար է պատկերացնել բիզնեսի մի ոլորտ, որը կարող է շահավետ աշխատել առանց համացանցում իր այցեքարտն ունենալու:',
	'Գեղեցիկ և խելացի պատրաստված վեբ կայքը կօգնի ընդլայնել Ձեր բիզնեսը, ձեռք բերել նոր հաճախորդներ, ներկայացնել արտադրանքը համայն աշխարհին:',
	'Եթե պատվիրատուն կայքերից հետադարձ կապ և կապիտալի վերադարձ է տեսնում, ապա՝ համակարգայնորեն զարգացնում է իր նախագիծը:',
	'Մեզ մոտ կայքերի պատրաստումը ենթադրում է մի քանի կարևոր առանձին ծառայություններ, որոնք կայքերի ծրագրավորման հասկացության մեջ չեն մտնում, բայց մեծ նշանակություն ունեն համացանցում բիզնեսի առաջխաղացման համար...',
	'Պորտֆոլիո',
	'Ընկերությունն իր հաճախորդներին է առաջարկում վեբ-ընկերության համալիր ծառայություններ առանց միջնորդների (և ֆրիլանսերների)՝ կայքերի պատրաստում և առաջխաղացում, լենդինգների  առցանց-խանութների, օնլայն բիզնեսի ծրագրերի և CRM համակարգի մշակում։ Կայքերի պատվիրատուները մեզ մոտ ստանում են ոչ միայն հեղինակային դիզայն, մասնագիտացված ծրագրավորում, դոմենի գրանցում և հոսթինգ, այլև ռեսուրսի անվճար համալրում, որոնողական օպտիմալացում, առաջնային առաջխաղացում, տեխնիկական սպասարկում, կայքի կառավարման ուսուցում, կոնտեքստային գովազդի կարգավորումներ և ուղեկցում։',
	'Դիտել կատարված աշխատանքը',
	'Դիտել',
	'Դիտել կատարված աշխատանքը',
	'Դիտել',
	'Դիտել',
	'Դիտել',
	'Դիտել կատարված աշխատանքը',
	'Դիտել կատարված աշխատանքը',
	'Ինչու՞ աշխատել մեզ հետ',
	'Միայն ամբիցիոզ պրոեյկտներ',
	'24/7 սպասարկում',
	'Ինդիվիդուալ մոտեցում',
	'Նորարար տեխնոլոգիաների կիրառում',
	'Անվճար խորհրդատվություն',
	'Անվճար աուդիտ և հաշվետվություն',
	'Ձեր պրոյեկտը դա մեր հպարտությունն է և հայելին',
	'Սպասարկման բարձր մակարդակ',
	'Մենք միշտ կապի մեջ ենք',
	'ք. Երևան, Կորյունի 19Ա.'
];

const text_in_english = [
	'Portfolio',
	'Home',
	'About us',
	'Services',
	'Portfolio',
	'Contact',
	'Web Site Design',
	'Not only do you choose us, but we also choose you. We choose only ambitious and targeted projects, in order to rejoice in common achievements.',
	'Web Site Design',
	'Design',
	'IT Outsourcing',
	'Audit',
	'Advertisement',
	'Digital Marketing',
	'Creating websites is our business key feature. More than 30 completed projects and development own staff of implementing staff. Our task: is the creation of internet resources, web development solutions discovering different areas of business. Most of the customers we work with, like that When you need services, they turn to us again. Our main goal is absolutely any kind is a service provider in the field of web technologies.',
	'Our Services',
	'Website development, redesign, and redesign (website redesign, reengineering, development).',
	'Our designers and developers work for American, on a number of Russian and European projects and we do We assure you that European trends reach us instantly, not over the years ...',
	'The main purpose of the site is to give the visitor a short time maximum information:',
	'The customer should not waste time on the search for management elements, it can be from the site become a cause for disappointment. Website created by us The design is thoughtful and serves the comfort of the visitor.',
	'Websites of any complexity (business, office, personal, advertising, tourism, and other topics) ...',
	'We do the work in a tight and defined timeframe at affordable prices, we offer a unique approach to each client, We give you several options in advance that meet our client\'s requirements sketches designed by designers ...',
	'Creating websites, internet business plans and developing online stores from scratch.',
	'Our offer is for those who want a quality website without us Manage the site with the help of specialists without making major investments.',
	'In this information age, it is impossible to imagine a business that can work profitably without having your business card online.',
	'A beautiful and cleverly designed web site will help you grow your business, get new customers, present the product to the whole world.',
	'If the customer sees a return on their site and a return on their capital, then systematically develops his project.',
	'Our site development involves several important separate services, which are not included in the concept of web development, but they are important for promoting a business on the Internet ...',
	'Portfolio',
	'The company offers complex services to its clients without intermediaries (and freelancers) - website development and promotion, landing development of online stores, online business applications, and CRM systems. Customers of websites receive not only author design, specialized programming, domain registration and hosting, as well as free resources, search engine optimization, primary promotion, maintenance, site management training, contextual advertising settings, and guidance.',
	'View completed work',
	'View',
	'View completed work',
	'View',
	'View',
	'View',
	'View completed work',
	'View completed work',
	'Why work with us?',
	'Only ambitious projects',
	'24/7 service',
	'Individual approach',
	'Applying innovative technologies',
	'Free consultation',
	'Free audit and reporting',
	'Your project is our pride and mirror',
	'High level of service',
	'We are always in touch',
	'c. Yerevan, 19 Koryun str.'
];


(function () {
	let flagChange = 'armenian_language';

	if (JSON.parse(localStorage.getItem("change_language_key"))){
		let change_language_key = JSON.parse(localStorage.getItem("change_language_key"));
		flagChange = change_language_key.editableTextField;
	}

	saveLocalStorage();

	$('.flag-image-block').click(function () {
		if (flagChange === 'armenian_language') {
			flagChange = 'english_language';
			saveLocalStorage();
		} else if (flagChange === 'english_language') {
			flagChange = 'armenian_language';
			saveLocalStorage();
		}
	});

	function saveLocalStorage () {
		if (flagChange === 'english_language') {
			$(".flag-dropdown-btn img").attr("src", "./IMAGES/flag-images/Flag_of_the_United_States.jpg");
			$('.flag-image-block img').attr("src", "./IMAGES/flag-images/Flag_of_Armenia.jpg");
			for (let i = 0; i < text_armenian.length; i++) {
				changeable_text[i].innerText = text_in_english[i];
			}
		} else if (flagChange === 'armenian_language') {
			
			$(".flag-dropdown-btn img").attr("src", "./IMAGES/flag-images/Flag_of_Armenia.jpg");
			$('.flag-image-block img').attr("src", "./IMAGES/flag-images/Flag_of_the_United_States.jpg");
			for (let i = 0; i < text_armenian.length; i++) {
				changeable_text[i].innerText = text_armenian[i];
			}
		}

		let obj = {
			editableTextField: flagChange
		};

		let serialObj = JSON.stringify(obj);
		localStorage.setItem("change_language_key", serialObj);
		let returnObj = JSON.parse(localStorage.getItem("change_language_key"));
	}
})();



