// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";

// export const locales=['en','mr','hn'];

// export default getRequestConfig(async ({locale})=>{
//     if(!locales.includes(locale as any)) notFound();
//     return {
//         locale: locale as string,
//         messages: (await import(`../src/messages/${locale}.json`)).default
//     };
// })
