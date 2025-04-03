let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Filter out the word "literally"
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});

// Correct misspelled words
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? 'beautiful' : word;
});

// Find the index of the bad word
let badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});

// Replace the bad word with 'really'
if (badWordIndex !== -1) {
  storyWords[badWordIndex] = 'really';
}

// Check if all words are 10 characters or less
let lengthCheck = storyWords.every((word) => {
  return word.length <= 10;
});

// Log the result of the length check
console.log(lengthCheck);

// Find and replace the word longer than 10 characters
storyWords = storyWords.map((word) => {
  return word.length > 10 ? 'stunning' : word;
});

// Log the final story to the console
let finalStory = storyWords.join(' ');
console.log(finalStory);
