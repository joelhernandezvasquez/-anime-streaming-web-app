
import { Anime } from "@prisma/client";

export type AnimePost = Omit<Anime,"id">