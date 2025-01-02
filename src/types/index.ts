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

type ImageFormats = {
    thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: string | null;
        width: number;
        height: number;
        size: number;
        sizeInBytes: number;
        url: string;
    };
};

type ImageAttributes = {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: ImageFormats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
};

type ImageData = {
    id: number;
    attributes: ImageAttributes;
};

type ContentText = {
    type: 'text';
    text: string;
};

export type ContentParagraph = {
    type: "heading" | "paragraph" | "list";
    children: ContentText[];
    format?: string;
};

type Content = ContentParagraph[];

type DataAttributes = {
    content: Content;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    name: string;
    url: string;
    redirect: {
        id: number;
        name_redirect: string;
        url_redirect: string;
    }[];
    Images: {
        id: number;
        Image: {
            data: ImageData;
        };
    }[];
};

export type ProyectTypes = {
    id: number;
    attributes: DataAttributes;
};

