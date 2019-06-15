declare module '*.css' {
  const styles: any;
  export = styles;
}
declare module '*.jpg' {
  const pathName: string;
  export default pathName;
}
declare module '*.svg' {
  const pathName: string;
  export default pathName;
}
