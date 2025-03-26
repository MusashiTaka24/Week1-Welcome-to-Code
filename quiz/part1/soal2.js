// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun.
//  Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

let tanggal = 27; // assign nilai variabel tanggal disini! (dengan tanggal antara 1 - 31)
let bulan = 1; // assign nilai variabel bulan disini! (dengan tanggal antara 1 - 12)
let tahun = 2002; // assign nilai variabel tahun disini! (dengan tanggal antara 1900 - 2200)

switch (tanggal) {
    case 1:
        tanggal = "1";
        break;
    case 2:
        tanggal = "2";
        break;
    case 3:
        tanggal = "3";
        break;
    case 4:
        tanggal = "4";
        break;
    case 5:
        tanggal = "5";
        break;
    case 6:
        tanggal = "6";
        break;
    case 7:
        tanggal = "7";
        break;
    case 8:
        tanggal = "8";
        break;
    case 9:
        tanggal = "9";
        break;
    case 10:
        tanggal = "10";
        break;
    case 11:
        tanggal = "11";
        break;
    case 12:
        tanggal = "12";
        break;
        case 13:
            number = "13";
            break;
        case 14:
            tanggal = "14";
            break;
        case 15:
            tanggal = "15";
            break;
        case 16:
            tanggal = "16";
            break;
        case 17:
            tanggal = "17";
            break;
        case 18:
            tanggal = "18";
            break;
        case 19:
            tanggal = "19";
            break;
        case 20:
            tanggal = "20";
            break;
        case 21:
            tanggal = "21";
            break;
        case 22:
            tanggal = "22";
            break;
        case 23:
            tanggal = "23";
            break;
        case 24:
            tanggal = "24";
            break;
            case 25:
                tanggal = "25";
                break;
            case 26:
                tanggal = "26";
                break;
            case 27:
                tanggal = "27";
                break;
            case 28:
                tanggal = "28";
                break;
            case 29:
                tanggal = "29";
                break;
            case 30:
                tanggal = "30";
                break;
            case 31:
                tanggal = "31";
                break;
            default:
                tanggal = "error"

                console.log(`hari ini tanggal ${tanggal}`)
}