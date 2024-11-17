import { DM_Serif_Text } from "next/font/google"
const SerifText = DM_Serif_Text({
    weight: '400',
    subsets: ['latin'],
  })
  
  export default function Page() {
  
    return (
        <main className={`${SerifText.className} bg-espacio bg-cover`}>
            <section className padding>

            </section>
        </main>
    )

}