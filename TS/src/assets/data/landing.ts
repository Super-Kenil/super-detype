import { FaRegStar } from 'react-icons/fa6'
import { LuAirplay, LuCircuitBoard, LuFeather, LuFigma, LuFileText, LuGlobe2, LuMove, LuPackage, LuUsers2 } from 'react-icons/lu'
import type { DemoFeatureType, FrameworkType, LandingDemoType } from '@/types/other'
import {
  bunDemoImg,
  cssDemoImg,
  demo10Img,
  demo1Img,
  demo2Img,
  demo3Img,
  demo4Img,
  demo5Img,
  demo6Img,
  demo7Img,
  demo8Img,
  demo9Img,
  demoAdmin12Img,
  demoAdmin13Img,
  demoAdmin14Img,
  demoAdmin15Img,
  demoAdmin16Img,
  demoAdmin17Img,
  demoAdmin19Img,
  demoAdmin1Img,
  demoAdmin21Img,
  demoAdmin2Img,
  demoAdmin3Img,
  demoAdmin4Img,
  demoAdmin5Img,
  demoAdmin6Img,
  demoAdmin7Img,
  demoAdmin8Img,
  demoAdmin9Img,
  demoAdminImg,
  demoForgotPasswordImg,
  demoLoginImg,
  demoRegisterImg,
  demoResetPasswordImg,
  htmlDemoImg,
  javascriptDemoImg,
  nextjsDemoImg,
  tailwindcssDemoImg,
  turbopackDemoImg,
  typescriptDemoImg,
} from './images'

export const frameworksData: FrameworkType[] = [
  {
    name: 'Tailwindcss',
    icon: tailwindcssDemoImg,
  },
  {
    name: 'HTML',
    icon: htmlDemoImg,
  },
  {
    name: 'CSS',
    icon: cssDemoImg,
  },
  {
    name: 'Typescript',
    icon: typescriptDemoImg,
  },
  {
    name: 'Javascript',
    icon: javascriptDemoImg,
  },
  {
    name: 'Nextjs',
    icon: nextjsDemoImg,
  },
  {
    name: 'Bun',
    icon: bunDemoImg,
  },
]

export const mainDemosData: LandingDemoType[] = [
  {
    link: '/home',
    name: 'Home',
    image: demo1Img,
  },
  {
    link: '/admin/dashboard',
    name: 'Admin Panel',
    image: demoAdminImg,
  },
]

export const clientAppDemosData: LandingDemoType[] = [
  {
    link: '/dishes',
    name: 'Dishes Grid',
    image: demo2Img,
  },
  {
    link: '/dishes-list',
    name: 'Dishes List',
    image: demo3Img,
  },
  {
    link: '/dishes/1001',
    name: 'Dish Details',
    image: demo4Img,
  },
  {
    link: '/cart',
    name: 'Cart',
    image: demo5Img,
  },
  {
    link: '/checkout',
    name: 'Checkout',
    image: demo7Img,
  },
  {
    link: '/wishlist',
    name: 'Wishlist',
    image: demo6Img,
  },
]

export const adminPanelDemosData: LandingDemoType[] = [
  {
    link: '/admin/wallet',
    name: 'Wallet',
    image: demoAdmin1Img,
  },
  {
    link: '/admin/manage',
    name: 'Manage',
    image: demoAdmin19Img,
  },
  {
    link: '/admin/restaurants',
    name: 'Restaurants List',
    image: demoAdmin13Img,
  },
  {
    link: '/admin/restaurant-details',
    name: 'Restaurant Details',
    image: demoAdmin12Img,
  },
  {
    link: '/admin/customer-details',
    name: 'Customer Details',
    image: demoAdmin16Img,
  },
  {
    link: '/admin/dishes',
    name: 'Dishes List',
    image: demoAdmin9Img,
  },
]

