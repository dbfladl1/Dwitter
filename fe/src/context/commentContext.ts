import { createContext } from "react";

export type CommentContextType = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export const CommentContext = createContext<CommentContextType>({
  text: "",
  setText: () => {},
});
