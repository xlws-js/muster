/// <reference types="vitest" />

import { resolve } from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from "vite-plugin-pages"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import Unocss from 'unocss/vite'

export default defineConfig({
	resolve: {
		alias: {
			"@/": `${resolve(__dirname, 'src')}`
		}
	},
	plugins: [
		vue({ reactivityTransform: true }),
		Pages(),
		AutoImport({
			imports: [
				'vue',
				'vue/macros',
				'vue-router',
				'@vueuse/core'
			],
			dts: true
		}),
		Components({
			dts: true
		}),
		Unocss()
	],
	test: {
		environment: 'jsdom'
	}
})
