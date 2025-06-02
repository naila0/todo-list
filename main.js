import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { 
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgSS-chZUH5T47nhRNeK6jYDnGZK_TQSA",
  authDomain: "insan-cemerlang-d6eb1.firebaseapp.com",
  projectId: "insan-cemerlang-d6eb1",
  storageBucket: "insan-cemerlang-d6eb1.appspot.com",
  messagingSenderId: "162904381844",
  appId: "1:162904381844:web:dd88782fdcc494c9ac1781",
  measurementId: "G-1RSX6TCWZ2"
};

//inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)

export async function ambilDaftarTodo() {
  try {
    const refDokumen = collection(basisdata, "todo");
    const kueri = query(refDokumen, orderBy("teks")); // Mengurutkan berdasarkan teks
    const cuplikanKueri = await getDocs(kueri);
    
    return cuplikanKueri.docs.map((dokumen) => ({
      id: dokumen.id,
      teks: dokumen.data().teks,
      status: dokumen.data().status
    }));
  } catch (error) {
    console.error("Gagal mengambil data todo:", error);
    return [];
  }
}