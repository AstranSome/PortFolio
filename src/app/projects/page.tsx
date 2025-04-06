import Link from 'next/link'

export default function Projects() {
  return (
    <main className="space-y-8">
      <section className="typing-effect">
        <h1 className="text-4xl font-bold mb-4">Project Portfolio</h1>
        <p className="text-xl mb-8">Showcasing my cybersecurity and development projects</p>
      </section>

      <section className="command-line">
        <p>Loading project database...</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="skill-item">
          <h3 className="text-xl font-semibold mb-2">Password Manager</h3>
          <p className="mb-4">A secure password management application built with Tauri and Rust, featuring end-to-end encryption and secure storage.</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">Tauri</span>
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">Rust</span>
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">Security</span>
          </div>
        </div>

        <div className="skill-item">
          <h3 className="text-xl font-semibold mb-2">Network Analyzer</h3>
          <p className="mb-4">A comprehensive network analysis tool that monitors and analyzes network traffic, built with Python and PyQt.</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">Python</span>
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">PyQt</span>
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">Wireshark</span>
          </div>
        </div>

        <div className="skill-item">
          <h3 className="text-xl font-semibold mb-2">Anti-Ransomware</h3>
          <p className="mb-4">A desktop application that detects and prevents ransomware attacks in real-time, developed using C++ and system APIs.</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">C++</span>
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">Windows API</span>
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">Security</span>
          </div>
        </div>

        <div className="skill-item">
          <h3 className="text-xl font-semibold mb-2">Summary AI Tool</h3>
          <p className="mb-4">A web application that uses AI to generate summaries of long texts, built with Next.js and Node.js.</p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">Next.js</span>
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">Node.js</span>
            <span className="px-2 py-1 bg-green-900/50 rounded text-sm">AI</span>
          </div>
        </div>
      </div>

      <nav className="flex gap-4 mt-8">
        <Link href="/" className="border border-green-500 px-4 py-2 rounded hover:bg-green-900/20">
          Back to Home
        </Link>
      </nav>
    </main>
  )
} 