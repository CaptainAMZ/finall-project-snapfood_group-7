import React from 'react'
import Image from 'next/image'
import food  from '../../public/images/fastfood-1.jpg'

export default function SearchProductCard() {
  return (
    <div>
      <Link>
                <section>

                    <div>
                            <h3>
                                        کبابی گلپایگانی عمو امیر
                            </h3>

                            <div>
                                    <span>
                                                                ارسال اکسپرس
                                    </span>

                                    <div>
                                        <span>
                                                        6500
                                                        <span>تومان</span>
                                        </span>
                                        
                                    </div>
                            </div>
                            <div>

                                <Image src={food}/>

                            </div>
                            <div>

                                <span>
                                    <Image/>
                                    <span>

                                    </span>
                                </span>
                                <p>

                                </p>

                            </div>
                            <h2>
                                        چلو کباب کوبیده
                            </h2>
                            <div>
                                    <span>
                                        <span>

                                        </span>
                                    </span>
                            </div>
                    </div>
                    
                </section>
      </Link>
    </div>
  )
}
