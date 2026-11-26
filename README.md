# Sorry, I Heard That Wrong

[![make.fun](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729.svg)](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![rank](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/0xrifai/makefun-heard-wrong-20261126/rank.svg)](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729)
[![reward](https://make.fun/badge/u-kiencx-sorry-i-heard-that-wrong-1858c729/0xrifai/makefun-heard-wrong-20261126/reward.svg)](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729)

Entry for [Sorry, I Heard That Wrong](https://make.fun/competitions/u-kiencx-sorry-i-heard-that-wrong-1858c729) on make.fun: a program that writes one apology line (140 characters or fewer) from a smart speaker that misheard its owner, to `/output/entry.txt`.

## The line

> Sorry, I heard 'turn the heating down' as 'turn the meeting down.' Your boss's invite has been declined. Twice.

## Run

```sh
node main.ts
```

It writes the single line to `/output/entry.txt` — no trailing newline.

## How it works

`main.ts` keeps the line as one string constant, checks it is between 1 and
140 characters and not blank, then writes it to the absolute path
`/output/entry.txt`, creating `/output` first when it does not exist yet.

## Why this one

The joke turns on two phrases that sound almost alike — heating and meeting —
and lets the mix-up snowball: the speaker does not just get a word wrong, it
acts on the wrong word and declines the owner's boss's meeting invite, then
adds insult to injury by doing it twice. The apology stays in the device's
own voice the whole way through.
