# Portfolio Yudha

Project ini dibuat dengan React + Vite, jadi untuk hosting ke Dewabiz yang di-upload adalah hasil build statis dari folder `dist`.

## Cara Hosting ke Dewabiz

### 1. Build project

Jalankan perintah ini di folder project:

```bash
npm run build
```

Kalau berhasil, Vite akan membuat folder `dist`.

### 2. Buka File Manager Dewabiz

Login ke dashboard Dewabiz atau cPanel, lalu buka File Manager.

### 3. Upload file hasil build

Masuk ke folder tujuan hosting:

- `public_html` kalau pakai domain utama
- folder addon domain kalau pakai domain tambahan
- folder subdomain kalau pakai subdomain

Lalu upload **isi folder `dist`**, bukan folder `dist`-nya.

Kalau upload dalam bentuk ZIP, kompres isi `dist`, upload, lalu extract di server.

### 4. Atur `.htaccess` jika diperlukan

Karena ini aplikasi React, file `.htaccess` hanya diperlukan kalau nanti kamu memakai routing SPA dan refresh halaman suka kena 404. Kalau hanya memakai section anchor seperti project ini, biasanya tidak wajib.

Bila dibutuhkan, buat file `.htaccess` di `public_html` dengan isi berikut:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### 5. Cek hasil website

Buka domain kamu di browser. Kalau halaman tampil normal, hosting sudah selesai.

## Checklist Singkat

- Pastikan `npm run build` berhasil.
- Upload isi folder `dist` ke folder website di Dewabiz.
- Tambahkan `.htaccess` hanya jika ada routing SPA.
- Cek domain dan pastikan DNS sudah mengarah ke hosting Dewabiz.

## Troubleshooting

- Kalau tampil blank, biasanya file hasil build belum lengkap ter-upload.
- Kalau 404 saat refresh halaman, tambahkan `.htaccess` di atas.
- Kalau perubahan belum muncul, bersihkan cache browser lalu refresh hard reload.
