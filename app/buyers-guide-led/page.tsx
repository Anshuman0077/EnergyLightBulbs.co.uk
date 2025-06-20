import { ledFaqData } from "../components/ledfaqData";
import { buyersGuideLedContentData } from "../components/buyerContentData";
export default function buyersGuideLedPage() {
  return (
    <section>
      <div className="w-full  px-6 py-10 bg-bg1 text-text18">
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight">
            {buyersGuideLedContentData.title}
          </h1>

          {/* Subtitle */}
          <h2 className="underline underline-offset-2 text-xl font-semibold">
            {buyersGuideLedContentData.subtitle}
          </h2>

          {/* Sections */}
          {buyersGuideLedContentData.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              {/* Heading */}
              {section.heading && (
                <h2
                  className={
                    index === 0
                      ? "text-3xl font-bold tracking-tight underline underline-offset-2"
                      : "text-xl font-semibold"
                  }
                >
                  {section.heading}
                </h2>
              )}

              {/* Paragraphs */}
              {section.content.map((para, i) => (
                <p key={i} className="leading-7 tracking-tight">
                  {para}
                </p>
              ))}

              {/* List */}
              {section.list && (
                <ul className="list-disc list-inside space-y-2 px-6">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Render table below 'Are LEDs Energy Saving?' section */}
              {section.heading === "Are LEDs Energy Saving?" && (
                <>
                  <h2 className="text-xl font-semibold mt-4">
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
                      {buyersGuideLedContentData.comparisonTable.map(
                        (row, i) => (
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
                        )
                      )}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {ledFaqData.map((faq, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold">Q: {faq.question}</h2>
              {faq.answers.map((answer, i) => (
                <p key={i}>{answer}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
