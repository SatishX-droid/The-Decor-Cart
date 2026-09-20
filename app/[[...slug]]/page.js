import Link from 'next/link';

const WA='https://wa.me/919212513091';
const wa=t=>WA+'?text='+encodeURIComponent(t);

const products=[
 'Shubh Labh Decor Combo',
 'Decorative Trays',
 'Cutlery Holders',
 'Festive Diwali Decor',
 'Handloom Bedsheets',
 'Wedding Essentials',
 'Gift Hampers',
 'Home Essentials'
];

const cats=[
 'Home Decor',
 'Handloom',
 'Wedding Items',
 'Hampers',
 'Trays',
 'Cutlery Holders',
 'Diwali Items',
 'Bedsheets',
 'Purses',
 'Home Essentials',
 'Kitchen Essentials',
 'Corporate Orders'
];

const homeCats=[
 'Home Decor',
 'Handloom',
 'Wedding Items',
 'Hampers',
 'Kitchen Essentials',
 'All Decorations'
];

const homePosts=[
 ['Traditional Decor with a Modern Touch','/blog/traditional-decor','Simple ways to make festive decor feel warm and balanced.'],
 ['Thoughtful Gifting Ideas for Every Occasion','/blog/gifting-ideas','Practical ideas for weddings, festivals and corporate gifting.'],
 ['Small Decor Pieces, Big Difference','/blog/small-decor','How small accents can change the mood of a room.']
];

const posts={
 'traditional-decor':[
  'Traditional Decor with a Modern Touch',
  'DECOR IDEAS',
  'Start with one meaningful piece. A room does not need dozens of decorations to feel festive. Choose one piece that has a story, then let the surrounding space breathe. A Shubh Labh pair, a decorative tray or a small diya can become the visual centre of a console or entryway.',
  'Use colour with intention. Traditional colours can look contemporary when they are repeated in small details rather than spread everywhere. Pair one strong colour with neutral fabrics, natural textures and warm lighting.'
 ],
 'gifting-ideas':[
  'Thoughtful Gifting Ideas for Every Occasion',
  'GIFTING',
  'A useful gift has a longer life. Trays, organisers, kitchen accessories, handloom pieces and home essentials can be practical while still looking special.',
  'For weddings, consider coordinated pieces or custom packing. For festivals, traditional motifs and bright colours can work beautifully. For corporate gifting, simple branding and consistent presentation can make a set feel polished.'
 ],
 'small-decor':[
  'Small Decor Pieces, Big Difference',
  'HOME STYLE',
  'Start with a clean surface, add one functional object, then introduce one decorative accent. This simple layering approach helps a space feel considered rather than crowded.',
  'Warm light changes the way colours and textures look. A diya, candle holder or small decorative light can add a gentle evening mood without changing the whole room.'
 ]
};

function Header(){
 return <>
  <div className="topbar">
   <div className="container">
    <span>Worldwide Delivery | Customization Available | Bulk Orders & Corporate Gifting</span>
    <span>Follow Us · Instagram · WhatsApp</span>
   </div>
  </div>

  <nav className="nav">
   <div className="container navin">

    <a className="brand" href="/">
     <div className="monogram">DC</div>
     <div className="brandtext">
      DECORCART
      <small>BY PALAK</small>
     </div>
    </a>

    <div className="links">
     <a href="/">Home</a>
     <a href="/shop">Shop</a>
     <a href="/about">About Us</a>
     <a href="/categories">Categories</a>
     <a href="/customization">Customization</a>
     <a href="/blog">Blog</a>
     <a href="/contact">Contact</a>
    </div>

    <a
     className="wa"
     href={wa('Hi Palak, I would like to enquire about your products.')}
    >
     ◉ WhatsApp
    </a>

   </div>
  </nav>
 </>
}

