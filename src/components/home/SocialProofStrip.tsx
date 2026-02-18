import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const clients = [
  { name: "Google", logo: "https://cdn.worldvectorlogo.com/logos/google-2015.svg" },
  { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" },
  { name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-1.svg" },
  { name: "Meta", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
  { name: "Apple", logo: "https://cdn.worldvectorlogo.com/logos/apple-11.svg" },
  { name: "Netflix", logo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg" },
  { name: "Tesla", logo: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg" },
  { name: "Spotify", logo: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg" },
  { name: "Adobe", logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg" },
  { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
  { name: "IBM", logo: "https://cdn.worldvectorlogo.com/logos/ibm-2.svg" },
  { name: "Oracle", logo: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg" },
];

const SocialProofStrip = () => {
  const firstRow = clients.slice(0, 6);
  const secondRow = clients.slice(6, 12);
  const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

  return (
    <section className="py-10 md:py-12 relative overflow-hidden" style={{ backgroundColor: '#141419' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-sm font-semibold uppercase tracking-wider mb-2 block" style={{ color: '#B5B5C3' }}>
            Trusted by Industry Leaders
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block" style={{ color: '#FFFFFF' }}>
            Clients We Stand For
            
          </h2>
        </motion.div>

        {/* Animated Logo Strips */}
        <div className="space-y-4 mb-8">
          {/* First Row - Left to Right */}
          <div className="flex items-center gap-12 animate-scroll-ltr">
            {duplicatedFirstRow.map((client, index) => (
              <div
                key={`ltr-${index}`}
                className="flex items-center justify-center p-4 shrink-0"
                style={{ width: '160px', height: '80px' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex items-center gap-12 animate-scroll-rtl">
            {duplicatedSecondRow.map((client, index) => (
              <div
                key={`rtl-${index}`}
                className="flex items-center justify-center p-4 shrink-0"
                style={{ width: '160px', height: '80px' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Link to="/clients">
            <motion.button
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all duration-400 relative overflow-hidden"
              style={{
                color: '#FFFFFF',
                border: '1px solid #4F46E5',
                backgroundColor: 'transparent',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: '#4F46E5' }}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10">View All Clients</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)',
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-rtl {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-ltr {
          animation: scroll-ltr 30s linear infinite;
          width: max-content;
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default SocialProofStrip;
