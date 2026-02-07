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
        src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop',
        category: 'Maternity',
        alt: 'Maternity photo in nature',
    },
    {
        id: '2',
        src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop',
        category: 'Family',
        alt: 'Family portrait outdoors',
    },
    {
        id: '3',
        src: 'https://images.unsplash.com/photo-1510154221556-06256b365992?q=80&w=800&auto=format&fit=crop',
        category: 'Kids',
        alt: 'Child playing in leaves',
    },
    {
        id: '4',
        src: 'https://images.unsplash.com/photo-1544126566-47a74896a29d?q=80&w=800&auto=format&fit=crop',
        category: 'Newborn',
        alt: 'Sleeping newborn',
    },
    {
        id: '5',
        src: 'https://images.unsplash.com/photo-1504194553283-d731e21b1834?q=80&w=800&auto=format&fit=crop',
        category: 'Maternity',
        alt: 'Close up maternity shot',
    },
    {
        id: '6',
        src: 'https://images.unsplash.com/photo-1577977465665-98782a933f09?q=80&w=800&auto=format&fit=crop',
        category: 'Family',
        alt: 'Parents holding baby',
    },
    {
        id: '7',
        src: 'https://images.unsplash.com/photo-1520626354670-65fde6b3a373?q=80&w=800&auto=format&fit=crop',
        category: 'Newborn',
        alt: 'Newborn feet details',
    },
    {
        id: '8',
        src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop',
        category: 'Kids',
        alt: 'Girl smiling in garden',
    },
    {
        id: '9',
        src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop',
        category: 'Newborn',
        alt: 'Newborn sleeping peacefully',
    },
    {
        id: '10',
        src: 'https://images.unsplash.com/photo-1531983412531-1f49a365f698?q=80&w=800&auto=format&fit=crop',
        category: 'Family',
        alt: 'Family playing on the beach',
    },
    {
        id: '11',
        src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?q=80&w=800&auto=format&fit=crop',
        category: 'Maternity',
        alt: 'Maternity silhouette at sunset',
    },
    {
        id: '12',
        src: 'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?q=80&w=800&auto=format&fit=crop',
        category: 'Kids',
        alt: 'Brother and sister laughing',
    },
];
