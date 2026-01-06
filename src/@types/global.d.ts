declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.css";

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.mp3";

// essa casa ta
