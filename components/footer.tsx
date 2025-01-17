"use client";
import { useEffect, useState } from 'react';

import { APP_NAME} from '@/lib/constants/index'
const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return ( 
    <footer className='border-t'>
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
   );
}
 
export default Footer;