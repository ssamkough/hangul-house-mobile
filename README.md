# hangul house mobile

mobile version of the [hangul.house](https://hangul.house)

todos:

basics before releasing:

- try out unidici over axios

- pull phrases from supabase
- make sure generating types works: https://supabase.com/docs/guides/api/generating-types
- have a start button before it starts - the start button starts a timer (that's shown in the upper-right)
- for every input that’s correct or incorrect, a toast pops from above: https://docs.expo.dev/ui-programming/react-native-toast/#cross-platform--react-native-root-toast
    - incorrect make the border of the text input red ; for correct make it green
- at the end, the score is how long it took * the amount of questions
- add more phrases to DB (https://papago.naver.com/?sk=en&tk=ko&hn=0&st=Please)
    - https://www.transparent.com/learn-korean/phrases.html#
    - https://www.90daykorean.com/korean-phrases/
    - https://theculturetrip.com/asia/south-korea/articles/15-korean-phrases-you-need-to-know/

after:

- figure out how to add the sound files
- make it tabbed - add a help tab (that includes all the phrases)
    - add all the letters somewhere in there - maybe have the help tab also be tabbed (divide it by phrases and letters)