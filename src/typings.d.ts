declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  // import * as React from 'react';
  //
  // export const ReactComponent: React.FunctionComponent<React.SVGProps<
  //   SVGSVGElement
  // >>;

  const src: string;
  export default src;
}

declare module '*.m.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.m.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