function Footer(){
 return (
  <footer className="footer">
   <div className="container footerGrid">

    <div>
     <div className="footBrand">
      DECORCART
      <br/>
      <small>BY PALAK</small>
     </div>
     <p>Decorate Every Moment.</p>
    </div>

    <div>
     <h4>Quick Links</h4>
     <a href="/">Home</a>
     <a href="/shop">Shop</a>
     <a href="/about">About</a>
     <a href="/blog">Blog</a>
    </div>

    <div>
     <h4>Support</h4>
     <a href="/shipping">Shipping</a>
     <a href="/returns">Returns</a>
     <a href="/payment">Payment</a>
     <a href="/faq">FAQ</a>
    </div>

    <div>
     <h4>Contact</h4>
     <a href="tel:+919212513091">+91 9212513091</a>
     <span>New Delhi - 110015</span>
    </div>

    <div
     className="copy"
     style={{gridColumn:'1/-1'}}
    >
     <span>© 2026 Decorcart by Palak</span>
     <span>Worldwide Delivery</span>
    </div>

   </div>
  </footer>
 )
}

function Shell({title,sub,children}){
 return (
  <>
   <Header/>

   <section className="pageHero">
    <div className="container">
     <div className="eyebrow">DECORCART BY PALAK</div>
     <h1>{title}</h1>
     {sub && <p className="muted">{sub}</p>}
    </div>
   </section>

   {children}

   <a
    className="floatwa"
    href={wa('Hi Palak, I would like to enquire about your products.')}
   >
    ◉
   </a>

   <Footer/>
  </>
 )
}

function Shop(){
 return (
  <Shell
   title="Shop Decor & Essentials"
   sub="For retail, gifting, weddings, corporate orders and bulk requirements."
  >
   <section className="section">
    <div className="container grid">

     {products.map((p,i)=>(
      <article className="product" key={p}>

       <img
        src="/images/shubh-labh-combo.jpg"
        alt={p}
       />

       <div className="pbody">

        <span className="badge">
         {i===0 ? 'Best Seller' : 'Enquire'}
        </span>

        <h3>{p}</h3>

        <div className="pprice">
         {i===0 ? '₹230' : 'Price on enquiry'}
        </div>

        <p className="muted">
         Price varies by product, quantity and customization.
        </p>

        <a
         className="btn dark"
         href={
          i===0
           ? '/products/shubh-labh-combo'
           : wa(
             'Hi Palak, I am interested in '+p+
             '. Please share price and availability.'
            )
         }
        >
         {i===0 ? 'View Product' : 'WhatsApp Enquiry'}
        </a>

       </div>
      </article>
     ))}

    </div>
   </section>
  </Shell>
 )
}

function Product(){
 return (
  <Shell
   title="Shubh Labh Decor Combo"
   sub="Festive gifting, housewarming and traditional home decor."
  >
   <section className="section">

    <div className="container feature">

     <img
      className="featureImg"
      src="/images/shubh-labh-combo.jpg"
      alt="Shubh Labh Decor Combo"
     />

     <div>

      <span className="badge">
       Best Seller
      </span>

      <h2>
       Shubh Labh Decor Combo
      </h2>

      <p className="muted">
       One Shubh Labh pair (4 × 3 inch),
       one decorative box (8 × 4 × 1.5 inch)
       and one diya.
      </p>

      <div className="price">
       ₹230
      </div>

      <p>
       MOQ: 10 combos · Shipping extra
      </p>

      <a
       className="wa"
       href={wa(
        'Hi Palak, I am interested in the Shubh Labh Decor Combo. Please share availability and shipping charges.'
       )}
      >
       ◉ Buy / Enquire on WhatsApp
      </a>

      <p className="muted">
       Payment in advance by UPI or bank transfer.
       COD is not available.
      </p>

     </div>

     <div className="benefits">
      <div>Worldwide delivery</div>
      <div>Customization available</div>
      <div>Bulk discounts may be available</div>
      <div>Dispatch generally 3–4 days if ready</div>
     </div>

    </div>

   </section>
  </Shell>
 )
}

