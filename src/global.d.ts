declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}

declare module '*.css' {
  const content: {[className: string]: string};
  export default content;
}

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.mp3' {
  const content: string;
  export default content;
}
declare module '*.woff';
declare module '*.ttf';
