"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { IChessForm } from "@interfaces/IChess";
import { Button, Input, Card } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { FaChessKing, FaChess } from "react-icons/fa";
import { FaChessBoard, FaRegChessKing } from "react-icons/fa6";
import schemaChess from "@schemas/schemaChess";
import useModelStore from "@store/modelStore";

const ChessForm = () => {
  const { getResult, loading, message } = useModelStore();
  const [isToastOpen, setIsToastOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IChessForm>({
    resolver: zodResolver(schemaChess),
    mode: "onChange",
  });

  const onSubmit = (data: IChessForm) => {
    getResult(data);
  };

  useEffect(() => {
    if (message) {
      toast(message.description, {
        type: message.status,
        onOpen: () => {
          if (message.status === "success") {
            setIsToastOpen(true);
          }
        },
        onClose: () => {
          reset();
          setIsToastOpen(false);
        },
      });
    }
  }, [message, reset]);

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-primary-100 to-secondary-100 text-foreground min-h-[calc(100vh-65px)] py-6">
      <div className="container max-w-4xl px-6 md:px-0 flex flex-col items-center">
        <Card className="w-full p-8 shadow-2xl rounded-lg bg-white text-foreground">
          <div className="flex justify-center mb-4 gap-4">
            <FaChessBoard className="w-16 h-16 text-primary-700 animate-bounce" />
            <h2 className="text-4xl font-bold text-center text-foreground">
              Formulario
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 bg-primary-50 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-700">
                  <FaRegChessKing className="inline mr-2" /> Información del
                  jugador blanco
                </h3>
                <div className="space-y-4">
                  <Input
                    label="Elo"
                    type="number"
                    fullWidth
                    variant="bordered"
                    {...register("WhiteElo")}
                    isInvalid={Boolean(errors.WhiteElo)}
                    errorMessage={errors.WhiteElo?.message}
                    min={0}
                  />
                  <Input
                    label="Cambio en la calificación del elo"
                    type="number"
                    fullWidth
                    variant="bordered"
                    {...register("WhiteRatingDiff")}
                    isInvalid={Boolean(errors.WhiteRatingDiff)}
                    errorMessage={errors.WhiteRatingDiff?.message}
                  />
                  <Input
                    label="Tiempo total de Juego"
                    type="number"
                    fullWidth
                    variant="bordered"
                    {...register("White_playTime_total")}
                    isInvalid={Boolean(errors.White_playTime_total)}
                    errorMessage={errors.White_playTime_total?.message}
                    min={0}
                  />
                  <Input
                    label="Total de partidas"
                    type="number"
                    fullWidth
                    variant="bordered"
                    {...register("White_count_all")}
                    isInvalid={Boolean(errors.White_count_all)}
                    errorMessage={errors.White_count_all?.message}
                    min={0}
                  />
                </div>
              </Card>
              <Card className="p-6 bg-secondary-50 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-secondary-700">
                  <FaChessKing className="inline mr-2" /> Información del
                  jugador negro
                </h3>
                <div className="space-y-4">
                  <Input
                    label="Elo"
                    type="number"
                    fullWidth
                    variant="bordered"
                    {...register("BlackElo")}
                    isInvalid={Boolean(errors.BlackElo)}
                    errorMessage={errors.BlackElo?.message}
                    min={0}
                  />
                  <Input
                    label="Cambio en la calificación del elo"
                    type="number"
                    fullWidth
                    variant="bordered"
                    {...register("BlackRatingDiff")}
                    isInvalid={Boolean(errors.BlackRatingDiff)}
                    errorMessage={errors.BlackRatingDiff?.message}
                  />
                  <Input
                    label="Tiempo total de Juego"
                    type="number"
                    fullWidth
                    variant="bordered"
                    {...register("Black_playTime_total")}
                    isInvalid={Boolean(errors.Black_playTime_total)}
                    errorMessage={errors.Black_playTime_total?.message}
                    min={0}
                  />
                  <Input
                    label="Total de partidas"
                    type="number"
                    fullWidth
                    variant="bordered"
                    {...register("Black_count_all")}
                    isInvalid={Boolean(errors.Black_count_all)}
                    errorMessage={errors.Black_count_all?.message}
                    min={0}
                  />
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Input
                label="Total de movimientos"
                type="number"
                fullWidth
                variant="bordered"
                {...register("TotalMoves")}
                isInvalid={Boolean(errors.TotalMoves)}
                errorMessage={errors.TotalMoves?.message}
                min={0}
              />
              <Input
                label="Control de tiempo"
                type="number"
                fullWidth
                variant="bordered"
                {...register("TimeControl")}
                isInvalid={Boolean(errors.TimeControl)}
                errorMessage={errors.TimeControl?.message}
                min={0}
              />
            </div>
            <Button
              disabled={isToastOpen}
              type="submit"
              fullWidth
              color="primary"
              isLoading={loading}
              startContent={<FaChess />}
            >
              {loading ? "Buscando..." : "Predecir"}
            </Button>
          </form>
        </Card>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ChessForm;
