export default function Toko() {
  const produk = [
    {
      id: 1,
      nama: "Tteokbokki Tteok-Jae!",
      harga: "Rp20.000",
      deskripsi: "Tteokbokki original taste, memberikan cita rasa korea yang khas.",
      gambar: "images/topoki.jpeg"
    },
        {
      id: 2,
      nama: "Eomuk Tteok-Jae!",
      harga: "Rp5.000",
      deskripsi: "Topping khas Korea, menambah cita rasa korea yang khas.",
      gambar: "images/eomuk.png"
    },
            {
      id: 3,
      nama: "Sosis Tteok-Jae!",
      harga: "Rp5.000",
      deskripsi: "Topping Tambahan, memberikan pengalaman cita rasa yang baru untuk anda.",
      gambar: "images/sosis.jpg"
    },
    {
      id: 3,
      nama: "Stiker Tteok-Jae!",
      harga: "Rp1.500",
      deskripsi: "Stiker logo oleh oleh dari toko kami.",
      gambar: "images/logo bg putih.png"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Toko Online</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produk.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={item.gambar} alt={item.nama} className="w-50 h-50 object-cover rounded mb-4" />
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
