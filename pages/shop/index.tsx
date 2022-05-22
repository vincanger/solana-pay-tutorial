import Products from '../../components/Products'
import SiteHeading from '../../components/SiteHeading'
import { useState } from 'react' 



export default function ShopPage() {

  const [formEnabled, setFormEnabled] = useState(false);


  return (
    <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24">
      <SiteHeading>Cookies Inc</SiteHeading>
      <Products submitTarget='/shop/checkout' />    </div>
  )
}