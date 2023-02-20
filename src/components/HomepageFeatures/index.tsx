import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About me',
    description: (
      <>
        I believe that through collaboration we can build better societies. Blockchains enable collaboration on a global scale between humans and machines: obtaining an identity and the ability to interact is permissionless. The integration of on-chain identities and programmable money allows us to build entirely new systems.
        <br />
        These new systems should be transparent in that they enforce financial rules and interactions that cannot be cheated. However, they also come with great challenges as we navigate the issues of "intentions" of systems and their actual implementation.
      </>
    ),
  },
  {
    title: 'My Work',
    description: (
      <>
        I&apos;m the co-founder and CTO of <a href="https://interlay.io">Interlay</a> where we build Bitcoin DeFi infrastructure. We build and launched the first decentralized Bitcoin bridge. The bridge is based on the <a href="https://xclaim.io">XCLAIM</a>protocol that <a href="https://www.alexeizamyatin.me/">Alexei</a> and I developed during our PhDs. We are now building out lending protocols, AMMs, and core bridging infrastructure.
        <br />
        I did my PhD at the <a href="https://www.imperial.ac.uk/cryptocurrency">Imperial College London cryptocurrency lab</a> where I met some of the greatest people I had ever the chance to work with on DeFi, cross-chain, and smart contracts.
      </>
    ),
  },
  {
    title: 'Outside work',
    description: (
      <>
        When I&apos;m not in front of a computer, you will find me outdoors chasing waves, doing triathlons, hiking, or skiing.
      </>
    )
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('row')}>
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
