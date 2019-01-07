import React from "react";
import SearchResult from "../search-result";

it('renders SearchResult correctly', () => {
  const children = {
    title: `This is a mosk query`,
    url: `www.LoremIpsum.com`,
    description: "Coordinates: 36°17′56.4″N 30°21′17.3″E﻿ / ﻿36.299000°N 30.354806°E﻿ / 36.299000; 30.354806 Gagae (Greek: Γάγαι), was a town on the southeast coast of Lycia, in what is now the province of Antalya, from which the Gagates lapis derived its name. The ruins are located in Kumluca district, Antalya Province, Turkey.",
    emotion: "😒 10% | 😃 50% | 😱 35% | 🙈 5% | 😡 0%"
  };
  const tree = shallow(<SearchResult children={children} />)
  expect(tree).toMatchSnapshot();
});