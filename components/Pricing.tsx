import * as motion from 'motion/react-client'
import {plans} from '../lib/constant'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Check } from 'lucide-react'

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
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {plans.map((item, index)=>(
                        <motion.div 
                        initial={{ opacity: 0, y: 12, scale: 0.9}}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        key={index} className='relative'>
                            <Card className={`${item.popular ? 'border-primary border-2 ring-1 ring-primary/20' : ''}`}>
                              {item.popular && <Badge className='absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1'>Most Popular</Badge>}
                              <CardHeader className='text-center p-8 pb-0'>
                                <h3 className='text-2xl font-bold font-heading mb-2 text-foreground'>{item.name}</h3>
                                <p className='text-muted-foreground mb-4'>{item.description}</p>
                                <div>
                                  <span className='text-5xl font-black font-heading'>${item.price}</span>
                                  <span className='text-muted-foreground ml-1'>/{item.period}</span>
                                </div>
                              </CardHeader>

                              <CardContent>
                                <ul className='space-y-4 mb-8'>
                                  {item.features.map((feature)=> (
                                    <li key={feature} className='flex items-center'>
                                      <Check className='w-5 h-5 mr-3 text-green-500'/>
                                      <span className='text-muted-foreground'>{feature}</span>
                                    </li>
                                  ))}
                                </ul>

                                <Button className={`w-full py-3 text-lg font-semibold transition-colors duration-200 
                                ${item.popular ? 
                                  "bg-primary hover:bg-primary/80 text-primary-foreground"
                                : "bg-secondary hover:bg-secondary/80 text-primary-foreground dark:text-foreground"
                                  }`}>
                                  {item.cta}
                                </Button>
                              </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <motion.div 
                initial={{ opacity: 0, scale:0.9}}
                whileInView={{ opacity: 1, scale:1}}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className='mt-12 text-center'>
                  <p className='text-muted-foreground'>
                    All plans include a 7-day free trial. No commitment required.
                  </p>
                </motion.div>
            </div>
        </section>
    )
}