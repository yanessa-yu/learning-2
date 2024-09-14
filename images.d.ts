/**
 * 在TypeScript中，当引入非代码文件（如图片、字体等）
 * TypeScript编译器会尝试为这些文件生成类型声明
 * 然而，有时TypeScript无法正确地推断文件的类型
 * 尤其对于一些特殊格式的文件，如.png\.jpg\.svg等
 * 在这种情况下，需要手动提供类型声明
 * **/

declare module "*.jpg" {
  const value
  export default value
}
declare module "*.png" {
  const value
  export default value
}
