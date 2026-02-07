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
        src: '/assets/images/gal-1.jpg',
        category: 'Maternity',
        alt: 'Graceful maternity silhouette',
    },
    {
        id: '2',
        src: '/assets/images/gal-2.png',
        category: 'Maternity',
        alt: 'Maternity portrait in studio',
    },
    {
        id: '3',
        src: '/assets/images/gal-3.png',
        category: 'Maternity',
        alt: 'Elegant motherhood glow',
    },
    {
        id: '4',
        src: '/assets/images/gal-4.png',
        category: 'Newborn',
        alt: 'Tiny newborn hands',
    },
    {
        id: '5',
        src: '/assets/images/gal-5.png',
        category: 'Newborn',
        alt: 'Sleeping newborn baby',
    },
    {
        id: '6',
        src: '/assets/images/gal-6.png',
        category: 'Newborn',
        alt: 'Newborn peaceful rest',
    },
    {
        id: '7',
        src: '/assets/images/gal-7.png',
        category: 'Newborn',
        alt: 'Newborn close-up',
    },
    {
        id: '8',
        src: '/assets/images/gal-8.png',
        category: 'Family',
        alt: 'Joyful family milestone',
    },
    {
        id: '9',
        src: '/assets/images/gal-9.png',
        category: 'Kids',
        alt: 'Siblings laughing together',
    },
    {
        id: '10',
        src: '/assets/images/gal-10.png',
        category: 'Kids',
        alt: 'Child playing happily',
    },
];
