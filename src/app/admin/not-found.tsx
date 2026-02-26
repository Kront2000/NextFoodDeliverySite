import Head from 'next/head';
import styles from './ErrorPage.module.css';
import { cn } from '@/lib/utils';
import { comfortaa } from '@/components/ui/fonts';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 - Страница не найдена</title>
        {/* Подключаем шрифт Courgette из Google Fonts */}
        
      </Head>

      <div className={styles.number}>
        404
      </div>

      <div className={cn(styles.text, comfortaa.className)}>
        <span>ОЙ...</span>
        Блюдо не найдено
      </div>

      <a 
        className={styles.me} 
        href="https://codepen.io/uzcho_/pens/popular/?grid_type=list" 
        target="_blank" 
        rel="noopener noreferrer"
      />
    </div>
  );
}