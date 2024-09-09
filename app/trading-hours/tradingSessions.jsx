

const TradingSessions = () => {
return (
    <section className="mx-auto max-w-screen-xl py-11">
        <h2 className="text-[32px] font-medium leading-[38.4px] text-customBlackFour mb-4">
            Trading session
        </h2>
        <p className="text-[20px] font-normal leading-[24px] text-customBlackOne mb-8">
            The foreign exchange market has specific working hours. There are several Forex trading sessions
            with different schedules. During each session, there is a certain currency that experiences high
            volatility.
        </p>
        <div className="flex flex-row gap-[100px]">
            <table className="max-w-[580px] w-full ">
                <thead className="border-b-[1px] border-solid border-customGrey">
                <tr className="flex flex-row h-[87px]">
                    <th className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo max-w-[145px] w-full flex justify-center items-center">Session</th>
                    <th className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo max-w-[145px] w-full flex justify-center items-center">Sity</th>
                    <th className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo max-w-[145px] w-full flex justify-center items-center">Open
                        (EET*)
                    </th>
                    <th className="text-[16px] font-semibold leading-[19.2px] text-customBlueTwo max-w-[145px] w-full flex justify-center items-center">Close
                        (EET*)
                    </th>
                </tr>
                </thead>
                <trbody>
                    <tr className="h-[87px] flex flex-row">
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">Pacific</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOneo max-w-[145px] w-full flex justify-center items-center">Sydney</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">0:00</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">9:00</th>
                    </tr>
                    <tr className="h-[87px] flex flex-row">
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">Asian</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">Tokyo</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">2:00-3:00</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">11:00-12:00</th>
                    </tr>
                    <tr className="h-[87px] flex flex-row">
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">European</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">London</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">10:00</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">19:00</th>
                    </tr>
                    <tr className="h-[87px] flex flex-row">
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">American</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">New
                            York
                        </th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">15:00-16:00</th>
                        <th className="text-[20px] font-medium leading-[24px] text-customBlackOne max-w-[145px] w-full flex justify-center items-center">0:00-1:00</th>
                    </tr>
                </trbody>
            </table>
            <div className="flex justify-center items-center relative flex-1">
                <iframe className="ml-0 scale-150 relative top-28" name="myfxbook_market" width="447"
                        height="465" scrolling="no" frameBorder="0"
                        allowTransparency="true" hspace="0" vspace="0" marginHeight="0" marginWidth="0"
                        src="https://widgets.myfxbook.com/widgets/market.html"
                        bis_size="{&quot;x&quot;:501,&quot;y&quot;:1177,&quot;w&quot;:235,&quot;h&quot;:290,&quot;abs_x&quot;:501,&quot;abs_y&quot;:1177}"></iframe>
            </div>

        </div>
        <p className="text-[20px] font-normal leading-[24px] text-customBlackOne mt-8">* Eastern European time:
            GMT+2 winter; GMT+3 summer</p>
    </section>
);
}

export default TradingSessions;