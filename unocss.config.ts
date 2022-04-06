import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    shortcuts: [
        ['btn', 'px-4 py-1 rounded inline-block bg-drak-400 text-white cursor-pointer hover:bg-drak-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'text-[0.9em] inline-black cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true
        }),
        presetWebFonts({
            fonts: {
                sanc: "DM Sans",
                serify: "DM Serif Display",
                mono: 'DM Mone'
            }
        })
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})