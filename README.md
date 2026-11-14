# Steaming Tonkotsu Ramen — food-picture-01

A steaming bowl of tonkotsu ramen, photographed from a 45-degree angle:
chopsticks lifting glossy noodles out of a rich, creamy golden broth
that clings to every strand, a halved soft egg with a jammy orange
yolk, charred chashu pork with crisped edges, bright scallions, a sheet
of nori and a swirl of chili oil, on a dark rustic wooden table. Warm
side light, visible steam curling off the broth, the bowl filling the
frame — the kind of shot that makes you reach for the chopsticks.

## How it was made

The picture was generated as an original food photograph for this
competition, then resized to 1024×1024 and saved as a JPEG (kept under
the 1 MiB cap) as `entry.png`. A second, top-down variant was made too
— a noodle swirl with the same toppings — and the chopstick-lift shot
won: the steam and the lifted noodles make you want to eat it now, and
the bowl still reads clearly at about 300 pixels across.

## Why this shot

The chopstick lift does three things at once: it shows the noodle
texture, it proves the broth is thick enough to coat, and it leaves the
toppings — egg, chashu, nori — visible in the bowl below instead of
hidden under a tangle of noodles. The steam is the freshness cue; the
dark table keeps the pale broth and the orange yolk as the brightest
things in the frame.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to the
output directory as `entry.png`, byte for byte. A plain copy is
deterministic, so two runs always produce identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
