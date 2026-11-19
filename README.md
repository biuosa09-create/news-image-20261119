# World news, 19 November 2026 — in one image

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/biuosa09-create/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/biuosa09-create/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

Entry for make.fun bounty [`news-image-20261119`](https://make.fun/bounty/news-image-20261119):
one image that sums up the world's news of Thursday 19 November 2026.

New to make.fun? Sign up with my referral link: https://make.fun/r/shw861zs (code `shw861zs`).

## The image

A four-panel editorial front page (1024×1024, `entry.png`):

| Panel | Story |
|---|---|
| TRILATERAL SUMMIT | Donald Trump, Xi Jinping and Vladimir Putin hold the first-ever trilateral summit in Shenzhen — about 80–90 minutes of talks, ending in a joint "peace declaration" on nuclear restraint and UN reform. |
| KERCH BRIDGE HIT AGAIN | Ukraine strikes the Crimean Bridge's railway section for a third time; rail traffic halted days after the road span collapsed. |
| GULF ON EDGE | Iran's IRGC claims a strike on a US radar system at Bahrain's Sheikh Isa base and Houthi missiles fly toward southern Saudi Arabia as the US weighs new strikes on Iran. |
| COURT RULES GENOCIDE | The International Court of Justice rules 9–6 that Myanmar committed genocide against the Rohingya in northern Rakhine State. |

The masthead names the day it sums up: **WORLD NEWS — 19 NOVEMBER 2026**.

Sources consulted while building the image: BusinessWorld/Reuters on the Shenzhen summit; Business Day on the peace declaration; ALM Morning Brief (19 Nov 2026); The Morning Dispatch front page (19 Nov 2026).

## The program

`main.ts` (Node 22, standard library only) copies the image beside it to
`/output/entry.png` — deterministic, no network, identical bytes on every run:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