function Simple({kind}){

 const data={
  about:[
   'Decorate Every Moment.',
   'Thoughtful decor, gifting and celebration essentials from New Delhi.',
   'Decorcart by Palak brings together home decor, handloom, wedding essentials and gifting products for individuals, wedding planners, event organisers, gift shops and corporate buyers.'
  ],

  customization:[
   'Customization',
   'Names, logos, colours and special packing for suitable products.',
   'Suitable products can be customized for weddings, festivals, corporate events and special gifts. Ask about names, logos, colours, special packing and bulk requirements.'
  ],

  contact:[
   "Let's talk about your order.",
   'Product enquiries, customization, bulk orders and worldwide delivery.',
   'Palak Bansal · +91 9212513091 · New Delhi - 110015. WhatsApp is the fastest way to get availability, price, shipping and customization details.'
  ]

 }[kind];

 return (
  <Shell
   title={data[0]}
   sub={data[1]}
  >
   <section className="section">
    <div className="container prose">

     <h2>
      {
       kind==='about'
        ? 'About Decorcart by Palak'
        : kind==='customization'
        ? 'Personalise your order'
        : 'Contact Decorcart by Palak'
      }
     </h2>

     <p>{data[2]}</p>

     <p>
      Worldwide delivery is available.
      Dispatch is generally 3–4 days when ready;
      bulk and customized requirements can take longer.
     </p>

     <a
      className="wa"
      href={wa(
       'Hi Palak, I would like to enquire about your '+kind+'.'
      )}
     >
      ◉ Chat on WhatsApp
     </a>

    </div>
   </section>
  </Shell>
 )
}

function Categories(){
 return (
  <Shell title="Categories">
   <section className="section">
    <div className="container grid">

     {cats.map(c=>(
      <a
       className="product"
       href="/shop"
       key={c}
      >

       <img
        src="/images/shubh-labh-combo.jpg"
        alt={c}
       />

       <div className="pbody">
        <h3>{c}</h3>
        <span className="muted">
         Explore collection →
        </span>
       </div>

      </a>
     ))}

    </div>
   </section>
  </Shell>
 )
}

function Blog(){
 return (
  <Shell
   title="Decor, Gifting & Celebration Ideas"
   sub="Original, practical inspiration from Decorcart by Palak."
  >
   <section className="section">

    <div className="container blogGrid">

     {Object.entries(posts).map(([k,v])=>(
      <article
       className="blogCard"
       key={k}
      >

       <img
        src="/images/shubh-labh-combo.jpg"
        alt={v[0]}
       />

       <div className="blogBody">

        <h3>{v[0]}</h3>

        <p className="muted">
         {v[2]}
        </p>

        <a href={'/blog/'+k}>
         Read More →
        </a>

       </div>

      </article>
     ))}

    </div>

   </section>
  </Shell>
 )
}

function Post({data}){
 return (
  <Shell
   title={data[0]}
   sub={data[1]}
  >

   <article className="section prose">

    <img
     src="/images/shubh-labh-combo.jpg"
     alt={data[0]}
    />

    <h2>
     A simple approach to decor
    </h2>

    <p>
     {data[2]}
    </p>

    <h2>
     Make the details work together
    </h2>

    <p>
     {data[3]}
    </p>

    <p>
     At Decorcart by Palak, we love pieces
     that make celebrations feel special without
     making everyday spaces difficult to live in.
    </p>

   </article>

  </Shell>
 )
}

function Policy({type}){

 const d={
  shipping:[
   'Shipping Policy',
   'Orders are generally dispatched within 3–4 days when products are ready. Bulk, customized or made-to-order requirements may take additional time. Worldwide delivery enquiries are accepted. Shipping charges depend on destination, package size, weight and courier availability.'
  ],

  returns:[
   'Return & Replacement',
   'Returns or replacements are available where applicable. For a claim, provide a complete video of the parcel being opened, showing the package and product in a continuous 360° unboxing recording. Customized products may have different conditions.'
  ],

  payment:[
   'Payment Information',
   'Payment is required before dispatch. Orders are handled through UPI or bank transfer. COD is not available. Availability, quantity, customization, shipping and final amount are confirmed on WhatsApp before payment.'
  ],

  privacy:[
   'Privacy Policy',
   'Customer information such as name, phone number, delivery address and order details is used as needed to respond to enquiries, process orders, arrange delivery and provide support. Never share UPI PINs, OTPs or banking passwords.'
  ],

  terms:[
   'Terms & Conditions',
   'Product prices, availability, minimum quantities, customization charges and shipping costs may vary. Final pricing is confirmed on WhatsApp before payment. Customers are responsible for accurate contact and delivery information.'
  ]

 }[type];

 return (
  <Shell title={d[0]}>
   <section className="section">

    <div className="container prose">
     <p>{d[1]}</p>
    </div>

   </section>
  </Shell>
 )
}

function FAQ(){

 const q=[
  [
   'Do you deliver worldwide?',
   'Yes, worldwide delivery enquiries are accepted.'
  ],
  [
   'Is COD available?',
   'No. Payment is accepted in advance through UPI or bank transfer.'
  ],
  [
   'What is the dispatch time?',
   'Generally 3–4 days if the product is ready. Bulk and customized orders can take longer.'
  ],
  [
   'Do you offer customization?',
   'Yes, suitable products can be customized with names, logos, colours or special packing.'
  ],
  [
   'Can I order one piece?',
   'Generally yes, although MOQ can depend on the product. The featured Shubh Labh combo has an MOQ of 10.'
  ]
 ];

 return (
  <Shell title="Frequently Asked Questions">

   <section className="section">

    <div className="container prose">

     {q.map(x=>(
      <div
       className="benefits"
       style={{marginBottom:14}}
       key={x[0]}
      >

       <h3>{x[0]}</h3>
       <p>{x[1]}</p>

      </div>
     ))}

    </div>

   </section>

  </Shell>
 )
}

function Home(){

 return (
  <>
   <Header/>

   <main>

    <section className="hero">
     <div className="container heroGrid">

      <div>

       <div className="eyebrow">
        HOME DECOR &nbsp;|&nbsp; HANDLOOM &nbsp;|&nbsp; WEDDING ESSENTIALS
       </div>

       <h1>
        Beautiful Spaces
        <br/>
        Happier Moments
       </h1>

       <p>
        Unique home decor, thoughtful gifting
        and elegant wedding essentials for every occasion.
       </p>

       <a
        className="btn dark"
        href="/shop"
       >
        Explore Collection →
       </a>

       <div className="trust">

        <span>
         🚚 <b>Worldwide</b>Delivery
        </span>

        <span>
         🎁 <b>Customization</b>Available
        </span>

        <span>
         ♡ <b>Bulk Orders</b>& Corporate Gifting
        </span>

       </div>

      </div>

      <div className="heroPic"/>

     </div>
    </section>


    <section className="section">

     <div className="container feature">

      <img
       className="featureImg"
       src="/images/shubh-labh-combo.jpg"
       alt="Shubh Labh Decor Combo"
      />

      <div>

       <span className="badge">
        Best Seller
       </span>

       <h2>
        Shubh Labh Decor Combo
       </h2>

       <p className="muted">
        A beautiful blend of tradition and colour
        for festive gifting, housewarming and home decor.
       </p>

       <div className="specs">

        <span>
         Shubh Labh Pair
         <br/>
         <b>4 × 3 inch</b>
        </span>

        <span>
         Decorative Box
         <br/>
         <b>8 × 4 × 1.5 inch</b>
        </span>

        <span>
         1 Diya
        </span>

       </div>

       <div className="price">
        ₹230
       </div>

       <p className="muted">
        MOQ 10 pieces | Shipping extra
       </p>

       <a
        className="wa"
        href={wa(
         'Hi Palak, I am interested in the Shubh Labh Decor Combo. Please share availability and shipping charges.'
        )}
       >
        ◉ Enquire on WhatsApp
       </a>

      </div>

      <div className="benefits">

       <div>
        🚚 <b>Worldwide Delivery</b>
        <br/>
        <small>Across all countries</small>
       </div>

       <div>
        ▣ <b>Secure Payment</b>
        <br/>
        <small>UPI / Bank Transfer</small>
       </div>

       <div>
        ✎ <b>Customization</b>
        <br/>
        <small>Name, logo, colour & packing</small>
       </div>

       <div>
        ▱ <b>Bulk Orders</b>
        <br/>
        <small>Wholesale, corporate & wedding</small>
       </div>

      </div>

     </div>

    </section>


    <section
     className="section"
     style={{background:'#fbf7f2'}}
    >

     <div className="container">

      <div className="sectionHead">

       <div>
        <div className="eyebrow">
         EXPLORE
        </div>

        <h2>
         Shop by Category
        </h2>

        <p className="muted">
         Collections for every occasion.
        </p>
       </div>

       <a href="/categories">
        View all →
       </a>

      </div>

      <div className="cats">

       {homeCats.map(c=>(
        <a
         className="cat"
         href="/shop"
         key={c}
        >

         <img
          src="/images/shubh-labh-combo.jpg"
          alt={c}
         />

         <div>{c}</div>

        </a>
       ))}

      </div>

     </div>

    </section>


    <section className="section">

     <div className="container aboutGrid">

      <div>

       <div className="eyebrow">
        ABOUT DECORCART BY PALAK
       </div>

       <h2>
        A Little About Us
       </h2>

       <p
        className="muted"
        style={{
         fontSize:17,
         lineHeight:1.7
        }}
       >
        Beautiful home decor, handloom and wedding
        essentials that add charm to everyday life.
        From festive decor and thoughtful gifts to
        customized hampers, we believe every home
        and celebration deserves a personal touch.
       </p>

       <a
        className="btn dark"
        href="/about"
       >
        Know More About Us →
       </a>

      </div>

      <div className="why">

       <h2 style={{fontSize:34}}>
        Why Choose Us?
       </h2>

       <div className="whyGrid">

        <div className="whyItem">
         <div className="icon">◎</div>
         <b>Worldwide</b>
         <br/>
         Delivery
        </div>

        <div className="whyItem">
         <div className="icon">⚙</div>
         <b>Customization</b>
         <br/>
         Available
        </div>

        <div className="whyItem">
         <div className="icon">♧</div>
         <b>No Minimum</b>
         <br/>
         Generally 1 Qty
        </div>

        <div className="whyItem">
         <div className="icon">□</div>
         <b>Bulk Discounts</b>
         <br/>
         Available
        </div>

        <div className="whyItem">
         <div className="icon">♡</div>
         <b>All Customer</b>
         <br/>
         Types
        </div>

       </div>

      </div>

     </div>

    </section>


    <section
     className="section"
     style={{paddingTop:0}}
    >

     <div className="container">

      <div className="sectionHead">

       <div>

        <div className="eyebrow">
         FROM OUR BLOG
        </div>

        <h2>
         Ideas, Inspiration & More
        </h2>

       </div>

       <a href="/blog">
        View All Blogs →
       </a>

      </div>

      <div className="blogGrid">

       {homePosts.map(p=>(
        <article
         className="blogCard"
         key={p[0]}
        >

         <img
          src="/images/shubh-labh-combo.jpg"
          alt={p[0]}
         />

         <div className="blogBody">

          <h3>
           {p[0]}
          </h3>

          <p className="muted">
           {p[2]}
          </p>

          <a href={p[1]}>
           Read More →
          </a>

         </div>

        </article>
       ))}

      </div>

     </div>

    </section>

   </main>

   <a
    className="floatwa"
    href={wa(
     'Hi Palak, I would like to enquire about your products.'
    )}
   >
    ◉
   </a>

   <Footer/>

  </>
 )
}

export default function Page({params}){

 const slug=(params.slug||[]).join('/');

 if(!slug)
  return <Home/>;

 if(slug==='shop')
  return <Shop/>;

 if(slug==='products/shubh-labh-combo')
  return <Product/>;

 if(
  slug==='about' ||
  slug==='customization' ||
  slug==='contact'
 )
  return <Simple kind={slug}/>;

 if(slug==='categories')
  return <Categories/>;

 if(slug==='blog')
  return <Blog/>;

 if(
  slug.startsWith('blog/') &&
  posts[slug.slice(5)]
 )
  return <Post data={posts[slug.slice(5)]}/>;

 if(
  ['shipping','returns','payment','privacy','terms']
  .includes(slug)
 )
  return <Policy type={slug}/>;

 if(slug==='faq')
  return <FAQ/>;

 return (
  <Shell title="Page not found">
   <section className="section">

    <div className="container prose">

     <p>
      The page you requested could not be found.
     </p>

     <Link
      className="wa"
      href="/"
     >
      Back to Home
     </Link>

    </div>

   </section>
  </Shell>
 )
}