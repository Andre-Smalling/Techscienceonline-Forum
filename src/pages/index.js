import React from "react"
import { Helmet } from "react-helmet"
import CategoriesComponent from "../components/CategoriesComponent/CategoriesComponent"
import FooterComponent from "../components/FooterComponent/FooterComponent"
import HeaderComponent from "../components/Header/Header.component"
import LayoutComponent from "../components/Layout/Layout.component"
import RecentTopicsComponent from "../components/RecentTopicsComponent/RecentTopicsComponent"
import ThreadsAndDiscussionsComponent from "../components/ThreadsAndDiscussionsComponent/ThreadsAndDiscussionsComponent"
import TrendingComponent from "../components/TrendingComponent/TrendingComponent"

// The homepage component which renders all other sub-components
const Home = () => (
  <LayoutComponent>
    {/* Helmet is used to improve SEO performance */}
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta
        name="Techscienceonline Forum"
        content="Welcome to the forum of Techscienceonline where you can share ideas and ask questions by getting feedback from others."
      ></meta>
      <meta
        name="Description"
        content="A forum/blog application made with Gatsby."
      ></meta>
      <title>Techscienceonline | Forum</title>
      <link rel="canonical" href="https://techscienceonline.com/" />
    </Helmet>

    {/* The container element contains the sub-components */}
    <div className="relative bg-gray-50 max-w-ma">
      <HeaderComponent />
      <TrendingComponent />

      <ThreadsAndDiscussionsComponent />
      <RecentTopicsComponent />
      <CategoriesComponent />
      <FooterComponent />
    </div>
  </LayoutComponent>
)

export default Home
