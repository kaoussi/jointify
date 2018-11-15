import React from 'react'
import Card from './Card';
import Icon1 from '../../static/svg/icon1.svg'
import Icon2 from '../../static/svg/icon2.svg'
import Icon3 from '../../static/svg/icon3.svg'
import Icon4 from '../../static/svg/icon4.svg'

const Icon1Src = (
  <Icon1/>
);

const Icon2Src = (
  <Icon2/>
);
const Icon3Src = (
  <Icon3/>
);
const Icon4Src = (
  <Icon4/>
);

const Features = () => (
  <section className="features section text-center">
  <div className="container">
      <div className="features-inner section-inner has-top-divider">
          <h2 className="section-title mt-0">What you get</h2>
          <div className="features-wrap">
            <Card title="Lorem Ipsum" content="often arouses curiosity due to its resemblance to classical latin" icon={Icon1Src}/>
            <Card title="Lorem Ipsum" content="often arouses curiosity due to its resemblance to classical latin" icon={Icon2Src}/>
            <Card title="Lorem Ipsum" content="often arouses curiosity due to its resemblance to classical latin" icon={Icon3Src}/>
            <Card title="Lorem Ipsum" content="often arouses curiosity due to its resemblance to classical latin" icon={Icon4Src}/>
          </div>
      </div>
  </div>
</section>
)

export default Features