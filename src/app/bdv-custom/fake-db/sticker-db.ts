export interface Sticker {
    id?: string;
    name?: string;
    imgUrl?: string;
    textSearch?: string;
    child?: Sticker[];
}

export const stickerData: Sticker[] = [
    // mèo capo
    {
        id: 'ebd32123-57c4-4c95-a749-8725aaf016d7',
        name: 'capo_main',
        imgUrl: 'assets/sticker/capo/main.PNG',
        textSearch: 'main capo, siêu mèo capo, capo cat',
        child: [
            {
                id: '35cb4eee-27ff-4508-917b-12abd98bc469',
                name: '00',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_00.png',
                textSearch: 'heart, love, kiss, thả tim, yêu, hôn',
            },
            {
                id: '79097a27-230b-4f21-9ae9-d30197ae0f3a',
                name: '01',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_01.png',
                textSearch: 'laugh, shy, cười, ngại',
            },
            {
                id: '6dd28e56-08fc-4622-8a4b-caa5048dfe47',
                name: '02',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_02.png',
                textSearch: 'mưa',
            },
            {
                id: '73c13a16-0edd-43d4-a9ae-a7dd98c4d46f',
                name: '03',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_03.png',
                textSearch: 'bắt nạt, xoa đầu',
            },
            {
                id: '9f8968e7-a86e-4ba0-8456-c8b0ba92259a',
                name: '04',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_04.png',
                textSearch: 'cry, khóc',
            },
            {
                id: 'ad2a0316-9d6f-49c9-883e-77016f4d9e53',
                name: '05',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_05.png',
                textSearch: 'question, hỏi chấm, ?',
            },
            {
                id: 'f6f90447-bfc1-4045-8942-d747de7e9a8e',
                name: '06',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_06.png',
                textSearch: 'like, thích',
            },
            {
                id: '950e6fd9-f315-485a-abab-fb5c64ca8a49',
                name: '07',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_07.png',
                textSearch: 'kiss, hôn',
            },
            {
                id: 'f9ff89b4-6279-446d-8836-8506b9f2d63f',
                name: '08',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_08.png',
                textSearch: 'heart, thả tim',
            },
            {
                id: '605c1725-bdc4-4349-9b18-b8dfb0462239',
                name: '09',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_09.png',
                textSearch: 'no, lắc đầu, ngán ngẩm, không ổn',
            },
            {
                id: '61f751aa-cf3f-4ae5-8152-6a4001402a65',
                name: '10',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_10.png',
                textSearch: 'break heart, đập vỡ tim',
            },
            {
                id: 'c2642df3-ca16-485c-b77b-187e799714b5',
                name: '11',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_11.png',
                textSearch: 'funny, vui nhộn, nhảy nhót',
            },
            {
                id: '931c287b-097c-41ad-8c3a-05faa408f383',
                name: '12',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_12.png',
                textSearch: '',
            },
            {
                id: '60956f81-ea19-48cc-9f24-8d77668979c8',
                name: '13',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_13.png',
                textSearch: 'lắc đầu',
            },
            {
                id: '9ae10264-8f0d-4452-9c74-a8ade0f28f7e',
                name: '14',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_14.png',
                textSearch: 'ba chấm, 3 chấm, đang suy nghĩ, đang đợi',
            },
            {
                id: '00c441fc-ced1-4925-a955-f35e401e1de1',
                name: '15',
                imgUrl: 'assets/sticker/capo/bugcat_capoo_15.png',
                textSearch: '',
            },
        ]
    },
    {
        // brown and friends
        id: 'f94f6d79-73e0-4793-97c5-82a3e9031df8',
        name: 'brown_and_friend_main',
        imgUrl: 'assets/sticker/brown_and_friends/main.PNG',
        textSearch: 'main brown and friend',
        child: [
            {
                id: '95c0ac61-d9dc-4f9c-9419-6aa3dbe5d3d7',
                name: '00',
                imgUrl: 'assets/sticker/capo/brown_and_friends_00.png',
                textSearch: 'hi, hello, xin chào đểu',
            },
            {
                id: '1f7c2384-107f-4fe3-b178-f4144e9d9a55',
                name: '01',
                imgUrl: 'assets/sticker/capo/brown_and_friends_01.png',
                textSearch: 'like, thích',
            },
            {
                id: 'b3135293-8b57-4107-bdd5-b5c863fe14a9',
                name: '02',
                imgUrl: 'assets/sticker/capo/brown_and_friends_02.png',
                textSearch: 'confuse, không hiểu gì',
            },
            {
                id: 'f14ea1bb-d17a-4097-b449-dc93bb244db9',
                name: '03',
                imgUrl: 'assets/sticker/capo/brown_and_friends_03.png',
                textSearch: '',
            },

        ]
    }
];
