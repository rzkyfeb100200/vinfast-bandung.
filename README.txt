VINFAST BANDUNG — WEBSITE STARTER

File utama website: aindex.html
File index.html disediakan sebagai pengarah otomatis ke aindex.html agar domain tetap bisa dibuka dari halaman utama.

File pendukung:
- styles.css : tampilan dan responsive layout
- script.js  : interaksi navigasi dan tombol WhatsApp
- assets/    : gambar kendaraan
- .htaccess  : pengaturan default document untuk hosting Apache

UPLOAD:
1. Upload seluruh isi folder ini ke folder public_html (atau document root hosting).
2. Pastikan aindex.html, index.html, styles.css, script.js, .htaccess, dan folder assets berada pada level yang sama.
3. Jika hosting memakai Apache, .htaccess akan mengutamakan aindex.html.
4. Jika hosting memakai Nginx atau platform static hosting, atur default document/rewrite ke aindex.html; jika tidak bisa, index.html tetap mengarahkan pengunjung ke aindex.html.
5. Periksa nomor WhatsApp pada script.js sebelum website dipublikasikan.
