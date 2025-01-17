import React from 'react';
import Popupname from '../common/Popupname';
const parseText = (text, section) => {
  const lines = text.split('\n').map(line => line.trim()).filter(line => line); // Clean up text

  if (section === "Disclaimer" || section === "What sorts of personal data do we gather?") {
    return `<ul class="list-disc pl-5 ml-4">
      ${lines.map(item => `<li class="font-open-sans ">${item}</li>`).join('')}
    </ul>`;
  }

  

  return text
    .replace('Oswal Crop Protection Private Limited', '<strong>Oswal Crop Protection Private Limited</strong>')
    .replace('www.oswalcrop.com', '<strong>www.oswalcrop.com</strong>')
    .replace('OSWAL CROP PROTECTION PRIVATE LIMITED', '<strong>OSWAL CROP PROTECTION PRIVATE LIMITED</strong>');
};

const Terms = () => {
  const privacyPolicyData = [
    {
      section: "Introduction",
      content: [
        "Company is registered under pursuant to sub section (2) of section 7 of the company Act, 2013 and rules 8 the companies (Incorporation) Rules, 2014. Oswal Crop Protection Private Limited, one of the leading players in the agrochemical sector in India, specializes in crop protection, and retail businesses. All references to “Oswal,” “we,” “us,” or “our” in this declaration of privacy are to Oswal alone.",
        "We respect the privacy of the private information of the people with which we deal. The personal information that Oswal gathers from or about you, in addition to how we use, and whom we disclose that information to, are all covered by this privacy statement, which is applicable to the data we gather via www.oswalcrop.com",
        "Any visitors to the Website are bound to this privacy assertion, unless the personal information pertains to a potential, on-going, or previous employee of Oswal.",
        "Please take a few minutes to carefully review these terms and conditions. By accessing and using this Site you agree to follow and be bound by these terms and conditions. If you do not agree to follow and be bound by these terms and conditions, you may not access, use or download materials from this Site. www.oswalcrop.com",
      ]
    },
    {
      section: "Important",
      content: [
        "Information contained on the site is for information purposes only and is not intended to constitute an offer to sell or a solicitation to buy any of the equity shares or securities of Oswal or its affiliate companies. The information on this site is not and is under no circumstances be construed as, an advertisement or a public offering of the equity shares or securities of OSWAL CROP PROTECTION PRIVATE LIMITED or affiliate companies.",
      ]
    },
    {
      section: "Disclaimer",
      content: [
        "Sustainable, efficient, and methodical approach to conducting business.",
        "Long transparent management and monitoring process with responsibility in a value-driven manner.",
        "Commitments to ethics and values that collaborate to progress and well-being of society.",
        "Strict adherence to the above-mentioned guidelines in all its operational processes, business decisions, and thought processes.",
        "The company director himself endorses a complied document of Quality, Environment, and Occupational Health & Safety Policy.",
        "This directs the daily functions of the company through a well-established framework named, Integrated Management System (IMS).",
        "Standing growth for all stakeholders, including customers and partners.",
        "Commitments to ethics and values that collaborate transparent management and monitoring processes with responsibility in a value-driven manner."
      ]
    },
    {
      section: "Publicity Policy",
      content: [
        "The terms of use are included into this privacy statement and are also subject to them."
      ]
    },
    {
      section: "Compliance Policy",
      content: [
        "Oswal makes every effort to abide by the privacy regulations in the country where we conduct business. The scope and implementation of this privacy policy are restricted, and not all people may be subject to its requirements and rights.",
      ]
    },
    {
      section: "What exactly is personal data?",
      content: [
        "Personal information is any information that relates to an identified or identifiable individual for the purposes of this privacy statement. A specific individual cannot be linked to or traced back using anonymous or non-personal information, which is excluded from the definition of personal information.",
      ]
    },
    {
      section: "How do we gather personal data?",
      content: [
        "Different forms of personal information about people with whom we do business are collected and maintained by us directly (when you send us information by filling out online forms or surveys).",
        "We may gather information about you indirectly (via the technology on our site or as permitted or necessary by relevant law or regulatory regulations) without your knowledge or consent."
      ]
    },
    {
      section: "What sorts of personal data do we gather?",
      title: "Typically, we gather the following categories of personal data:",
      content: [
        "Name, address, job title, and phone number, IP address, information about your device(s), and other technical information on how you use the website and your device(s) your thoughts or observations on a topic.",
        "You are no longer anonymous to us after you provide us your personal information. We try to make it clear which fields are necessary and which ones are optional.",
        "You can never be forced to give information; you may always decide not to use a certain service or feature on the Website.",
      ]
    },
    {
      section: "COOKIES",
      content: [
        "On some Website pages, “cookies” are used to assess how the page flows, track the success of promotions, and advance trust and safety. Small files known as “cookies” are stored on your computer’s hard disc to help us provide our services. We provide some features that require a “cookie” in order to use.",
        "Additionally, cookies might assist us in delivering content that is customized to your interests. The majority of cookies are “session cookies,” which means that they are removed from your storage at the conclusion of a session."
      ]
    }
  ];

  return (
    <section className="p-8">
      <div>
      <Popupname title='terms and condition'/>
      </div>
      <div className="w-10/12 mx-auto mt-10 text-justify">
        {privacyPolicyData.map((section, index) => (
          <div key={index} className="mb-12"> {/* Margin between sections */}
            <h2 className="text-2xl text-[rgb(56,149,63)] font-bold mb-4">{section.section}</h2>
            {section.title && <h3 className="mb-4 text-xl">{section.title}</h3>}
            {section.content && section.content.length > 0 && (
              <div className="mt-2 text-base mmd:text-justify mmd:text-wrap">
                {section.content.map((paragraph, paraIndex) => (
                  <div
                    key={paraIndex}
                    dangerouslySetInnerHTML={{ __html: parseText(paragraph, section.section) }}
                    className="mb-6" // Margin between paragraphs
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Terms;
