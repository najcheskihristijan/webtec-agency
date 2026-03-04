import { getCollection, type CollectionEntry } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs/promises';

// Determine the font file path
// In a real deployment, you might need to resolve this path differently depending on where the build puts assets
// For now, we will fetch a font from a CDN if local fails, or read a local file
// Simpler for this environment: Fetch font buffer
const fetchFont = async () => {
    const response = await fetch('https://github.com/google/fonts/raw/main/apache/robotoslab/RobotoSlab-Bold.ttf');
    return Buffer.from(await response.arrayBuffer());
};

export async function GET({ params, props }: { params: { slug: string }, props: { post: CollectionEntry<'blog'> } }) {
    const { post } = props;
    const robotoSlab = await fetchFont();

    const svg = await satori(
        {
            type: 'div',
            props: {
                style: {
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#0f172a', // gray-950
                    backgroundImage: 'linear-gradient(to bottom right, #1e3a8a, #0f172a)', // blue-900 to gray-950
                    color: 'white',
                    padding: '80px',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                },
                children: [
                    {
                        type: 'div',
                        props: {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '40px',
                            },
                            children: [
                                {
                                    type: 'div',
                                    props: {
                                        style: {
                                            backgroundColor: '#3b82f6', // blue-500
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '8px',
                                            marginRight: '16px',
                                        },
                                    },
                                },
                                {
                                    type: 'div',
                                    props: {
                                        children: 'WEBTEC',
                                        style: {
                                            fontSize: '32px',
                                            fontWeight: 'bold',
                                            color: '#93c5fd', // blue-300
                                            letterSpacing: '4px',
                                        },
                                    },
                                },
                            ],
                        },
                    },
                    {
                        type: 'div',
                        props: {
                            children: post.data.title,
                            style: {
                                fontSize: '72px',
                                fontWeight: 'bold',
                                lineHeight: '1.1',
                                marginBottom: '24px',
                                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                            },
                        },
                    },
                    {
                        type: 'div',
                        props: {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                marginTop: 'auto',
                            },
                            children: [
                                {
                                    type: 'div',
                                    props: {
                                        children: post.data.author || 'Webtec Editor',
                                        style: {
                                            fontSize: '24px',
                                            color: '#94a3b8', // gray-400
                                        },
                                    },
                                },
                                {
                                    type: 'div',
                                    props: {
                                        children: '—',
                                        style: { margin: '0 16px', color: '#475569' },
                                    },
                                },
                                {
                                    type: 'div',
                                    props: {
                                        children: post.data.pubDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                                        style: {
                                            fontSize: '24px',
                                            color: '#64748b', // gray-500
                                        },
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'Roboto Slab',
                    data: robotoSlab,
                    weight: 700,
                    style: 'normal',
                },
            ],
        }
    );

    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(pngBuffer, {
        headers: {
            'Content-Type': 'image/png',
            // Cache for 1 day
            'Cache-Control': 'public, max-age=86400',
        },
    });
}

// Generate paths for all blog posts
export async function getStaticPaths() {
    const posts = await getCollection('blog');
    return posts.map((post) => ({
        params: { slug: post.id },
        props: { post },
    }));
}
