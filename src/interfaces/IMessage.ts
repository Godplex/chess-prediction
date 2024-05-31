export interface IMessage {
  status: "success" | "warning" | "error";
  description: string;
}
