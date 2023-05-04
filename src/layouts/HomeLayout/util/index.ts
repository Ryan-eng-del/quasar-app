export type MenuList = MenuItem[];

interface MenuItem {
  path: string;
  name: string;
  content: string;
}

export const ItemList: MenuList = [
  {
    path: '/home/inbox',
    name: 'Inbox',
    content: 'Inbox',
  },
  {
    path: '/home/star',
    name: 'Star',
    content: 'Star',
  },
  {
    path: '/home/send',
    name: 'Send',
    content: 'Send',
  },
  {
    path: '/home/drafts',
    name: 'Drafts',
    content: 'Drafts',
  },
  {
    path: '/home/likes',
    name: 'Favorite',
    content: 'Likes',
  },
];
