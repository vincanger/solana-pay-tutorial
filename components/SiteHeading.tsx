import { PropsWithChildren } from "react";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export default function SiteHeading({ children }: PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-evenly gap-8">
      <WalletMultiButton className='!bg-gray-900 hover:scale-105' />
      <h1 className="text-8xl my-8 font-extrabold self-center text-transparent bg-clip-text bg-gradient-to-b from-blue-300">{children}</h1>
    </div>
  )
}
