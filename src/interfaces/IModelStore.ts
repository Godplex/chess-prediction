import { IChessForm, IMessage } from ".";

export type IModelStore = {
  result: number | null;
  loading: boolean;
  message: IMessage | null;
  resetMessage: () => void;
  getResult: (data: IChessForm) => Promise<void>;
};
