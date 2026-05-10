# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: partnersignup.spec.js >> Signup Error Flow - 0
- Location: tests\partnersignup.spec.js:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Business Name' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Free Business Advertising & Local Deal Marketplace" [level=1] [ref=e2]
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - banner [ref=e7]:
          - generic [ref=e8]:
            - img "Site Logo" [ref=e9] [cursor=pointer]
            - generic [ref=e10]:
              - generic [ref=e12] [cursor=pointer]: All locations
              - generic [ref=e13]: Search
              - searchbox "Search" [ref=e14]
              - img "search" [ref=e16] [cursor=pointer]
            - generic [ref=e17]:
              - button "Log in" [ref=e19] [cursor=pointer]
              - button "Sign up" [ref=e21] [cursor=pointer]
        - navigation [ref=e25]:
          - generic [ref=e26] [cursor=pointer]:
            - generic [ref=e27]: Local deals and Offers
            - img "chevron-down" [ref=e28]
          - generic [ref=e29] [cursor=pointer]:
            - generic [ref=e30]: Coupons
            - img "chevron-down" [ref=e31]
          - generic [ref=e33] [cursor=pointer]: Business Directory
          - link "Blog" [ref=e35] [cursor=pointer]:
            - /url: https://locoldeal.com/blog
      - generic [ref=e36]:
        - generic [ref=e37]:
          - generic [ref=e39]:
            - generic [ref=e40]:
              - img "Temu Product" [ref=e41]
              - link "Available on Temu Get Deal" [ref=e43] [cursor=pointer]:
                - /url: https://www.temu.com
                - generic [ref=e44]:
                  - generic [ref=e45]: Available on Temu
                  - generic [ref=e46]: Get Deal
              - generic [ref=e47]:
                - generic [ref=e48]: Today's Deals
                - img "Temu Logo" [ref=e49]
            - generic [ref=e51]:
              - generic [ref=e53]:
                - img "Beauty products promotion" [ref=e56]
                - img "Beauty products promotion" [ref=e59]
                - img "Beauty products promotion" [ref=e62]
              - generic [ref=e63]:
                - button [ref=e64] [cursor=pointer]
                - button [ref=e65] [cursor=pointer]
                - button [ref=e66] [cursor=pointer]
              - button [disabled]
              - button
          - generic [ref=e70]:
            - generic [ref=e73]:
              - img "Feature illustration icon" [ref=e74]
              - generic [ref=e75]:
                - heading "Consumers" [level=2] [ref=e76]
                - paragraph [ref=e77]: Browse freely or create a quick, free account. Shop for local deals or enjoy savings from national chains.
              - generic [ref=e78]: "1"
            - generic [ref=e81]:
              - img "Feature illustration icon" [ref=e82]
              - generic [ref=e83]:
                - heading "Businesses" [level=2] [ref=e84]
                - paragraph [ref=e85]: Create an account and start posting your best offers! Promoting your business has never been easier!
              - generic [ref=e86]: "2"
            - generic [ref=e89]:
              - img "Feature illustration icon" [ref=e90]
              - generic [ref=e91]:
                - heading "The Ultimate Marketplace" [level=2] [ref=e92]
                - paragraph [ref=e93]: A win-win for both Consumers and Businesses!
              - generic [ref=e94]: "3"
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]: Popular
                - generic [ref=e101]: Coupons
              - button "See All Coupons" [ref=e102] [cursor=pointer]:
                - generic [ref=e103]: See All Coupons
            - generic [ref=e104]:
              - generic [ref=e106]:
                - generic [ref=e110]:
                  - article [ref=e112]:
                    - generic [ref=e113]:
                      - generic [ref=e114]: Exclusive
                      - generic [ref=e116]: June 5, 2026
                    - heading "Big test Savings Just Dropped — Don’t Miss Out - get 20% off on any test account" [level=2] [ref=e118]
                    - button "Get Deal" [ref=e119] [cursor=pointer]
                  - img "curve" [ref=e120]
                - generic [ref=e124]:
                  - article [ref=e126]:
                    - generic [ref=e127]:
                      - generic [ref=e128]: Exclusive
                      - generic [ref=e130]: December 2, 2026
                    - img "Dermstore" [ref=e132]
                    - generic [ref=e133]: Dermstore
                    - heading "20% off PCA SKIN! use this code - 20% off PCA SKIN! use this code" [level=2] [ref=e134]
                    - button "Get Deal" [ref=e135] [cursor=pointer]
                  - img "curve" [ref=e136]
                - generic [ref=e140]:
                  - article [ref=e142]:
                    - generic [ref=e143]:
                      - generic [ref=e144]: Exclusive
                      - generic [ref=e146]: May 30, 2026
                    - heading "test coupon-6 4/25/2026 - this is coupon description" [level=2] [ref=e148]
                    - button "Get Deal" [ref=e149] [cursor=pointer]
                  - img "curve" [ref=e150]
                - generic [ref=e154]:
                  - article [ref=e156]:
                    - generic [ref=e157]:
                      - generic [ref=e158]: Exclusive
                      - generic [ref=e160]: December 12, 2029
                    - heading "The tony Coupon - Tony Made Coupon For You" [level=2] [ref=e162]
                    - button "Get Deal" [ref=e163] [cursor=pointer]
                  - img "curve" [ref=e164]
                - generic [ref=e168]:
                  - article [ref=e170]:
                    - generic [ref=e171]:
                      - generic [ref=e172]: Exclusive
                      - generic [ref=e174]: September 22, 2030
                    - img "Missacc" [ref=e176]
                    - generic [ref=e177]: Missacc
                    - heading "Find Your Perfect Dress at Special Prices - 5% OFF OVER $95" [level=2] [ref=e178]
                    - button "Get Deal" [ref=e179] [cursor=pointer]
                  - img "curve" [ref=e180]
                - generic [ref=e184]:
                  - article [ref=e186]:
                    - generic [ref=e187]:
                      - generic [ref=e188]: Exclusive
                      - generic [ref=e190]: May 25, 2026
                    - heading "testcoupon-2 04/25/2026 - this is coupon description" [level=2] [ref=e192]
                    - button "Get Deal" [ref=e193] [cursor=pointer]
                  - img "curve" [ref=e194]
                - generic [ref=e198]:
                  - article [ref=e200]:
                    - generic [ref=e201]:
                      - generic [ref=e202]: Exclusive
                      - generic [ref=e204]: May 25, 2026
                    - heading "test coupon 10 - this is coupon description" [level=2] [ref=e206]
                    - button "Get Deal" [ref=e207] [cursor=pointer]
                  - img "curve" [ref=e208]
                - generic [ref=e212]:
                  - article [ref=e214]:
                    - generic [ref=e215]:
                      - generic [ref=e216]: Exclusive
                      - generic [ref=e218]: June 5, 2026
                    - heading "test coupon 5/5/2026(business level) - this is coupon description" [level=2] [ref=e220]
                    - button "Get Deal" [ref=e221] [cursor=pointer]
                  - img "curve" [ref=e222]
                - generic [ref=e226]:
                  - article [ref=e228]:
                    - generic [ref=e229]:
                      - generic [ref=e230]: Exclusive
                      - generic [ref=e232]: March 23, 3232
                    - heading "0.1% OFF on order above $1bn - purchase items above $1bn and get nothing" [level=2] [ref=e234]
                    - button "Get Deal" [ref=e235] [cursor=pointer]
                  - img "curve" [ref=e236]
                - generic [ref=e240]:
                  - article [ref=e242]:
                    - generic [ref=e243]:
                      - generic [ref=e244]: Exclusive
                      - generic [ref=e246]: May 31, 2026
                    - img "Ciciful" [ref=e248]
                    - generic [ref=e249]: Ciciful
                    - heading "Save 18% on Stylish Women’s Clothing - Save 18% on Stylish Women’s Clothing" [level=2] [ref=e250]
                    - button "Get Deal" [ref=e251] [cursor=pointer]
                  - img "curve" [ref=e252]
                - generic [ref=e256]:
                  - article [ref=e258]:
                    - generic [ref=e259]:
                      - generic [ref=e260]: Exclusive
                      - generic [ref=e262]: December 31, 2026
                    - img "Ciciful" [ref=e264]
                    - generic [ref=e265]: Ciciful
                    - heading "Save 10% on Fashion All Year Round - Save 10% on Fashion All Year Round" [level=2] [ref=e266]
                    - button "Get Deal" [ref=e267] [cursor=pointer]
                  - img "curve" [ref=e268]
                - generic [ref=e272]:
                  - article [ref=e274]:
                    - generic [ref=e275]:
                      - generic [ref=e276]: Exclusive
                      - generic [ref=e278]: December 12, 2029
                    - heading "DR Strange Coupon - Dr Strange Made Coupon for You Exclusive" [level=2] [ref=e280]
                    - button "Get Deal" [ref=e281] [cursor=pointer]
                  - img "curve" [ref=e282]
                - generic [ref=e286]:
                  - article [ref=e288]:
                    - generic [ref=e289]:
                      - generic [ref=e290]: Exclusive
                      - generic [ref=e292]: September 29, 2026
                    - img "Missacc" [ref=e294]
                    - generic [ref=e295]: Missacc
                    - heading "Discover Stylish Dresses and Accessories for Less - 5% OFF OVER $95" [level=2] [ref=e296]
                    - button "Get Deal" [ref=e297] [cursor=pointer]
                  - img "curve" [ref=e298]
                - generic [ref=e302]:
                  - article [ref=e304]:
                    - generic [ref=e305]:
                      - generic [ref=e306]: Exclusive
                      - generic [ref=e308]: March 16, 2028
                    - img "Zlike Hair" [ref=e310]
                    - generic [ref=e311]: Zlike Hair
                    - heading "Get $100 Off Orders Over $582 on Premium Hair Products - Get $100 Off Orders Over $582 on Premium Hair Products" [level=2] [ref=e312]
                    - button "Get Deal" [ref=e313] [cursor=pointer]
                  - img "curve" [ref=e314]
                - generic [ref=e318]:
                  - article [ref=e320]:
                    - generic [ref=e321]:
                      - generic [ref=e322]: Exclusive
                      - generic [ref=e324]: June 30, 2026
                    - img "AliExpress US" [ref=e326]
                    - generic [ref=e327]: AliExpress US
                    - heading "$5 Off for New Users on Orders Over $20 - If you're new to AliExpress, this entry-level deal is a great way to start saving. Spend just $20 and unlock instant savings on a wide variety of products, including fashion, gadgets, home items, and more. It’s a simple and affordable way for first-time shoppers to explore the platform while getting extra value on their purchase." [level=2] [ref=e328]
                    - button "Get Deal" [ref=e329] [cursor=pointer]
                  - img "curve" [ref=e330]
                - generic [ref=e334]:
                  - article [ref=e336]:
                    - generic [ref=e337]:
                      - generic [ref=e338]: Exclusive
                      - generic [ref=e340]: June 30, 2026
                    - img "AliExpress US" [ref=e342]
                    - generic [ref=e343]: AliExpress US
                    - heading "New Shopper Deal – Save $12 When You Spend $80 - New to AliExpress? Take advantage of this exclusive welcome offer and save on your first purchase. Spend $80 or more and enjoy instant savings, making it a great opportunity to explore a wide range of products across fashion, electronics, home essentials, and more. With thousands of options available, new users can get more value while shopping from a global marketplace." [level=2] [ref=e344]
                    - button "Get Deal" [ref=e345] [cursor=pointer]
                  - img "curve" [ref=e346]
                - generic [ref=e350]:
                  - article [ref=e352]:
                    - generic [ref=e353]:
                      - generic [ref=e354]: Exclusive
                      - generic [ref=e356]: April 12, 2028
                    - heading "the Header by Ronaldo - COuoPnnnn COuoPnnnn" [level=2] [ref=e358]
                    - button "Get Deal" [ref=e359] [cursor=pointer]
                  - img "curve" [ref=e360]
                - generic [ref=e364]:
                  - article [ref=e366]:
                    - generic [ref=e367]:
                      - generic [ref=e368]: Exclusive
                      - generic [ref=e370]: May 29, 2026
                    - heading "coupon headline - coupin description xvcv" [level=2] [ref=e372]
                    - button "Get Deal" [ref=e373] [cursor=pointer]
                  - img "curve" [ref=e374]
                - generic [ref=e378]:
                  - article [ref=e380]:
                    - generic [ref=e381]:
                      - generic [ref=e382]: Exclusive
                      - generic [ref=e384]: September 17, 2029
                    - heading "The Headline - The main Description goes here" [level=2] [ref=e386]
                    - button "Get Deal" [ref=e387] [cursor=pointer]
                  - img "curve" [ref=e388]
                - generic [ref=e392]:
                  - article [ref=e394]:
                    - generic [ref=e395]:
                      - generic [ref=e396]: Exclusive
                      - generic [ref=e398]: May 30, 2026
                    - heading "Test coupon-5 - this is coupon description" [level=2] [ref=e400]
                    - button "Get Deal" [ref=e401] [cursor=pointer]
                  - img "curve" [ref=e402]
                - generic [ref=e406]:
                  - article [ref=e408]:
                    - generic [ref=e409]:
                      - generic [ref=e410]: Exclusive
                      - generic [ref=e412]: June 12, 2026
                    - heading "testcoupon - Description testing of the" [level=2] [ref=e414]
                    - button "Get Deal" [ref=e415] [cursor=pointer]
                  - img "curve" [ref=e416]
                - generic [ref=e420]:
                  - article [ref=e422]:
                    - generic [ref=e423]:
                      - generic [ref=e424]: Exclusive
                      - generic [ref=e426]: May 14, 2026
                    - heading "testtttt - descripyion hhhhhhhhh" [level=2] [ref=e428]
                    - button "Get Deal" [ref=e429] [cursor=pointer]
                  - img "curve" [ref=e430]
                - generic [ref=e434]:
                  - article [ref=e436]:
                    - generic [ref=e437]:
                      - generic [ref=e438]: Exclusive
                      - generic [ref=e440]: May 30, 2026
                    - heading "Test coupon 4/25/2026 - This is coupon description" [level=2] [ref=e442]
                    - button "Get Deal" [ref=e443] [cursor=pointer]
                  - img "curve" [ref=e444]
                - generic [ref=e448]:
                  - article [ref=e450]:
                    - generic [ref=e451]:
                      - generic [ref=e452]: Exclusive
                      - generic [ref=e454]: May 30, 2026
                    - heading "test coupon -3 4/25/2026 - This is coupon description" [level=2] [ref=e456]
                    - button "Get Deal" [ref=e457] [cursor=pointer]
                  - img "curve" [ref=e458]
              - button
              - button
          - generic [ref=e463]:
            - generic [ref=e466]:
              - heading "Why Partner With LocolDeal Logo" [level=2] [ref=e467]:
                - text: Why Partner With
                - img "LocolDeal Logo" [ref=e468]
              - paragraph [ref=e469]: Attract new customers, keep them engaged, and increase word-of-mouth referrals by offering exclusive deals and coupons. With LocolDeal, you can reach a wider audience, build customer loyalty, and drive more sales without the hassle of expensive marketing campaigns.
              - paragraph [ref=e470]: Forget high marketing costs! Our platform provides an affordable way to advertise your business and acquire new customers at just a fraction of the cost. Start promoting today and watch your business grow effortlessly.
              - button "Explore Coupons" [ref=e471] [cursor=pointer]
            - img "Why Partner Illustration" [ref=e473]
          - generic [ref=e475]:
            - generic [ref=e476]:
              - generic [ref=e477]:
                - heading "Discover Your" [level=2] [ref=e478]
                - heading "Favorite Categories" [level=2] [ref=e479]
              - generic [ref=e481] [cursor=pointer]: See All Coupons
            - generic [ref=e483]:
              - complementary [ref=e484]:
                - navigation "Categories navigation" [ref=e485]:
                  - tab "All Categories" [ref=e486] [cursor=pointer]:
                    - generic [ref=e488]: All Categories
                  - tab "Shopping/Retail Shopping/Retail" [ref=e489] [cursor=pointer]:
                    - img "Shopping/Retail" [ref=e491]
                    - generic [ref=e492]: Shopping/Retail
                  - tab "Health and Beauty Health and Beauty" [ref=e493] [cursor=pointer]:
                    - img "Health and Beauty" [ref=e495]
                    - generic [ref=e496]: Health and Beauty
                  - tab "Clothing Clothing" [ref=e497] [cursor=pointer]:
                    - img "Clothing" [ref=e499]
                    - generic [ref=e500]: Clothing
                  - tab "Pet Supplies Pet Supplies" [ref=e501] [cursor=pointer]:
                    - img "Pet Supplies" [ref=e503]
                    - generic [ref=e504]: Pet Supplies
                  - tab "Auto Sales Auto Sales" [ref=e505] [cursor=pointer]:
                    - img "Auto Sales" [ref=e507]
                    - generic [ref=e508]: Auto Sales
                  - tab "Home and Garden Home and Garden" [ref=e509] [cursor=pointer]:
                    - img "Home and Garden" [ref=e511]
                    - generic [ref=e512]: Home and Garden
                  - tab "Travel and Accommodation Travel and Accommodation" [ref=e513] [cursor=pointer]:
                    - img "Travel and Accommodation" [ref=e515]
                    - generic [ref=e516]: Travel and Accommodation
                  - tab "Entertainment and Events Entertainment and Events" [ref=e517] [cursor=pointer]:
                    - img "Entertainment and Events" [ref=e519]
                    - generic [ref=e520]: Entertainment and Events
                  - tab "Sports and Fitness Sports and Fitness" [ref=e521] [cursor=pointer]:
                    - img "Sports and Fitness" [ref=e523]
                    - generic [ref=e524]: Sports and Fitness
              - main [ref=e525]:
                - generic [ref=e526]:
                  - generic [ref=e528]:
                    - img "Calendar icon" [ref=e529]
                    - generic [ref=e530]: "Expire at: 30 Jun 26"
                  - img "New Shopper Deal – Save $12 When You Spend $80" [ref=e532]
                  - heading "New Shopper Deal – Save $12 When You Spend $80" [level=2] [ref=e533]
                  - button "Get Deal" [ref=e534] [cursor=pointer]
                - generic [ref=e535]:
                  - generic [ref=e537]:
                    - img "Calendar icon" [ref=e538]
                    - generic [ref=e539]: "Expire at: 30 Jun 26"
                  - img "$5 Off for New Users on Orders Over $20" [ref=e541]
                  - heading "$5 Off for New Users on Orders Over $20" [level=2] [ref=e542]
                  - button "Get Deal" [ref=e543] [cursor=pointer]
                - generic [ref=e544]:
                  - generic [ref=e546]:
                    - img "Calendar icon" [ref=e547]
                    - generic [ref=e548]: "Expire at: 02 Dec 26"
                  - img "20% off PCA SKIN! use this code" [ref=e550]
                  - heading "20% off PCA SKIN! use this code" [level=2] [ref=e551]
                  - button "Get Deal" [ref=e552] [cursor=pointer]
                - generic [ref=e553]:
                  - generic [ref=e555]:
                    - img "Calendar icon" [ref=e556]
                    - generic [ref=e557]: "Expire at: 16 Mar 28"
                  - img "Get $100 Off Orders Over $582 on Premium Hair Products" [ref=e559]
                  - heading "Get $100 Off Orders Over $582 on Premium Hair Products" [level=2] [ref=e560]
                  - button "Get Deal" [ref=e561] [cursor=pointer]
                - generic [ref=e562]:
                  - generic [ref=e564]:
                    - img "Calendar icon" [ref=e565]
                    - generic [ref=e566]: "Expire at: 29 Sept 26"
                  - img "Discover Stylish Dresses and Accessories for Less" [ref=e568]
                  - heading "Discover Stylish Dresses and Accessories for Less" [level=2] [ref=e569]
                  - button "Show Coupon Code" [ref=e570] [cursor=pointer]
                - generic [ref=e571]:
                  - generic [ref=e573]:
                    - img "Calendar icon" [ref=e574]
                    - generic [ref=e575]: "Expire at: 22 Sept 30"
                  - img "Find Your Perfect Dress at Special Prices" [ref=e577]
                  - heading "Find Your Perfect Dress at Special Prices" [level=2] [ref=e578]
                  - button "Show Coupon Code" [ref=e579] [cursor=pointer]
                - button "Load More" [ref=e581] [cursor=pointer]
          - generic [ref=e583]:
            - generic [ref=e586]:
              - heading "Unlock Exclusive Savings – Download LocolDeal Now!" [level=2] [ref=e587]:
                - generic [ref=e588]: Unlock Exclusive Savings –
                - text: Download LocolDeal Now!
              - paragraph [ref=e589]: LocolDeal brings you unbeatable discounts and exclusive coupons for your favorite local stores, restaurants, and services. Discover amazing deals tailored to your area, save big, and shop smart. With an easy-to-use platform, LocolDeal connects you to the best offers near you. Start saving today and make every deal a great one!
              - paragraph [ref=e590]:
                - strong [ref=e591]: Business Owners — Grow With the LocolDeal App!
                - text: Reach more customers right from the app by posting your deals and coupons for free. Download LocolDeal to easily create, manage, and promote your offers anytime, anywhere.
              - generic [ref=e592]:
                - img "Download on the App Store" [ref=e594]
                - link "Get it on Google Play" [ref=e595] [cursor=pointer]:
                  - /url: https://play.google.com/store/apps/details?id=com.gogoida.LocolDealMobile&pcampaignid=web_share
                  - img "Get it on Google Play" [ref=e596]
            - img "LocolDeal App Preview" [ref=e598]
          - generic [ref=e601]:
            - heading "Frequently Asked Questions" [level=2] [ref=e602]
            - generic [ref=e603]:
              - generic [ref=e604]:
                - generic [ref=e605]:
                  - button "What is LocolDeal and how can it help my business?" [ref=e606] [cursor=pointer]:
                    - generic [ref=e607]: What is LocolDeal and how can it help my business?
                    - img [ref=e608]
                  - paragraph [ref=e609]: LocolDeal is a platform that connects local businesses with nearby shoppers. You can list your business for free, post deals, and reach more local customers.
                - generic [ref=e610]:
                  - button "How do I get started with listing my business?" [ref=e611] [cursor=pointer]:
                    - generic [ref=e612]: How do I get started with listing my business?
                    - img [ref=e613]
                  - paragraph [ref=e614]:
                    - text: Simply
                    - link "sign up" [ref=e615] [cursor=pointer]:
                      - /url: https://locoldeal.com/business/signup
                    - text: ", add your business details, and start posting your deals and coupons. It takes just a few minutes and is completely free."
                - generic [ref=e616]:
                  - button "Can I post multiple deals or coupons at once?" [ref=e617] [cursor=pointer]:
                    - generic [ref=e618]: Can I post multiple deals or coupons at once?
                    - img [ref=e619]
                  - paragraph [ref=e620]: Yes! You can share as many offers as you like to attract customers, highlight specials, and keep shoppers coming back.
                - generic [ref=e621]:
                  - button "Will my deals reach local customers only?" [ref=e622] [cursor=pointer]:
                    - generic [ref=e623]: Will my deals reach local customers only?
                    - img [ref=e624]
                  - paragraph [ref=e625]: Absolutely. LocolDeal focuses on local promotion, helping you target nearby shoppers who are actively looking for deals in your area.
              - generic [ref=e626]:
                - generic [ref=e627]:
                  - button "How can I make my deals more attractive to customers?" [ref=e628] [cursor=pointer]:
                    - generic [ref=e629]: How can I make my deals more attractive to customers?
                    - img [ref=e630]
                  - paragraph [ref=e631]: Offer clear discounts, limited-time offers, and exclusive coupons. Highlighting special savings encourages shoppers to choose your business.
                - generic [ref=e632]:
                  - button "How can I track the performance of my deals?" [ref=e633] [cursor=pointer]:
                    - generic [ref=e634]: How can I track the performance of my deals?
                    - img [ref=e635]
                  - paragraph [ref=e636]: LocolDeal gives you insights on your posted deals so you can see which offers are most popular and adjust your promotions accordingly.
                - generic [ref=e637]:
                  - button "How can I find the best local deals near me?" [ref=e638] [cursor=pointer]:
                    - generic [ref=e639]: How can I find the best local deals near me?
                    - img [ref=e640]
                  - paragraph [ref=e641]: Browse LocolDeal by location or category to discover the latest discounts, coupons, and promotions from businesses close to you.
                - generic [ref=e642]:
                  - button "Are the deals on LocolDeal reliable and up-to-date?" [ref=e643] [cursor=pointer]:
                    - generic [ref=e644]: Are the deals on LocolDeal reliable and up-to-date?
                    - img [ref=e645]
                  - paragraph [ref=e646]: Yes! Local businesses update their offers regularly, so you can trust that the deals you see are valid and ready to use.
        - text:       
    - generic [ref=e650]:
      - generic [ref=e651]:
        - img "Company Logo" [ref=e652]
        - generic [ref=e653]:
          - link "Facebook Logo" [ref=e654] [cursor=pointer]:
            - /url: https://facebook.com/locoldeal/
            - img "Facebook Logo" [ref=e655]
          - link "Insta Logo" [ref=e656] [cursor=pointer]:
            - /url: https://instagram.com/locoldeal/
            - img "Insta Logo" [ref=e657]
          - link "X Logo" [ref=e658] [cursor=pointer]:
            - /url: https://twitter.com/LocolDeal
            - img "X Logo" [ref=e659]
      - generic [ref=e661]:
        - generic [ref=e662]:
          - heading "Contact" [level=3] [ref=e663]
          - generic [ref=e664]:
            - img "email" [ref=e665]
            - link "support@locoldeal.com" [ref=e666] [cursor=pointer]:
              - /url: mailto:support@locoldeal.com
          - generic [ref=e667]:
            - img "location" [ref=e668]
            - generic [ref=e669]: Littleton, CO USA
        - generic [ref=e670]:
          - heading "Quick Link" [level=3] [ref=e671]
          - navigation [ref=e672]:
            - link "Local deals and Offers" [ref=e673] [cursor=pointer]:
              - /url: /product-search
            - link "Coupons" [ref=e674] [cursor=pointer]:
              - /url: /coupons-browse
            - link "FAQ" [ref=e675] [cursor=pointer]:
              - /url: /faq
            - link "Stores" [ref=e676] [cursor=pointer]:
              - /url: /store-list
            - link "Business login" [ref=e677] [cursor=pointer]:
              - /url: https://vendors.locoldeal.com/signin
            - link "About us" [ref=e678] [cursor=pointer]:
              - /url: /aboutus
        - generic [ref=e679]:
          - heading "Quick Link 2" [level=3] [ref=e680]
          - navigation [ref=e681]:
            - link "Help & Support" [ref=e682] [cursor=pointer]:
              - /url: /user-query
            - link "Privacy Policy" [ref=e683] [cursor=pointer]:
              - /url: /privacy-policy
            - link "Terms Conditions" [ref=e684] [cursor=pointer]:
              - /url: /terms-conditions
        - generic [ref=e685]:
          - generic [ref=e686]: 🤩
          - heading "#FindYourLocolJoy" [level=2] [ref=e687]
          - paragraph [ref=e688]: Your shortcut to smarter spending.
      - paragraph [ref=e690]: Copyright © 2025-2026, Gavelgo International Inc. All Rights Reserved.
