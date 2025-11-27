// src/pages/ProfilePage.jsx
import { useState } from 'react';
import { User, Mail, Phone, Edit, X } from 'lucide-react';

// Komponen Modal untuk Edit Profil
function EditProfileModal({ user, onSave, onClose }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-slate-900 mb-6">Edit Profil</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nomor Telepon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Komponen Utama Halaman Profil
export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: 'Pengguna Resep Nusantara',
    email: 'pengguna@example.com',
    phone: '081234567890',
  });

  const handleSaveProfile = (newUserData) => {
    setUser(newUserData);
    setIsModalOpen(false); // Tutup modal setelah menyimpan
  };

  return (
    <>
      <div className="p-4 md:p-8 pb-20 md:pb-8 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              Profil Pengguna
            </h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Edit className="w-4 h-4" />
              Edit Profil
            </button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-12 h-12 text-slate-500" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-slate-900">{user.name}</h2>
                <p className="text-slate-500">Pengguna Aktif</p>
              </div>
            </div>
            
            <div className="border-t border-slate-200 pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-semibold text-slate-800 break-all">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-500">Nomor Telepon</p>
                  <p className="font-semibold text-slate-800">{user.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tampilkan Modal jika isModalOpen bernilai true */}
      {isModalOpen && (
        <EditProfileModal
          user={user}
          onSave={handleSaveProfile}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}