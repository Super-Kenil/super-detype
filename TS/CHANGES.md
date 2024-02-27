## Changes

| **Status** | **Problem**                                                            | **Solution**                |
| ---------- | ---------------------------------------------------------------------- | --------------------------- |
| Bug BOSS   | Unable to go to cart page when logged in as admin                      |                             |
| Bug BOSS   | Page goes blank when removing product from wishlist in wishlist page   |                             |
| Bug        | Move Floating Searchbar to top bar and use create portal               |                             |
| Bug        | Redirect to admin or client page to where its come from                |                             |
| Bug        | Backdrop stays when navigating to login or admin-> mobile nav menu     |                             |
| chore      | fix yarn,npm and bun lock files                                        |                             |
| chore      | removing unused variables and imports                                  |                             |
| **FIXED**  | ********************************************************************** | ************                |
| chore      | re-ordering of imports with comments                                   |                             |
| chore      | Correct Page Titles in all pages                                       |                             |
| chore      | Add Breadcrumb and metadata in all pages                               |                             |
| chore      | Add Priority prop to all Logos                                         |                             |
| chore      | options naming conventions (ca-melCase)                                |                             |
| Chore      | change all .html links to proper working links                         |                             |
| chore      | add type before StaticImageData, IconType, ReactNode                   |                             |
| chore      | remove all unwanted "use client" from all files                        |                             |
| chore      | href="/auth/logout" wherever logout is there                           |                             |
| chore      | Check duration everywher and make all duration same for similar things | ignored                     |
| chore      | Check all TextFormInput and add containerClass="mb-6" if needed        |                             |
| chore      | removing unwanted comments                                             |                             |
| chore      | add type keyword infornt of all Type imports @/types                   |                             |
| chore      | replace all $ with currCurrency                                        |                             |
| chore      | <img/> to <Image />                                                    |                             |
| chore      | remove unwanted console logs                                           |                             |
| chore      | <a href="#"> to <Link/>                                                |                             |
| chore      | remove unwanted id="                                                   |                             |
| chore      | className=" p-0">  unwanted space in className                         |                             |
| Bug        | Internal server error for every page in network tab                    |                             |
| chore      | {/*  remove this kind of things                                        |                             |
| Bug        | Edit Restaurant Business detail use file pond for company logo         | removed                     |
| Bug        | When Restaurant is unchecked, the filter doesn't reset                 | filter in updateRestaurant  |
| bug        | replace all $ with {currentCurrency}                                   | \$\d regex                  |
| Bug        | Placeholder text when whishlist is empty                               | 404 image                   |
| Bug        | Add /auth/forgot-password link on login page                           |                             |
| Bug        | Add Restaurant Bank detail use file pond for company logo              | removed                     |
| Bug  D     | Home navbar menu position is too far                                   | its okay                    |
| Bug  D     | Make File pond design proper in production                             |                             |
| Bug BOSS   | login sometimes not redirecting                                        | useEffect session           |
| Bug        | <ProductSearchBar router.push not working                              | setTimeout                  |
| Bug        | Add Filepond in Edit Dish Page                                         |                             |
| Bug        | Active Item in Landing's header links                                  | location.hash               |
| Bug        | When tab is out of focus, change title of page                         | visibilitychange            |
| Bug        | Scrollbar dark mode panel                                              | track bg-transparent        |
| Bug        | Error in terminal from useScrollEvent hook                             | ssr:false                   |
| Bug        | window is not defined in terminal                                      | ssr:false provider          |
| Bug BOSS   | Seller Detail page, table not working with dynamic import              | not possible with dynamic() |
| Bug BOSS   | Turbopack not workign anymore                                          | ignored                     |
| Bug BOSS   | Changing restaurant in filter is scrolling back to top                 | scroll: false usefilter     |
| Bug        | check button rounded everywhere and use rounded-lg                     |                             |
| Bug        | Dishes list page width                                                 |                             |
| Bug        | Admin Footer width                                                     |                             |
| Bug D      | Home page app demo layout call button, remove in md scren              |                             |
| Bug        | /home download app responsiveness overlapping                          |                             |
| Bug        | nextjs-toploader not working in next@14.0.3                            | updated to next@14.0.4      |
| Bug D      | MegaFilter star number alignment with stars                            |                             |
| Bug        | FloatingSearchBar is not visible                                       |                             |
| Bug        | Auth page layout, bottom spacing in mobile layout                      |                             |
| Bug        | Wallet Card Swiper Navigation Arrows                                   |                             |
| Bug        | Special Menu Swiper Navigation Arrows position                         |                             |
| Bug        | dish-detail the price is a little above than the title                 |                             |
| Bug BOSS   | All tags are checking at once in MegaProductFilter                     | added div in parent         |
| Bug        | Make Logout page                                                       |                             |
| Bug        | DateInput selection not working                                        |                             |
| Bug        | react-select styling                                                   | react-select.css            |
| Bug        | console logs in client side from logger                                | disableDevLogs:true         |
| Bug        | Special Menu for you images in dark mode has opacity                   | bg-black/20                 |
| Bug        | add query params to change default admin & user credentials            | unncessary                  |
| Bug        | Make custom scrollbar                                                  | in css                      |
| Bug        | Add start icon to DateFormInput via props                              | startIcon                   |
| Bug        | Scrollbar dark mode, make track transparent                            | bg-transparent              |
| Bug        | decrease spacing in Login credentials hint                             | its okay                    |
| chore      | javascript: void(0); removing                                          |                             |
| Bug        | bg-[url( use imported images instead                                   |                             |
| Bug        | Top loader keeps loading and doesn't stop                              | next@14.0.2                 |


## Design

| **Status**             | **Problem**                               | **Solution**   |
| ---------------------- | ----------------------------------------- | -------------- |
| /admin/dashboard       | Cards and Data Table                      | table          |
| /admin/manage          | Grid system and special menu card         | \              |
| /admin/orders          | cards on top                              | \              |
| /admin/orders/9f36ca   | Table                                     | \\             |
| /admin/customers       | Table Search box                          | \\             |
| /admin/add-restaurant  | Clear button & bank details button        | //             |
| /admin/edit-restaurant | Clear button & bank details button        | //             |
| /admin/dishes/1008     | Swiper thumbnails in mobile screen        | \\             |
| /admin/add-dish        | additional images filepond & quill editor |                |
| /admin/add-dish        | grid system in 1024 screen                | quill          |
| /admin/add-dish        | button in mobile screen                   | //             |
| /admin/edit-dish       | File uploader container grid              | QUILL          |
| /admin/wallet          | Card Swiper, sliders width and height     | \\             |
| /admin/profile         | file pond images preview is too big       | filepond       |
| /auth/logout           | white background in mobile screen         | h-screen issue |
| /auth/register         | white background in mobile screen         | h-screen issue |
| /faqs                  | Topbar Logo in mobile screen              |                |