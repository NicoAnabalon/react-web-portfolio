import { ReactElement } from "react";

export type MenuOptions = {
  id: string;
  name: string;
  icon: ReactElement;
  url: string;
};

export type ExternalMenuOptions = {
  id: string;
  icon: ReactElement;
  url: string;
};
