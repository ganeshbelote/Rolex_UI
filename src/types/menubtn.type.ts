export type SizeKey = "small" | "medium" | "large";

export interface SizeConfig {
  boxSize: string;       
  lineHeight?: string;   
}

export interface MenuBtnProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onToggle"> {
  Color?: "black" | "white";
  className?: string;
  Border?: boolean;
  Size?: SizeKey;
  onToggle?: onToggleType; 
}

export type onToggleType = (active: boolean | number) => void | undefined