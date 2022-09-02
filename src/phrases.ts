export interface Phrase {
    korean: string;
    meaning: string;
    romanization: string;
}

export const phrases: Phrase[] = [
    { korean: '네', meaning: 'yes', romanization: 'ne' },
    { korean: '아니요', meaning: 'no', romanization: 'aniyo' },
    { korean: '감사합니다', meaning: 'thank you', romanization: 'gamsahamnida' },
];

/**
 * TODO:
 * to add: “chopsticks”, “best”, “good”, “awesome”, word to phrases
 */