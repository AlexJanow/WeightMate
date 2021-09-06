# My capstone project of <br>the Neue Fische - Bootcamp

After 8 weeks of intense coding bootcamp I was challenged to make my own app as a capstone project in a timeframe of 4 weeks.
<br>This is the result:

# WeightMate

## ❓ What is it about?

As a passionate weightliter I always log not only my bodyweight but also all my workout weights and compare them to the last workout. But it gets kind of fiddly over time doing this on a notepad on my phone. <br>Also from my experience there is no better motivation than seeing progress. <br>
That is why I was thinking a lot about how to display the progress in a meaningful way.<br>
But I am aware that specially for beginner it is also challenging to find the right exercises, so it was time for a good all-in-one solution:<br>
WeightMate was born

---

### 💥 Problem: 

- I want to log my bodyweight and display it meaningful
- I want to train but need exercises
- I want to log my training progress in a simple way
- how can I display the progress?
- how do I calculate strength in a meaningful way?

### ✅ Solution:

- pick date and save weight input to localStorage
- fetch exercise information from API
- log exercise weight/repetition input in localStorage and log it per day
- use chartjs on Home for bodyweight and exercise choice
- calculate one-repetition-maximum for meaningful strength calculation (Brzycki and Epley formula)

### 🎉 Additional features:

- home greets and also guides you to the inputs if it is your first time opening the app
- depending on browser language the exercises are shown in english or german
- exercises show description and variations
- exercises are favorable and can be found in "Favourites" at the training page
- after the first input of weights and repetitions a table gets calculated which gives you an Idea what weight to take for a certain repetition goal - very useful if you do powerlifting
- you get your PR (Personal Record) shown after an actual worthy record input
- tooltips, to give you an idea what is even happening

### 🚧 Techstack:

- HTML5
- CSS3
- JavaScript
- React
- React Router DOM
- localStorage
