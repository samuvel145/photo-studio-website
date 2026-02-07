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
        src: '/assets/images/img3.png',
        category: 'Maternity',
        alt: 'Elegant maternity silhouette',
    },
    {
        id: '2',
        src: '/assets/images/img4.png',
        category: 'Maternity',
        alt: 'Maternity portrait in studio',
    },
    {
        id: '3',
        src: '/assets/images/img5.png',
        category: 'Maternity',
        alt: 'Elegant motherhood glow',
    },
    {
        id: '4',
        src: '/assets/images/img6.jpg',
        category: 'Newborn',
        alt: 'Tiny newborn hands',
    },
    {
        id: '5',
        src: '/assets/images/img7.png',
        category: 'Newborn',
        alt: 'Sleeping newborn baby',
    },
    {
        id: '6',
        src: '/assets/images/img8.png',
        category: 'Newborn',
        alt: 'Newborn peaceful rest',
    },
    {
        id: '7',
        src: '/assets/images/img9.png',
        category: 'Family',
        alt: 'Family embracing outdoors',
    },
    {
        id: '8',
        src: '/assets/images/img10.png',
        category: 'Family',
        alt: 'Joyful family milestone',
    },
    {
        id: '9',
        src: '/assets/images/img11.png',
        category: 'Kids',
        alt: 'Siblings laughing together',
    },
    {
        id: '10',
        src: '/assets/images/img12.png',
        category: 'Kids',
        alt: 'Child playing happily',
    },
    {
        id: '11',
        src: '/assets/images/img1.png',
        category: 'Maternity',
        alt: 'Maternity nature portrait',
    },
    {
        id: '12',
        src: '/assets/images/img2.jpg',
        category: 'Maternity',
        alt: 'Maternity sunset silhouette',
    },
];
