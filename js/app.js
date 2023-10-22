const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./img/buttermilkPancakes.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Burger with French fries",
    category: "lunch",
    price: 13.99,
    img: "./img/dinerDouble.jpeg",
    desc: `With gooey, melty cheese on a double burger with browned and crusty bits, plus fresh, crunchy toppings and a soft, steamy bun served alongside golden fries `,
  },
  {
    id: 3,
    title: "Godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./img/godzillaMilkshake.jpeg",
    desc: `These milkshakes are thick, creamy, and so addictive that you’ll be trying to drink every last drop. They're the perfect treat for any time of the year, so here’s How to Make a Milkshake. `,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./img/countryDelight.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Egg Burger",
    category: "lunch",
    price: 22.99,
    img: "./img/eggAttack.jpeg",
    desc: `Topped with caramelized onions, smoky Gruyere cheese, and a golden runny egg, it is one of the best burger recipes you will ever bite into. `,
  },
  {
    id: 6,
    title: "Oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./img/oreoDream.jpeg",
    desc: `Indulge in the blissful blend of Oreos and booze with Tipsy Bartender's selection of candy cocktails, from the classic Adult Oreo Shake to the fancier Cookies & Creamtini, all guaranteed to satisfy your sweet tooth and your thirst.`,
  },
  {
    id: 7,
    title: "Scramble eggs with bacon",
    category: "breakfast",
    price: 8.99,
    img: "./img/baconOverflow.jpeg",
    desc: `Scrambled Eggs in Bacon Fat are a satisfying, flavorful, protein-rich part of breakfast or brunch which are gluten-free, Paleo, and Keto friendly. `,
  },
  {
    id: 8,
    title: "American classic",
    category: "lunch",
    price: 12.99,
    img: "./img/americanAlassic.jpeg",
    desc: `This Classic Cheeseburger and Seasoned Fries is a crowd pleaser and is one to get the family round the dinner table for. Super simple to make, and easily customised to suit the kids too. `,
  },
  {
    id: 9,
    title: "Quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./img/quarantineBuddy.jpeg",
    desc: `Whizz up a refreshing milkshake for a quick breakfast or treat. We've got indulgent chocolate, banana and strawberry flavours, plus fruity exercise shakes.`,
  },
  {
    id: 10,
    title: "Steak",
    category: "dinner",
    price: 22.99,
    img: "./img/bisonSteak.jpeg",
    desc: `This simple grilled dinner is all about fresh summer produce. Herbs and smashed garlic quickly infuse charred sweet peppers, capturing their heat straight from the grill.`,
  },
];

const filterBtn = document.querySelectorAll('.filter-btn');

window.addEventListener("DOMContentLoaded", function(){
	displayMenuItems(menu);
	displayMenuButtons();	
})

function displayMenuItems(menuItems){
	let displayMenu = menuItems.map((item) => {
		return `<article class="menu__block">
							<img src=${item.img} alt="${item.title}" class="menu__container-img" />
							<div class="menu__block-info">
								<div class="info__header">
								<h4 class="info__header-title">${item.title}</h4>
								<p class="info__header-price">${item.price}</p>
							</div>
							<p class="info__text">
								${item.desc}
							</p>
						</article>`;
	});

	displayMenu = displayMenu.join("");
	
	menuContainer.innerHTML = displayMenu;
}

function displayMenuButtons(){
	const categories = menu.reduce((values,item) => {
		if(!values.includes(item.category)){
			values.push(item.category);
		}
		return values;
	},['all']);
	const categoryBtns = categories.map((category) => {
		return `<button type="button" id="${category}" class="filter-btn" data-id=${category}>${category}</button>`;
	}).join("");

	btnContainer.innerHTML = categoryBtns;

	const filterBtn = document.querySelectorAll('.filter-btn');

	filterBtn.forEach(function(btn){
		btn.addEventListener('click', function(e){
			const category = e.currentTarget.id;
			const menuCategory = menu.filter(function(menuItem){
				if(menuItem.category === category){
					return menuItem;
				}			
			})
			if (category === 'all'){
				displayMenuItems(menu);
			}
			else{
				displayMenuItems(menuCategory);				
			}
		});
	});
}