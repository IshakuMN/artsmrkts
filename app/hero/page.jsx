// import React from 'react'

// const page = () => {
//   return (
//     {currentPosition === 0 && (
//         <div className="f-full flex flex-1 flex-row justify-between gap-2">
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[16px] leading-[19.2px] ${zen_kaku_gothic_new.className}`}
//             >
//               323
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={57}
//               height={202}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-down my-auto flex flex-col items-center gap-2">
//             <Image
//               src="buy.svg"
//               alt="buy"
//               width={71}
//               height={46}
//               className="relative top-0 object-contain"
//             />
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={90}
//               height={316}
//               className="object-contain"
//             />
//             {/*<Image src="figureOrange.svg" alt="figure" width={110} height={316} className="object-contain"/>*/}
//           </div>
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[19px] leading-[22.8px] ${zen_kaku_gothic_new.className}`}
//             >
//               325
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={74}
//               height={260}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-down my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[17px] leading-[20.4px] ${zen_kaku_gothic_new.className}`}
//             >
//               324
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={57}
//               height={202}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <Image
//               src="sell.svg"
//               alt="sell"
//               width={88}
//               height={58}
//               className="relative top-0 object-contain"
//             />
//             {/*<Image src="figureGreen.svg" alt="figure" width={152} height={444} className="object-contain"/>*/}
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={120}
//               height={444}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       )}

