export interface Speaker {
    id: string;
    name: string;
    img: string;
}

export interface YearData {
    year: number;
    speakers: Speaker[];
}

const speakersData: YearData[] = [
    {
        "year": 2026,
        "speakers": [
            {
                "id": "2026-1",
                "name": "Amitabh Sinha",
                "img": "/img/speakers/2026/AmitabhSinha.png"
            },
            {
                "id": "2026-2",
                "name": "Dr Shailesh Nayak",
                "img": "/img/speakers/2026/DrShaileshNayak.png"
            },
            {
                "id": "2026-3",
                "name": "Om Prakash Srivastava",
                "img": "/img/speakers/2026/OmPrakashSrivastava.png"
            },
            {
                "id": "2026-4",
                "name": "Prabhlada Rama Rao",
                "img": "/img/speakers/2026/PrabhladaRamaRao.png"
            },
            {
                "id": "2026-5",
                "name": "Sanjaya Baru",
                "img": "/img/speakers/2026/sanjayaBaru.png"
            }
        ]
    },
    {
        "year": 2025,
        "speakers": [
            {
                "id": "2025-1",
                "name": "Dilip D Souza",
                "img": "/img/speakers/2025/Dilip D_Souza.jpg"
            },
            {
                "id": "2025-2",
                "name": "Dr Anil Kumar Gupta",
                "img": "/img/speakers/2025/Dr Anil Kumar Gupta.jpg"
            },
            {
                "id": "2025-3",
                "name": "Dr Tirthankar Patnaik",
                "img": "/img/speakers/2025/Dr Tirthankar Patnaik.jpg"
            },
            {
                "id": "2025-4",
                "name": "Dr Vijender Singh Chauhan",
                "img": "/img/speakers/2025/Dr Vijender Singh Chauhan.jpg"
            },
            {
                "id": "2025-5",
                "name": "Dr. V. Anantha Nageswaran",
                "img": "/img/speakers/2025/Dr. V. Anantha Nageswaran.png"
            },
            // {
            //     "id": "2025-6",
            //     "name": "IMG-20250401-WA0149",
            //     "img": "/img/speakers/2025/IMG-20250401-WA0149.jpg"
            // },
            {
                "id": "2025-6",
                "name": "Mr Abhay Kumar",
                "img": "/img/speakers/2025/Mr Abhay Kumar.jpg"
            },
            {
                "id": "2025-7",
                "name": "Ms Nidhi Bansal",
                "img": "/img/speakers/2025/Ms Nidhi Bansal.jpg"
            }
        ]
    },
    {
        "year": 2024,
        "speakers": [
            {
                "id": "2024-1",
                "name": "Dinesh Trivedi",
                "img": "/img/speakers/2024/Dinesh Trivedi.jpg"
            },
            {
                "id": "2024-2",
                "name": "Dr Ajay Bhushan Pandey",
                "img": "/img/speakers/2024/Dr Ajay Bhushan Pandey.jpg"
            },
            {
                "id": "2024-3",
                "name": "Roopa Ganguly",
                "img": "/img/speakers/2024/Roopa Ganguly.jpg"
            },
            {
                "id": "2024-4",
                "name": "Shivshankar Menon",
                "img": "/img/speakers/2024/Shivshankar Menon.jpg"
            },
            {
                "id": "2024-5",
                "name": "Vinod G. Khandare",
                "img": "/img/speakers/2024/Vinod G. Khandare.jpg"
            }
        ]
    },
    {
        "year": 2023,
        "speakers": [
            {
                "id": "2023-1",
                "name": "Dr. V. K. Saraswat",
                "img": "/img/speakers/2023/Dr. V. K. Saraswat.jpg"
            },
            {
                "id": "2023-2",
                "name": "Mr Dibakar Banerjee",
                "img": "/img/speakers/2023/Mr Dibakar Banerjee.jpg"
            },
            {
                "id": "2023-3",
                "name": "Mr R.B. Ramesh",
                "img": "/img/speakers/2023/Mr R.B. Ramesh.jpg"
            },
            {
                "id": "2023-4",
                "name": "Prof. K. Vijayraghavan",
                "img": "/img/speakers/2023/Prof. K. Vijayraghavan.jpg"
            },
            {
                "id": "2023-5",
                "name": "Ramkripa Ananthan",
                "img": "/img/speakers/2023/Ramkripa Ananthan.jpeg"
            },
            {
                "id": "2023-6",
                "name": "S Nagarajan",
                "img": "/img/speakers/2023/S Nagarajan.jpg"
            },
            {
                "id": "2023-7",
                "name": "sainath",
                "img": "/img/speakers/2023/sainath.jpg"
            }
        ]
    },
    {
        "year": 2022,
        "speakers": [
            {
                "id": "2022-1",
                "name": "Dr Ajay Kumar",
                "img": "/img/speakers/2022/Dr Ajay Kumar.jpg"
            },
            {
                "id": "2022-2",
                "name": "Dr Henry Throop",
                "img": "/img/speakers/2022/Dr Henry Throop.jpg"
            },
            {
                "id": "2022-3",
                "name": "Dr. Soumya Swaminathan",
                "img": "/img/speakers/2022/Dr. Soumya Swaminathan.jpg"
            },
            {
                "id": "2022-4",
                "name": "Duvvuri Subbarao",
                "img": "/img/speakers/2022/Duvvuri_Subbarao_(cropped).jpg"
            },
            {
                "id": "2022-5",
                "name": "Gauri Shinde",
                "img": "/img/speakers/2022/Gauri_Shinde.jpg"
            },
            {
                "id": "2022-6",
                "name": "Jeffrey Archer",
                "img": "/img/speakers/2022/Jeffrey Archer.jpg"
            },
            {
                "id": "2022-7",
                "name": "Ms Deepa Mallik",
                "img": "/img/speakers/2022/Ms Deepa Mallik.jpg"
            },
            {
                "id": "2022-8",
                "name": "Zainab Nagin Cox",
                "img": "/img/speakers/2022/Zainab Nagin Cox.jpg"
            },
            {
                "id": "2022-9",
                "name": "henry throop",
                "img": "/img/speakers/2022/henry throop.jpg"
            }
        ]
    },
    {
        "year": 2021,
        "speakers": [
            {
                "id": "2021-1",
                "name": "Kiran Karnik",
                "img": "/img/speakers/2021/Kiran Karnik.jpg"
            },
            {
                "id": "2021-2",
                "name": "Prof. Muhammad Yunus",
                "img": "/img/speakers/2021/Prof. Muhammad Yunus.jpg"
            },
            {
                "id": "2021-3",
                "name": "Reinhold Messner",
                "img": "/img/speakers/2021/Reinhold Messner.jpg"
            },
            {
                "id": "2021-4",
                "name": "Shri. Nitin Gadkari",
                "img": "/img/speakers/2021/Shri. Nitin Gadkari.jpg"
            },
            {
                "id": "2021-5",
                "name": "Suresh Prabhu",
                "img": "/img/speakers/2021/Suresh Prabhu.jpg"
            },
            {
                "id": "2021-6",
                "name": "Susan Bennett",
                "img": "/img/speakers/2021/Susan Bennett.jpg"
            },
            {
                "id": "2021-7",
                "name": "Vint Cerf",
                "img": "/img/speakers/2021/Vint Cerf.jpg"
            },
            {
                "id": "2021-8",
                "name": "avijitt dutt",
                "img": "/img/speakers/2021/avijitt dutt.jpg"
            },
            {
                "id": "2021-9",
                "name": "hcv",
                "img": "/img/speakers/2021/hcv.jpg"
            },
            {
                "id": "2021-10",
                "name": "ms bitta",
                "img": "/img/speakers/2021/ms bitta.jpg"
            },
            {
                "id": "2021-11",
                "name": "ruth",
                "img": "/img/speakers/2021/ruth.jpg"
            }
        ]
    }
];

export default speakersData;
