import {Store} from './store';
import {getProductLinksBuilder} from './helpers/card';

export const Awd: Store = {
	labels: {
		inStock: {
			container: '.product-info',
			text: ['add to basket']
		},
		outOfStock: {
			container: '.vs-stock',
			text: ['out-of-stock']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'CARD',
			series: 'test:series',
			url: 'https://www.awd-it.co.uk/asus-dual-geforce-rtx-2060-mini-oc-6gb-gddr6-pci-express-vr-ready-graphics-card.html'
		}
	],
	linksBuilder: {
		builder: getProductLinksBuilder({
			productsSelector: '#pagination_contents .grid-list .vs-grid',
			sitePrefix: 'https://www.awd-it.co.uk',
			titleSelector: '.title-price-wrapper > a[href]'
		}),
		ttl: 300000,
		urls: [
			{
				series: '3070',
				url: 'https://www.awd-it.co.uk/components/graphics-cards/nvidia/nvidia-geforce-rtx-3070.html'
			},
			{
				series: '3080',
				url: 'https://www.awd-it.co.uk/components/graphics-cards/nvidia/nvidia-geforce-rtx-3080.html'
			},
			{
				series: '3090',
				url: 'https://www.awd-it.co.uk/components/graphics-cards/nvidia/nvidia-geforce-rtx-3090.html'
			}
		]
	},
	name: 'awd',
	waitUntil: 'domcontentloaded'
};
