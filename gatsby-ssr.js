const React = require("react")
const  {RootElement}  = require("./src/components")

const HeadComponents = [
  <link
    rel="preload"
    href="/fonts/Quicksand-Regular.woff2"
    as="font"
    crossOrigin="anonymous"
    type="font/woff2"
    key="quickSandRegular"
  />,
  <link
    rel="preload"
    href="/fonts/Quicksand-Medium.woff2"
    as="font"
    crossOrigin="anonymous"
    type="font/woff2"
    key="quickSandMedium"
  />,
  <link
    rel="preload"
    href="/fonts/Quicksand-Bold.woff2"
    as="font"
    crossOrigin="anonymous"
    type="font/woff2"
    key="quickSandBold"
  />
]

exports.onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "fr" })
    setHeadComponents(HeadComponents)
}

exports.wrapRootElement  = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};