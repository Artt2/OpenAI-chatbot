import { Dispatch, SetStateAction } from "react";

export type User = {
  name: string;
  email: string;
};

export type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  //functions that take params, which dont return values but Promise objects that will be resolved
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>
};

export type NavigationLinkProps = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>
};

export type FormInputProps = {
  name: string;
  type: string;
  label: string;
};

export type ChatRole = "user" | "assistant";

export type MessageBlocksType = string[];

export type Message = {
  role: ChatRole;
  content: string;
};

export type ChatContextType = {
  chatMessages: Message[];
  setChatMessages: Dispatch<SetStateAction<Message[]>>;
};