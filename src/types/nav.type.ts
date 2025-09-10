export interface MenuContentType {
  Href?: string;
  Heading: string;
  Description: string;
}

export interface MenuOptionType {
  Option: string;
  Content: MenuContentType[];
}