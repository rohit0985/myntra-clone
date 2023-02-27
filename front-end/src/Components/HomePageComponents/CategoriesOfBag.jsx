import { Box, calc, Flex, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";

const CategoriesOfBag = () => {
  return (
    <VStack
   w={'100%'}
   alignItems={'flex-start'}
   gap={8}
   m={'50px 0px'}
    >
      <Heading pl={10} fontWeight={500} fontSize={'3xl'} >DEAL OF THE DAY</Heading>

      <Box>
        <SimpleGrid columns={CATEGORIES_TO_BAG.length/3} spacing="0px">
          {CATEGORIES_TO_BAG.map((deal, idx) => (
            <Box key={idx}>
                  <Image src={deal.image} cursor={'pointer'} />
                </Box>
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default CategoriesOfBag;

const CATEGORIES_TO_BAG= [
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aa4658b5-d723-4652-9ea1-00456b355c3a1645602467046-Kurta-Sets.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/dd4414f8-4e1b-4a22-997e-8e06c0a5ff861645602467167-T-Shirts.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/fb091b07-c275-4578-b08d-b4f93dfe9e841645602466976-Beauty.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b827f900-ed61-4467-84fa-a6e357787e761645602467079-Plus-Size-Styles_W.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/cd083042-3bb2-4231-8b96-0234fc0ed23f1645602467032-Jeans.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d13255df-c846-4dbd-8458-77ccaba4f9eb1645602467142-Trousers.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg"
    },
    {
      "image": "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg"
    }
  ]
