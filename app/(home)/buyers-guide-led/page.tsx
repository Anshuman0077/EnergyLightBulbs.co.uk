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
            {data.title && (
              <h1 className="text-2xl font-bold tracking-tight">
                {data.title}
              </h1>
            )}

            {/* Subtitle */}
            {data.subtitle && (
              <h2 className="underline underline-offset-2 text-sm font-bold">
                {data.subtitle}
              </h2>
            )}

            {/* Sections */}
            {data.sections.map((section, index) => (
              <div key={index} className="">
                {/* Heading */}
                {section.heading && (
                  <h2
                    className={
                      index === 0
                        ? "text-sm font-bold tracking underline underline-offset-2"
                        : "text-sm font-bold"
                    }
                  >
                    {section.heading}
                  </h2>
                )}

                {/* Paragraphs */}
                {section.content.map((para, i) => (
                  <p key={i} className="-tracking-wider text-sm">
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
                {section.heading === "Are LEDs Energy Saving?" &&
                  data.comparisonTable.length > 0 && (
                    <>
                      <div className="text-sm font-medium mb-2 mt-2">
                        Let us compare GU10 5w LEDs with GU10 50w Halogens
                      </div>
                      <div className="w-full overflow-x-auto border border-border1 rounded-sm">
                        <table className="w-full min-w-[650px] border-collapse text-sm text-text14">
                          <thead className="border-b border-border1 bg-bg1">
                            <tr className="divide-x divide-gray-300 text-left text-gray-600">
                              <th className="px-4 py-2 font-medium"></th>
                              <th className="px-4 py-2 font-medium whitespace-nowrap">
                                Life number of hours
                              </th>
                              <th className="px-4 py-2 font-medium whitespace-nowrap">
                                Running cost per annual
                              </th>
                              <th className="px-4 py-2 font-medium whitespace-nowrap">
                                Replacement cost per bulb
                              </th>
                              <th className="px-4 py-2 font-medium whitespace-nowrap">
                                Total bulbs replaced cost
                              </th>
                              <th className="px-4 py-2 font-medium whitespace-nowrap">
                                Total energy used over lifetime of 30,000 hours
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.comparisonTable.map((row, i) => (
                              <tr
                                key={i}
                                className="divide-x divide-gray-300 border-b border-border1"
                              >
                                <td className="px-4 py-2 font-medium text-text18 whitespace-nowrap">
                                  {row.type}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap">
                                  {row.lifeHours}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap">
                                  {row.runningCost}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap">
                                  {row.replacementCost}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap">
                                  {row.totalBulbCost}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap">
                                  {row.totalEnergyUsed}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
              </div>
            ))}
          </div>
        ))}

        {/* FAQs */}
        <div className="space-y-4">
          {ledFaqData.map((faq, index) => (
            <div key={index}>
              <div className="text-sm tracking-tighter font-light space-y-1">
                <span className="font-bold">Q :</span> {faq.question}
              </div>
              {faq.answers.map((answer, i) => (
                <p key={i} className="text-xs tracking-tight space-y-1">
                  {answer}
                </p>
              ))}
            </div>
          ))}

          <div className="flex  flex-col text-md font-light">
            <div className="flex items-center ">
              <span className="font-bold text-md">Q: </span>
              <div className="text-sm">Wattage of LED lights</div>
            </div>

<div className="overflow-x-auto mt-6 border border-gray-300 rounded-sm text-sm">
  <table className="w-full min-w-[500px] border-collapse table-auto">
    <thead className="bg-white text-gray-800 font-normal">
      <tr>
        <th className="px-4 sm:px-6 py-3 text-sm font-medium text-left align-top border-r border-gray-300 w-1/2">
          Depending on the size of the room, and personal preference the wattage
          of the LED light varies. In general
          <br />
          <span className="font-semibold">However:</span>
          <br />
          <span className="font-semibold">Wattage:</span>
        </th>
        <th className="px-4 sm:px-6 py-3 text-left font-medium w-1/2">
          Area Of Use
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t border-gray-200">
        <td className="px-4 sm:px-6 py-2 align-top border-r border-gray-200">
          1-3W
        </td>
        <td className="px-4 sm:px-6 py-2">
          Side lights, ambient floor standing lights, table lamps
        </td>
      </tr>
      <tr className="border-t border-gray-200">
        <td className="px-4 sm:px-6 py-2 align-top border-r border-gray-200">
          3-5W
          <br />
          5-8W
        </td>
        <td className="px-4 sm:px-6 py-2">
          Bedroom, Bathroom, hallways
          <br />
          Dining areas, living rooms – typically areas which require constant
          illumination
        </td>
      </tr>
    </tbody>
  </table>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
