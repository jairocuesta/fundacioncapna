export type styles = {
    styles?: {
        background?: string;
        color?: string;
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
        image?: 'default' | 'color'
    }
}

export type Blog = {
    alias: string;
    name: string;
    description: string;
    blogPreview: BlogImage;
    bannerImage: BlogImage;
    content: { id: number; __component: string; subtitle: string; content: string }[];
    publishedAt: string;
    author: string;
}

export type BlogImage = {
    data: {
        id: number;
        attributes: {
            name: string;
            url: string;
            size: number;
            width: number;
            height: number;
            formats: {
                small: {
                    url: string;
                    name: string;
                    size: number;
                    width: number;
                    height: number;
                },
                medium: {
                    url: string;
                    name: string;
                    size: number;
                    width: number;
                    height: number;
                },
                thumbnail: {
                    url: string;
                    name: string;
                    size: number;
                    width: number;
                    height: number;
                },
            }
        }
    }
}