import { schemaChess } from "@schemas/schemaChess";
import { z } from "zod";

export type IChessForm = z.infer<typeof schemaChess>;
