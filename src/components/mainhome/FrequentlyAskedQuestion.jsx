import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title transition-all ease-in" onClick={toggleAccordion}>
        <h3 className='text-white'>{title}</h3>
        <span>{isOpen ? <HorizontalRuleOutlinedIcon sx={{ color: '#fff' }} /> : <AddOutlinedIcon sx={{ color: '#fff' }} />}</span>
      </div>
      {isOpen && (
        <div className="accordion-content transition-all duration-300 ease-in-out">
          <p className='text-gray-400'>{content}</p>
        </div>
      )}
    </div>
  );
};

const FrequentlyAskedQuestion = () => {

  const data = [
    {
      title: 'What is the BLOX Coin?',
      content: `Step into the digital frontier of 'BLOX', a captivating journey set in the crypto Wild West. This project transcends the traditional boundaries of cryptocurrency, inviting you to partake in a thrilling adventure filled with creativity, and strategy. At its core, 'Blox Coin' is about navigating the vast, unpredictable terrains of the crypto world with agility, all while engaging in high-stakes battles that promise both exhilaration and rewarding ventures.`,
    },
    {
      title: 'How do I participate in the presale?',
      content: 'You can join the presale on Binance, Ethereum, Arbitrum, Polygon, Base, Linea Mainnet, or OP Mainnet. Simply link your wallet to the presale widget provided and use native coin & stable tokens to secure your $BLOX tokens.',
    },
    {
      title: 'Which One Is Better- Tokens Or Coins?',
      content: 'As for the investment, Tokens are better than coins. They have a specific purpose and will never go out of the market demand as long as their applications have real-world uses.',
    },
    {
      title: 'What Is The Difference Between Coin & Token?',
      content: 'Crypto coins and tokens are two different things. Whereas crypto coins are a native asset of blockchains like Bitcoin or Ethereum, crypto tokens are created by platforms and applications built on top of an existing blockchain.',
    },
  ];
  const data1 = [
    {
      title: 'What is the future of BLOX Coin?',
      content: `Designed specifically for businesses and consumers, we lead the charge in the mainstream adoption of Web3 payments. We don't follow anyone's rules — we set them. We stand firm in building a solid foundation for cryptocurrency-based gaming. On the BLOX, we do not just talk, we make things happen.`,
    },
    {
      title: 'Why Should You Invest In BLOX COIN?',
      content: 'BLOX COIN has already started impacting the field and will become a key player shortly. We are launching projects (dex, payment gateway, wallet, bridge, blox connect) & innovations that are highly valued today and will get a high expansion in the future.',
    },
    {
      title: 'When Can I Claim My BLOX?',
      content: 'As soon as the fundraising rounds are over, it will be TGE (Token Generation Event) and investors can claim according to the vesting of each round..',
    },
    {
      title: 'Is there a way to contact support?',
      content: 'We’re here to assist you! For quick support, hop into our Telegram channel where a support team will be ready to help. Alternatively, you can email sales@bloxchain.network and we will get back to you as soon as possible.',
    },
  ];

  return (
    <div>
      <div className="text-center mb-5">
        <div className="text-white text-center font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl mb-5">
          Frequently Asked Question
        </div>
        <div className="text-white">
          The most common questions about how our <br /> business works and what can do for you.
        </div>
      </div>
      <div className="my-12">

        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg="6" md="6" sm="12" xs="12">
              <div className="accordion">
                {data.map((item, index) => (
                  <AccordionItem key={index} title={item.title} content={item.content} />
                ))}
              </div>
            </Grid>
            <Grid item lg="6" md="6" sm="12" xs="12">
              <div className="accordion">
                {data1.map((item, index) => (
                  <AccordionItem key={index} title={item.title} content={item.content} />
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestion