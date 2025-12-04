import { Product } from './types';

// Legacy WordPress site URL for Store and Forum pages
export const LEGACY_SITE_URL = 'https://carving.clunk.tech';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Exegi DoubleWide 166',
    price: 899.00,
    category: 'Boards',
    image: 'https://picsum.photos/id/400/600/600',
    description: 'The ultimate carving machine designed for deep trenches and high G-forces. The DoubleWide 166 prevents boot-out even at the most extreme edge angles.',
    isNew: true
  },
  {
    id: '2',
    name: 'Trenched Butterfly Wing BX Riser',
    price: 149.50,
    category: 'Hardware',
    image: 'https://picsum.photos/id/401/600/600',
    description: 'Elevate your game. Literally. Provides the leverage you need to initiate turns quicker and hold the edge longer.'
  },
  {
    id: '3',
    name: 'Trenched BootStiffeners',
    price: 65.00,
    category: 'Accessories',
    image: 'https://picsum.photos/id/402/600/600',
    description: 'Add stiffness to your soft boots to approximate the control of hard boots without sacrificing comfort.'
  },
  {
    id: '4',
    name: 'Carvers Tech Hoodie',
    price: 85.00,
    category: 'Apparel',
    image: 'https://picsum.photos/id/403/600/600',
    description: 'Breathable, moisture-wicking, and cut long to keep the snow out when you are laying it out horizontally.'
  },
  {
    id: '5',
    name: 'Edge Tuner Pro Kit',
    price: 120.00,
    category: 'Accessories',
    image: 'https://picsum.photos/id/404/600/600',
    description: 'Keep those edges razor sharp. Essential for icy mornings and hard-packed corduroy.'
  },
  {
    id: '6',
    name: 'Trenched BootStraps',
    price: 45.00,
    category: 'Accessories',
    image: 'https://picsum.photos/id/405/600/600',
    description: 'Lock your heel down and eliminate lift for precise energy transmission.'
  }
];

export const NAV_LINKS = [
  { label: 'Home', path: '/', isExternal: false },
  { label: 'Forum', path: `${LEGACY_SITE_URL}/community/`, isExternal: true },
  {
    label: 'Prototypes',
    path: '#',
    isExternal: false,
    children: [
      { label: 'Snowboards', path: `${LEGACY_SITE_URL}/community/prototype-prototype/`, isExternal: true },
      { label: 'Bindings', path: 'https://www.edgelever.com/', isExternal: true },
    ]
  },
  { label: 'Coaching', path: '/coaching', isExternal: false },
  { label: 'Store', path: `${LEGACY_SITE_URL}/store/`, isExternal: true },
  { label: 'Contact', path: '/contact', isExternal: false },
];

export const MISSION_TEXT = `Carvers Connection was conceived both as a resource for SNOWBOARD CARVERS to get the equipment and knowledge they need to speed their progression, and as a force to push for R&D and competition in the snowboard industry at large by demonstrating that there is a viable and growing market for carving-specific gear.

Our mission is to UP the overall level and the number of snowboard carvers out there. We want to see more great tracks in the corduroy and spread some of that PURE ELATION that carvers are addicted to.`;
