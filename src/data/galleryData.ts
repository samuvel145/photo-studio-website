export interface GalleryItem {
    id: string;
    src: string;
    category: 'Maternity' | 'Newborn' | 'Kids' | 'Family';
    alt: string;
    width?: number;
    height?: number;
}

export const galleryData: GalleryItem[] = [
    {
        id: '1',
        src: '/assets/maternity-1.jpg',
        category: 'Maternity',
        alt: 'Elegant maternity studio portrait',
    },
    {
        id: '2',
        src: '/assets/maternity-2.png',
        category: 'Maternity',
        alt: 'Professional maternity photoshoot',
    },
    {
        id: '3',
        src: '/assets/maternity-3.png',
        category: 'Maternity',
        alt: 'Graceful maternity pose',
    },
    {
        id: '4',
        src: '/assets/maternity-4.png',
        category: 'Maternity',
        alt: 'Beautiful pregnancy portrait',
    },
    {
        id: '5',
        src: '/assets/maternity-5.png',
        category: 'Maternity',
        alt: 'Studio maternity photography',
    },
    {
        id: '6',
        src: '/assets/maternity-6.png',
        category: 'Maternity',
        alt: 'Ethereal motherhood glow',
    },
    {
        id: '7',
        src: '/assets/maternity-7.jpg',
        category: 'Maternity',
        alt: 'Artistic maternity silhouette',
    },
    {
        id: '8',
        src: '/assets/maternity-8.jpg',
        category: 'Maternity',
        alt: 'Timeless maternity treasures',
    },
    {
        id: '9',
        src: '/assets/maternity-9.jpg',
        category: 'Maternity',
        alt: 'Serene maternity outdoors',
    },
];
