// Capital, Small Letters, Special Characters, Numbers, Vowel, Consonant Count, Empty Space Count
let capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallLetters = "abcdefghijklmnopqrstuvwxyz";
let specialChar = "~`!@#$%^&*()-_+=;:'\"<>,./¥←[]→€{}™©|?\\";
let numbers = "0123456789";
let vowels = "AEIOUaeiou";
let consonant = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
let capLettCount = 0;
let smallLettCount = 0;
let specialCharCount = 0;
let numberCount = 0;
let vowelCount = 0;
let consonantCount = 0;
let spaceCount = 0;

// Selected Text Area
let inputText = document.getElementById('textarea');
// Words, Characters, and Sentences Count
let Words, trim_split_Words;
let Characters;
let Sentences;


inputText.addEventListener('input', () => {

    // Capital Letters And Small Letters Count
    for(let i = 0; i < inputText.value.length; i++){
        for(let j = 0; j < capLetters.length; j++){
            if(inputText.value[i] == capLetters[j]){
                capLettCount++;
            }
            else if(inputText.value[i] == smallLetters[j]){
                smallLettCount++;
            }
        }
    }
    document.getElementById('capital letters').innerHTML = `Capital Letters = ${capLettCount}`;
    capLettCount = 0;
    document.getElementById('small letters').innerHTML = `Small Letters = ${smallLettCount}`;
    smallLettCount = 0;

    // Special Characters Count
    for(let i = 0; i < inputText.value.length; i++){
        for(let j = 0; j < specialChar.length; j++){
            if(inputText.value[i] == specialChar[j]){
                specialCharCount++;
            }
        }
    }
    document.getElementById('special characters').innerHTML = `Special Characters = ${specialCharCount}`;
    specialCharCount = 0;

    // Numbers Count
    for(let i = 0; i < inputText.value.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(inputText.value[i] == numbers[j]){
                numberCount++;
            }
        }
    }
    document.getElementById('numbers').innerHTML = `Numbers = ${numberCount}`;
    numberCount = 0;

    // Vowels Count
    for(let i = 0; i < inputText.value.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(inputText.value[i] == vowels[j]){
                vowelCount++;
            }
        }
    }
    document.getElementById('vowels').innerHTML = `Vowels = ${vowelCount}`;
    vowelCount = 0;

    // Consonant Count
    for(let i = 0; i < inputText.value.length; i++){
        for(let j = 0; j < consonant.length; j++){
            if(inputText.value[i] == consonant[j]){
                consonantCount++;
            }
        }
    }
    document.getElementById('consonants').innerHTML = `Consonants = ${consonantCount}`;
    consonantCount = 0;

    // Empty Space Count
    for(let i = 0; i < inputText.value.length; i++){
        if(inputText.value[i] == ' '){
            spaceCount++;
        }
    }
    document.getElementById('spaces').innerHTML = `Spaces = ${spaceCount}`;
    spaceCount = 0;

    // Words Count
    trim_split_Words = inputText.value.trim().split(/[/,.!:?;\s]/);
    Words = trim_split_Words.filter( W => W != '');
    document.getElementById('words').innerHTML = `Words = ${Words.length}`;

    // Characters Count
    Characters = inputText.value.length;
    document.getElementById('characters').innerHTML = `Characters = ${Characters}`;
    Characters = 0;

    // Sentences Count
    Sentences = inputText.value.split(/[.?]/);
    document.getElementById('sentences').innerHTML = `Sentences = ${Sentences.length - 1}`;
})