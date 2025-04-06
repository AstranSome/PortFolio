import Link from 'next/link'

export default function Home() {
  return (
    <main className="space-y-8">
      <section className="typing-effect">
        <h1 className="text-4xl font-bold mb-4">Akram</h1>
        <p className="text-xl mb-2">Cybersecurity Student | CTF Player | Developer</p>
        <p className="text-lg mb-8">Shellmate Club & GDSC Member | Passionate about Network Security & Cryptography</p>
      </section>

      <section className="command-line">
        <p>Initializing system...</p>
      </section>

      <section className="skill-category">
        <h2 className="text-2xl font-bold mb-4">Cybersecurity Skills</h2>
        <div className="skill-list">
          <div className="skill-item">
            <h3 className="text-xl font-semibold mb-2">Web Security</h3>
            <ul className="list-disc list-inside">
              <li>Web Architectures</li>
              <li>Authentication & Authorization</li>
              <li>Encryption</li>
              <li>OWASP</li>
              <li>Burp Suite</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="text-xl font-semibold mb-2">Network Security</h3>
            <ul className="list-disc list-inside">
              <li>OSI Model & TCP/IP</li>
              <li>CCNA & CCNP</li>
              <li>Wireless Security</li>
              <li>Wireshark</li>
              <li>Nmap & Metasploit</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="text-xl font-semibold mb-2">CTF Experience</h3>
            <ul className="list-disc list-inside">
              <li>3+ Years Experience</li>
              <li>Pentesting</li>
              <li>Cryptography</li>
              <li>Reverse Engineering</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="skill-category">
        <h2 className="text-2xl font-bold mb-4">Development Skills</h2>
        <div className="skill-list">
          <div className="skill-item">
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="list-disc list-inside">
              <li>HTML5 & CSS3</li>
              <li>React.js</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="list-disc list-inside">
              <li>Express.js</li>
              <li>Nest.js</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="text-xl font-semibold mb-2">Desktop Development</h3>
            <ul className="list-disc list-inside">
              <li>Tauri</li>
              <li>Electron.js</li>
              <li>Java/C/C++</li>
              <li>Rust</li>
              <li>Python/PyQt</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="command-line">
        <p>System ready. Type <span className="text-yellow-500">help</span> for available commands.</p>
      </section>

      <nav className="flex gap-4 mt-8">
        <Link href="/projects" className="border border-green-500 px-4 py-2 rounded hover:bg-green-900/20">
          View Projects
        </Link>
        <Link href="/contact" className="border border-green-500 px-4 py-2 rounded hover:bg-green-900/20">
          Contact Me
        </Link>
      </nav>
      </main>
  )
}