```

# Test source

```ts
  1  | class Signup
  2  | {
  3  |     constructor(page)
  4  |     {
  5  |         this.page = page;
  6  |         //locator
  7  |         this.signup = page.locator('//*[@id="signupDropdown"]');
  8  |         this.signupaspartner = page.getByRole('link',{name :'As a Business'});
  9  |         this.businessname = page.getByRole('textbox',{name :'Business Name'});
  10 |         this.businessaddress = page.getByRole('textbox',{name:' Business Address '});
  11 |         this.firstname = page.getByRole('textbox',{name:"First Name"});
  12 |         this.lastname = page.getByRole('textbox',{name:"Last Name"});
  13 |         this.username = page.getByRole('textbox',{name:"User Name"});
  14 |         this.email = page.locator('#email');
  15 |         this.phonenumber = page.getByRole('textbox',{name:"Phone Number"});
  16 |         this.password = page.locator('#password'); 
  17 |         this.conformpassword = page.locator('#confirmPassword');
  18 |         this.choosecategory = page.getByRole('combobox',{name : "Choose a Category"});
  19 |         this.checkbox = page.locator('//*[@type="checkbox"]');
  20 |         this.submit = page.getByRole('button',{name:"Create Account"});
  21 |     }
  22 | 
  23 | 
  24 | 
  25 | async clickonsignupbutton()
  26 | {
  27 |     await this.signup.click();
  28 | }
  29 | async clickonpartner()
  30 | {
  31 |     await this.signupaspartner.click();
  32 | }
  33 | async fillbusinessdetails(data)
  34 | {
> 35 |     await this.businessname.fill(data.businessname);
     |                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  36 |     await this.businessaddress.fill(data.businessaddress);
  37 |     await this.firstname.fill(data.firstname);
  38 |     await this.lastname.fill(data.lastname);
  39 |     await this.username.fill(data.username);
  40 |     await this.email.fill(data.email);
  41 |     await this.phonenumber.fill(data.phonenumber);
  42 |     await this.password.fill(data.password);
  43 |     await this.conformpassword.fill(data.conformpassword);
  44 | }
  45 | async opendropdown()
  46 | {
  47 |     await this.choosecategory.click();
  48 | }
  49 | async selectbusinesscategory(option)
  50 | {
  51 |       await this.page.locator("select#businessCategory").selectOption(option);
  52 |     
  53 | }
  54 | async clickcheckbox()
  55 | {
  56 |     await this.checkbox.click();
  57 | }
  58 | async clicksubmit()
  59 | {
  60 |     await this.submit.click();
  61 | }
  62 | 
  63 | }
  64 | module.exports = Signup;
```