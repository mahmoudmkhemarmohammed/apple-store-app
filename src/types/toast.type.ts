export type TToast = {
  id?: string;
  title?: string;
  message: string;
  type: "success" | "warning" | "danger" | "info";
};
