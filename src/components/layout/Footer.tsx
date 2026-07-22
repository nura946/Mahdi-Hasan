import { motion } from 'motion/react';
import { Mail, Facebook, Youtube, Linkedin, MessageCircle, Instagram, MapPin } from 'lucide-react';
import { LiveTimeAndDate } from '../ui/LiveTimeAndDate';

function TikTokIcon({ size = 24, ...props }: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 448 512" 
      fill="currentColor"
      {...props}
    >
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
    </svg>
  );
}

function XIcon({ size = 24, ...props }: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      fill="currentColor"
      {...props}
    >
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.1 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
    </svg>
  );
}

const SOCIALS = [
  { icon: Mail, label: 'Email', href: 'mailto:mdmahdihasanriyad@gmail.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1ELc79F82H/' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@MahdiHandwritingbd' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-mahdi-hasan-riyad-1034a8204?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/8801993479343' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: XIcon, label: 'X', href: '#' },
  { icon: TikTokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@mahdihandwriting99?_r=1&_t=ZS-98F9e1BUubH' },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 py-24">
        
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Let's Work Together.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12"
          >
            Looking to improve your handwriting, collaborate on a project, or invite me for a workshop? I'd love to hear from you.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {SOCIALS.map((social) => (
              <motion.a
                whileTap={{ scale: 0.95 }}
                key={social.label}
                href={social.href}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand active:bg-brand active:text-white dark:active:bg-brand dark:active:text-white active:border-brand transition-all text-gray-900 dark:text-white font-medium"
              >
                <social.icon size={18} />
                {social.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mb-8">
          <LiveTimeAndDate />
        </div>

        <div className="flex flex-col items-center justify-center gap-2 mb-8 pt-8 border-t border-gray-100 dark:border-gray-800">
           <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
            <MapPin size={16} className="text-brand shrink-0" />
            <span className="text-center">D Block, Aftabnagar Residential Area, Rampura, Dhaka-1212, Bangladesh</span>
           </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Mahdi Hasan. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Created by Mahdi Hasan</p>
        </div>
      </div>
    </footer>
  );
}
