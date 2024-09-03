const Growth = () => {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto flex flex-col py-16 gap-8">
                <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlueThree">Growth in the largest company</h2>
                <div className="flex flex-row">
                    <div className="flex flex-col py-4 px-6 bg-customOrangeTwo w-full">
                        <span className="text-[54px] leading-[64.8px] text-white font-semibold">100+</span>
                        <span className="text-[20px] leading-[24px] text-white font-medium">countries</span>
                    </div>
                    <div className="flex flex-col py-4 px-6 bg-customOrangeNine max-w-[277px] w-full">
                        <span className="text-[54px] leading-[64.8px] text-white font-semibold">30+</span>
                        <span className="text-[20px] leading-[24px] text-white font-medium">offices</span>
                    </div>
                    <div className="flex flex-col py-4 px-6 bg-customGreyThirteen max-w-64 w-full">
                        <span className="text-[54px] leading-[64.8px] text-customGreyEleven font-semibold">1M+</span>
                        <span className="text-[20px] leading-[24px] text-customGreyEleven font-medium">million clients</span>
                    </div>
                    <div className="flex flex-col py-4 px-6 bg-customGreyFour max-w-60 w-full">
                        <span className="text-[54px] leading-[64.8px] text-customGreyEleven font-semibold">14</span>
                        <span className="text-[20px] leading-[24px] text-customGreyEleven font-medium">years of experience</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Growth;