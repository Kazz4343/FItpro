import * as motion from 'motion/react-client'
import {plans} from '../lib/constant'

export default function Pricing () {
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
                    Affordable Plans for Everyone 
                  </motion.h2>
                  <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Choose the perfect plan that fits your budget and fitness goals. All plans include our core benefits.
                  </motion.p>
                </div>

                {/* Grid */}
                <motion.div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {plans.map((item, index)=>(
                        <div key={index}>
                            
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}