"use client"; // Tambahkan ini karena ini Client Component

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Donasi {
  id: string;
  title: string;
  description: string;
  amount: number;
}

export default function DonasiDetail() {
  const { id } = useParams(); // Ambil ID dari URL
  const [donasi, setDonasi] = useState<Donasi | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/donasi/${id}`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data: Donasi = await res.json();
        setDonasi(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Terjadi kesalahan yang tidak diketahui");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Detail Donasi</h1>
      {donasi ? (
        <div>
          <h2>{donasi.title}</h2>
          <p>{donasi.description}</p>
          <p>Jumlah: {donasi.amount}</p>
        </div>
      ) : (
        <p>Data tidak ditemukan</p>
      )}
    </div>
  );
}
