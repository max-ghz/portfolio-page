import '../styles/globals.css';
import { ReactNode } from 'react';
import ParticlesBackground from './components/ParticlesBackground';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pl">
            <body>
                <ParticlesBackground />
                {children}
            </body>
        </html>
    );
}
