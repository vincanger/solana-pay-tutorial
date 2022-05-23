import { useWallet } from '@solana/wallet-adapter-react'
import CouponBook from '../components/CouponBook';
import Products from '../components/Products'
import SiteHeading from '../components/SiteHeading'

export default function HomePage() {
  // We get the public key of the connected wallet, if there is one
  const { publicKey } = useWallet();

  return (
    <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-14">
      <SiteHeading>Cookies Inc</SiteHeading>

      {/* We display the coupon book if there's a connected wallet */}
      {publicKey && <CouponBook />}

      {/* We disable checking out without a connected wallet */}
      <Products submitTarget='/checkout' publicKey={!!publicKey} />
    </div>
  )
}