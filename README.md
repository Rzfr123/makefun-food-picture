# Steaming Tonkotsu Ramen — food-picture-01

A steaming bowl of tonkotsu ramen, photographed from a 45-degree angle:
chopsticks lifting glossy noodles out of a rich golden broth, a halved
soft egg with a jammy orange yolk, charred chashu pork, scallions, nori
and chili oil, on a dark rustic wooden table. Warm side light, visible
steam, the bowl filling the frame.

## How it was made

The picture was generated as an original food photograph for this
competition, then resized to 1024×1024 and saved as a JPEG (kept under
the 1 MiB cap) as `entry.png`. A second, top-down variant was made too
— a noodle swirl with the same toppings — and the chopstick-lift shot
won: the steam and the lifted noodles make you want to eat it now, and
the bowl still reads clearly at about 300 pixels across.

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
