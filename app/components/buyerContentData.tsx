export interface TableRow {
  type: "LED" | "Halogen";
  lifeHours: string;
  runningCost: string;
  replacementCost: string;
  totalBulbCost: string;
  totalEnergyUsed: string;
}

export interface BuyerGuideSection {
  heading?: string;
  content: string[];
  content2: string[]
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
    title: "A BRIEF BUYERS GUIDE TO THE UNIQUE WORLD OF LEDs",
    subtitle: "LED-Light-emitting Diode - LED Light Bulbs",
    sections: [
      {
        content: [
          "LED light bulbs do not shatter and break as these bulbs do not contain filaments and no mercury.  New technology has ensured that LEDs contain more lumens than ever before, therefore, LEDS are",
          "no longer used for just display or accent lighting.",
        ],
        content2: []
        
      },

      {
        heading: "Life Expectancy of LEDs",
        content: [
          "As last, robust LEDs with superb life rates of up to 30,000 - 50,000 hours have arrived.",
        ],
         content2: []
      },
      {
        heading: "Are LEDs Energy Saving?",
        content: [
          "Compared to other lighting, LEDS are the future for lighting.  Up to 85% energy costs can be reduced by using LEDs.",
          "Let us compare GU10 5w LEDs with GU10 50w Halogens",
        ],
         content2: []
      },
      {
        heading: "There are Three main types of LEDs",
        content: [
          "High Power, SMD, Cluster 3mm or 5mm.",
          "High powered LEDs are fantastic halogen bulbs, they are a like for like replacement with long life spans.  These LEDs are low energy consumption without compromising light output.",
          "LEDs help our environment, as they substantially reduce carbon emissions.  The Energy Saving Trust states that if everybody in the UK changed their lights to LEDs where possible we would save enough energy to light 5 million homes.  LEDs have become increasingly efficient.  As we all are aware, lighting counts for a large amount of an average electricity bill and, therefore, it has a huge impact on the carbon footprint of a home or business.",
          "As LEDs have an increased lifespan, quality of light output, efficiency and reduced carbon emissions, they will overtake low energy CFL lamps as the choice of lighting.",
          "Our LEDs have been tested and reach the high quality of British standards requirements."
        ],
         content2: [],
      },
      {
        heading: "LED Bulbs Have Many Advantages",
        content: [
          "Due to LEDs having a long lifespan (an operational life of up to 30,000 - 50,000 hours), using LEDs for lighting inaccessible places would eliminate the need for difficult bulb replacements for many years.",
        ],
          content2: [],
      },
      {
        heading: "Compare the cost of traditional incandescent bulbs to LEDs ",
        content: [
          "LEDs generate less wasteful heat which leads to energy savings whereas incandescent bulbs lose up to 90% power on creating heat which is wasted.  Such energy savings lead to money savings, this is the main advantage of LEDs.",
          "Within a year of use LEDs often pay for themselves in energy savings as there would be no replacement bulbs required for many years.  If one considers the cost of 30 to 50 incandescent bulbs one would realise the costs savings are much higher than just the energy savings.",
          "LEDs are unique energy saving bulbs as they eliminate the need to constantly replace halogen bulbs.  This point is very important especially for commercial premises where large amounts of bulbs are fitted like offices, hotels and retail outlets as replacement costs of light bulbs will be almost eliminated."
        ],
          content2: [],
      },
      {
        heading: "Size of LEDs",
        content: [
          "As the LEDs which provide the light in the bulbs are so small, the high powered LED bulbs are direct replacements for halogen bulbs in terms of size. This gives LEDs a distinct advantage over energy saving CFL bulbs which are generally larger than their halogen counterparts, and can look unsightly in some elegant light fittings. When it comes to display or accent lighting, the compact size of LED light bulbs, as well as the availability of coloured lighting provides for very versatile lighting which is appropriate everywhere from retail displays to Christmas lights in homes.",
          "LEDs can be used in a variety of settings ranging from retail displays to home Christmas lights, display lighting and/or accent lighting as they are available in colours for versatile lighting.  With regard to size, LEDs are small, therefore, high powered LEDs are a direct replacement for halogen bulbs.  Hence, LEDs have an advantage over energy saving CFL bulbs which are larger than the halogens bulbs and can look out of place."
        ],
          content2: [],
      },
      {
        heading: "Practicalities of LEDs",
        content: [
          "LEDs do not contain filaments, therefore, do not have the usual light bulb problems relating to incandescent bulbs.  LEDs are an electrical circuit.  Incandescent bulbs have been known to explode when things go wrong perhaps due to the heat generated when in use whereas if LEDs go wrong they are still not dangerous to be around as they are the safest form of lighting.",
          "LEDs run on a cool temperature which could reduce air conditioning costs and the fire risk associated with overheating incandescent bulbs.  LEDs are more durable with no fragile parts, the bulbs generate hardly any heat, therefore, are safe in most areas around the home.  LEDs will last 30 to 50 times longer than standard incandescent bulbs, using approximately 90% less power hence being ideal for places where lights are switched on for long periods of time.",
          "LEDs have the ability to tolerate low temperatures and, therefore, there is more flexibility in their use.  They can be used around heavy machinery as LEDs are able to endure vibration as well as being strong and durable.",
          "Unlike CFL or fluorescent lighting, LEDs do not flicker leading to reduced eye strain and problems related to flickering lighting solutions.  LEDs can be used to light precious artefacts including paintings without causing any fading."
        ],
          content2: [],
      },
      {
        heading: "Environmentally Friendly ",
        content: [
          "LED lighting is an easy option to improve the efficiency of our businesses and homes, we are able to fulfil our duty and need to try and reduce our carbon footprints.  In this day and age taking care of our environment has become crucial.",
          "It is worth noting, LEDs have a very long lifespan equating to notably reduced carbon emissions and less waste due to fewer lamps being disposed of as well as using up to 90% less electricity than standard halogen bulbs. Reducing impact on the environment with improving energy efficiency is an important fact which environmental specialists acknowledge.",
          "Notice the light"
        ],
          content2: [],
      },
      {
        heading: "The High Performance LEDs",
        content: [
          "One example of high performance LEDs is the GU10 LED containing 3 x 1W LEDs within one bulb, each LED producing a high level of light.  For the first time, high performance LEDs as either single or clusters of LEDs within one bulb are available.",
          "High power LEDs are also now available in golf ball and candle bulbs.  Shortly, 100W and 60W replacement LEDs will become available.  LEDs in GLS or classic bulbs is wonderful.",
          "There are many benefits of using LED lighting.  Shortly LEDs will meet the needs of any light fitting in any room within the business or home without compromising from traditional bulbs.  LEDs will become very versatile"
        ],
          content2: [],
      },
    ],
    comparisonTable: [
      {
        type: "LED",
        lifeHours: "30,000",
        runningCost: "£0.88",
        replacementCost: "£9.99",
        totalBulbCost: "£0.00",
        totalEnergyUsed: "£22.00",
      },
      {
        type: "Halogen",
        lifeHours: "2,000",
        runningCost: "£8.78",
        replacementCost: "£1.20",
        totalBulbCost: "£30.00",
        totalEnergyUsed: "£219.00",
      },
    ],
  },
  {
    subtitle: "LEDs – MR16 / GU10",
    sections: [
      {
        content: [
          "The majority of all homes and businesses in the UK use GU10 and/or MR16 bulbs. The use of these bulbs comes with its negatives: heavy power consumption, higher heat outputs and the ever-lasting need for replacements. However, new LED technology exists which not only tackles the 3 previously listed issues but also makes way for huge financial savings and contributes to reducing your carbon footprint!",

          "When one chooses to purchase a GU10 bulb, he or she must consider a few important factors:",
        ],
        list: [
          "Size of the bulb",
          "The light output & colour*",
          "Life of the bulb",
          "Power consumption (and what the cost is to you!)",
          "How ‘green’ the bulb is",
          "Dimmable or not dimmable",
        ],
        content2: [
          "*Light output is usually defined by one of three colours: Warm White, Cool White and Daylight. Warm White is the most common bulb we see in households and businesses alike and is the colour most similar to that given off by a standard halogen bulb. Cool White is the white similar to the one given off in offices and retail environments via a fluorescent tube. Daylight is the brightest out of the three, which features a subtle blue but also providing the best colour rendering.",
          "Overall, the obvious choice is to select the GU10 LED bulb (within the GU10 range) it is future-proof and will save the most energy. They are up to 90% more efficient than the standard halogen bulbs. A 5W bulb can peak at 50W of light output and its lifespan is second to none: providing 50,000 hours of light (to put into perspective, a GU10 LED bulb being used 4 hours a day will exceed 30 years of use!).",
          "Along with dimmable and non-dimmable versions and aside from various whites, the GU10 is also available in a variety of colours and is perfect for accent, display or mood lighting."
        ]
      },
    ],
    comparisonTable: [],
  },
  {
    subtitle: "WHICH DRIVER AND WHICH LED?",
    sections: [
      {
        content: [
          "Currently technology is such that LED light bulbs are available in a range of low voltage replacements and as the technology improves and expands, as does Energy Light Bulb’s product range. We currently offer LED bulbs in the most popular GU10 capsules to R7 SMD’s, the full range can be found here. A lighting transformer (commonly known as a Driver or for LED bulbs, an LED driver) is needed to step-down the voltage from 240V to a usable 12V. Standard transformers operated at a minimum load requirement usually around 20W (normally there is one transformer per bulb). However, a traditional transformer (or driver) is not compatible with newer LED bulbs as they operate at a much more sustainable 20W. If needed, the traditional transformers will need to be changed and replaced with LED drivers which operate down to zero watts, or connect several bulbs into one driver to attain the minimum load requirement. Our current range of LED drivers can be found ",
          "Our LED drivers range from, …… (enter info). We strongly recommend that halogen and LED bulbs are not run on the same circuit"
        ],
        content2: [],
      },
    ],
    comparisonTable: [],
  },
  {
    subtitle: "FITTINGS",
    sections: [
      {
        content: [
          "Along with the actual bulbs themselves, LED light fittings are improving rapidly and are shaping the future of all light fittings completely. Existing light fittings usually hold a the fitting and a bulb (which is purchased separately at the customers discretion); contrasting with more dynamic technology – LED light fittings are designed as such, that the bulb and fitting are bought together as one (the bulb is not changeable), one simply replaces the whole unit upon expiration but most LED light fittings come with 10 year guarantees to provide you with peace of mind.",
          "LED light fittings have also been created with those whom are design-conscious and those who empathise with our planet in mind. We stock high performance downlights, uplighters and other light fittings; ideal as direct replacements for existing fittings which not only alter the quality of the light output, but also aim to reduce your carbon footprint! Our constantly expanding range of LED light fittings is available in an array of colours including the popular Warm and Cool white colors."
        ],
        content2: [],
      },
    ],
    comparisonTable: [],
  },
  {
    subtitle: "RETAIL - LEDS",
    sections: [
      {
        content: [
          "We live in an extremely image focused and conscious society. Therefore as part of a retail outlets marketing success, it has to ensure that its products are illuminated perfectly to ensure sales. Our range of LED lamps are extremely sustainable and often maintain 90% of their light output over the  lifespan of the bulb – this ensures the best and constant illumination for products, years after the bulb has been purchased.",
          "Our LEDs have been designed in such a way, that they give off no glare and provide exceptional colour rendering. This makes way for minimal colour distortion and ensures true representation of the goods. This is vital as it will provide the customer with the best possible impression of the goods on offer.",
          "Along with improved marketability of the goods, choosing LEDs will also help reduce overheads; LEDs are more ‘green’ than their halogen counterparts and can save one up to 90% on their electricity for lighting bills. Furthermore, LEDs are much more cost-effective than halogen bulbs; they eradicate the need for hiring maintenance firms to replace bulbs.",
          "The amazing long life of LED bulbs is one of the biggest factors retailers take into account when switching to LEDs. With lighting which can be on for 24 hour periods, expired bulbs are unattractive and can leave a shadow on important product displays. The replacement of bulbs can be expensive and disruptive to the work place and LED bulbs will substantially save in time and money associated with changing bulbs.",
          "Retail lightings future is definitely in LEDs. The savings to be made are in the thousands, and the potential for profit could be much more."
        ],
          content2: [],
      },
    ],
    comparisonTable: [],
  },
  {
    subtitle: "COMMERCIAL ENVIRONMENTS -  LEDS",
    sections: [
      {
        content: [
          "Aside from retail outlets, we stock LEDs which cater for offices, warehouses, factories (and anything else you can think of). We understand these environments (we are one of them!) need glare-free, high quality and most importantly reliable lighting so that our respective businesses can operate fluidly. Attaining to strict Health & Safety regulations, our LED bulbs provide all of the listed requirements and ensure that our bulbs remain at a safe temperature which significantly reduces the chance of fire which has been sometimes blamed by the older halogen lamps.",
          "Lighting creates an atmosphere, whether it be playful, focused or relaxed. We offer lighting for your commercial environment in a vast array of ambient colours, targeted to suit any mood you are striving to achieve.",
          "Commercial environments can save thousands by switching to LEDs. They are the future of lighting; with energy prices soaring and the threat of pollution (coupled with the exposure of many companies disregard for the environment) .They are also free of harmful substances such as mercury, thus complying with Health & Safety regulation. Simply put, LEDs are the future; they last up to 50,000 hours and will help contribute to reducing energy bills by 90%.",
          "Due to their low initial start-up cost and brightness, halogen/incandescent bulbs have been favoured by the commercial sector, however the introduction of LEDs is gaining the edge over halogen lamps, due to their high lumens per watt, efficiency and the reduced long run costs of LEDs. Newer, higher and more powerful LED bulbs are also on the market which replicate the output of the standard halogen/incandescent bulbs, but at a much lower power consumption rate.",
          "Efficiency is a key word we associate with business, but also a word we associate with lighting. It is a little known fact that older halogen/incandescent bulbs waste 90% of their energy via heat – LEDs eradicate this problem entirely as they only generate light energy! A 6W LED is comparable to a 60W standard bulb; saving money at the same output, but also reducing lost energy, providing you with more light.",
          "LED bulbs are also much more sustainable than their predecessors. They last for 10+ years and there is no need to worry about lights dimming as the light matures. Depending on the chip technology, a 1W LED provides between 70-90 lumens and will only drop by 1% after 5000 hours of use.",
          "Overall the obvious choice is to move to LEDs, they are more eye-catching, sleeker and illuminate an area instantly. Increased efficiency, longer lifespan, improved light quality, along with the beefits of lower costs and savings on CO2 quotas, are factors which have caused many within the commercial sector to move to LEDs."
        ],
        content2: [],
      },
    ],
    comparisonTable: [],
  },
];
