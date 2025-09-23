import { programs } from "@/lib/constant"
import * as motion from "motion/react-client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"


export default function Programs() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
          initial={{opacity:0, y:12}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.4, ease:'easeOut'}}
          className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground">Our Programs</motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive fitness programs designed to meet your specific goals and fitness level.
          </p>
        </div>

        {/* Grid Program */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                
              }}
              whileHover={{ scale: 1.02 }}
              key={index}
              className="group cursor-pointer "
            >
              <Card className="p-0 transition-shadow duration-300 hover:shadow-2xl h-full">
                <div className="relative overflow-hidden rounded-t-lg w-full h-60 md:h-56 lg:h-40">
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <CardContent className="p-6 pt-0 flex flex-col flex-grow">
                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.2,
                    }}
                    className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.3,
                    }}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {item.description}
                  </motion.p>

                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full transition-colors duration-300 group-hover:bg-primary dark:group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      Learn more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
