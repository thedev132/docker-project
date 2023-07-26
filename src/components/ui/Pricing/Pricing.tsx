
import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "../Button/Button";
import { block } from "million/react";

const Pricing = block(() => {

    const plans = [
        {
            name: "Basic plan",
            desc: "For new creators building their list",
            price: 0,
            isMostPop: false,
            features: [
                "300 emails/day",
                "Customizable Email Templates",
                "Drag & Drop Editor",
                "Transactional Emails",
                "SMS & WhatsApp Campaigns",
                "Phone support",

            ],
        },
        {
            name: "Premium",
            desc: "Ideal for growing businesses",
            price: 12,
            isMostPop: true,
            features: [
                "From 20k emails/month",
                "Marketing Automation",
                "A/B testing",
                "Advanced statistics",
                "Multi-user access",
                "Send time optimization",
            ],
        },
        {
            name: "Enterprise",
            desc: "Built for marketing managers",
            price: 32,
            isMostPop: false,
            features: [
                "Everything in Starter",
                "Enterprise-grade Security",
                "Advanced Integrations",
                "Sub-account Management",
                "Tailored Onboarding",
                "Personalized support",
            ],
        },
    ];

    const mostPopPricingBg = "radial-gradient(130.39% 130.39% at 51.31% -0.71%, #1F2937 0%, rgba(31, 41, 55, 0) 100%)"

    return (
        <SectionWrapper id="pricing" className='custom-screen'>
            <div className='relative max-w-xl mx-auto text-center'>
                <h2 className='text-gray-50 text-3xl font-semibold sm:text-4xl'>
                    Find a plan to power your business
                </h2>
                <p className="mt-3 text-gray-300">
                    Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
                </p>
            </div>
            <LayoutEffect
                className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-[38px] border border-gray-800 mt-6 sm:mt-0 ${item.isMostPop ? "border-[3px] border-purple-500 scale-[1.05]" : ""}`}
                                style={{
                                    backgroundImage: item.isMostPop ? mostPopPricingBg : ""
                                }}
                            >
                                <div className="p-8 space-y-4 border-b border-gray-800">
                                    <span className='text-purple-400 font-semibold text-lg flex flex-row'>
                                        {item.name} 
                                        <div className={`${item.isMostPop ? "rounded-full ml-[60px] xl:ml-[91px] scale-[0.75] text-purple-100 bg-violet-500 py-[5px] px-3 text-normal" : "hidden"}
                                        `}>
                                            Most Popular
                                        </div>
                                    </span>
                                    <p className="text-gray-400">
                                        {item.desc}
                                    </p>
                                    <div className='text-gray-50 text-[40px] font-bold font-poppins'>
                                        ${item.price}<span className="text-lg text-gray-400 font-lg">/mo</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <ul className='space-y-3'>
                                        {
                                            item.features.map((featureItem, idx) => (
                                                <li key={idx} className='flex items-center gap-5 text-gray-300'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className='h-5 w-5 text-indigo-600'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'>
                                                        <path
                                                            fillRule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clipRule='evenodd'></path>
                                                    </svg>
                                                    {featureItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="pt-8">
                                        <Button className={`w-full rounded-full text-white ring-offset-2 focus:ring ${item.isMostPop ? "bg-violet-600 hover:bg-violet-500" : "bg-gray-800 hover:bg-gray-700 ring-gray-800"}`}>
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </LayoutEffect>
        </SectionWrapper>
    );
});

export default Pricing