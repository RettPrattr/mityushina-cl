import BrandFooter from '@/components/BrandFooter'
import ItemCards from '@/components/ItemsCards'
import Story from '@/components/Story'
import Form from '@/components/atoms/Form'
import About from '@/components/About'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Quote from '@/components/Quote'
import Work from '@/components/Work'
import Bothering from '@/components/Bothering'
import Stages from '@/components/Stages'
import Rates from '@/components/Rates'
import Publications from '@/components/Publications'
import Questions from '@/components/Questions'
import Text from '@/components/Text'
import OnlyImage from '@/components/OnlyImage'
import ImageWithText from '@/components/ImageWithText'
import HighlightedText from '@/components/HighlightedText'
import Seo from '@/components/layouts/SEO'


import dynamic from "next/dynamic";


// const StoryDynamic = dynamic(() => import("@/components/Story"), {ssr: false});


const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;


  //console.log("component", __component)

  switch (__component) {
    case 'blocks.brand-footer': Block = BrandFooter; break;
    case 'blocks.items-cards': Block = ItemCards; break;
    case 'blocks.form': Block = Form; break;
    case 'blocks.story': Block = Story; break;
    case 'blocks.header': Block = Header; break;
    case 'blocks.hero-section': Block = HeroSection; break;
    case 'blocks.quote': Block = Quote; break;
    case 'blocks.work': Block = Work; break;
    case 'blocks.bothering': Block = Bothering; break;
    case 'blocks.stages': Block = Stages; break;
    case 'blocks.publications': Block = Publications; break;
    case 'blocks.questions': Block = Questions; break;
    case 'blocks.rates': Block = Rates; break;
    case 'blocks.seo': Block = Seo; break;
    case 'blocks.text': Block = Text; break;
    case 'blocks.highlighted-text': Block = HighlightedText; break;
    case 'blocks.only-image': Block = OnlyImage; break;
    case 'blocks.image-with-text': Block = ImageWithText; break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;