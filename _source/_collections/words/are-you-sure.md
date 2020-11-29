---
title: Are you sure?
date: 2017-03-01
---

I was Twittering away the other day, and [Prettier](https://prettier.io/) came across my feed. Prettier turns the conceptual moorings of lint on their head. Instead of “Well, actually”-ing you when you make a commit and forcing you to fix whatever pedantic issues it’s squawking about, it just… _fixes them_.

As you can guess, I have an uneasy relationship with lint. I value what lint brings to the table, but I don’t like my tools saying, _“You need to do x before I’ll do what you want.”_ Who’s serving who here? **You’re a hammer. _Swing_.**

This is a niche example of software behaving inconsiderately. A common example takes the form of three words guaranteed to upend the user / tool power dynamic with every invocation: _“are you sure?”_

It seems like an innocuous enough question to ask before you complete an action on their behalf, but think about how it would play out in real life.

**Person A:** _“I’ve got my hands full with all this stuff. Mind opening the door?”_

**Person B:** _“Are you sure you want to open the door?”_

**Person A:** _“Uh, yeah. I wouldn’t have asked if I wasn’t.”_

**Person B:** _“OK, I’ll open the door.”_

**Person A:** _“Great, can you close it after me? I don’t want the dog to get out.”_

**Person B:** _“Are you sure you want me to close the door?”_

**Person A:** _“I really fucking hate you right now.”_

You’d never do this in real life, but it happens all the time in software. Alan Cooper nails exactly what’s wrong with this question in his seminal book, About Face:

> “Interactive products should stand by their convictions. If we tell the computer to discard a file, it shouldn’t ask, “Are you sure?” Of course we’re sure; otherwise, we wouldn’t have asked. It shouldn’t second-guess us or itself.
>
> On the other hand, if the computer has any suspicion that we might be wrong (which is always), it should anticipate our changing our minds by being prepared to undelete the file upon our request.
>
> How often have you clicked the Print button and then gone to get a cup of coffee, only to return to find a fearful dialog box quivering in the middle of the screen, asking, “Are you sure you want to print?” This insecurity is infuriating and the antithesis of considerate human behavior.”
>
> —Alan Cooper

Self-confidence is one dimension of Cooper’s core design principle: **Software should behave like a considerate human being.**

What are some of the other dimensions that make a human (and software) considerate? They use common sense, don’t ask a bunch of unnecessary questions, keep you informed, help you avoid awkward mistakes, fail gracefully, anticipate the needs of others, and are preceptive and conscientious.

If you’re trying to make considerate software, don’t ask your user if they’re sure. Assume they’re competent humans who mean what they intend. If the action is potentially destructive, give them a way to gracefully recover if they change their mind (undo/redo, archive states, auto-save drafts, etc).

If you’ve fallen into the “Are you sure?” trap, well, welcome to the club. I certainly have, and so have a bunch of others. Sometimes you don’t realize you’re doing something inconsiderate, and sometimes time and money dictate other choices.

But next time you find yourself reaching for that question, take a step back and think about what you’re trying to accomplish. Do you really need to ask the user that? Is there another approach you could take that would be more considerate? If so, take it. You’ll be rewarded with more satisfied customers for your effort.
