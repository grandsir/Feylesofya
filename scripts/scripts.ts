export function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;

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
