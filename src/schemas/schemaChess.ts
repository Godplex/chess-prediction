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
      .number({ required_error: "White Elo is required" })
      .nonnegative({ message: "White Elo must be a positive number" })
  ),
  WhiteRatingDiff: z.preprocess(
    preprocessNumber,
    z.number({ required_error: "White Rating Diff is required" })
  ),
  White_playTime_total: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "White Play Time Total is required" })
      .nonnegative({
        message: "White Play Time Total must be a positive number",
      })
  ),
  White_count_all: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "White Count All is required" })
      .nonnegative({ message: "White Count All must be a positive number" })
  ),
  BlackElo: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "Black Elo is required" })
      .nonnegative({ message: "Black Elo must be a positive number" })
  ),
  BlackRatingDiff: z.preprocess(
    preprocessNumber,
    z.number({ required_error: "Black Rating Diff is required" })
  ),
  Black_playTime_total: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "Black Play Time Total is required" })
      .nonnegative({
        message: "Black Play Time Total must be a positive number",
      })
  ),
  Black_count_all: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "Black Count All is required" })
      .nonnegative({ message: "Black Count All must be a positive number" })
  ),
  TotalMoves: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "Total Moves is required" })
      .nonnegative({ message: "Total Moves must be a positive number" })
  ),
  TimeControl: z.preprocess(
    preprocessNumber,
    z
      .number({ required_error: "Time Control is required" })
      .nonnegative({ message: "Time Control must be a positive number" })
  ),
});

export default schemaChess;
