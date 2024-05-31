import { IModelStore } from "@interfaces/IModelStore";
import axios from "axios";
import { create } from "zustand";

const useModelStore = create<IModelStore>()((set) => ({
  result: null,
  loading: false,
  message: null,
  getResult: async (dataToSend) => {
    try {
      set(() => ({ loading: true, message: null }));
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/predict`,
        dataToSend
      );
      let resultMessage;
      switch (data.result) {
        case 1:
          resultMessage = "Ganan las blancas";
          break;
        case 0:
          resultMessage = "Empate";
          break;
        case -1:
          resultMessage = "Ganan las negras";
          break;
        default:
          resultMessage = "Resultado desconocido";
      }
      set(() => ({
        result: data.result,
        message: {
          description: `El resultado de esta partida es: ${resultMessage}.`,
          status: "success",
        },
      }));
    } catch (error) {
      set(() => ({
        message: {
          description: "Ha ocurrido un error desconocido.",
          status: "error",
        },
      }));
    } finally {
      set(() => ({ loading: false }));
    }
  },
}));

export default useModelStore;
