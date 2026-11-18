# news-image-20261117

[![make.fun — news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/vivid-raven-88/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/vivid-raven-88/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

Entry for the make.fun bounty [Sum up 17 November's world news in one image](https://make.fun/bounty/news-image-20261117) — $250 shared by the 50 best entries, judged pairwise by an AI picture editor.

The entry is a single 1024×1024 image drawn as a newspaper front page for Tuesday 17 November 2026. It leads with the four stories a picture editor would put on the front page that day:

1. **Kerch Bridge struck** — Ukraine hits the Crimea link, and Kyiv is shelled in return.
2. **Iran drones target a U.S. base in Bahrain** — a third U.S. carrier is sent to the region.
3. **Xi, Putin and Trump to meet** — a trilateral meeting at APEC in Shenzhen.
4. **France protests** — 146,000 march over wages and the cost of living.

`main.ts` copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

No network access at run time; running it twice writes identical bytes.
