import { ledFaqData } from "../../components/ledfaqData";
import { buyersGuideLedSplitData } from "@/app/components/buyerContentData";
import { Breadcrumbs } from "../../components/breadcrum/breadcrumbs";

export default function BuyersGuideLedPage() {
  return (
    <section>
      <div className="w-full max-w-7xl px-6 mx-auto py-0 md:py-10 bg-bg1 text-text18">
        {/* Breadcrumb */}
        <div className="md:mb-10 mb-0">
          <Breadcrumbs />
        </div>

        {/* Entire LED Guide Data */}
        {buyersGuideLedSplitData.map((data, sectionIndex) => (
          <div key={sectionIndex} className="space-y-2 mb-4">
            {/* Title */}
            <h1 className="text-2xl font-bold tracking-tight">{data.title}</h1>

            {/* Subtitle */}
            <h2 className="underline underline-offset-2 text-sm font-bold">
              {data.subtitle}
            </h2>

            {/* Sections */}
            {data.sections.map((section, index) => (
              <div key={index} className="">
                {/* Heading */}
                {section.heading && (
                  <h2
                    className={
                      index === 0
                        ? "text-sm font-bold tracking-tight underline underline-offset-2"
                        : "text-sm font-bold"
                    }
                  >
                    {section.heading}
                  </h2>
                )}

                {/* Paragraphs */}
                {section.content.map((para, i) => (
                  <p key={i} className="tracking-tight text-xs leading-relaxed">
                    {para}
                  </p>
                ))}

                {/* List */}
                {section.list && (
                  <ul className="list-disc text-xs py-2 font-medium leading-3 list-inside space-y-2 px-6">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Comparison Table (only for section with table data) */}
            {data.comparisonTable.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mt-6">
                  Compare GU10 5W LED vs 50W Halogen
                </h2>
                <table className="border-collapse border border-gray-200 w-full text-sm">
                  <thead className="border-b border-gray-300">
                    <tr className="divide-x divide-gray-300">
                      <th className="px-4 py-2 font-medium text-left text-gray-600"></th>
                      <th className="px-4 py-2 font-medium text-left text-gray-600">
                        Life number of hours
                      </th>
                      <th className="px-4 py-2 font-medium text-left text-gray-600">
                        Running cost per annual
                      </th>
                      <th className="px-4 py-2 font-medium text-left text-gray-600">
                        Replacement cost per bulb
                      </th>
                      <th className="px-4 py-2 font-medium text-left text-gray-600">
                        Total bulbs replaced cost
                      </th>
                      <th className="px-4 py-2 font-medium text-left text-gray-600">
                        Total energy used over lifetime of 30,000 hours
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparisonTable.map((row, i) => (
                      <tr
                        key={i}
                        className="divide-x divide-gray-300 border-b border-gray-300"
                      >
                        <td className="px-4 py-2 font-medium text-gray-800 whitespace-nowrap">
                          {row.type}
                        </td>
                        <td className="px-4 py-2">{row.lifeHours}</td>
                        <td className="px-4 py-2">{row.runningCost}</td>
                        <td className="px-4 py-2">{row.replacementCost}</td>
                        <td className="px-4 py-2">{row.totalBulbCost}</td>
                        <td className="px-4 py-2">{row.totalEnergyUsed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        ))}

        {/* FAQs */}
        <div className="space-y-4">
          {ledFaqData.map((faq, index) => (
            <div key={index}>
              <div className="text-sm tracking-tighter font-light space-y-1"><span className="font-bold">Q :</span> {faq.question}</div>
              {faq.answers.map((answer, i) => (
                <p key={i} className="text-xs tracking-tight space-y-1">{answer}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
