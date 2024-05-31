import { IChessForm, IMessage } from ".";

export type IModelStore = {
  result: number | null;
  loading: boolean;
  message: IMessage | null;
  getResult: (data: IChessForm) => Promise<void>;
};
