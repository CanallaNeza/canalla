import Script from 'next/script';
import Head from 'next/head'; // Asegúrate de importar Head desde 'next/head'

export default function CustomHead() {
  return (
    <>
      <Head>
        <title>Canalla Neza</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Canalla Neza: Chácharas & arte De Cd Neza para el mundo!!☠️" />
        <link rel="icon" href="/favicon.ico" /> {/* Asegúrate de que el path esté correcto */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://canallaneza.art/" /> 
        <meta property="og:title" content="Canalla Neza" />
        <meta property="og:description" content="Canalla Neza: Chácharas & arte De Cd Neza para el mundo!!☠️" />
        <meta property="og:image" content="https://canallaneza.art/canalla.jpg" /> 

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://canallaneza.art/" /> 
        <meta property="twitter:title" content="Canalla Neza" />
        <meta property="twitter:description" content="Canalla Neza: Chácharas & arte De Cd Neza para el mundo!!☠️" />
        <meta property="twitter:image" content="https://canallaneza.art/canalla.jpg" /> 
      </Head>

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
