// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@pinia/nuxt',
        'nuxt-swiper',
    ],
    plugins: [{ src: '~/plugins/analytics.client.ts', mode: 'client' }],
    runtimeConfig: {
        public: {
            space: process.env.CTF_SPACE_ID,
            accessToken: process.env.CTF_CDA_ACCESS_TOKEN
        }
    },
    // @ts-ignore
    colorMode: {
        preference: 'light',
        classSuffix: ''
    },
    build: {
        // @ts-ignore
        chunkSizeWarningLimit: 1600,
    },
    css: [
        '~/assets/css/main.css'
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Roboto+Mono:ital,wght@0,400;0,500;1,400;1,500&display=swap'
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png'
                },
                {
                    rel: 'manifest',
                    href: '/site.webmanifest'
                },
            ]
        }
    },
    image: {
        provider: "vercel",
        domains: [
            'avatars0.githubusercontent.com',
            'images.ctfassets.net'
        ]
    },
    swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        // styleLang: 'css',
        // modules: ['navigation', 'pagination'], // all modules are imported by default
    },
})
