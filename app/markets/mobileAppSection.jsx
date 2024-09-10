import Image from 'next/image';
import {FaApple} from 'react-icons/fa';
import {BsGooglePlay} from 'react-icons/bs';
import {GrAndroid} from 'react-icons/gr';

const MobileAppSection = () => {
    return (
        <section className="relative py-16">
            <div className="absolute w-full h-full top-0 left-0 bg-custom-gradient-license-two z-10"></div>
            <div
                className="mx-auto relative z-10 h-[603px] w-full max-w-[1080px] flex-shrink-0 rounded-2xl border bg-[#F6F6F6]">
                <Image src="/twoPhones.png" width={412} height={676} className=""/>
                <Image
                    src="/redFallChat.png"
                    width={956}
                    height={603}
                    className="absolute bottom-0 left-0 -z-10"
                />
                <h2 className="absolute right-64 top-12 w-96 text-4xl font-medium">
                    Mobile application Metatrader 4
                </h2>
                <div className="absolute right-10 top-1/4 flex items-start gap-x-4">
                    <Image src="/qrcode.png" width={180} height={180}/>
                    <div className="space-y-6">
                        <p className="w-60 text-sm">
                            MetaTrader4 mobile is very similar to MetaTrader4 for PC by its functionality. This mobile
                            application supports most PC terminal's features (all trading functions, execution modes, as
                            well as powerful technical analysis) except for the algorithmic trading functions.
                        </p>
                        <button className="rounded-full bg-customBlueFon px-6 py-2 text-white">
                            view our platform
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-4 right-10 flex gap-x-6">
                    <span className="flex flex-col items-center">
                        <FaApple className="h-[30px] w-[30px]"/>
                        <span className="text-sm">Apple Store</span>
                    </span>
                    <span className="flex flex-col items-center">
                        <BsGooglePlay className="h-[30px] w-[30px]"/>
                        <span className="text-sm">Google Play</span>
                    </span>
                    <span className="flex flex-col items-center">
                        <GrAndroid className="h-[30px] w-[30px]"/>
                        <span className="text-sm">Android APK</span>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default MobileAppSection;
