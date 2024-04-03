import type { AppProps } from 'next/app'
import '../globals.css'
// Fonts
/* import localFont from '@next/font/local'
const futuraLightRegular = localFont({ src: '/fonts/futura-light-regular/font.otf' });
const optima = localFont({ src: '/fonts/optima/medium.otf' }); */

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={``}>
            <Component {...pageProps} />
        </div>
    )
}