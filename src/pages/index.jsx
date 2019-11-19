import React from "react";

import Layout from "../components/site-chrome/layout";
import SEO from "../components/site-chrome/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["javascript", "accessibility", "react"]} />
    <div>
      <h2>Niall Maher, DAPx Platform Technical Product Manager, Singlepoint</h2>
      <p>
        The following are links for a presentation on proven components versus
        traditional development.
      </p>
      <h3>For more information:</h3>
      <p>
        Checkout <a href="https://www.singlepoint.ie/">Singlepoint.ie</a>
      </p>
      <p>
        Or send an email to{" "}
        <a href="mailto:infor@singlepoint.ie">info@singlepoint.ie</a>
      </p>

      <h3 id="Testing-Tools">Helpful Articles:</h3>
      <ul>
        <li>
          <a href="https://clubhouse.io/developer-how-to/building-a-product-component-library-and-design-system/">
            Building a product component library
          </a>
        </li>
        <li>
          <a href="https://clubhouse.io/developer-how-to/a-developers-intro-to-design-systems/">
            A developers intro to Design Systems
          </a>
        </li>
        <li>
          <a href="https://medium.com/styled-components/how-to-build-a-great-component-library-a40d974a412d">
            How to build a great component library
          </a>
        </li>
        <li>
          <a href="https://developers.google.com/web/tools/lighthouse/">
            Lighthouse
          </a>
        </li>
      </ul>

      <h3 id="Resources">Resources</h3>
      <ul>
        <li>
          <a href="http://a11yproject.com/">A11y Project</a>
        </li>
        <li>
          <a href="https://dequeuniversity.com">Deque University</a>
        </li>
        <li>
          <a href="http://webaim.org">WebAIM</a>
        </li>
        <li>
          <a href="https://www.w3.org/WAI/">
            Web Accessibility Initiative at the W3C
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/TR/WCAG21/">
            Web Content Accessibility Guidelines
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">
            ARIA Authoring Practices Guide
          </a>
        </li>
        <li>
          <a href="https://www.w3.org/TR/using-aria/">The Rules of ARIA</a> from
          the W3C
        </li>
        <li>
          <a href="https://www.w3.org/WAI/standards-guidelines/mobile/">
            Mobile Accessibility at W3C
          </a>
        </li>
        <li>
          <a href="https://webaim.org/resources/designers/">
            Web Accessibility for Designers
          </a>
        </li>
        <li>
          <a href="https://a11y-style-guide.com/style-guide/section-resources.html">
            A11y Style Guide
          </a>
        </li>
        <li>
          <a href="https://www.skillshare.com/classes/Hacking-Digital-Styleguides-for-Accessibility-Type-Color-Imagery/1920202818">
            Hacking Digital Styleguides for Accessibility
          </a>{" "}
          by Tatiana T. Mac
        </li>
        <li>
          <a href="https://www.udacity.com/course/web-accessibility--ud891">
            Google/Udacity Web Accessibility course
          </a>
        </li>
        <li>
          <a href="https://egghead.io/courses/start-building-accessible-web-applications-today">
            Egghead.io: Start Building Accessible Web Applications Today
          </a>
        </li>
        <li>
          <a href="https://a11ywins.tumblr.com">Accessibility Wins</a>
        </li>
        <li>
          <a href="https://a11yproject.com/follow/">
            Who to follow in accessibility
          </a>
        </li>
      </ul>
      <h3 id="Books">Books</h3>
      <ul>
        <li>
          <a href="http://www.lflegal.com/book/">Structured Negotiation</a>
        </li>
        <li>
          <a href="https://www.smashingmagazine.com/inclusive-design-patterns/">
            Inclusive Design Patterns
          </a>
        </li>
        <li>
          <a href="/smashing-book-6">
            Smashing Book 6: New Frontiers in Web Design
          </a>
        </li>
        <li>
          <a href="https://abookapart.com/products/accessibility-for-everyone">
            Accessibility for Everyone
          </a>
        </li>
        <li>
          <a href="https://shop.smashingmagazine.com/products/apps-for-all">
            Apps for All: Coding Accessible Web Applications
          </a>
        </li>
        <li>
          <a href="https://www.smashingmagazine.com/printed-books/form-design-patterns/">
            Form Design Patterns
          </a>
        </li>
        <li>
          <a href="https://shop.smashingmagazine.com/products/practical-approaches-for-designing-accessible-websites">
            Practical Approaches for Building Accessible Websites
          </a>
        </li>
        <li>
          <a href="https://play.google.com/store/books/details?id=g1QBFJxB_eEC&amp;source=productsearch&amp;utm_source=HA_Desktop_US&amp;utm_medium=SEM&amp;utm_campaign=PLA&amp;pcampaignid=MKTAD0930BO1&amp;gl=US&amp;gclid=CIneyIOpgssCFczYfgodYAQGMg&amp;gclsrc=ds">
            Don't Make Me Think
          </a>
        </li>
        <li>
          <a href="http://rosenfeldmedia.com/books/a-web-for-everyone/">
            A Web for Everyone
          </a>
        </li>
        <li>
          <a href="https://abookapart.com/products/just-enough-research">
            Just Enough Research
          </a>
        </li>
      </ul>
    </div>
  </Layout>
);

export default IndexPage;
