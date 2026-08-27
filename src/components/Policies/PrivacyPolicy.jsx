import React from 'react';

// Data array for mapping the privacy policy sections
const privacySections = [
    {
        id: 1,
        title: "1. Information Collection",
        paragraphs: [
            "We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey, fill out a form, or enter information on our site. The types of personal data we may collect include:"
        ],
        list: [
            "Identity Data: First name, last name, username or similar identifier.",
            "Contact Data: Billing address, delivery address, email address, and telephone numbers.",
            "Financial Data: Bank account and payment card details (processed securely via third-party providers).",
            "Technical Data: Internet protocol (IP) address, your login data, browser type and version, time zone setting and location."
        ]
    },
    {
        id: 2,
        title: "2. Use of Data",
        paragraphs: [
            "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:"
        ],
        list: [
            "Where we need to perform the contract we are about to enter into or have entered into with you.",
            "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.",
            "Where we need to comply with a legal obligation."
        ],
        postListParagraphs: [
            "We use the information we collect to personalize your experience, improve our website, improve customer service, and process transactions efficiently."
        ]
    },
    {
        id: 3,
        title: "3. Cookies & Tracking",
        paragraphs: [
            "Yes, we use cookies. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.",
            "You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly."
        ]
    },
    {
        id: 4,
        title: "4. Third-Party Disclosure",
        paragraphs: [
            "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.",
            "We may also release information when its release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety."
        ]
    }
];

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#18120d] text-[#eee0d6] font-sans antialiased scroll-smooth pt-[160px] pb-[160px] px-6 md:px-20 max-w-[1440px] mx-auto selection:bg-[#e9c176] selection:text-[#1a1000]">

            {/* Header Section */}
            <header className="mb-[160px] max-w-3xl">
                <h1 className="font-serif text-5xl md:text-[84px] leading-tight tracking-tight text-[#e9c176] mb-8">
                    Privacy Policy
                </h1>
                <p className="text-lg md:text-[18px] leading-[32px] font-light tracking-wide text-[#c4c7c7]">
                    At Inch N Space, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                <p className="text-[12px] leading-4 tracking-[0.15em] font-semibold text-[#c8c6c2] mt-8 uppercase">
                    Last Updated: October 2024
                </p>
            </header>

            {/* Main Content Article mapped from data */}
            <article className="max-w-4xl ml-auto">
                {privacySections.map((section, index) => (
                    <React.Fragment key={section.id}>
                        <section className="mb-24">
                            <h2 className="font-serif text-4xl md:text-[48px] leading-[56px] text-[#c8c6c5] mb-8">
                                {section.title}
                            </h2>
                            <div className="text-base md:text-[16px] leading-[28px] tracking-wide text-[#c4c7c7] space-y-6">

                                {/* Pre-list Paragraphs */}
                                {section.paragraphs?.map((para, i) => (
                                    <p key={`para-${section.id}-${i}`}>{para}</p>
                                ))}

                                {/* Optional List Items */}
                                {section.list && (
                                    <ul className="list-disc pl-6 space-y-2">
                                        {section.list.map((listItem, i) => (
                                            <li key={`list-${section.id}-${i}`}>{listItem}</li>
                                        ))}
                                    </ul>
                                )}

                                {/* Optional Post-list Paragraphs */}
                                {section.postListParagraphs?.map((para, i) => (
                                    <p key={`post-para-${section.id}-${i}`}>{para}</p>
                                ))}

                            </div>
                        </section>

                        {/* Architectural Divider - Render for all but the last section */}
                        {index !== privacySections.length - 1 && (
                            <div className="h-[1px] bg-[#3b332d] w-full my-10" aria-hidden="true" />
                        )}
                    </React.Fragment>
                ))}
            </article>

        </main>
    );
}