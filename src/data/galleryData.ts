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
        src: '/assets/images/mat1.png',
        category: 'Maternity',
        alt: 'Graceful maternity silhouette',
    },
    {
        id: '2',
        src: '/assets/images/mat2.png',
        category: 'Maternity',
        alt: 'Maternity portrait in studio',
    },
    {
        id: '3',
        src: '/assets/images/mat3.jpg',
        category: 'Maternity',
        alt: 'Elegant motherhood glow',
    },
    {
        id: '4',
        src: '/assets/images/mat4.png',
        category: 'Newborn',
        alt: 'Tiny newborn hands',
    },
    {
        id: '5',
        src: '/assets/images/mat5.png',
        category: 'Newborn',
        alt: 'Sleeping newborn baby',
    },
    {
        id: '6',
        src: '/assets/images/mat6.png',
        category: 'Newborn',
        alt: 'Newborn peaceful rest',
    },
    {
        id: '7',
        src: '/assets/images/mat7.jpg',
        category: 'Family',
        alt: 'Family embracing outdoors',
    },
    {
        id: '8',
        src: '/assets/images/mat8.png',
        category: 'Family',
        alt: 'Joyful family milestone',
    },
    {
        id: '9',
        src: '/assets/images/mat9.png',
        category: 'Kids',
        alt: 'Siblings laughing together',
    },
    {
        id: '10',
        src: '/assets/images/mat10.png',
        category: 'Kids',
        alt: 'Child playing happily',
    },
    {
        id: '11',
        src: '/assets/images/mat1.png',
        category: 'Maternity',
        alt: 'Maternity nature portrait',
    },
    {
        id: '12',
        src: '/assets/images/mat2.png',
        category: 'Maternity',
        alt: 'Maternity sunset silhouette',
    },
];
