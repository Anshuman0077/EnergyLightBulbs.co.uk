export interface TableRow {
  type: 'LED' | 'Halogen';
  lifeHours: string;
  runningCost: string;
  replacementCost: string;
  totalBulbCost: string;
  totalEnergyUsed: string;
}

export interface BuyerGuideSection {
  heading?: string;           
  content: string[];
  list?: string[];            
}

export interface BuyerGuideData {
  title?: string;           
  subtitle: string;
  sections: BuyerGuideSection[];
  comparisonTable: TableRow[];
}
export const buyersGuideLedSplitData: BuyerGuideData[] = [
  {
    title: 'A BRIEF BUYERS GUIDE TO THE UNIQUE WORLD OF LEDs',
    subtitle: 'LED-Light-emitting Diode - LED Light Bulbs',
    sections: [
      {
        content: [
          'LED light bulbs do not shatter and break as these bulbs do not contain filaments and no mercury...',
          'On the light output front LEDs are now comparable with halogens.',
        ],
      },
      {
        heading: 'Life Expectancy of LEDs',
        content: [
          'As last, robust LEDs with superb life rates of up to 30,000 - 50,000 hours have arrived.',
        ],
      },
      {
        heading: 'Are LEDs Energy Saving?',
        content: [
          'Compared to other lighting, LEDS are the future for lighting. Up to 85% energy costs can be reduced by using LEDs. Let us compare GU10 5w LEDs with GU10 50w Halogens',
        ],
      },
      {
        heading: 'LED Bulbs Have Many Advantages',
        content: [
          'Due to LEDs having a long lifespan...inaccessible places would eliminate the need for difficult bulb replacements for many years.',
        ],
      },
      {
        heading: 'Compare the cost of traditional incandescent bulbs to LEDs',
        content: [
          'LEDs generate less wasteful heat which leads to energy savings whereas incandescent bulbs lose up to 90% power...',
        ],
      },
      {
        heading: 'Size of LEDs',
        content: [
          'As the LEDs which provide the light in the bulbs are so small...appropriate everywhere from retail displays to Christmas lights in homes.',
        ],
      },
      {
        heading: 'Practicalities of LEDs',
        content: [
          'LEDs do not contain filaments, therefore, do not have the usual light bulb problems...LEDs can be used to light precious artefacts including paintings without causing any fading.',
        ],
      },
      {
        heading: 'Environmentally Friendly',
        content: [
          'LED lighting is an easy option to improve the efficiency of our businesses and homes...',
        ],
      },
      {
        heading: 'The High Performance LEDs',
        content: [
          'One example of high performance LEDs is the GU10 LED containing 3 x 1W LEDs within one bulb...',
        ],
      },
    ],
    comparisonTable: [],
  },
  {
    subtitle: 'LEDs – MR16 / GU10',
    sections: [
      {
        content: [
          'The majority of all homes and businesses in the UK use GU10 and/or MR16 bulbs...',
          'Light output is usually defined by one of three colours: Warm White, Cool White and Daylight...',
        ],
        list: [
          'Size of the bulb',
          'The light output & colour*',
          'Life of the bulb',
          'Power consumption (and what the cost is to you!)',
          'How ‘green’ the bulb is',
          'Dimmable or not dimmable',
        ],
      },
    ],
    comparisonTable: [],
  },
  {
    subtitle: 'WHICH DRIVER AND WHICH LED?',
    sections: [
      {
        content: [
          'Currently technology is such that LED light bulbs are available in a range of low voltage replacements...',
        ],
      },
    ],
    comparisonTable: [],
  },
  {
    subtitle: 'FITTINGS',
    sections: [
      {
        content: [
          'Along with the actual bulbs themselves, LED light fittings are improving rapidly...',
        ],
      },
    ],
    comparisonTable: [],
  },
  {
    subtitle: 'RETAIL - LEDS',
    sections: [
      {
        content: [
          'We live in an extremely image focused and conscious society. Therefore as part of a retail outlet...',
        ],
      },
    ],
    comparisonTable: [],
  },
  {
    subtitle: 'COMMERCIAL ENVIRONMENTS - LED',
    sections: [
      {
        content: [
          'Aside from retail outlets, we stock LEDs which cater for offices, warehouses, factories...',
        ],
      },
    ],
    comparisonTable: [
      {
        type: 'LED',
        lifeHours: '30,000',
        runningCost: '£0.88',
        replacementCost: '£9.99',
        totalBulbCost: '£0.00',
        totalEnergyUsed: '£22.00',
      },
      {
        type: 'Halogen',
        lifeHours: '2,000',
        runningCost: '£8.78',
        replacementCost: '£1.20',
        totalBulbCost: '£30.00',
        totalEnergyUsed: '£219.00',
      },
    ],
  },
];


