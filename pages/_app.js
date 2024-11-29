import '../styles/globals.css';

import Layout from '../components/Layout';
import Transition from '../components/Transition';

import { useRouter } from 'next/router';

import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head'; // Importação do Head

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {/* Configuração do título e do favicon */}
      <Head>
        <title>Gabriel Cruz - Portfólio</title>
        <meta name="description" content="Portfólio de Gabriel Cruz - Programador Full Stack" />
        <link rel="icon" href="/logo cruz.png" />
      </Head>

      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;

