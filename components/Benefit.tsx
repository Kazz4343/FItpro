import * as motion from "motion/react-client";
import { features } from "@/lib/constant"


export default function Benefit() {
  
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground">
            Why Choose Us?
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed on your fitness journey with proven methods and expert support.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
            className="group text-center"
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{duration: 0.3,ease: "easeOut", delay: index * 0.1}}
            whileHover={{ scale: 1.03 }}>
              <motion.div
              className="w-16 h-16 rounded-full bg-primary/20 inline-flex text-primary items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{duration: 0.3,ease: "easeOut",}}>
                <feature.icon className="w-8 h-8" />
              </motion.div>

              <motion.h3
              className="text-xl font-bold font-heading mb-4 text-foreground"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{duration: 0.3,ease: "easeOut",}}>
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{duration: 0.3,ease: "easeOut"}}
                className="text-muted-foreground leading-relaxed">
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}