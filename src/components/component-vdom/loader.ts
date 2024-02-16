// Do not change this file.
export { ComponentVdom } from "./component-vdom";
declare global {
namespace preact.JSX {
      interface IntrinsicElements {
      'component-vdom': any;
      }
    }
  }