import Link from 'next/link'

export default function Contact() {
  return (
    <main className="space-y-8">
      <section className="typing-effect">
        <h1 className="text-4xl font-bold mb-4">Contact Information</h1>
        <p className="text-xl mb-8">Let's connect and discuss opportunities</p>
      </section>

      <section className="command-line">
        <p>Establishing secure connection...</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="skill-item">
          <h3 className="text-xl font-semibold mb-4">Professional Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.facebook.com/akram.lagraa.94" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 hover:text-green-300">
                <span className="text-green-500">$</span> Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="skill-item">
          <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">Name</label>
              <input type="text" className="w-full bg-black border border-green-500 rounded px-4 py-2 focus:outline-none focus:border-green-300" />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input type="email" className="w-full bg-black border border-green-500 rounded px-4 py-2 focus:outline-none focus:border-green-300" />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea className="w-full bg-black border border-green-500 rounded px-4 py-2 focus:outline-none focus:border-green-300 h-32"></textarea>
            </div>
            <button type="submit" className="border border-green-500 px-4 py-2 rounded hover:bg-green-900/20">
              Send Message
            </button>
          </form>
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