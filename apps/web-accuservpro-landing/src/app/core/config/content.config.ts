// import { ILandingPageStructure } from '@theinterview/xplat/web/features';

import { ILandingPageStructure } from '@theinterview/xplat/core';

// ILandingPageStructure
export const LANDING_CONTENT_CONFIG: ILandingPageStructure = {
  route: '', // is home (grab params match to route, display correct content). to make it seo worthy we'd have to do server side rendering and all the CTA and urls propigate correctly to index. Make sure a tax and href when need to.

  sections: [
    {
      super_script: 'AI-POWERED LEAD TARGETING TOOL',
      h1: ' Unlimited Cold Outreach: <br/> Potential to 10x your sales',
      copy: `<p>Revolutionize your business with Accuserve Pro's Instant Data-Driven Lead isGeneratorFunction. Turn hours into second and leads into business.</p>`,
      image_url: null,
      image_path: '/assets/images/HERO.png',
      ctas: [
        {
          text: '10x your Leads Today',
          external_url: 'notsure.com',
          internal_path: null,
        },
        {
          text: 'Learn More',
          external_url: null,
          internal_path: '#anchor',
        },
        {
          // pre_icon:null,
          text: 'Our Zero Risk, Everything to Gain Guarentee',
          external_url: null,
          internal_path: '#anchor',
          // suffix_icon:
        },
      ],
    },
    {
      h1: `Limited Prelaunch Slots Available`,
      copy: `<p>Take the leap today and become a part of our community with no upfront costs for the first 6 months. You'll gain access to 100 complimentary leads and receive a valuable business report, all at no charge. ($2,000 Value)</p>
      <p><i>Due to our commitment to personalized service and excellence, we only accept a select number of clients per season.</i></p>`,
      cta_text: 'Sign up Now!',
    },
    {
      image_url: null,
      image_path: null,
      copy: `Why is lead generation crucial? It's simple. Without leads, there are no sales; without sales, there's no revenue; and without revenue, growth is just a distant dream. But with AccuRoof, you're not just dreaming of growth; you're actively pursuing it.`,
      signature: '@CEO-ROB STADNICK',
    },
    {
      image_url: null,
      image_path: null,
      copy: `“We're not just another market player; our goal is to bridge the gaps in the industry’s lead generation. Our focus is on converting industry challenges into strengths. We're changing the game, transforming what was once missing in the industry into your greatest strength.”`,
      signature: '@head of product - Trevor AMbler',
    },
    {
      h1: `Let's cut to the chase:`,
      h2: '<p>Relying on unverified leads is <u>time-consuming</u> and <u>costly</u> for your business.<p>',
      copy: `Revolutionize your business with AccuServe Pro's Instant Data-Driven Lead Generator: Turn hours into seconds and leads into business.`,
      columns: [
        {
          image_url: null,
          image_path: '/assets/images/ICON2.png',
          h3: `Smart Outreach`,
          copy: `Arm yourself with crucial data and insights about your prospects to ensure a more personalized and effective communication when you make that initial contact`,
        },
        {
          image_url: null,
          image_path: '/assets/images/ICON.png',
          h3: `Algorithms based on YOUR data`,
          copy: `Imagine a data scientist dedicated to your business needs, but with the speed and efficiency of AI. Our algorithms customize to your data, offering smart, adaptive strategies.`,
        },
        {
          image_url: null,
          image_path: '/assets/images/ICON3.png',
          h3: `The leads are exclusively yours for 8 months`,
          copy: `Revolutionize your business with AccuServe Pro's Instant Data-Driven Lead Generator: Turn hours into seconds and leads into business. `,
        },
      ],
      cta_text: 'Sign up Now!',
    },
    {
      super_script: 'Be at the Forefront: Embrace Market Innovation',
      h1: `<p>Join the revolution with a tool that's <u>reshaping market</u> efficiency <u>standards.</u> </p>  `,
      image_url: null,
      image_path: `/assets/images/ASP Arrow.svg`,
      cta_text: '10x your leads today',
    },
    {
      h1: 'Eliminate Cold Lead Hunting:',
      h1_style_text: 'Heres How',
    },
    {
      h2: `Step 1: Upload Your Historical Quotes and Jobs`,
      copy: `<p>Start winning now. Upload your quote and job history and let our software dissect your wins and misses to prime your pipeline with leads that convert. <span class="text-success">The more quotes provided, the better accuracy we have for future leads.</span></p>`,
      image_url: null,
      image_path: '/assets/images/step1.png',
      image_side: 'right', // change to enum
    },
    {
      h1: `Step 2: Receive a Tailored Business Report`,
      copy: `<p>Insight, not data dumps. Our tailored report cuts through the noise to hand you actionable strategies straight from your own success playbook</p>`,
      image_url: null,
      image_path: '/assets/images/step2.png',
      image_side: 'left', // change to enum
    },
    {
      h1: `Step 3: Generate More Leads with Custom AI Insights`,
      copy: `<p>Sales slumps? Not here. Our custom AI insights tool digs into data, revealing the hottest leads, so you can chase deals, not dead ends</p> <p class="text-success">*The leads are exclusively yours for 8 months</p>`,
      image_url: null,
      image_path: '/assets/images/step3.png',
      image_side: 'right', // change to enum
    },
    {
      h1: `Step 4: Set up your daily targets`,
      copy: `Goodbye, cold calls. Hello, warm welcomes. We automate initial contact with the finesse of your top sales rep—personalized, persistent, profitable.`,
      image_url: null,
      image_path: '/assets/images/step4.png',
      image_side: 'left', // change to enum
    },
    {
      h1: `Step 5: Let us help you turn your cold leads, hot`,
      copy: `Stay in the zone. Our system spots the warm-up and pings you to swoop in at the perfect moment. Your time is for closing, not guessing.`,
      image_url: null,
      image_path: '/assets/images/step5.png',
      image_side: 'right', // change to enum
    },
    {
      h1: `Step 6: Review and Adjust`,
      copy: 'Regularly review the overall performance and use the insights gained to refine your approach. This final step is crucial for continuous improvement and achieving long-term success.',
      image_url: null,
      image_path: '/assets/images/step6.png',
      image_side: 'left', // change to enum
    },
    {
      h1: `Step 7: Rinse & Repeat`,
      copy: `Scale fast. Buy more leads. Repeat success. Our AI sharpens with every cycle, turning your sales process into a revenue-generating machine that never sleeps`,
      image_url: null,
      image_path: '/assets/images/step7.png',
      image_side: 'right', // change to enum
    },
    {
      h1: `& More`,
      columns: [
        {
          image_path: null,
          header: `Dive into untapped markets`,
          copy: `Identify high-potential areas and know where to focus efforts, streamlining your sales strategy and saving your team from chasing less promising leads.`,
        },
        {
          image_path: null,
          header: `Connect with your CRM`,
          copy: `Get real-time updates directly from your CRM whenever your have a new lead. This seamless connection ensures that you stay on top of every task`,
        },
        {
          image_path: null,
          header: `View analytics and performance`,
          copy: `Enhance business decision-making with our analytics and performance tracking services. Discover valuable insights and optimize your strategies for superior results with our expert data analysis and reporting.`,
        },
      ],
    },
    {
      h1: `While your competitors are calculating risks, you're calculating revenue`,
      cta_text: 'Sign me up!',
    },
    {
      h1: `Are you...`,
      h2:'Wondering if this fits your needs? Allow us to check every box for you.',
      table_copy:[
        {
          h1:`Fed up with Cold Calling?`,
          cells:[
            {
              h1:'Prospect Insight',
              copy:'gives Vital Data for More Effective and Personalized Initial Communications',
            },
            {
              h1:'Lead Scoring',
              copy:'Prioritizing Prospects through Data-Driven Ranking',
            },
            {
              h1:'Daily Targets',
              copy:'streamline your outreach process, focusing your efforts where they count the most',
            }
          ]
        },
        {
          h1:`Over the hunt of finding data on clients?`,
          cells:[
            {
              h1:'Comprehensive Data Aggregation ',
              copy:'that compiles lead data from multiple sources',
            },
            {
              h1:'Real-time Data Syncing ',
              copy:'to keep client information up-to-date',
            },
            {
              h1:'Custom Data Filters',
              copy:'that allow you to sort and prioritize leads based on specific criteria',
            }
          ]
        },
        {
          h1:`Frustrated by Spending Resources on Dead-End Leads?`,
          cells:[
            {
              h1:'Personalized Data Driven Leads',
              copy:'Precisely Matching Prospects to Your Unique Specifications',
            },
            {
              h1:'Lead Quality Assessments ',
              copy:'to forecast potential value',
            },
            {
              h1:'ROI Tracking Dashboard ',
              copy:'to monitor the profitability of pursued leads',
            }
          ]
        }
       
      ],
      sub_copy:'Stop wasting time, start saving it',
      cta_text:'Sign me up!'
    },
    {
      h1: 'Lets do the math...',
      copy: 'We want you to multiply your conversions, minimize rejections, and maximize every minute',
      columns: [
        {
          h1: `10 x`,
          h2: `Your Conversion Rate`,
          copy: `Leverage our advanced targeting strategies, you're not just reaching out—you're reaching to the right audience.`,
        },
        {
          h1: `0`,
          h2: `Uninformed Prospect Engagements`,
          copy: `Our software transforms traditional cold calling and door knocking into informed, strategic interactions.`,
        },
        {
          h1: `Countless`,
          h2: `Wasted Hours a week`,
          copy: `time once lost to unproductive prospecting is now yours to invest in closing deals and expanding your business`,
        },
        {
          h1: `∞`,
          h2: `Quantified Cold Leads`,
          copy: `the power of infinite possibilities with our endless stream of quantified cold leads`,
        },
      ],
      image_url: null,
      image_path: null,
      sub_copy: `These are estimates. Real-world results could lead to even more
      doors opening and success stories.`,
    },
    {
      h1: 'Exclusive Pre-Launch Benefits',
      h2: 'Enjoy 6 Months of Complimentary Access',
      copy: `Don't miss out on this opportunity to experience the future of AccuServe Pro without any cost. Act now and secure your spot in our pre-launch program!`,
      ctas: [
        {
          type: 'link',
          text: ' Our Guarentee',
          suffix_icon: '',
          external_url: 'notsure.com',
          internal_path: null,
        },
        {
          type: 'button',
          text: 'Sign me up!',
          suffix_icon: null,
          external_url: 'notsure.com',
          internal_path: null,
        },
      ],
    },
    {
      super_script: '100% MONEY BACK',
      h1: 'Six Month Power Guarentee',
      copy: `Engage with the leads our software generates for a full six months. Put them to work, track your results, and watch your business transform. If, at any point, you're not blown away by the impact and results, we've got you covered. 

        You can back out at any time, and keep all the leads- consider them a gift for your efforts. 
        
        This is more than a guarantee; its a challenge. A challenge to elevate your business, risk-free. What do you have to loose? `,
      cta: [
        {
          type: 'link',
          external_url: 'notsure.com',
          internal_path: null,
        },
      ],
      image_url: null,
      image_path: '/assets/images/ASP_Logo_Mark_Yllow_FAD502.svg',
    },
  ],
};