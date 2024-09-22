import onlineTestImg from "./assets/images/online-test.svg";
import resultImg from "./assets/images/result.svg";

export const assets = {
  onlineTestImg,
  resultImg,
};

// Questions and Options
export const questions = [
  {
    text: "You went to a party last night and when you arrived to school the next day, everybody is talking about something you didn’t do. What will you do?",
    options: [
      {
        id: 0,
        text: "Avoid everything and go with your friends",
        letter: "a",
      },
      {
        id: 1,
        text: "Go and talk with the person that started the rumors",
        letter: "b",
      },
      { id: 2, text: "Go and talk with the teacher", letter: "c" },
    ],
  },

  {
    text: "What quality do you excel the most?",
    options: [
      {
        id: 0,
        text: "Empathy",
        letter: "a",
      },
      {
        id: 1,
        text: "Curiosity",
        letter: "b",
      },
      { id: 2, text: "Perseverance", letter: "c" },
    ],
  },

  {
    text: "You are walking down the street when you see an old lady trying to cross, what will you do?",
    options: [
      {
        id: 0,
        text: "Go and help her",
        letter: "a",
      },
      {
        id: 1,
        text: "Go for a policeman and ask him to help",
        letter: "b",
      },
      { id: 2, text: "Keep walking ahead", letter: "c" },
    ],
  },

  {
    text: "You had a very difficult day at school, you will maintain a ____ attitude",
    options: [
      {
        id: 0,
        text: "Depends on the situation",
        letter: "a",
      },
      {
        id: 1,
        text: "Positive",
        letter: "b",
      },
      { id: 2, text: "Negative", letter: "c" },
    ],
  },

  {
    text: "You are at a party and a friend of yours comes over and offers you a drink, what do you do?",
    options: [
      {
        id: 0,
        text: "Say no thanks",
        letter: "a",
      },
      {
        id: 1,
        text: "Drink it until it is finished",
        letter: "b",
      },
      { id: 2, text: "Ignore him and get angry at him", letter: "c" },
    ],
  },

  {
    text: "You just started in a new school, you will...",
    options: [
      {
        id: 0,
        text: "Go and talk with the person next to you",
        letter: "a",
      },
      {
        id: 1,
        text: "Wait until someone comes over you",
        letter: "b",
      },
      { id: 2, text: "Not talk to anyone", letter: "c" },
    ],
  },

  {
    text: "In a typical Friday, you would like to...",
    options: [
      {
        id: 0,
        text: "Go out with your close friends to eat",
        letter: "a",
      },
      {
        id: 1,
        text: "Go to a social club and meet more people",
        letter: "b",
      },
      { id: 2, text: "Invite one of your friends to your house", letter: "c" },
    ],
  },

  {
    text: "Your relationship with your parents is...",
    options: [
      {
        id: 0,
        text: "I like both equally",
        letter: "a",
      },
      {
        id: 1,
        text: "I like both equally",
        letter: "b",
      },
      { id: 2, text: "I like my Mom the most", letter: "c" },
    ],
  },
];

// Test Results
export const results = [
  {
    text: "Self-Management: You manage yourself well; You take responsibility for your own behavior and well-being.",
  },
  {
    text: "Empathy: You are emphatic. You see yourself in someone else’s situation before doing decisions. You tend to listen to other’s voices.",
  },
  {
    text: "Self-Awareness: You are conscious of your own character, feelings, motives, and desires. The process can be painful but it leads to greater self-awareness.",
  },
];
