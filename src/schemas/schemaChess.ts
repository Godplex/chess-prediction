import { z } from "zod";

const preprocessNumber = (val: unknown) => {
  if (typeof val === "string" && val.trim() === "") {
    return undefined;
  }
  return parseFloat(val as string);
};

const schemaChess = z.object({
  WhiteElo: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "El elo es obligatorio." })
      .nonnegative({ message: "El Elo debe ser un número positivo." })
  ),
  WhiteRatingDiff: z.preprocess(
    preprocessNumber,
    z.number({
      required_error: "El cambio en la calificación del elo es obligatorio.",
    })
  ),
  White_playTime_total: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "El tiempo total de juego es obligatorio." })
      .nonnegative({
        message: "El tiempo total de juego debe ser un número positivo.",
      })
  ),
  White_count_all: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "El total de partidas es obligatorio." })
      .nonnegative({
        message: "El total de partidas debe ser un número positivo.",
      })
  ),
  BlackElo: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "El elo es obligatorio." })
      .nonnegative({ message: "El elo debe ser un número positivo." })
  ),
  BlackRatingDiff: z.preprocess(
    preprocessNumber,
    z.number({
      required_error: "El cambio en la calificación del elo es obligatorio.",
    })
  ),
  Black_playTime_total: z.preprocess(
    preprocessNumber,
    z
      .number({
        required_error: "El tiempo total de juego es obligatorio.",
      })
      .nonnegative({
        message: "El tiempo total de juego debe ser un número positivo.",
      })
  ),
  Black_count_all: z.preprocess(
    preprocessNumber,
    z
      .number({
        required_error: "El total de partidas es obligatorio.",
      })
      .nonnegative({
        message: "El total de partidas debe ser un número positivo.",
      })
  ),
  TotalMoves: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "El total de movimientos es obligatorio." })
      .nonnegative({
        message: "El total de movimientos debe ser un número positivo.",
      })
  ),
  TimeControl: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "El control de tiempo es obligatorio." })
      .nonnegative({
        message: "El control de tiempo debe ser un número positivo.",
      })
  ),
});

export default schemaChess;
