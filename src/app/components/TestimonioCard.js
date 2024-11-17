"use client"

import Image from "next/image"
import { star } from "@/assets/Icons"
import { motion } from "framer-motion"

const TestimonioCard = ({nombre,desc,src}) => {
  return (
    <>
    <motion.div 
        
        //animacion wonks
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease:"easeOut"}}
        viewport={{ once: true, amount: "some" }}

        className="padding-b flex-1 flex justify-center items-center text-center flex-col gap-10">
            <p className="pt-5 text-xl font-semibold text-gray-700">
            &quot;{desc}&quot;
            </p>
            <div className="flex">
                <Image className="rounded-full" layout="" alt={nombre} height={60} width={60} src={src} />
                <div className="flex flex-col">
                    <h4 className="text-2xl text-gray-700">-{nombre}</h4>
                    <Image className="pl-3" alt="stars" height={70} width={120} src={star}/>
                </div>
            </div>
        </motion.div>

        </>
  )
}

export default TestimonioCard