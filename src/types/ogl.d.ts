declare module 'ogl' {
  export class Renderer {
    constructor(opts?: any);
    gl: WebGLRenderingContext & { canvas: HTMLCanvasElement };
    setSize: (w: number, h: number) => void;
  }
  export class Program {
    constructor(gl: WebGLRenderingContext, opts: any);
    uniforms: Record<string, { value: any }>;
  }
  export class Mesh {
    constructor(gl: WebGLRenderingContext, opts: any);
  }
  export class Color {
    constructor(r: number, g: number, b: number);
  }
  export class Triangle {
    constructor(gl: WebGLRenderingContext);
  }
}
