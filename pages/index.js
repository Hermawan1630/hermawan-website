import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center text-gray-800">Hermawan Tri Santoso</h1>
        <p className="text-center text-gray-600 mt-2">Mahasiswa biasa yang ingin menjadi Web Developer</p>
      </header>

      <nav className="flex justify-center gap-6 mb-12">
        <Link href="/tentang" className="text-blue-600 hover:underline">Tentang Saya</Link>
        <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>
        <Link href="/toko" className="text-blue-600 hover:underline">Toko</Link>
        <Link href="/kontak" className="text-blue-600 hover:underline">Kontak</Link>
      </nav>

      <section className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Selamat datang di website saya!</h2>
        <p className="text-gray-700">
          Website ini saya buat untuk belajar, berbagi informasi, dan nantinya sebagai toko online.
          Semua bagian bisa saya ubah sendiri. Semoga bermanfaat!
        </p>
      </section>
    </main>
  );
}
