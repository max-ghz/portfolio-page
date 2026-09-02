import { FaDiscord, FaGithub } from 'react-icons/fa';

export default function Home() {
    return (
        <main className="container">
            <aside className="sidebar">
                <div className="sidebar-image">
                    <img
                        src="me.jpg"
                        alt="My picture"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            border: '2px solid #00f0ff',
                            borderRadius: '2px',
                            imageRendering: 'pixelated',
                            boxShadow: '2px 2px 0 #000000, -2px -2px 0 #001122',
                        }}
                    />
                </div>

                <div className="sidebar-section">
                    <h2>Languages</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>Bash</li>
                        <li>SQL</li>
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h2>Frameworks</h2>
                    <ul>
                        <li>React</li>
                        <li>Electron</li>
                        <li>Next.js</li>
                        <li>NestJS</li>
                        <li>FastAPI</li>
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h2>Tools</h2>
                    <ul>
                        <li>Git</li>
                        <li>CI/CD</li>
                        <li>Docker</li>
                        <li>Nginx</li>
                        <li>PostgreSQL</li>
                        <li>SQLite</li>
                        <li>TypeORM</li>
                        <li>Wireshark</li>
                    </ul>
                </div>
            </aside>

            <div className="main-content">
                <section>
                    <h1>maxghz</h1>
                    <p>Web Developer</p>
                </section>

                <section>
                    <h2>About</h2>
                    <p>
                        Experienced in full-stack web development. Strong
                        understanding of memory allocation, dynamic data
                        structures, efficient data handling, web scraping, and
                        data extraction.
                    </p>
                </section>

                <section>
                    <h2>Projects</h2>

                    <div className="projects-list">
                        <div className="project">
                            <p>
                                <a
                                    href="https://github.com/soldank-plus-plus/spp-launcher"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    spp-launcher
                                </a>
                            </p>
                            <div className="tech-tags">
                                <span className="tech-tag">TypeScript</span>
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">Electron</span>
                                <span className="tech-tag">Vite</span>
                                <span className="tech-tag">Zustand</span>

                                <div className="project-icons">
                                    <a
                                        href="https://github.com/soldank-plus-plus/spp-launcher"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="icon" />
                                    </a>
                                </div>
                            </div>

                            <p>
                                Desktop launcher for Soldank++ game, with a
                                parallel web build. Built with Electron, React
                                19, TypeScript, Vite/electron-vite, and Zustand
                                for state management.
                            </p>
                        </div>

                        <div className="project">
                            <p>
                                <a
                                    href="https://soldankpp.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    soldankpp.app
                                </a>
                            </p>
                            <div className="tech-tags">
                                <span className="tech-tag">JavaScript</span>
                                <span className="tech-tag">TypeScript</span>
                                <span className="tech-tag">React</span>
                                <span className="tech-tag">NestJS</span>
                                <span className="tech-tag">TypeORM</span>
                                <span className="tech-tag">Tailwind CSS</span>
                                <span className="tech-tag">Shadcn</span>
                                <span className="tech-tag">Canvas</span>
                                <span className="tech-tag">HTML</span>
                                <span className="tech-tag">PostgreSQL</span>

                                <div className="project-icons">
                                    <a
                                        href="https://github.com/soldank-plus-plus/spp-website"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="icon" />
                                    </a>
                                    <a
                                        href="https://github.com/soldank-plus-plus/spp-webstats"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="icon" />
                                    </a>
                                </div>
                            </div>

                            <p>
                                Full-stack website for 2D arcade game Soldank++.
                                Built with Vite + React on the frontend, using
                                Tailwind CSS, Shadcn as UI library, and the HTML
                                Canvas API, with a NestJS backend for API and
                                PostgreSQL database management.
                            </p>
                        </div>

                        <div className="project">
                            <p>
                                <a
                                    href="https://github.com/max-ghz/spp-lobby"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    spp-lobby
                                </a>
                            </p>
                            <div className="tech-tags">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">FastAPI</span>
                                <span className="tech-tag">Docker</span>

                                <div className="project-icons">
                                    <a
                                        href="https://github.com/max-ghz/spp-lobby"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="icon" />
                                    </a>
                                </div>
                            </div>

                            <p>
                                Python/FastAPI HTTP lobby server for Soldank++.
                                Lets game servers register themselves and lets
                                clients discover registered servers. Everything
                                lives in an in-memory dict guarded by a lock,
                                with a TTL-based expiry sweep, hence no
                                database.
                            </p>
                        </div>

                        <div className="project">
                            <p>
                                <a
                                    href="https://superclimbstats.xyz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    superclimbstats.xyz
                                </a>
                            </p>
                            <div className="tech-tags">
                                <span className="tech-tag">JavaScript</span>
                                <span className="tech-tag">PHP</span>
                                <span className="tech-tag">CSS</span>
                                <span className="tech-tag">HTML</span>
                                <span className="tech-tag">SQLite</span>

                                <div className="project-icons">
                                    <a
                                        href="https://github.com/soldank-plus-plus/spp-webstats"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub className="icon" />
                                    </a>
                                </div>
                            </div>

                            <p>
                                Webstats platform for recovered servers from 2D
                                action game Soldat. Built with pure JavaScript,
                                HTML, and CSS on the frontend with DOMPurify
                                sanitization. Developed backend logic in PHP for
                                handling and displaying SQLite data efficiently.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="certificate-section">
                    <h2>Certificates</h2>
                    <p>CS50x: Introduction to Computer Science</p>
                    <p>CS50s Web Programming with Python and JavaScript</p>
                    <p>
                        PCPP1 Certified Professional Python Programmer Level 1
                    </p>

                    <div className="corner-icons">
                        <a
                            href="https://discord.com/users/671726732155420682"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDiscord className="icon" />
                        </a>
                        <a
                            href="https://github.com/max-ghz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="icon" />
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
