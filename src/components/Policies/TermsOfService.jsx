import React from 'react';

// Data for Sidebar Navigation
const tableOfContents = [
    { id: 'acceptance', label: '1. Acceptance' },
    { id: 'services', label: '2. Scope of Services' },
    { id: 'intellectual-property', label: '3. Intellectual Property' },
    { id: 'liability', label: '4. Limitation of Liability' },
    { id: 'governing-law', label: '5. Governing Law' },
];

// Data for Terms Sections
const termsSections = [
    {
        id: 'acceptance',
        number: '01',
        title: 'Acceptance of Terms',
        paragraphs: [
            "By accessing or using the services provided by Inch N Space, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.",
            "These terms constitute a legally binding agreement between you and Inch N Space concerning your use of our architectural design, consulting, and project management services."
        ]
    },
    {
        id: 'services',
        number: '02',
        title: 'Scope of Services',
        paragraphs: [
            "Inch N Space provides premium architectural design, interior architecture, and comprehensive project oversight. The specific scope of services for your project will be detailed in a separate, formal Architectural Services Agreement.",
            "We reserve the right to refuse service, terminate engagements, or alter project timelines if unforeseen circumstances arise, subject to the conditions outlined in individual client contracts."
        ]
    },
    {
        id: 'intellectual-property',
        number: '03',
        title: 'Intellectual Property',
        paragraphs: [
            "All architectural plans, designs, drawings, models, and specifications created by Inch N Space remain the exclusive intellectual property of the studio, regardless of whether the project for which they are made is executed.",
            "Clients are granted a non-exclusive license to use the final design documents solely for the purpose of constructing, using, and maintaining the specific project they were commissioned for. Reproduction or adaptation for other projects is strictly prohibited without written consent."
        ]
    },
    {
        id: 'liability',
        number: '04',
        title: 'Limitation of Liability',
        paragraphs: [
            "To the fullest extent permitted by applicable law, Inch N Space shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, resulting from your use of our services."
        ]
    },
    {
        id: 'governing-law',
        number: '05',
        title: 'Governing Law',
        paragraphs: [
            "These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which Inch N Space is headquartered, without regard to its conflict of law provisions."
        ]
    }
];

export default function TermsOfService() {
    return (
        <div className="bg-[#18120d] text-[#eee0d6] font-sans min-h-screen antialiased scroll-smooth selection:bg-[#e9c176] selection:text-[#1a1000]">
            {/* 
        Main Content Canvas
        Animation: a simple arbitrary inline animation for fade-in effect 
      */}
            <main className="pt-[160px] pb-[160px] px-6 md:px-[80px] max-w-[1440px] mx-auto animate-[fadeIn_1s_ease-in-out]">

                {/* Header */}
                <header className="mb-24 md:mb-32 max-w-3xl">
                    <h1 className="font-serif text-[32px] leading-[40px] md:text-[84px] md:leading-[96px] tracking-[-0.02em] text-[#e9c176] mb-8">
                        Terms of Service
                    </h1>
                    <p className="text-[18px] leading-[32px] tracking-[0.03em] font-light text-[#c4c7c7]">
                        Last updated: October 24, 2024
                    </p>
                    <p className="text-[18px] leading-[32px] tracking-[0.03em] font-light text-[#c4c7c7] mt-6 border-l border-[#e9c176] pl-6">
                        Please read these terms carefully before engaging our architectural services.
                        They govern the relationship between you and Inch N Space.
                    </p>
                </header>

                {/* Article Grid layout */}
                <article className="grid grid-cols-1 md:grid-cols-12 gap-[32px]">

                    {/* Sticky Sidebar Navigation mapped from tableOfContents */}
                    <aside className="hidden md:block md:col-span-3">
                        <div className="sticky top-[160px] flex flex-col gap-4">
                            <p className="text-[12px] leading-[16px] tracking-[0.15em] font-semibold uppercase text-[#eee0d6] mb-4">
                                Contents
                            </p>
                            {tableOfContents.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="text-[12px] leading-[16px] tracking-[0.15em] font-semibold uppercase text-[#c4c7c7] hover:text-[#e9c176] transition-colors duration-300"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </aside>

                    {/* Terms Content mapped from termsSections */}
                    <div className="md:col-span-8 md:col-start-5 space-y-24">
                        {termsSections.map((section, index) => (
                            <React.Fragment key={section.id}>
                                <section id={section.id} className="scroll-mt-[120px]">
                                    <h2 className="font-serif text-[32px] leading-[40px] text-[#eee0d6] mb-6 flex items-center gap-4">
                                        <span className="text-[#e9c176] text-sm text-[12px] tracking-[0.15em] font-semibold uppercase font-sans">
                                            {section.number}
                                        </span>
                                        {section.title}
                                    </h2>
                                    <div className="space-y-6 text-[#c4c7c7] text-[16px] leading-[28px] tracking-[0.02em]">
                                        {section.paragraphs.map((paragraph, pIndex) => (
                                            <p key={pIndex}>{paragraph}</p>
                                        ))}
                                    </div>
                                </section>

                                {/* Divider (hide on the last item) */}
                                {index !== termsSections.length - 1 && (
                                    <div className="w-full h-px bg-[#444748]/30"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                </article>
            </main>

            {/* Basic Keyframes for FadeIn */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}