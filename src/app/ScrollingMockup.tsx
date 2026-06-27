import React from 'react';
import Image from 'next/image';

interface ScrollingMockupProps {
  src?: string;
  url?: string;
  alt?: string;
  type?: 'laptop' | 'tablet';
}

export default function ScrollingMockup({ src, url, alt = '', type = 'laptop' }: ScrollingMockupProps) {
  return (
    <div className={`mockup-container ${type}`}>
      <div className="mockup-frame">
        <div className="mockup-screen">
          {url ? (
            <iframe 
              src={url} 
              style={{ width: '100%', height: '100%', border: 'none', background: '#fff' }} 
              title={alt}
            />
          ) : (
            <div className="mockup-content-wrap">
              <Image src={src!} alt={alt} width={1200} height={3000} className="mockup-image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
