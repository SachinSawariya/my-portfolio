import { useEffect } from 'react';

const SEOHead = ({ title, description, keywords, canonicalUrl, ogImage }) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta description
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:image', ogImage);
    updateMetaProperty('og:url', canonicalUrl);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Update canonical URL
    updateLinkTag('canonical', canonicalUrl);
    
    return () => {
      // Cleanup if needed
    };
  }, [title, description, keywords, canonicalUrl, ogImage]);
  
  const updateMetaTag = (name, content) => {
    let metaTag = document.querySelector(`meta[name="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = name;
      document.head.appendChild(metaTag);
    }
    metaTag.content = content;
  };
  
  const updateMetaProperty = (property, content) => {
    let metaTag = document.querySelector(`meta[property="${property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', property);
      document.head.appendChild(metaTag);
    }
    metaTag.content = content;
  };
  
  const updateLinkTag = (rel, href) => {
    let linkTag = document.querySelector(`link[rel="${rel}"]`);
    if (!linkTag) {
      linkTag = document.createElement('link');
      linkTag.rel = rel;
      document.head.appendChild(linkTag);
    }
    linkTag.href = href;
  };
  
  return null; // This component doesn't render anything
};

export default SEOHead;
