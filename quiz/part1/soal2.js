// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

tanggal = 27; 
bulan = 1;
tahun = 2002;

switch (bulan) {
    case 1:
        bulan = "januari";
        break;
    case 2:
        bulan = "februari";
        break;
    case 3:
        bulan = "maret";
        break;
    case 4:
        bulan = "april";
        break;
    case 5:
        bulan = "mei"
        break;
    case 6:
        bulan = "juni"
        break;
    case 7:
        bulan = "juli"
        break;
    case 8:
        bulan = "agustus"
        break;
    case 9:
        bulan = "september"
        break;
    case 10:
        bulan = "oktober"
        break;
    case 11:
        bulan = "november"
        break;
    case 12:
        bulan = "desember"
    default:
        tanggal = "undefined"
        break;
}
        console.log(`${tanggal} ${bulan} ${tahun}`)


        