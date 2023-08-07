import '../(root)/globals.css'
import Header from '@/components/elements/Header'
import Nav from '@/components/elements/Nav'

export default function RestaurantsLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <html lang="fa" dir='rtl'>

      <body>
       
        <div className="position sticky transform translate-y-0 transition all 0.3s ease-in 0s top-0 right-0 left-0 z-999 w-full shadow-head">

              <Header/>
              {/* <Nav/> */}
        </div>

       
        {children}</body>

    </html>
    )
  }