export const authDemosData: LandingDemoType[] = [
  {
    link: '/auth/login',
    name: 'Login',
    image: demoLoginImg,
  },
  {
    link: '/auth/register',
    name: 'Register',
    image: demoRegisterImg,
  },
  {
    link: '/auth/forgot-password',
    name: 'Forgot Password',
    image: demoForgotPasswordImg,
  },
  {
    link: '/auth/reset-password',
    name: 'Reset Password',
    image: demoResetPasswordImg,
  },
]

export const extraDemosData: LandingDemoType[] = [
  {
    link: '/faqs',
    name: 'FAQs',
    image: demo8Img,
  },
  {
    link: '/not-found',
    name: 'Error 404',
    image: demo10Img,
  },
  {
    link: '/contact-us',
    name: 'Contact Us',
    image: demo9Img,
  },
  {
    link: '/admin/dishes/1008',
    name: 'Dish Details',
    image: demoAdmin8Img,
  },
  {
    link: '/admin/add-dish',
    name: 'Add Dish',
    image: demoAdmin7Img,
  },
  {
    link: '/admin/edit-dish',
    name: 'Edit Dish',
    image: demoAdmin6Img,
  },
  {
    link: '/admin/customers',
    name: 'Customers List',
    image: demoAdmin17Img,
  },
  {
    link: '/admin/add-customer',
    name: 'Add Customer',
    image: demoAdmin15Img,
  },
  {
    link: '/admin/edit-customer',
    name: 'Edit Customer',
    image: demoAdmin14Img,
  },
  {
    link: '/admin/sellers',
    name: 'Sellers List',
    image: demoAdmin5Img,
  },
  {
    link: '/admin/seller-details',
    name: 'Seller Details',
    image: demoAdmin4Img,
  },
  {
    link: '/admin/add-seller',
    name: 'Add Seller',
    image: demoAdmin3Img,
  },
  {
    link: '/admin/edit-seller',
    name: 'Edit  Seller',
    image: demoAdmin2Img,
  },
  {
    link: '/admin/profile',
    name: 'Profile',
    image: demoAdmin21Img,
  },
]

export const landingFeaturesData: DemoFeatureType[] = [
  {
    title: 'Ultra Responsive',
    description: 'Our fully Responsive design ensures your content is beautifully presented no matter what device your audience is using.',
    icon: LuAirplay,
  },
  {
    title: 'Production Ready',
    description: 'Our solutions have undergone extensive testing to ensure they can handle the demands of a production environment.',
    icon: LuPackage,
  },
  {
    title: 'Hygienic Design',
    description: 'Our designs feature smooth and continuous surfaces, minimizing areas where dirt, bacteria, or contaminants can accumulate.',
    icon: LuFigma,
  },
  {
    title: 'High Performance',
    description: 'We understand that your requirements are unique. Our high-performance solutions are customizable to match your specific goals.',
    icon: LuCircuitBoard,
  },
  {
    title: 'Multi Browser Support',
    description:
      'Our e-commerce store is rigorously tested and optimized to work flawlessly on all major web browsers, offering a consistent shopping experience to all our customers.',
    icon: LuGlobe2,
  },
  {
    title: 'Well Documented',
    description:
      "Our documentation is a treasure trove of valuable information, from getting started guides to advanced tutorials. It's all there to help you make the most of our services.",
    icon: LuFileText,
  },
  {
    title: 'Great Support',
    description:
      "Our support team is always ready to help. Whether you have questions, encounter issues, or need guidance, we're just a message or call away.",
    icon: LuUsers2,
  },
  {
    title: 'Highly Customizable',
    description:
      "Our product is designed to adapt to your specific requirements. Whether you're an individual, a business, or an organization, we provide the tools to customize it to your liking.",
    icon: LuMove,
  },
  {
    title: 'Light as a Feather',
    description:
      "From our years of experience and expertise in Development, we know users vary, they could have slow of fast network. They all deserve seamless experience in shopping with you. That's why our product is developed with fewer lines.",
    icon: LuFeather,
  },
  {
    title: 'UX Considered',
    description:
      "A good design does not need any explanation because a good design can speak for itself. Out app doesn't only have a good User Interface, we also have considered User experience.",
    icon: FaRegStar,
  },
]
