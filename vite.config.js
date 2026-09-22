import {defineConfig} from 'vite'

// function defineConfig(config){
//     return config.base
// }

export default defineConfig({
    server:{
        port:3000
    },
    base: '/js-vite-blackjack/',
});