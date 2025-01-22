let namePrompt = prompt("Ismingizni kiriting: ");
let nameLetter = prompt("Biror harf kiriting: ");
if (namePrompt.includes(nameLetter))
    alert(namePrompt + " ismida " + nameLetter + " harfi bor"); {
} if (namePrompt.includes(nameLetter) == false) {
    alert(namePrompt + " ismida " + nameLetter + " harfi yo'q");
}
console.log(namePrompt + " ismida " + nameLetter + " harfi bor");
console.log(namePrompt + " ismida " + nameLetter + " harfi yo'q");