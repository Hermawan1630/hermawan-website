export default function Toko() {
  const produk = [
    {
      id: 1,
      nama: "Kaos Polos",
      harga: "Rp50.000",
      deskripsi: "Kaos polos bahan katun combed 30s.",
      gambar: "images/p007-putih.jpg"
    },
    {
      id: 2,
      nama: "Topi Trucker",
      harga: "Rp35.000",
      deskripsi: "Topi jaring model trucker, cocok untuk gaya santai.",
      gambar: "images/snapback-3249-2906193-1.webp"
    },
    {
      id: 3,
      nama: "Stiker Kustom",
      harga: "Rp10.000",
      deskripsi: "Stiker cetak custom dengan desain kamu sendiri.",
      gambar: "images/logo bg putih.png"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Toko Online</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produk.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={item.gambar} alt={item.nama} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{item.nama}</h2>
            <p className="text-gray-600">{item.deskripsi}</p>
            <p className="mt-2 text-green-700 font-bold">{item.harga}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Beli
            </button>
          </div>

        ))}
      </div>
    </main>
  );
}