//       {currentPosition === 1 && (
//         <div className="f-full flex flex-1 flex-row justify-between gap-2">
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[16px] leading-[19.2px] ${zen_kaku_gothic_new.className}`}
//             >
//               323
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={57}
//               height={202}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-downMore-one my-auto flex flex-col items-center gap-2">
//             <Image
//               src="buy.svg"
//               alt="buy"
//               width={71}
//               height={46}
//               className="relative top-0 object-contain"
//             />
//             {isBuyFigureOrange ? (
//               <Image
//                 src="figureOrange.svg"
//                 alt="figure"
//                 width={90}
//                 height={316}
//                 className="object-contain"
//               />
//             ) : (
//               <Image
//                 src="figure.svg"
//                 alt="figure"
//                 width={90}
//                 height={316}
//                 className="object-contain"
//               />
//             )}
//           </div>
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[19px] leading-[22.8px] ${zen_kaku_gothic_new.className}`}
//             >
//               325
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={74}
//               height={260}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-down my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[17px] leading-[20.4px] ${zen_kaku_gothic_new.className}`}
//             >
//               324
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={57}
//               height={202}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-upMore-two my-auto flex flex-col items-center gap-2">
//             <Image
//               src="sell.svg"
//               alt="sell"
//               width={88}
//               height={58}
//               className="relative top-0 object-contain"
//             />
//             {isSellFigureGreen ? (
//               <Image
//                 src="figureGreen.svg"
//                 alt="figure"
//                 width={120}
//                 height={444}
//                 className="object-contain"
//               />
//             ) : (
//               <Image
//                 src="figure.svg"
//                 alt="figure"
//                 width={120}
//                 height={444}
//                 className="object-contain"
//               />
//             )}
//           </div>
//         </div>
//       )}
//       {currentPosition === 2 && (
//         <div className="f-full flex flex-1 flex-row justify-between gap-2">
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[16px] leading-[19.2px] ${zen_kaku_gothic_new.className}`}
//             >
//               323
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={57}
//               height={202}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-down my-auto flex flex-col items-center gap-2">
//             <Image
//               src="buy.svg"
//               alt="buy"
//               width={71}
//               height={46}
//               className="relative top-0 object-contain"
//             />
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={90}
//               height={316}
//               className="object-contain"
//             />
//             {/*<Image src="figureOrange.svg" alt="figure" width={110} height={316} className="object-contain"/>*/}
//           </div>
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[19px] leading-[22.8px] ${zen_kaku_gothic_new.className}`}
//             >
//               325
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={74}
//               height={260}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-down my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[17px] leading-[20.4px] ${zen_kaku_gothic_new.className}`}
//             >
//               324
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={57}
//               height={202}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <Image
//               src="sell.svg"
//               alt="sell"
//               width={88}
//               height={58}
//               className="relative top-0 object-contain"
//             />
//             {/*<Image src="figureGreen.svg" alt="figure" width={152} height={444} className="object-contain"/>*/}
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={120}
//               height={444}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       )}
//       {currentPosition === 3 && (
//         <div className="f-full flex flex-1 flex-row justify-between gap-2">
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[16px] leading-[19.2px] ${zen_kaku_gothic_new.className}`}
//             >
//               323
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={57}
//               height={202}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-upMore-two my-auto flex flex-col items-center gap-2">
//             <Image
//               src="buy.svg"
//               alt="buy"
//               width={71}
//               height={46}
//               className="relative top-0 object-contain"
//             />
//             {isBuyFigureOrange ? (
//               <Image
//                 src="figureOrange.svg"
//                 alt="figure"
//                 width={90}
//                 height={316}
//                 className="object-contain"
//               />
//             ) : (
//               <Image
//                 src="figure.svg"
//                 alt="figure"
//                 width={90}
//                 height={316}
//                 className="object-contain"
//               />
//             )}
//           </div>
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[19px] leading-[22.8px] ${zen_kaku_gothic_new.className}`}
//             >
//               325
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={74}
//               height={260}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-down my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[17px] leading-[20.4px] ${zen_kaku_gothic_new.className}`}
//             >
//               324
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={57}
//               height={202}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-downMore-two my-auto flex flex-col items-center gap-2">
//             <Image
//               src="sell.svg"
//               alt="sell"
//               width={88}
//               height={58}
//               className="relative top-0 object-contain"
//             />
//             {isSellFigureGreen ? (
//               <Image
//                 src="figureGreen.svg"
//                 alt="figure"
//                 width={120}
//                 height={444}
//                 className="object-contain"
//               />
//             ) : (
//               <Image
//                 src="figure.svg"
//                 alt="figure"
//                 width={120}
//                 height={444}
//                 className="object-contain"
//               />
//             )}
//           </div>
//         </div>
//       )}
//       {currentPosition === 4 && (
//         <div className="f-full flex flex-1 flex-row justify-between gap-2">
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[16px] leading-[19.2px] ${zen_kaku_gothic_new.className}`}
//             >
//               323
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={57}
//               height={202}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-down my-auto flex flex-col items-center gap-2">
//             <Image
//               src="buy.svg"
//               alt="buy"
//               width={71}
//               height={46}
//               className="relative top-0 object-contain"
//             />
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={90}
//               height={316}
//               className="object-contain"
//             />
//             {/*<Image src="figureOrange.svg" alt="figure" width={110} height={316} className="object-contain"/>*/}
//           </div>
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[19px] leading-[22.8px] ${zen_kaku_gothic_new.className}`}
//             >
//               325
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={74}
//               height={260}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-down my-auto flex flex-col items-center gap-2">
//             <span
//               className={`text-[17px] leading-[20.4px] ${zen_kaku_gothic_new.className}`}
//             >
//               324
//             </span>
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={57}
//               height={202}
//               className="object-contain"
//             />
//           </div>
//           <div className="animate-slide-up my-auto flex flex-col items-center gap-2">
//             <Image
//               src="sell.svg"
//               alt="sell"
//               width={88}
//               height={58}
//               className="relative top-0 object-contain"
//             />
//             {/*<Image src="figureGreen.svg" alt="figure" width={152} height={444} className="object-contain"/>*/}
//             <Image
//               src="figure.svg"
//               alt="figure"
//               width={120}
//               height={444}
//               className="object-contain"
//             />
//           </div>
//         </div>
//       )}

//   )
// }

// export default page
