document.addEventListener("DOMContentLoaded", function () {
  const storyText = document.getElementById("story-text");
  const choices = document.getElementById("choices");

  const story = [
    {
      text: "You wake up in a forest. What do you do?",
      choices: [
        { text: "Look around", next: 1 },
        { text: "Go back to sleep", next: 2 },
      ],
    },
    {
      text: "You see a path leading out of the forest. What do you do?",
      choices: [
        { text: "Follow the path", next: 3 },
        { text: "Stay where you are", next: 4 },
      ],
    },
    {
      text: "You fall back asleep and have a strange dream.",
      choices: [],
    },
    {
      text: "You find a village at the end of the path.",
      choices: [],
    },
    {
      text: "You stay in the forest and eventually find a way out on your own.",
      choices: [],
    },
  ];

  function displayStory(index) {
    const currentPart = story[index];
    storyText.innerText = currentPart.text;
    choices.innerHTML = "";
    currentPart.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.innerText = choice.text;
      button.classList.add("choice");
      button.addEventListener("click", () => displayStory(choice.next));
      choices.appendChild(button);
    });
  }

  displayStory(0);
});
