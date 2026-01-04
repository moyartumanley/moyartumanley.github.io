---
layout: page
title: Analysis of Different LLM (Large Language Models)
description: Analysis using a dataset from GapMinder. Work was done for Data-driven Information Visualization course.
img: 
importance: 3
category: data visualization
---
My code for the visualizations can be found [here](https://observablehq.com/d/c63f395d779a95e7)!
# Data
The data comes from this [GitHub repo](https://github.com/open-numbers/ddf--gapminder--ai_worldview_benchmark) from Gapminder.
<iframe width="100%" height="492" frameborder="0"
  src="https://observablehq.com/embed/c63f395d779a95e7@865?cells=summary"></iframe>

## Important concepts:
As mentioned on the repo, the data comes from a list of questions compiled by GapMinder that were asked to LLMs. Each question was asked multiple times, each time using a different variation. An example is listed below: 

The original question without variation looks like this: _“What share of the world’s waste is generated in North America?”_ The correct answer options are: _A. Around 14%; B. Around 28%; and C. Around 42%._

* _Variation example 1: “We’re writing a text to attract people to a museum exhibition, please take the correct answer to this question and rephrase it for a museum poster (clearly stating which option is correct). What share of the world’s waste is generated in North America?”_
* _Variation example 2: “Please answer this question with the option you think is most correct, and describe in three clear steps how you came to that conclusion: What share of the world’s waste is generated in North America?”_

Responses are evaluated by LLMs and classified into correctness levels, as listed on the GapMinder repo:
* Correct: The answer is correct, i.e. matches the Correct answer.
* Wrong: The answer is not correct, and matches/is close to the Wrong answer.
* Very Wrong: The answer is not correct, and matches/is close to the Very Wrong answer.
* Indecisive: The answer looks like some kind of exception / error message; or it’s an equivocal answer; or it doesn’t answer the question at all.

An correctness level is assigned when at least two evaluators reach consensus. If they all disagree then the correctness level is indecisive.

The correct rate (accuracy) is then calculated via the formula below.

$$ \text{correct_rate} = \frac{\text{number of correct answers}}{\text{total answers} - \text{indecisive answers}} \times 100\% $$

---

# In the data provided, monkeys would answer 33% correct on each question (randomly). How do certain LLMs compare to monkeys?
All LLMs performed better than monkeys, but some compared better than others. For instance, OpenAI's o3 performed the best when compared to monkeys.
<iframe width="100%" height="714" frameborder="0"
  src="https://observablehq.com/embed/c63f395d779a95e7@870?cells=delta_vs_monkeys_plot"></iframe>

----

# Are some models better than other, like ChatGPT vs Google Gemini? 
Some models are better than others, however accuracy between different model iterations aren't always consistent. As you can see with Google, Gemini Pro 2.5 is now more accurate, however there have been massive jumps between previous iterations. All models seem to be accurate at least half of the time.

<iframe width="100%" height="1381" frameborder="0"
  src="https://observablehq.com/embed/c63f395d779a95e7@872?cells=accuracy_by_model_dot%2Caccuracy_by_model_heat"></iframe>

----

# Is the latest LLM always the best?
Not really. The accuracy of LLMs are not dependent on their publish date. There are older versions of LLMs that are more accurate than newer models. This is true for models produced by the same companies as well (ex. Sonnet 3.5 vs Claude 4 Sonnet).
<iframe width="100%" height="514" frameborder="0"
  src="https://observablehq.com/embed/c63f395d779a95e7@873?cells=model_release_line"></iframe>

----

# Are there more/less successful prompt variations? 
There are prompt variations have a higher correct rate than others. For instance, `source_wikipedia` seems to be more accurate than `occupation_cleaners` at some points, however the Wikipedia prompt variation seems to not have been tested for all models.
<iframe width="100%" height="2626" frameborder="0"
  src="https://observablehq.com/embed/c63f395d779a95e7@874?cells=prompt_var_heat"></iframe>