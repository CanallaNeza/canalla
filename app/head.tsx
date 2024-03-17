import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Canalla Neza</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Canalla Neza: Chácharas & arte De Cd Neza para el mundo!!☠️" />
      <link rel="icon" href="../favicon.ico" />

      {/* Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PTS5B9XF');`,
        }}
      />
      {/* End Google Tag Manager */}
    </>
  );
}
