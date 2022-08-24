export function shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}



const AuthorRole = new Map<string, string>([
    ["lead", "Yazar"],
    ["second", "İkinci Yazar"],
    ["collabrative", "Ortak Yazar"],
    ["guest", "Misafir Yazar"],
    ["editor", "Editör"],
]);

export function toLocalizedAuthor(arg: string): string {
    return AuthorRole.get(arg)!;
}

const FeylesofRole = new Map<string, string>([
    [
        "author", "bg-blue-200 text-blue-800 ",
    ],
    [
        "user", "bg-red-100 text-gray-600"
    ],
    [
        "verified_user", "bg-gray-700 text-gray-300"
    ]
])

const LocalizedFeylesof = new Map<string, string>([
    [
        "author", "Yazar",
    ],
    [
        "user", "Üye"
    ],
    [
        "verified_user", "Onaylanmış Üye"
    ]
])


export function getFeylesofBadge(arg: string): string {
    return FeylesofRole.get(arg)!;
}

export function toLocalizedFeylesof(arg: string): string {
    return LocalizedFeylesof.get(arg)!;
}
