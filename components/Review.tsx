import {review} from '../lib/constant'
import * as motion from 'motion/react-client'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Star } from 'lucide-react';

export default function Review () {
    return (
    <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground">
                    Review From Our Users!!
                  </motion.h2>
                  <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Real transformations from real people who chose to change their lives with our programs.      
                  </motion.p>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-40'>
                    {review.map((item, index)=> (
                        <motion.div 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:.3, ease:'easeOut', delay: index * .1}}
                        key={index} className='group'>
                            <Card className='group-hover:shadow-2xl transition-shadow'>
                                <CardContent className='p-8 text-center'>
                                    <motion.div  
                                    initial={{opacity:0, scale: .8}}
                                    whileInView={{opacity:1, scale:1}}
                                    viewport={{once:true}}
                                    transition={{duration:.3, ease:'easeOut', delay: index * .1}}
                                    className='relative w-24 h-30 mb-6 mx-auto'>
                                        <Image fill src={item.image} alt={item.image} className='rounded-full border-4 border-primary/20 object-cover group-hover:border-primary duration-300 transition-colors'/>
                                    </motion.div>

                                    {/* "i" is index which is start from 0. Therefore at [4] filled will be true and star will be 5 */}
                                    <motion.div 
                                    initial={{opacity:0}}
                                    whileInView={{opacity:1}}
                                    viewport={{once:true}}
                                    transition={{duration:.3, ease:'easeOut', delay: index * .1}}
                                    className='flex item-center justify-center mb-4 gap-1'>
                                        {Array.from({length:5}).map((_,i)=>{
                                            const filled = i < item.rating
                                            return (
                                                <Star key={i} className={filled ? "w-5 h-5 text-yellow-300" : "w-5 h-5 text-neutral-300"}
                                                fill={filled ? "currentColor" : "none"} />
                                            )
                                        })}
                                    </motion.div>

                                    <motion.blockquote 
                                    initial={{opacity:0}}
                                    whileInView={{opacity:1}}
                                    viewport={{once:true}}
                                    transition={{duration:.3, ease:'easeOut', delay: index * .1}}
                                    className='text-lg font-semibold mb-4 font-heading text-foreground'>
                                        &quot;{item.story}&quot;
                                    </motion.blockquote>
                                    <motion.p 
                                    initial={{opacity:0}}
                                    whileInView={{opacity:1}}
                                    viewport={{once:true}}
                                    transition={{duration:.3, ease:'easeOut', delay: index * .1}}
                                    className='text-muted-foreground mb-4 leading-relaxed'>
                                        {item.details}
                                    </motion.p>
                                    <motion.cite 
                                    initial={{opacity:0}}
                                    whileInView={{opacity:1}}
                                    viewport={{once:true}}
                                    transition={{duration:.3, ease:'easeOut', delay: index * .1}}
                                    className='text-primary font-bold italic'>
                                        - {item.name}
                                    </motion.cite>
                                </CardContent> 
                            </Card>
                        </motion.div>
                    ))}
                </div>

        </div>
    </section>
    )
}