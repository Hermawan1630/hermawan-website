import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center text-gray-800">Tteok-Jae!</h1>
        <p className="text-center text-gray-600 mt-2">Tteokbokki Ijen, Malang</p>
      </header>

      <nav className="flex justify-center gap-6 mb-12">
        <Link href="/tentang" className="text-blue-600 hover:underline">Tentang Kami</Link>
        <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>
        <Link href="/toko" className="text-blue-600 hover:underline">Toko</Link>
        <Link href="/kontak" className="text-blue-600 hover:underline">Kontak</Link>
      </nav>

      <section className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Selamat datang di Toko Online Kami!</h2>
        <p className="text-gray-700">
          Kami ucapkan terima kasih karena kamu telah mengunjungi toko online kami.
          Kalau kamu kepo dan mau beli produk kami coba tekan bagian toko dan kamu akan menemukan surga dari Tteokbokki yang sebenarnya di Malang.
          Kamu senang, kamipun ikut senang!
        </p>
      </section>
    </main>
  );
}
