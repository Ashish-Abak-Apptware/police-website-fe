// import 'server-only'

// const dictionaries = {
//   en: () => import("../../dictionaries/en.json").then((module) => module.default),
//   mr: () => import('../../dictionaries/mr.json').then((module) => module.default),
//   hn: () => import('../../dictionaries/hn.json').then((module) => module.default),
// }

// export const getDictionary = async (locale: 'en' | 'mr' | 'hn') => {
//   if (!dictionaries[locale]) {
//     throw new Error(`No dictionary found for locale: ${locale}`);
//   }
//   return dictionaries[locale];
// }