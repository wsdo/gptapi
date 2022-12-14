import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
const baidu_tongji = `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?6c5bf39bf1993f336474fcf9e72cc27e";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
`;
export default function Document() {
  return (
    <Html className="antialiased [font-feature-settings:'ss01']" lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: baidu_tongji }} />
      </Head>
      <body className="bg-white dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
